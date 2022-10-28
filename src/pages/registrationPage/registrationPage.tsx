import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authApi } from "../../store/rtkQuery";
import { authAction, selectAuth } from "../../store/slice";
import { ButtonMain } from "../../App/components/Ui";
import { userRegistedPng } from "../../data/icons";
import styles from "./registrationPage.module.scss";

const registrationPage = () => {
  const [createAuth, { data }] = authApi.useCreateAuthMutation();
  const { status } = useSelector(selectAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      fullName: "Ruslan",
      email: "test@test.ru",
      password: "1234qwer",
    },
  });

  React.useEffect(() => {
    const value = data?.email;
    data ? dispatch(authAction.addAuth(data)) : false;
    if (value) dispatch(authAction.getAutchEmail({ value }));
    if (status) navigate(-1);
  }, [data, status]);

  const onSubmit = (values:string) => {
    createAuth(values);
    reset();
  };

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Создание аккаунта</h2>
      <img className={styles.img} src={userRegistedPng} alt="userRegistedPng" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles.input}
          placeholder="fullName"
          type="text"
          {...register("fullName", {
            required: "Поле ввода не должно буть пустым",
            minLength: {
              value: 3,
              message: `Минимум 3 символова`,
            },
          })}
        />
        {errors?.fullName ? (
          <p className={styles.error}>{errors?.fullName?.message}</p>
        ) : (
          <p></p>
        )}

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
          <p></p>
        )}

        <input
          className={styles.input}
          placeholder="password"
          type="password"
          {...register("password", {
            required: "Поле ввода не должно буть пустым",
            pattern: {
              value: /^(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{6,}$/,
              message: "Пароль из 8-ми английских символов и обязательно цифра",
            },
          })}
        />
        {errors?.password ? (
          <p className={styles.error}>{errors?.password?.message}</p>
        ) : (
          <p></p>
        )}

        <div className={styles.button}>
          <ButtonMain bgColor={!isValid ? "black" : "primary"}>
            Подтвердить
          </ButtonMain>
        </div>
      </form>
    </div>
  );
};

export { registrationPage };
