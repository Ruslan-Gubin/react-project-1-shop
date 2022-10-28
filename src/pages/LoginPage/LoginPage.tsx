import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "../../App/components/Form";
import { InputMain } from "../../App/components/Ui";
import { authApi } from "../../store/rtkQuery";
import { authAction, selectAuth } from "../../store/slice";
import styles from "./LoginPage.module.scss";


const LoginPage = React.memo(() => {
  const [authorization, { data }] = authApi.useAuthorizationMutation();
  const {email, password , status} = useSelector(selectAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  React.useEffect(() => {
    data ? dispatch(authAction.addAuth(data)) : false;
    if (status) navigate(- 1);
  }, [data, status]);

  return (
    <div className={styles.root}>
      <Form
        titleText="Вход в аккаунт"
        handlerSubmit={() => authorization({ email, password })}
      >
        <InputMain
          required={true}
          placeholder="E-mail"
          autoComplete={"on"}
          autofocus={true}
          type="email"
          value={email}
          onChange={(value) => dispatch(authAction.getAutchEmail({value}))}
        />
        <InputMain
          required={true}
          placeholder="Введите пароль"
          type="password"
          value={password}
          onChange={(value) => dispatch(authAction.getAutchPassword({value}))}
        />
      </Form>
    </div>
  );
});

export { LoginPage };
