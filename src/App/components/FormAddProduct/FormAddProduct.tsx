import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsApi } from "store/rtkQuery";
import { addProductAction, selectAddProduct } from "store/slice";
import { CustomSelect, Modal, Form } from "components";
import { ButtonMain, InputMain, ProgressBar, TextareaMain } from "ui";
import styles from "./FormAddProduct.module.scss";
import { useAddImage } from "hooks";

interface IFormAddProduct {
  categorys: { label: string; value: string }[];
}

const FormAddProduct: React.FC<IFormAddProduct> = 
  ({ categorys }) => {
    const addProductState = useSelector(selectAddProduct);
    const [createProducts, {status}] = productsApi.useCreateProductsMutation();
    const { fileRef, changeFile } = useAddImage(addProductAction.addImages);
    const dispatch = useDispatch();
 
    const checkConsole = () => {
      console.log('на удаление :',addProductState.imageRemovesUpdate);
      console.log('на добавление :',addProductState.imageAddUpdate);
      console.log('остаток который не меняеися:',addProductState.remainsImages);
      console.log('Итого фото :',addProductState.images.length);
      console.log('----------------------------------------------------------');
    }
   
    const handlerAddProduct = async () => {
      if (!addProductState.updatedStatus) {
        await createProducts(addProductState)
        .unwrap()
        .then(() =>  dispatch(addProductAction.cancelInputs()))
        .catch((error) => console.log(error));
      } else {
        console.log('update Start!!!')
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
            disabled={status === 'pending'}
          >
            <ButtonMain width={300} bgColor="black" onClick={()=> checkConsole()}>Check</ButtonMain>
            <div className={styles.category}>
              <CustomSelect
                defaultValue={categorys[0]}
                onChange={(value) =>
                  dispatch(addProductAction.setSelectValue(value))
                }
                options={categorys}
              />
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
                    src={item.url ? item.url: item}
                    alt="image"
                    />
                ))}
              </div>
            </div>
           <ProgressBar  value={addProductState.images.length} total={5}/>
            <InputMain
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
                placeholder="Количество"
              />
            </div>
          </Form>
        </Modal>
      </>
    );
  }


export { FormAddProduct };


