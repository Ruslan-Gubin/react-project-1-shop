import React, { JSXElementConstructor } from "react";
import styles from "./InputMain.module.scss";

interface InputMainType {
  children?: any;
  placeholder?: string;
  name?: string;
  text?: string;
  setText?: any;
  autoComplete?: string;
  required?: boolean;
  autoFocus?: any;
  type?: any;
  onKeyDown?:React.KeyboardEventHandler<HTMLInputElement>;
}

const InputMain: JSXElementConstructor<InputMainType> = ({
  children,
  placeholder,
  name,
  text,
  onKeyDown ,
  setText,
  autoComplete = "off",
  required = false,
  autoFocus = "off",
  type = "text",
}) => {

  const inputRef = React.useRef<HTMLInputElement>(null)

  const handlerChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value)
  }
  
   
  React.useEffect(() => {
    if (inputRef.current) inputRef.current.focus()  
  },[])
  
  return (
    <>
      <input
        onKeyDown={onKeyDown}
        ref={inputRef}
        minLength={3}
        autoFocus={autoFocus}
        required={required}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className={styles.input}
        name={name}
        value={text}
        onChange={(e)=> handlerChange(e)}
      />
      {children}
    </>
  );
};

export { InputMain };
