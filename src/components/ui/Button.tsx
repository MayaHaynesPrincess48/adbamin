import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  iconPosition?: "right" | "left";
  to?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  iconPosition,
  to,
  children,
  ...props
}) => {
  const baseClasses = "btn transition-colors duration-300";
  const variantClasses = {
    primary:
      "bg-primary-60 text-white hover:bg-primary-70 focus:bg-primary-70 active:bg-primary-80",
    secondary:
      "bg-secondary-20 text-secondary-80 hover:bg-secondary-30 focus:bg-secondary-30 active:bg-secondary-40",
    tertiary:
      "text-primary-60 hover:text-primary-70 focus:text-primary-70 active:text-primary-80",
  };
  const iconClasses = {
    "primary-right": "pr-8 pl-4",
    "primary-left": "pl-8 pr-4",
    "secondary-right": "pr-8 pl-4",
    "secondary-left": "pl-8 pr-4",
    "tertiary-right": "pr-8 pl-4",
    "tertiary-left": "pl-8 pr-4",
  };

  let buttonClasses = baseClasses;
  buttonClasses += ` ${variantClasses[variant]}`;
  if (iconPosition) {
    buttonClasses += ` ${iconClasses[`${variant}-${iconPosition}`]}`;
  }

  const ButtonElement = to ? Link : "button";

  return (
    <ButtonElement to={to} className={buttonClasses} {...props}>
      {children}
    </ButtonElement>
  );
};

export default Button;
