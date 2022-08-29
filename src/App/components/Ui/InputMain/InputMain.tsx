import React, { JSXElementConstructor, useState } from 'react';

interface InputMainType {
    placeholder?: string
    name?: string
    value?: string
    text?: string
    setText?: any  
    autoComplete?: string 
    required?: boolean
    autoFocus?: any
}

const InputMain:JSXElementConstructor <InputMainType> = ({
    placeholder,
    name,
    text,
    setText,
    autoComplete = "off",
    required = false,
    autoFocus = 'off',
}) => {
    
    return (
        <>
            <input
            minLength={3}
            autoFocus={autoFocus}
            required={required}
            type='textarea'
            autoComplete={autoComplete}
          placeholder={placeholder}
          className="input-main"
          name={name}
          value={text}
          onChange={(e) => setText(e.target.value)}
          />
         
          </>
     
    );
};

export default InputMain;