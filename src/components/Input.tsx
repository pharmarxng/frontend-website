import { ChangeEvent, FocusEventHandler, HTMLInputTypeAttribute } from 'react';

interface InputProps {
  type: HTMLInputTypeAttribute;
  name: string;
  value: string | ReadonlyArray<string> | number;
  changed?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  classDef?: string;
  id?: string;
  onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
  error?: string | boolean;
}

const Input = ({
  type,
  name,
  placeholder,
  classDef,
  value,
  changed,
  id,
  onBlur,
  error,
}: InputProps) => {
  return (
    <div>
      <input
        id={id}
        onBlur={onBlur}
        type={type}
        name={name}
        onChange={changed}
        value={value}
        placeholder={placeholder ? placeholder : undefined}
        className={`border-gray-200 border rounded-lg pl-4 py-3 w-full dark:bg-white  ${classDef}`}
      />
      <span className="text-red-700 text-xs lg:text-sm">{error}</span>
    </div>
  );
};

export default Input;
