import { ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode;
  buttonStyle?: string;
  onclick?: () => void;
  disabled?: boolean;
}
const Button = ({ buttonStyle, children, onclick, disabled }: ButtonProps) => {
  return (
    <div
      className={`rounded-2xl hover:cursor-pointer shadow-lg items-center py-4 ${buttonStyle} flex justify-center ${
        disabled
          ? 'cursor-not-allowed opacity-50 duration-300'
          : 'opacity-100 duration-300'
      }`}
      onClick={disabled ? undefined : onclick}
    >
      {children}
    </div>
  );
};

export default Button;
