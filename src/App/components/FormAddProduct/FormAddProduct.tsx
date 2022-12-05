import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsApi } from "store/rtkQuery";
import { addProductAction, selectAddProduct, selectFilters } from "store/slice";
import { CustomSelect, Modal, Form } from "components";
import { ButtonMain, InputMain, ProgressBar, TextareaMain } from "ui";
import styles from "./FormAddProduct.module.scss";
import { useAddImage } from "hooks";
import { checkAddProductValidator } from "utils";

interface IFormAddProduct {
  categorys: { label: string; value: string }[];
}

const FormAddProduct: React.FC<IFormAddProduct> = 
  ({ categorys }) => {
    const addProductState = useSelector(selectAddProduct); 
    const sliceState = useSelector(selectFilters);
    const [createProducts, {status: statusCreate}] = productsApi.useCreateProductsMutation();
    const [updateProducts, {status: statusUpdate}] = productsApi.useUpdateProductMutation();
    const { fileRef, changeFile } = useAddImage(addProductAction.addImages);
    const [error, setError] = React.useState<string[]>([])
    const dispatch = useDispatch();

   
    const handlerAddProduct = async () => {
    const check = checkAddProductValidator(addProductState.error)
    check.length ?  setError(check) : setError([])
      
        if (!addProductState.updatedStatus && !check.length) { 
        await createProducts(addProductState)
        .unwrap()
        .then(() =>  dispatch(addProductAction.cancelInputs()))
        .catch((error) => console.log(error));
      } else if (addProductState.updatedStatus && !check.length) {
        await updateProducts(addProductState.optionsBodyUpdate)
        .unwrap()
        .then(() =>  dispatch(addProductAction.cancelInputs()))
        .catch((error) => console.log(error));
      }
    
    };
    
    return (
      <>
        <ButtonMain
          width={100}
          onClick={() => dispatch(addProductAction.setToggleModal())}
          bgColor="info"
          >
          Добавить
        </ButtonMain> 
        <Modal  
          active={addProductState.modal}
          setActive={() => dispatch(addProductAction.setToggleModal())}
          >
          <Form
            handlerSubmit={handlerAddProduct}
            titleText={!addProductState.updatedStatus ?"Добавить новый товар:" : 'Редактировать товар:'}
            closeForm={() => dispatch(addProductAction.setCloseModal())}
            disabled={statusCreate === 'pending' || statusUpdate === 'pending'}
          >
            <div className={styles.category}>     
              {addProductState.updatedStatus &&
                <CustomSelect
                defaultValue={ addProductState.select }
                onChange={(value) =>
                  dispatch(addProductAction.setSelectValue(value))
                }
                options={categorys}
                />
                }
                {!addProductState.updatedStatus && 
                <CustomSelect
                defaultValue={ sliceState.menuValue.value !== 'Все' ?  sliceState.menuValue : categorys[0]}
                onChange={(value) => dispatch(addProductAction.setSelectValue(value)) }
                options={categorys}
                />
                }
              <InputMain
                value={addProductState.newCategory}
                onChange={(value) =>
                  dispatch(addProductAction.setnewCategoryValue({ value }))
                }
                placeholder="Новая категория"
              />
            </div>
            <div className={styles.imagesContainer}>
              <ButtonMain
              type="button"
                bgColor="green"
                width={180}
                onClick={() => fileRef.current?.click()}
              >
                Добавить фото
              </ButtonMain>
              <input ref={fileRef} type="file" onChange={(e) => changeFile(e)} hidden />
              <div className={styles.imagesPreview}>
                { addProductState.images.map((item, index, arr) => (
                  <img
                    onClick={() => dispatch(addProductAction.removeImage({item, arr}))}
                    key={index}
                    className={styles.image}
                    // @ts-ignore-start
                    src={ item.url ? item.url :  String(item)}
                    // @ts-ignore-end  
                    alt="image"
                    />
                ))}
              </div>
            </div>
           <ProgressBar  value={addProductState.images.length} total={5}/>
            <InputMain
            required
            minLength={3}
              value={addProductState.title}
              onChange={(value) =>
                dispatch(addProductAction.setTitleValue({ value }))
              }
              placeholder="Заголовок"
            />
            <TextareaMain
              rows={3}
              cols={50}
              required={true}
              text={addProductState.description}
              setText={(value) =>
                dispatch(addProductAction.setTextValue({ value }))
              }
              placeholder="Описание"
            />
            <div className={styles.prices}>
              <InputMain
                required={true}
                type="number"
                value={addProductState.price}
                onChange={(value) =>
                  dispatch(addProductAction.setPriceValue({ value }))
                }
                placeholder="Цена"
              />
              <InputMain
                type="number"
                value={addProductState.oldPrice}
                onChange={(value) =>
                  dispatch(addProductAction.setOldPriceValue({ value }))
                }
                placeholder="Старая цена"
              />
              <InputMain
                type="number"
                value={addProductState.quantity}
                onChange={(value) =>
                  dispatch(addProductAction.setQuantityValue({ value }))
                }
                placeholder= {addProductState.updatedStatus ? 'Изменить количество'  : "Количество"}
              />
            </div>
            {error && error.map((item) =>( <div className={styles.erorText} key={item}>{item}</div>))}
            <div className={styles.totalQuentity}>
            {addProductState.updatedStatus && !addProductState.quantity &&
            <ButtonMain bgColor="orange" width={300}>
            <span> На складе: {addProductState.remains}</span>
            </ButtonMain>
          }
          {addProductState.updatedStatus && addProductState.quantity && 
            <ButtonMain bgColor="orange" width={300}>
            <span> На складе после изменений: {addProductState.optionsBodyUpdate.newQantity}</span>
            </ButtonMain>
            }
            </div>
          </Form>
        </Modal>
      </>
    );
  }


export { FormAddProduct };


