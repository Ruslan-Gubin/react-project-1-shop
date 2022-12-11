import React from "react";
import { useSelector } from "react-redux";
import { selectOrder } from "store/slice";
import { totalSum } from "utils";
import { PaymentDetails } from "../Ui/PaymentDetails";
import { VisaCard } from "../Ui/VisaCard";

import styles from "./Payment.module.scss";

interface IPayment {
  handlerPaymentByCard: (value: string) => void;
}

const Payment: React.FC<IPayment> = ({ handlerPaymentByCard }) => {
  const { order } = useSelector(selectOrder);
  const [numberCard, setNumberCard] = React.useState<string>("1254 5459 6481 4865 ");
  const [name, setName] = React.useState<string>("Ruslan Gubin");
  const [date, setDate] = React.useState<string>("05/25");
  const [cvv, setCvv] = React.useState<string>("125");
  const [isValid, setIsValid] = React.useState<boolean>(false);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <VisaCard numberCard={numberCard} name={name} date={date} />
        </div>

        <PaymentDetails
          handlerPaymentByCard={handlerPaymentByCard}
          name={name}
          setName={setName}
          numberCard={numberCard}
          setNumberCard={setNumberCard}
          date={date}
          setDate={setDate}
          cvv={cvv}
          setCvv={setCvv}
          totalCount={totalSum(order)}
          isValid={isValid}
          setIsValid={setIsValid}
        />
      </div>
    </div>
  );
};

export { Payment };
