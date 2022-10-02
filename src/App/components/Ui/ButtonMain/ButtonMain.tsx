import { FC, useState } from "react";

interface ButtonMainType {
  children?: any;
  onClick?: () => void;
  bgColor?: string;
  disabled?: boolean
}

const ButtonMain: FC<ButtonMainType> = ({
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
};

export  {ButtonMain};
