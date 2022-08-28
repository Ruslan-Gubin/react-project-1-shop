import { FC, useState } from "react";

interface ButtonMainType {
    children?: any;
    onClick?: () => void;
    bgColor?: string;
}

const ButtonMain: FC<ButtonMainType> = ({children, onClick, bgColor='primary'}) => {

    return (
        <button className={`button-main__${bgColor}`}  onClick={onClick}>
            {children}     
       </button>
    );
};

export default ButtonMain;