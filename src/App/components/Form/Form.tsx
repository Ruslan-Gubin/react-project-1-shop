import React, { JSXElementConstructor } from "react";
import { ButtonMain, Watch } from "ui";

import styles from "./Form.module.scss";

interface FormType {
  children: React.ReactNode;
  handlerSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  closeForm?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  watch?: boolean;
  titleText?: string;
  disabled?: boolean;
}

const Form: JSXElementConstructor<FormType> = React.memo(
  ({ watch = false, children, handlerSubmit, closeForm, titleText, disabled }) => {
    
    const handlerCloseForm = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (closeForm) closeForm(e);
    };

    const handlerSubmitForm: React.FormEventHandler<HTMLFormElement> = (
      event
    ) => {
      event.preventDefault();
      handlerSubmit(event);
    };

    return (
      <div className={styles.container}>
        <form
          className={styles.form}
          onSubmit={(event) => handlerSubmitForm(event)}
        >
          <div className={styles.header}>
            <span className={styles.title}>{titleText}</span>
          </div>
          <div className={styles.body}>{children}</div>
          <div className={styles.footer}>
            <div className={styles.footer__buttons}>
              <div className={styles.cancel}>
                <div className={styles.footer__date}>{watch && <Watch />}</div>
                {closeForm && (
                  <ButtonMain
                    onClick={(e) => handlerCloseForm(e)}
                    bgColor="red"
                  >
                    Отмена
                  </ButtonMain>
                )}
              </div>
              <div className={styles.ready}>
                {!disabled ?
                <ButtonMain type="submit" disabled={disabled}>Подтвердить</ButtonMain>
                :<ButtonMain bgColor="black"  disabled={disabled}>Ожидайте</ButtonMain>
                }
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
);

export {Form};
