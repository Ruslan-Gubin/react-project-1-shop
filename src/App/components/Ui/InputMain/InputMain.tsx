import React, { JSXElementConstructor, useState } from 'react';

interface InputMainType {
    placeholder?: string
    name?: string
    value?: string
    text?: string
    setText?: any    
}

const InputMain:JSXElementConstructor <InputMainType> = ({
    placeholder,
    name,
    text,
    setText,
}) => {
    
    return (
        <>
            <input
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