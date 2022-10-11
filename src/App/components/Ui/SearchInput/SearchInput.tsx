import React from "react";
import { close, search } from "../../../../data";
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
  const resetRef = React.useRef<HTMLInputElement>(null)
  
  const handlerChange: React.ChangeEventHandler<HTMLInputElement> =
  React.useCallback(
    (e) => {
      onChange(e.target.value);     
    },  
    [register]
    );

   const resetValue = () => {
    onChange("")
   if (resetRef && resetRef.current) resetRef.current.focus() 
  }
   

  return (
    <div className={styles.root}>
      <img
        onClick={() => handlerSearchClick}
        className={styles.icons}
        src={search}
        alt="search"
      />

      <input
      ref={resetRef}
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
          onClick={() => resetValue()}
          src={close}
          alt="close"
        />
      )}
    </div>
  );
});

export { SearchInput };
