import React from "react";
import { icons } from "data";
import { InputMainType } from "models";
import styles from "./InputMain.module.scss";

const InputMain: React.FC<InputMainType> = React.memo(
  ({
    handlerSearchClick,
    children,
    placeholder,
    onKeyDown,
    value,
    onChange,
    autofocus = false,
    autoComplete = "off",
    required = false,
    type = "text",
    minLength = 0,
  }) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handlerChange = React.useCallback(
      (value: string  ) => {
        onChange(value);
      },
      [value]
    );

    const resetValue = () => {
      onChange("")
      if (inputRef && inputRef.current) inputRef.current.focus()
    }
 
    React.useEffect(() => {
      if (autofocus) inputRef.current?.focus();
    }, []);

    return (
      <div className={styles.root}>
      {type === 'search' && 
      <img
      onClick={() => handlerSearchClick}
      className={styles.icons}
      src={icons.search}
      alt="search"
      />
    }

        <input
          className={type === 'search' ? styles.search : styles.input}
          onKeyDown={onKeyDown}
          ref={inputRef}
          minLength={minLength}
          required={required}
          type={type}
          autoComplete={autoComplete}
          placeholder={placeholder}
          value={value}
          onChange={(e) => handlerChange(e.target.value)}
        />
        {
        String(value).length > 0 && Number(value) > 0 &&
          <img
          className={styles.close}
          onClick={() => resetValue()}
          src={icons.close}
          alt="close"
          />
        }
        {children}
      </div>
    );
  }
);

export { InputMain };
