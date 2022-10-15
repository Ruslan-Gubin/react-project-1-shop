import React, { JSXElementConstructor, useCallback } from "react";
import { InputMainType } from "../../../../models";
import styles from "./InputMain.module.scss";

const InputMain: JSXElementConstructor<InputMainType> = React.memo(({
  className = styles.input,
  children,
  placeholder,
  onKeyDown,
  value,
  setValue,
  autoComplete = "off",
  required = false,
  autoFocus = "off",
  type = "text",
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handlerChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [value]
  );

  React.useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

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
        className={className}
        value={value}
        onChange={(e) => handlerChange(e)}
      />
      {children}
    </>
  );
});

export { InputMain };
