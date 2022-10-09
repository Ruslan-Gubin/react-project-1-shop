import React from "react";
import './ButtonMain.scss';

interface ButtonMainType {
  children?: any;
  onClick?: () => void;
  bgColor?: string;
  disabled?: boolean
}

const ButtonMain: React.FC<ButtonMainType> = React.memo(({
  children,
  onClick,
  bgColor = "primary",
  disabled=false
}) => {
  return (
    <button
    disabled={disabled}
    className={`button-main__${bgColor}`} 
    onClick={onClick}>
    {children}
    </button>
  );
});

export  {ButtonMain};
