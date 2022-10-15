import {
  useCreateProductsMutation,
} from "../../../store/rtkQuery";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { selectAddProduct, sumDiscount } from "../../../utils";
import { ButtonMain, InputMain, TextareaMain } from "../Ui";
import styles from "./FormAddProduct.module.scss";
import { CustomSelect } from "../CustomSelect";
import { Modal } from "../Modal";
import Form from "../Form";
import { useSelector } from "react-redux";
import { selectFilters } from "../../../store/slice";

const FormAddProduct: React.FC = React.memo(() => {
  const {dataDepartments} = useSelector(selectFilters)
  const { id } = useParams();
  const [activeModal, setActiveModal] = useState(false);
  const [createProducts, {}] = useCreateProductsMutation();
  const [title, setTitle] = useState<string>("");
  const [description, setDescreption] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [oldPrice, setOldPrice] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [selectCategory, setSelectCategory] = useState(
    selectAddProduct(dataDepartments)[0]
  );
  const [newCategory, setNewCategory] = useState<string>("");
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
      setOldPrice(""),
      setImg(""),
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

  const closeModal: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setActiveModal(false);
    removeTextInput();
  };

  return (
    <>
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
          closeForm={(e) => closeModal(e)}
        >
          <div className={styles.category}>           
              <CustomSelect
                defaultValue={selectCategory}
                onChange={(value) => setSelectCategory(value)}
                options={selectAddProduct(dataDepartments)}
              />
            <InputMain
              value={newCategory}
              onChange={(value) => setNewCategory(value)}
              placeholder="Новая категория"
            />
          </div>
          <div className="input-sector">
            <InputMain
              required={true}
              value={img}
              onChange={(value) => setImg(value)}
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
                onChange={(value) => setImg2(value)}
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
                onChange={(value) => setImg3(value)}
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
                onChange={(value) => setImg4(value)}
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
                onChange={(value) => setImg5(value)}
                placeholder="Вставить URL фото 5 (необязательно)"
              >
                {img5.length > 5 && (
                  <img style={{ height: 60, width: 60 }} src={img5} alt="img" />
                )}
              </InputMain>
            )}
          </div>
          <InputMain
            value={title}
            onChange={(value) => setTitle(value)}
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
              onChange={(value) => setPrice(value)}
              placeholder="Цена"
            />
            <InputMain
              type="number"
              value={oldPrice}
              onChange={(value) => setOldPrice(value)}
              placeholder="Старая цена"
            />
            <InputMain
              type="number"
              value={quantity}
              onChange={(value) => setQuantity(value)}
              placeholder="Количество"
            />
          </div>
        </Form>
      </Modal>
    </>
  );
});

export { FormAddProduct };
