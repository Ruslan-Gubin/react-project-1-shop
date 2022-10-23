import React from 'react';
import {useForm} from 'react-hook-form';
import { close } from '../../../data';
import { ButtonMain, InputMain } from '../Ui';
import styles from './CustomForm.module.scss';

interface IregisterUser{
  fullName: string
  Email: string
  password: string
}
const inputArray = [
  {name: 'fullName', type: 'string', minLength: 3, },
  {name: 'password', type: 'string', minLength: 3, },
]

const test:string[] = ['fullName', 'E-Mail', 'password']

const CustomForm = () => {
  

    const {
      register,
      formState:{
        errors,isValid,    
      },
      handleSubmit,
      reset,
    } = useForm<IregisterUser>({
      mode: 'onChange'
    });

    const onSubmit = (data) => {
      console.log(data)
      reset()
    }
    console.log(errors)

    const message = [errors]
    
    console.log(message);

  return (
    <form 
    className={styles.root}
    onSubmit={handleSubmit(onSubmit)}
    >
    
    { test.map((item) => (
  
      <div key={item}>
      <input 
      className={styles.input}
      placeholder={item}
      {...register(item, {
        required: 'Поле ввода не должно буть пустым',
        minLength: {
          value: 3,
          message: `Минимум 3 символов`
        },    
      })}
      type='text'      
      />  
      {errors?.fullName ? <p>{errors?.fullName?.message}</p> : <p></p>}

      </div>
    
    ))}

   
      <ButtonMain bgColor={!isValid ? 'black' : 'primary'}>Подтвердить</ButtonMain>
    </form>
  );
};

export {CustomForm};