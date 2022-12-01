import React from "react";
import './ButtonMain.scss';

interface IButtonMain {
  children?: React.ReactNode;
  onClick?: (event:React.MouseEvent<HTMLButtonElement>) => void;
  bgColor?: string;
  disabled?: boolean
  type?: "button" | "submit" | "reset"
  width?: number
}

const ButtonMain: React.FC<IButtonMain> = React.memo(({
  width,
  children,
  onClick,
  bgColor = "primary",
  disabled,
  type='button',
}) => {
  return (
    <button
    style={{width: width}}
    type={type}
    disabled={disabled}
    className={`button-main__${bgColor}`} 
    onClick={(event) => onClick?.(event)}>
    {children && children}
    </button>
  );
});

export  {ButtonMain};
