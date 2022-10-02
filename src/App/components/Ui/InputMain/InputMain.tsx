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
    type?: any
}

const InputMain:JSXElementConstructor <InputMainType> = ({
    children,
    placeholder,
    name,
    text,
    setText,
    autoComplete = "off",
    required = false,
    autoFocus = 'off',
    type='text',
}) => {
    
    return (
        <>
            <input
            minLength={3}
            autoFocus={autoFocus}
            required={required}
            type={type}
            autoComplete={autoComplete}
          placeholder={placeholder}
          className="input-main"
          name={name}
          value={text}
          onChange={(e) => setText(e.target.value)}
          />
         {children}
          </>
     
    );
};

export {InputMain};