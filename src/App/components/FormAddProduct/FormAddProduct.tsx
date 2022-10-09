import React, { useCallback, useState } from "react";
import Form from "../Form";
import Modal from "../Modal";
import { useCreateProductsMutation } from "../../../store/productApi/productsApi";
import { ButtonMain, InputMain, TextareaMain } from "../Ui";
import { CustomSelect } from "../CustomSelect";
import { selectAddProduct } from "../../../utils";
import styles from "./FormAddProduct.module.scss";


interface Idepartment {
  department: string;
  data: [];
}

const FormAddProduct: React.FC<Idepartment> = React.memo(({ data, department }) => {
  const [activeModal, setActiveModal] = useState(false);
  const [createProducts, {}] = useCreateProductsMutation();
  const [name, setName] = useState("");
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
      setName(""),
      setPrice(""),
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
      name,
      price,
      oldPrice,
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

          <TextareaMain
            rows={3}
            cols={50}
            required={true}
            text={name}
            setText={setName}
            placeholder="Описание "
          />
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
        </Form>
      </Modal>
    </>
  );
});

export { FormAddProduct };
