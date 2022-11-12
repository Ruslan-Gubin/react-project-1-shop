import React, { useState } from "react";
import Select, {OnChangeValue} from "react-select";
import { IOption } from "models";
import makeAnimated from 'react-select/animated';

import './MultiplaySelect.scss'

const options: IOption[] = [
  {label: 'React', value: 'react'},
  {label: 'JavaScript', value: 'javascript'},
  {label: 'SCSS', value: 'scss'},
  {label: 'TypeScript', value: 'typescript'},
  {label: 'ReactToolkid', value: 'reactToolkid'},
  {label: 'HTML', value: 'html'},
]

const animatedComponents = makeAnimated()

const MultiplaySelect = React.memo(() => {
  const [currentCategorys, setCurrentCategorys] = useState(['scss', 'javascript'])

  const getValue = () => {
    return currentCategorys
  ? options.filter(c => currentCategorys.indexOf(c.value) >= 0) : []  
  }

  const onChange = (newValue: OnChangeValue<IOption, boolean>) => {
  setCurrentCategorys( (newValue as IOption[]).map(v => v.value))
  }

  return (
    <>
    <Select 
    classNamePrefix='multiplay-select'
    onChange={onChange} 
    value={getValue()} 
    options={options} 
    isMulti={true}
    isSearchable={false}  // отменяет поиск при нажатии на клавиатуру
    placeholder='Выберете категорию'
    components={animatedComponents}

    />    
    </>
  );
});

export {MultiplaySelect};