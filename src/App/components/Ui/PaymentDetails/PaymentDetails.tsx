import React from "react";
import { formatterRub, validVisaCard } from "utils";
import { ButtonMain } from "../ButtonMain";

import styles from "./PaymentDetails.module.scss";

interface PaymentDetailsProps {
  name: string;
  numberCard: string;
  date: string;
  cvv: string;
  setName: (value: string) => void;
  setNumberCard: (value: string) => void;
  setDate: (value: string) => void;
  setCvv: (value: string) => void;
  isValid: boolean;
  setIsValid: (value: boolean) => void;
  totalCount: number;
  handlerPaymentByCard: (value: string) => void;
}

const PaymentDetails: React.FC<PaymentDetailsProps> = (props) => {
  const [errorActive, setErrorActive] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (
      props.numberCard.length !== 20 ||
      props.cvv.length !== 3 ||
      props.name.length < 5 ||
      props.date.length < 5
    ) {
      setErrorActive(true);
    } else {
      setErrorActive(false);
    }
  }, [props]);

  const handlerInputNumber = (value: React.ChangeEvent<HTMLInputElement>) => {
    const validStr = validVisaCard.number(value.target.value);
    props.setNumberCard(validStr);
  };

  const handlerInputName = (value: React.ChangeEvent<HTMLInputElement>) => {
    if (value.target.value.length < 19) {
      props.setName(value.target.value);
    }
  };

  const handlerInputCvv = (value: React.ChangeEvent<HTMLInputElement>) => {
    const validStr = validVisaCard.cvv(value.target.value);
    props.setCvv(validStr);
  };

  const handlerInputDate = (value: React.ChangeEvent<HTMLInputElement>) => {
    const validStr = validVisaCard.date(value.target.value);
    props.setDate(validStr);
  };

  const handlerpayment = () => {
    props.handlerPaymentByCard("visa");
  };

  return (
    <div className={styles.inputs}>
      <div className={styles.containerDetails}>
        <h2 className={styles.title}>Payment Details</h2>
        <div className={styles.inputContainer}>
          <div>
            <span>Name on Card</span>
          </div>
          <input
            className={styles.inputVisa}
            value={props.name}
            onChange={(value) => handlerInputName(value)}
            type="text"
          />
        </div>
        <div className={styles.inputContainer}>
          <div>
            <span>Card Number</span>
          </div>
          <input
            className={styles.inputVisa}
            value={props.numberCard}
            onChange={(value) => handlerInputNumber(value)}
          />
        </div>
        <div className={styles.footer}>
          <div className={styles.inputContainer}>
            <div>
              <span>Valid Through</span>
            </div>
            <input
              className={styles.inputVisa}
              value={props.date}
              onChange={(value) => handlerInputDate(value)}
              type="text"
            />
          </div>
          <div className={styles.inputContainer}>
            <div>
              <span>CVV</span>
            </div>
            <input
              className={styles.inputVisa}
              value={props.cvv}
              onChange={(value) => handlerInputCvv(value)}
              type="text"
            />
          </div>
        </div>
        {errorActive ? (
          <ButtonMain bgColor="visaError">
            PAY {formatterRub.format(props.totalCount)}
          </ButtonMain>
        ) : (
          <ButtonMain onClick={() => handlerpayment()} bgColor="visa">
            PAY {formatterRub.format(props.totalCount)}
          </ButtonMain>
        )}
      </div>
    </div>
  );
};

export { PaymentDetails };
