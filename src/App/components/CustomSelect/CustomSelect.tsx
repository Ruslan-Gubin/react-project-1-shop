import React from "react";
import Select, { ActionMeta, GroupBase, OptionsOrGroups } from "react-select";
import { StateManagerAdditionalProps } from "react-select/dist/declarations/src/useStateManager";

import './CustomSelect.scss'

 interface Ioptions {
  label: string
  value: string
}
interface ICustomSelect {
  options: any ;
  placeholder?: string
  onChange:((newValue: any, actionMeta: ActionMeta<any>) => void)
  defaultValue?: any
}

const CustomSelect: React.FC<ICustomSelect> = ({options = [], placeholder = '', onChange, defaultValue}) => {
 
  return (
    <>
    <Select 
     classNamePrefix='custom-select'  
     defaultValue={defaultValue}
     options={options}
     isSearchable={false} 
     onChange={onChange} 
     placeholder={placeholder || 'Сортировка'}
    />    
    </>
  );
};

export  {CustomSelect};
