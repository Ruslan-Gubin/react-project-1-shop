import React from "react";
import { InputMainType } from "../../../../models";
import styles from "./InputMain.module.scss";


const InputMain: React.FC<InputMainType> = React.memo(
  ({
    className = styles.input,
    children,
    placeholder,
    onKeyDown,
    value,
    onChange,
    autofocus = false,
    autoComplete = "off",
    required = false,
    type = "text",
  }) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handlerChange = React.useCallback(
      (value: string ) => {
        onChange(value);
      },
      [value]
    );

    React.useEffect(() => {
      if (autofocus) inputRef.current?.focus();
    }, []);

    return (
      <>
        <input
          onKeyDown={onKeyDown}
          ref={inputRef}
          minLength={3}
          required={required}
          type={type}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className={className}
          value={value}
          onChange={(e) => handlerChange(e.target.value)}
        />
        {children}
      </>
    );
  }
);

export { InputMain };
