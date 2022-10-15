import {
  useCreateProductsMutation,
  useGetProductsQuery,
} from "../../../store/rtkQuery";
import React, {  useState } from "react";
import { useParams } from "react-router-dom";
import { selectAddProduct, sumDiscount } from "../../../utils";
import { ButtonMain, InputMain, TextareaMain } from "../Ui";
import styles from "./FormAddProduct.module.scss";
import { CustomSelect } from "../CustomSelect";
import { Modal } from "../Modal";
import Form from "../Form";

const FormAddProduct: React.FC = React.memo(() => {
  const { id } = useParams();
  const { isLoading, isError, data = [] } = useGetProductsQuery(0);
  const [activeModal, setActiveModal] = useState(false);
  const [createProducts, {}] = useCreateProductsMutation();
  const [title, setTitle] = useState("");
  const [description, setDescreption] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [category, setCategory] = useState("");
  const [selectCategory, setSelectCategory] = useState(selectAddProduct(data)[0]);
  const [newCategory, setNewCategory] = useState("");
  const [img, setImg] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const [img5, setImg5] = useState("");
 
  const removeTextInput = () => {
    return (
      setTitle(""),
      setDescreption(""),
      setPrice(""),
      setQuantity(""),
      setImg(""),
      setOldPrice(""),
      setImg2(""),
      setImg3(""),
      setImg4(""),
      setCategory(""),
      setImg5(""),
      setNewCategory("")
    );
  };

  const habdlerAddProduct: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    await createProducts({
      category: newCategory ? newCategory : selectCategory.value,
      images: [img, img2, img3, img4, img5],
      title,
      description,
      price,
      oldPrice,
      quantity,
      department: id,
      types: {
        color: [],
        size: [],
      },
      counter: 0,
      selected: false,
      discount: sumDiscount(price, oldPrice),
    }).unwrap();
    removeTextInput();
  };

  const closeModal: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setActiveModal(false);
    removeTextInput();
  };
  
  return (
    <>
      {isError && <div>Error...</div>}
      {isLoading && <div>Loading...</div>}
      <ButtonMain onClick={() => setActiveModal(!activeModal)} bgColor="info">
        Добавить
      </ButtonMain>
      <Modal
        active={activeModal}
        category={category}
        setActive={setActiveModal}
      >
        <Form
          handlerSubmit={(event) => habdlerAddProduct(event)}
          titleText={"Добавить новый товар:"}
          closeForm={(e)=>closeModal(e)}
        >
          <div className={styles.category}>
            {!isLoading &&
            <CustomSelect
            defaultValue={selectCategory}
            onChange={(value) => setSelectCategory(value)}
            options={selectAddProduct(data)}
            />
          }
            <InputMain
              value={newCategory}
              setValue={setNewCategory}
              placeholder="Новая категория"
            />
          </div>
          <div className="input-sector">
            <InputMain
              required={true}
              value={img}
              setValue={setImg}
              placeholder="Обязательное URL фото"
            />
            {img.length > 5 && (
              <img style={{ height: 60, width: 60 }} src={img} alt="img" />
            )}
          </div>
          <div className="input-sector">
            {img.length > 5 && (
              <InputMain
                value={img2}
                setValue={setImg2}
                placeholder="Вставить URL фото 2 (необязательно)"
              >
                {img2.length > 5 && (
                  <img style={{ height: 60, width: 60 }} src={img2} alt="img" />
                )}
              </InputMain>
            )}
          </div>
          <div className="input-sector">
            {img2.length > 5 && (
              <InputMain
                value={img3}
                setValue={setImg3}
                placeholder="Вставить URL фото 3 (необязательно)"
              >
                {img3.length > 5 && (
                  <img style={{ height: 60, width: 60 }} src={img3} alt="img" />
                )}
              </InputMain>
            )}
          </div>
          <div className="input-sector">
            {img3.length > 5 && (
              <InputMain
                value={img4}
                setValue={setImg4}
                placeholder="Вставить URL фото 4 (необязательно)"
              >
                {img4.length > 5 && (
                  <img style={{ height: 60, width: 60 }} src={img4} alt="img" />
                )}
              </InputMain>
            )}
          </div>
          <div className="input-sector">
            {img4.length > 5 && (
              <InputMain
                value={img5}
                setValue={setImg5}
                placeholder="Вставить URL фото 5 (необязательно)"
              >
                {img5.length > 5 && (
                  <img style={{ height: 60, width: 60 }} src={img5} alt="img" />
                )}
              </InputMain>
            )}
          </div>
          <InputMain
            type="text"
            value={title}
            setValue={setTitle}
            placeholder="Заголовок"
          />
          <TextareaMain
            rows={3}
            cols={50}
            required={true}
            text={description}
            setText={setDescreption}
            placeholder="Описание"
          />
          <div className={styles.prices}>
            <InputMain
              required={true}
              type="number"
              value={price}
              setValue={setPrice}
              placeholder="Цена"
            />
            <InputMain
              type="number"
              value={oldPrice}
              setValue={setOldPrice}
              placeholder="Старая цена"
            />
            <InputMain
              type="number"
              value={quantity}
              setValue={setQuantity}
              placeholder="Количество"
            />
          </div>
        </Form>
      </Modal>
    </>
  );
});

export { FormAddProduct };
