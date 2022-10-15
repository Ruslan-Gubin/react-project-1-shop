import React, { JSXElementConstructor } from "react";
import { ButtonMain, Watch } from "../Ui";

import styles from './Form.module.scss';

interface FormType {
  children: React.ReactNode
  handlerSubmit:(event:React.FormEvent<HTMLFormElement>) => void
  closeForm: (event:React.MouseEvent<HTMLButtonElement>) => void
  watch?: boolean
  titleText: string
}

const Form: JSXElementConstructor<FormType> = React.memo(({ 
  watch,
   children, 
   handlerSubmit, 
   closeForm, 
   ...props 
  
  }) => {

    const handlerCloseForm = (e:React.MouseEvent<HTMLButtonElement>) => {
      closeForm(e)
    }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={(event) => handlerSubmit(event)}>
        <div className={styles.header}>
          <span className={styles.title}>{props.titleText}</span>
        </div>
        <div className={styles.body}>{children}</div>
        <div className={styles.footer}>
          <div className={styles.footer__buttons}>
            <div className={styles.cancel}>
              <div className={styles.footer__date}>
              {watch && <Watch />}
              </div>
              <ButtonMain onClick={(e)=> handlerCloseForm(e)} bgColor="red">
                Отмена
              </ButtonMain>
            </div>

            <div className={styles.ready}>
              <ButtonMain >Подтвердить</ButtonMain>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
});

export default Form;
