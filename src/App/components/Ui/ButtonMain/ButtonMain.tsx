import React from "react";
import './ButtonMain.scss';

interface IButtonMain {
  children?: React.ReactNode;
  onClick?: (event:React.MouseEvent<HTMLButtonElement>) => void;
  bgColor?: string;
  disabled?: boolean
  type?: "button" | "submit" | "reset"
}

const ButtonMain: React.FC<IButtonMain> = React.memo(({
  children,
  onClick,
  bgColor = "primary",
  disabled,
  type,
}) => {
  return (
    <button
    type={type}
    disabled={disabled}
    className={`button-main__${bgColor}`} 
    onClick={(event) => onClick?.(event)}>
    {children && children}
    </button>
  );
});

export  {ButtonMain};
