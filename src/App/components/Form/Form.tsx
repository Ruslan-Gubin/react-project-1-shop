import React from 'react';
import ButtonMain from '../Ui/ButtonMain';

const Form = ({ children,handlerSubmit, closeForm, ...props}) => {
    return (
        <div className="form-container">
        <form className='form' onSubmit={handlerSubmit}>
          <div className='form-header'>
        <span className='form-header__title'>{props.titleText}</span>
          </div>
      <div className="form-body">
       {children}
      </div>
      <div className="form-footer">
        <div className='form-footer__buttons'>
          <div className='form-footer__buttons-cancel'>
          <ButtonMain onClick={closeForm}  bgColor='red' >Отмена</ButtonMain>
          </div>
          <div className='form-footer__buttons-ready'>
          <ButtonMain>Подтвердить</ButtonMain> 
          </div>
        </div>
      </div>
        </form>
       </div>
    );
};

export default Form;