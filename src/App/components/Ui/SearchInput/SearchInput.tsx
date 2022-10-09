import React from "react";
import search from "../../../../assets/img/icons/search-icon_4699282.png";
import close from "../../../../assets/img/icons/close-icon_4232054.png";

import styles from "./SearchInput.module.scss";

interface ISerch {
  placeholder?: string;
  register: string;
  handlerSearchClick?: () => void;
  onKeyDown?:() => void;
  onChange: any;
}

const SearchInput: React.FC<ISerch> = React.memo(({
  placeholder,
  register,
  handlerSearchClick,
  onKeyDown,
  onChange,
}) => {

  const handlerChange: React.ChangeEventHandler<HTMLInputElement> =
    React.useCallback(
      (e) => {
        onChange(e.target.value);
      },
      [register]
    );

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
        value={register}
        onChange={(e) => handlerChange(e)}
      />
      {register && (
        <img
          className={styles.close}
          onClick={() => onChange("")}
          src={close}
          alt="close"
        />
      )}
    </div>
  );
});

export { SearchInput };
