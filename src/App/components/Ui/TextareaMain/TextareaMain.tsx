import React, { JSXElementConstructor } from 'react';

interface TexteriaType {
name?: string
cols?: number
rows?: number
autoFocus?: boolean
disabled?: boolean
placeholder?: string
required?: boolean
minLength?: number
text: string
setText: any
}

const TextareaMain: JSXElementConstructor <TexteriaType> = ({
    placeholder,
    required = false,
    cols = 20,
    rows = 2,
    autoFocus = true,
    disabled = false,
    minLength,
    text,
    setText,
}) => {
    return (
      
            <textarea 
            className='textarea-main'
            minLength={minLength}
            disabled = {disabled}
            autoFocus = {autoFocus}
            autoCorrect='on'
            autoComplete='off'
            name="textaria"
            id="" 
            placeholder = {placeholder}
            required = {required}
            cols = {cols} 
            rows = {rows}
            wrap = 'hard'
            value={text}
            onChange={(e) => setText(e.target.value)}
            >
               
            </textarea>
        
    );
};

export default TextareaMain;