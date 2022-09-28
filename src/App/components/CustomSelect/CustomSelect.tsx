import { useCallback, useState } from "react";
import Select,{OnChangeValue} from "react-select";
import { IOption } from "../../../models";


const CustomSelect = ({options}) => {
  const [currentCategory, setCurrentCategory] = useState('')

  const getValue = useCallback(() => {
    return currentCategory ? options.find(c => c.value === currentCategory) : ''
  },[currentCategory])

  const onChange = useCallback((newValue: OnChangeValue<IOption, boolean>) => {
    setCurrentCategory((newValue as IOption).value)
  },[currentCategory])

  return (
    <>
    <Select
    classNamePrefix='custom-select'
    onChange={onChange} 
    value={getValue()} 
    options={options} 
    isSearchable={false}
    placeholder='Сортировка'
    />    
    </>
  );
};

export  {CustomSelect};
