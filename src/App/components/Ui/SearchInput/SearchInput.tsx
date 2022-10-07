import React from "react";
import search from "../../../../assets/img/icons/search-icon_4699282.png";
import close from "../../../../assets/img/icons/close-icon_4232054.png";

import styles from "./SearchInput.module.scss";

interface ISerch {
  setValue: any;
  register: string;
  placeholder?: string;
  handlerSearchClick?: () => void;
  onKeyDown?:() => void;
}

const SearchInput: React.FC<ISerch> = ({
  placeholder,
  register,
  setValue,
  handlerSearchClick,
  onKeyDown
}) => {
  const [initialValue, setInitialValue] = React.useState(register);

  const handlerChange: React.ChangeEventHandler<HTMLInputElement> =
    React.useCallback(
      (e) => {
        setInitialValue(e.target.value);
      },
      [initialValue]
    );

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <div className={styles.root}>
      <img
        onClick={() => handlerSearchClick}
        className={styles.icons}
        src={search}
        alt="search"
      />

      <input
      onKeyDown={onKeyDown}
        className={styles.input}
        type="text"
        placeholder={placeholder}
        value={initialValue}
        onChange={(event) => handlerChange(event)}
      />
      {initialValue && (
        <img
          className={styles.close}
          onClick={() => setInitialValue("")}
          src={close}
          alt="close"
        />
      )}
    </div>
  );
};

export { SearchInput };
