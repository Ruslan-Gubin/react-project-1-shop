import React from 'react';
import Select, {  SingleValue } from "react-select";

import './CustomSelectGame.scss';

interface CustomSelectGameType {
  options: {value: string, label: string}[];
  onChange: (value: SingleValue<{value: string, label: string}>) => void ;
  defaultValue?: (SingleValue<{value: string, label: string}>) | undefined;
}

const CustomSelectGame: React.FC<CustomSelectGameType> = (props) => {
  return (
    <>
        <Select
          classNamePrefix='custom-select__game'
          defaultValue={props.defaultValue}
          options={props.options}
          isSearchable={false}
          onChange={(value) => props.onChange(value)}
        />
    </>
  );
};

export  {CustomSelectGame};