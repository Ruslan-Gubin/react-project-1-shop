import Select from "react-select";


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
