import { ReactNode } from 'react';

interface FormButtonProps {
  children?: ReactNode;
  disabled?: boolean;
  classDef?: string;
  type?: 'submit' | 'button' | 'reset' | undefined;
  consistent?: boolean;
  clicked?: () => void;
}

const FormButton = ({
  disabled,
  children,
  type = 'submit',
  consistent,
  clicked,
  classDef,
}: FormButtonProps) => {
  return (
    <button
      type={type}
      onClick={clicked}
      disabled={disabled}
      className={`flex justify-center  items-center  ${
        disabled
          ? 'cursor-not-allowed opacity-50 duration-300 text-gray-500'
          : 'transition-transform transform hover:scale-[1.03]'
      } rounded-lg md:h-0 text-white text-xs/5 xs:text-base/5  mdPro:text-xl/6 px-7 ${
        consistent ? 'py-4 ' : 'py-2'
      } md:px-3 md:py-7 ${consistent ? 'w-auto' : 'w-full'} ${
        classDef ? classDef : 'md:w-auto'
      } bg-deepBlue-100 hover:bg-primary-100 ${classDef}`}
    >
      {children}
    </button>
  );
};

export default FormButton;
