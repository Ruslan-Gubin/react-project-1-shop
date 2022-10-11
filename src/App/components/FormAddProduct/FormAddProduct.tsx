import React, { useCallback, useState } from "react";
import Form from "../Form";
import Modal from "../Modal";
import { useCreateProductsMutation } from "../../../store/rtkQuery/productApi/productsApi";
import { ButtonMain, InputMain, TextareaMain } from "../Ui";
import { CustomSelect } from "../CustomSelect";
import { selectAddProduct } from "../../../utils";
import styles from "./FormAddProduct.module.scss";


interface IdepartmentProps {
  department: {};
  data: [];
}

const FormAddProduct: React.FC<IdepartmentProps> = React.memo(({ data, department }) => {
  const [activeModal, setActiveModal] = useState(false);
  const [createProducts, {}] = useCreateProductsMutation();
  const [title, setTitle] = useState("");
  const [description, setDescreption] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [category, setCategory] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
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
  const handlerAddProduct = useCallback(() => {
    setActiveModal(!activeModal);
  }, [activeModal]);

  const habdlerAddProduct: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    await createProducts({
      category: newCategory ? newCategory : selectCategory.value,
      img,
      img2,
      img3,
      img4,
      img5,
      title,
      description,
      price,
      oldPrice,
      quantity,
      department,
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
      <ButtonMain onClick={handlerAddProduct} bgColor="info">
        Добавить
      </ButtonMain>
      <Modal
        active={activeModal}
        category={category}
        setActive={setActiveModal}
      >
        <Form
          handlerSubmit={habdlerAddProduct}
          titleText={"Добавить новый товар:"}
          closeForm={closeModal}
        >
          <div className={styles.category}>
            <CustomSelect
              onChange={(value) => setSelectCategory(value)}
              options={selectAddProduct(data)}
            />
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
