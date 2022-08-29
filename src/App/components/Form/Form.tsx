import React, { JSXElementConstructor } from "react";
import ButtonMain from "../Ui/ButtonMain";
import Watch from "../Ui/Watch";

interface FormType {
  children:any
  handlerSubmit: () => void
  closeForm: () => void
  watch?: boolean
  titleText: string
}

const Form: JSXElementConstructor<FormType> = ({ 
  watch,
   children, 
   handlerSubmit, 
   closeForm, 
   ...props 
  
  }) => {

  return (
    <div className="form-container">
      <form className="form" onSubmit={handlerSubmit}>
        <div className="form-header">
          <span className="form-header__title">{props.titleText}</span>
        </div>
        <div className="form-body">{children}</div>
        <div className="form-footer">
          <div className="form-footer__buttons">
            <div className="form-footer__buttons-cancel">
              <div className="form-footer__date">
              {watch && <Watch />}
              </div>
              <ButtonMain onClick={closeForm} bgColor="red">
                Отмена
              </ButtonMain>
            </div>

            <div className="form-footer__buttons-ready">
              <ButtonMain>Подтвердить</ButtonMain>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
