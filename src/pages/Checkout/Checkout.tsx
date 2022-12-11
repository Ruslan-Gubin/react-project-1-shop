import React from "react";
import { ButtonGoBack } from "ui";
import { icons } from "data";
import { ChekoutDataUser, Payment } from "components";

import styles from "./Checkout.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { orderAction, selectOrder } from "store/slice";
import { IDataUserChecout } from "App/components/ChekoutDataUser/ChekoutDataUser";
import { productsApi } from "store/rtkQuery";
import { BuyerType } from "models";
import { useNavigate } from "react-router-dom";

interface userDataType {
  userData: BuyerType;
  basket?: { _id: string; counter: number }[];
}

const Checkout = () => {
  const { order } = useSelector(selectOrder);
  
  let [userData, setUserData] = React.useState<userDataType>({  userData: {},  basket: [], });
  const [visaCardActive, setVisaCardActive] = React.useState(false);
  const [setBuyProduct, { status: statusBuy }] = productsApi.useBuyProductMutation();
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onSubmit = (values: IDataUserChecout) => {
    setUserData(() => (userData = { userData: values, basket: [...order] }));
    if (userData.userData && userData.basket) {
      setVisaCardActive(true);
    }
  };


const handlerPaymentByCard = async (value: string) => {
  const productBuy: { id: string | undefined; counter: number }[] = [];
  userData.basket &&
  userData.basket.forEach((item) => {
    productBuy.push({ id: item._id, counter: item.counter });
  });
    if (value) {
      const buyer = userData.userData;
      buyer.bayer = value;
      await setBuyProduct({ product: productBuy, buyer })
      .unwrap()
      .then(async() => {
         navigate('/products')
        dispatch(orderAction.clearOrder())
      })
      .catch((error) => console.log(error));
    }
  };
  
  const handlerPaymentByCourier = async (values: IDataUserChecout) => {
    setUserData(() => (userData = { userData: values, basket: [...order] }));
    const productBuy: { id: string | undefined; counter: number }[] = [];
    userData.basket &&
    userData.basket.forEach((item) => {
      productBuy.push({ id: item._id, counter: item.counter });
    });
    const buyer = userData.userData;
    buyer.bayer = "courier";
    await setBuyProduct({ product: productBuy, buyer })
    .unwrap()
    .then(async() => {
       navigate('/products')
      dispatch(orderAction.clearOrder())
    })
    .catch((error) => console.log(error));
  };
  
  
  return (
    <div className={styles.root}>
      <ButtonGoBack className={styles.goBack} text={" "}>
        <img src={icons.arrowLeft} alt="arrow left" />
      </ButtonGoBack>
      <div className={styles.titles}>
        <h2
          className={
            visaCardActive
            ? styles.title
              : `${styles.titleActive} ${styles.title}`
          }
        >
          User data
        </h2>
        <h2
          className={
            !visaCardActive
              ? styles.title
              : `${styles.titleActive} ${styles.title}`
          }
        >
          Payment Details
        </h2>
      </div>
      {!visaCardActive ? (
        <ChekoutDataUser
        handlerPaymentByCourier={handlerPaymentByCourier}
          onSubmit={onSubmit}
        />
      ) : (
        <Payment handlerPaymentByCard={handlerPaymentByCard} />
      )}
    </div>
  );
};

export { Checkout };

export type { userDataType };
