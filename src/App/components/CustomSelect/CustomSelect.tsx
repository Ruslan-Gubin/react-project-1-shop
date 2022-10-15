import React from "react";
import Select, { ActionMeta, SingleValue } from "react-select";

import './CustomSelect.scss'

 interface Ioptions {
  label: string
  value: string
}
interface ICustomSelect {
  options: Ioptions[];
  placeholder?: string
  onChange:(newValue: SingleValue<Ioptions>) => void
  defaultValue?: Ioptions
}

const CustomSelect: React.FC<ICustomSelect> = React.memo(({options = [], placeholder = '', onChange, defaultValue}) => {

  return (
    <>
    <Select 
     classNamePrefix='custom-select'  
     defaultValue={defaultValue}
     options={options}
     isSearchable={false} 
     onChange={(value)=> onChange(value)} 
     placeholder={placeholder || 'Сортировка'}
    />    
    </>
  );
});

export  {CustomSelect};
