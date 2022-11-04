import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authApi } from "../../store/rtkQuery";
import { authAction, selectAuth } from "../../store/slice";
import { ButtonMain } from "../../App/components/Ui";
import { userRegistedPng } from "../../data/icons";
import { IUser } from "../../models";
import styles from "./registrationPage.module.scss";
import { Modal, ModalRemoveItem } from "../../App/components";

const registrationPage = () => {
  const { auth } = useSelector(selectAuth);
  const { data: emails, isLoading } = authApi.useGetEmailsQuery(null);
  const [createAuth, {}] = authApi.useCreateAuthMutation();
  const [updateAuth, {}] = authApi.useUpdateAuthMutation();
  const [removeAuth,{}] = authApi.useDeleteAuthMutation()
  const [image, setImage] = React.useState("");
  const [disabled, setDisables] = React.useState(false);
  const [errorEmail, setErrorEmail] = React.useState("");
  const [modalActive, setModalActive] = React.useState<boolean>(false);
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
      fullName: auth.fullName ? auth.fullName : "",
      email: auth.email ? auth.email : "",
      password: "",
    },
  });

  const inputFileRef = React.useRef(null);

  const handlerChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    file && setFileToBase(file);
  };

  const setFileToBase = (file: File) => {
    try {
      const render = new FileReader();
      render.readAsDataURL(file);
      render.onloadend = () => {
        if (render.result) {
          setImage(render.result);
        }
      };
    } catch (error) {
      console.log(error, "Ошибка при загрузке файла!");
    }
  };

  React.useEffect(() => {
    if (auth.image) {
      setImage(auth.image.url);
    }
  }, []);

  const onSubmit = async (values: React.FormEventHandler<HTMLFormElement>) => {
    const emailValue = emails?.find((email) => email === values.email);
    if (emailValue) {
      setErrorEmail(`${emailValue}  уже занят`);
    } else {
      setErrorEmail("");
    }
    
    if (auth.image && (!emailValue || auth.email)) {
      const id: string = auth._id;
      const prevImage = auth.image.url;
      setDisables(true);
      await updateAuth({ ...values, prevImage, image, id })
        .then((res) => {
          if (res.data.success) {
            navigate("/post");
          }
        })
        .catch((error) =>
          console.log("Не удалось поменять данные", error.message)
        )
        .finally(() => {
          setDisables(false);
        });
    } else if (!auth.image && !emailValue && image) {
      setDisables(true);
      await createAuth({ ...values, image })
        .then((res) => {
          const data: IUser = res.data;
          dispatch(authAction.addAuth(data));
        })
        .then(() => {
          reset();
          navigate("/post");
        })
        .catch((error) =>
          console.log("Не удалось зарегестрироватся", error.message)
        )
        .finally(() => {
          setDisables(false);
        });
    }
  };

  const handlerRemoveUser = async () => {
    if (auth) {
      const idAuth =  auth?._id
      await removeAuth(idAuth)
      dispatch(authAction.resetAuth())
      setImage('')
      setModalActive(false)
    }
  }

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Создание аккаунта</h2>
      {image ? (
        <>
          <img
            onClick={() => setImage("")}
            src={image}
            alt="image user"
            className={styles.img}
            style={{ borderRadius: 50 }}
          />
        </>
      ) : (
        <img
          onClick={() => inputFileRef.current?.click()}
          className={styles.img}
          src={userRegistedPng}
          alt="userRegistedPng"
        />
      )}
      <input
        ref={inputFileRef}
        type="file"
        onChange={handlerChangeFile}
        hidden
      />

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
          <p style={{ color: "red" }}>{errorEmail}</p>
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
          {!image ? 
          <ButtonMain bgColor="black">Обязательно добавте фото</ButtonMain>
         : <ButtonMain
            disabled={disabled}
            bgColor={!isValid  ? "black" : "primary"}
            >
            Подтвердить
          </ButtonMain>
          }
        </div>
      </form>
        <div className={styles.buttonRemove}>
          {auth.email &&
          <ButtonMain bgColor="red" onClick={()=> setModalActive(true)}>Удалить</ButtonMain>
          }
        </div>
        <Modal active={modalActive} setActive={setModalActive}>
        <ModalRemoveItem
              text={`Вы действительно хотите удалить ${auth.fullName}?`}
              confirm={() => handlerRemoveUser()}
              cancel={() => setModalActive(false)}
            />
        </Modal>
    </div>
  );
};

export { registrationPage };
