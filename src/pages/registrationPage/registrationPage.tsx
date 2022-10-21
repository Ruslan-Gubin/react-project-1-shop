import React from 'react';
import Form from '../../App/components/Form';
import { InputMain } from '../../App/components/Ui';
import { userRegistedPng } from '../../data/icons';
import styles from './registrationPage.module.scss';

const registrationPage = () => {
  const [fullName, setFullName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <div className={styles.root}>
      <Form
      titleText='Создание аккаунта'
      handlerSubmit={() => console.log('registred')}
      >
        <img className={styles.img}  src={userRegistedPng} alt="userRegistedPng" />
        <InputMain 
        autofocus={true}
        value={fullName}
        onChange={(value) => setFullName(value)}
        placeholder='Полное Имя'
        />
        <InputMain 
        type='email'
        value={email}
        onChange={(value) => setEmail(value)}
        placeholder='E-Mail'
        />
        <InputMain 
        type='password'
        value={password}
        onChange={(value) => setPassword(value)}
        placeholder='Пароль'
        />

      </Form>
    </div>
  );
};

export {registrationPage};