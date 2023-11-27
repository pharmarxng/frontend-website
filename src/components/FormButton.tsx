import { ReactNode } from 'react';

interface FormButtonProps {
  children?: ReactNode;
  disabled?: boolean;
  classDef?: string;
  type?: 'submit' | 'button' | 'reset' | undefined;
}

const FormButton = ({
  disabled,
  children,
  type = 'submit',
}: FormButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`flex justify-center  items-center  ${
        disabled
          ? 'cursor-not-allowed opacity-50 duration-300 text-gray-500'
          : ''
      } rounded-lg md:h-0 text-white text-xs/5 xs:text-base/5  mdPro:text-xl/6 px-7 py-2 md:px-3 md:py-7 w-full md:w-auto bg-deepBlue-100 hover:bg-primary-100`}
    >
      {children}
    </button>
  );
};

export default FormButton;
