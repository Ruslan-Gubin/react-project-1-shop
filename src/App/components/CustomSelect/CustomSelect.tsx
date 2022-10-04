import React from "react";
import Select from "react-select";

import './CustomSelect.scss'

const CustomSelect = ({options = [], placeholder = '', onChange, defaultValue = 0}) => {
 
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
