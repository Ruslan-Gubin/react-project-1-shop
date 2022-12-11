import React from "react";
import { useForm } from "react-hook-form";
import { ButtonMain } from "../Ui/ButtonMain";
import styles from "./ChekoutDataUser.module.scss";

interface IDataUserChecout {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  options: string;
  city: string;
  phone: string;
  payment: "";
}

interface IChekoutDataUser {
  onSubmit: (values: IDataUserChecout) => void;
  handlerPaymentByCourier: (value: IDataUserChecout) => void;
}

const ChekoutDataUser: React.FC<IChekoutDataUser> = ({ onSubmit, handlerPaymentByCourier }) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    getValues,
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      firstName: "Ruslan",
      lastName: "Gubin",
      email: "gubin.ruslan@rambler.ru",
      address: "Железноводская",
      options: "дом 50/кв20",
      city: "Москва",
      phone: "071 41 97 155",
    },
  });

  const handlerBuy = async (values: IDataUserChecout) => {
   return new Promise((resolve)=> {
     handlerPaymentByCourier(values)
     resolve({success: true})
    }).then(()=> reset())
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.names}>
            <div className={styles.firstNameContainer}>
              <input
                className={styles.firstName}
                placeholder="firstName"
                type="text"
                {...register("firstName", {
                  required: "Поле ввода не должно буть пустым",
                  minLength: {
                    value: 3,
                    message: `Минимум 3 символова`,
                  },
                })}
              />
              {errors?.firstName ? (
                <p className={styles.error}>{errors?.firstName?.message}</p>
              ) : (
                <p className={styles.error}></p>
              )}
            </div>
            <div className={styles.lastNameContainer}>
              <input
                className={styles.input}
                placeholder="lastName"
                type="text"
                {...register("lastName", {
                  required: "Поле ввода не должно буть пустым",
                  minLength: {
                    value: 3,
                    message: `Минимум 3 символова`,
                  },
                })}
              />
              {errors?.lastName ? (
                <p className={styles.error}>{errors?.lastName?.message}</p>
              ) : (
                <p className={styles.error}></p>
              )}
            </div>
          </div>
          <input
            className={styles.input}
            placeholder="email"
            type="email"
            {...register("email", {
              required: "Поле ввода не должно буть пустым",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                message: "Не  правильный E-Mail",
              },
            })}
          />
          {errors?.email ? (
            <p className={styles.error}>{errors?.email?.message}</p>
          ) : (
            <p className={styles.error}></p>
          )}
          <div className={styles.fullAddress}>
            <div className={styles.addressContainer}>
              <input
                className={styles.address}
                placeholder="address"
                type="address"
                {...register("address", {
                  required: "Поле ввода не должно буть пустым",
                  minLength: {
                    value: 3,
                    message: `Минимум 3 символова`,
                  },
                })}
              />
              {errors?.address ? (
                <p className={styles.error}>{errors?.address?.message}</p>
              ) : (
                <p className={styles.error}></p>
              )}
            </div>
            <div className={styles.optionsContainer}>
              <input
                className={styles.options}
                placeholder="options"
                type="options"
                {...register("options", {
                  required: "Поле ввода не должно буть пустым",
                  minLength: {
                    value: 3,
                    message: `Минимум 3 символова`,
                  },
                })}
              />
              {errors?.options ? (
                <p className={styles.error}>{errors?.options?.message}</p>
              ) : (
                <p className={styles.error}></p>
              )}
            </div>
          </div>

          <input
            className={styles.input}
            placeholder="city"
            type="city"
            {...register("city", {
              required: "Поле ввода не должно буть пустым",
              minLength: {
                value: 3,
                message: `Минимум 3 символова`,
              },
            })}
          />
          {errors?.city ? (
            <p className={styles.error}>{errors?.city?.message}</p>
          ) : (
            <p className={styles.error}></p>
          )}

          <input
            className={styles.input}
            placeholder="phone"
            type="phone"
            {...register("phone", {
              required: "Поле ввода не должно буть пустым",
              minLength: {
                value: 3,
                message: `Минимум 3 символова`,
              },
            })}
          />
          {errors?.phone ? (
            <p className={styles.error}>{errors?.phone?.message}</p>
          ) : (
            <p className={styles.error}></p>
          )}

          <div className={styles.footerBtn}>
            {!isValid ? (
              <div className={styles.btnSubmit}>
                <ButtonMain bgColor="black" width={200}>
                  error
                </ButtonMain>
              </div>
            ) : (
              <div className={styles.btnSubmit}>
                <ButtonMain bgColor="visa" width={200} type="submit">
                  Оплата visa
                </ButtonMain>
              </div>
            )}
            <div className={styles.btnCancel}>
              <ButtonMain  bgColor="visa" onClick={() => handlerBuy(getValues())} width={200}>
              {/* <ButtonMain  bgColor="visa" onClick={() => handlerPaymentByCourier(getValues())} width={200}> */}
                Оплата курьеру
              </ButtonMain>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export { ChekoutDataUser };

export type { IDataUserChecout };
