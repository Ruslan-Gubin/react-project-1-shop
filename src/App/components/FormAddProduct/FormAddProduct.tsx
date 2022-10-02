import React, { useCallback, useState } from "react";
import Form from "../Form";
import Modal from "../Modal";
import TextareaMain from "../Ui/TextareaMain";
import { IProduct } from "../../../models/products";
import { useCreateProductsMutation } from "../../../store/product/productsApi";
import { CustomSelect } from "../CustomSelect";
import { ButtonMain, InputMain } from "../Ui";

const options = [
    {label: 'Тетрадь', value: 'notebooks'},
    {label: 'Ручки', value: 'pens'},
    {label: 'Альбомы', value: 'album'},
  ]

const FormAddProduct = ({department}) => {
  const [activeModal, setActiveModal] = useState(false);
  const [createProducts, {}] = useCreateProductsMutation();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [category, setCategory] = useState("");
  const [img, setImg] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const [img5, setImg5] = useState("");

  const removeTextInput = () => {
    return setName(""),
    setPrice(""),
    setImg(""),
    setOldPrice(""),
    setImg2(""),
    setImg3(""),
    setImg4(""),
    setCategory(''),
    setImg5("");
  }
  const handlerAddProduct = useCallback(() => {
    setActiveModal(!activeModal);
  }, [activeModal]);

  const addStationery: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    await createProducts({
      category,
      img,
      img2,
      img3,
      img4,
      img5,
      name,
      price,
      oldPrice,
      department,
    } as IProduct).unwrap();
    removeTextInput()
  };

  const closeModal: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setActiveModal(false);
    removeTextInput()
  };
  return (
    <>
      <ButtonMain onClick={handlerAddProduct} bgColor="info">
        Добавить
      </ButtonMain>
      <Modal active={activeModal} category={category} setActive={setActiveModal}>
        <Form
          handlerSubmit={addStationery}
          titleText={"Добавить новый товар:"}
          closeForm={closeModal}
        >
            {/* <CustomSelect options={options} /> */}
          <select
            onChange={(e) => setCategory(e.target.value)}
            name="select"
            id="select"
          >
            
            <option value="notebooks">Тетради</option>
            <option value="pens">Ручки</option>
            <option value="album">Альбомы</option>
          </select>

          <div className="input-sector">
            <InputMain
              required={true}
              name="img"
              text={img}
              setText={setImg}
              placeholder="Обязательное URL фото"
            />
            {img.length > 5 && (
              <img style={{ height: 60, width: 60 }} src={img} alt="img" />
            )}
          </div>
          <div className="input-sector">
            {img.length > 5 && (
              <InputMain
                name="img2"
                text={img2}
                setText={setImg2}
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
            name="img3"
            text={img3}
            setText={setImg3}
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
            name="img3"
            text={img4}
            setText={setImg4}
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
            name="img"
            text={img5}
            setText={setImg5}
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
            name="productName"
            required={true}
            text={name}
            setText={setName}
            placeholder="Описание "
          />
          <InputMain
            required={true}
            type="number"
            name="price"
            text={price}
            setText={setPrice}
            placeholder="Цена"
          />
          <InputMain
            type="number"
            name="oldPrice"
            text={oldPrice}
            setText={setOldPrice}
            placeholder="Старая цена"
          />
        </Form>
      </Modal>
    </>
  );
};

export {FormAddProduct};



//   "department": "stationery",
