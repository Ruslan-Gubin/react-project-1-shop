import React from "react";
import Select, {  SingleValue } from "react-select";

import "./CustomSelect.scss";

interface Ioptions {
  label: string;
  value: string;
}
interface ICustomSelect {
  options: Ioptions[];
  placeholder?: string;
  onChange: (value: SingleValue<Ioptions>) => void ;
  defaultValue?: (SingleValue<Ioptions>) | undefined;
}

const CustomSelect: React.FC<ICustomSelect> = React.memo(
  ({ options = [], placeholder = "", onChange, defaultValue }) => {
    return (
      <>
        <Select
          classNamePrefix="custom-select"
          defaultValue={defaultValue}
          options={options}
          isSearchable={false}
          onChange={(value) => onChange(value)}
          placeholder={placeholder || "Сортировка"}
        />
      </>
    );
  }
);

export { CustomSelect };
export type {Ioptions}