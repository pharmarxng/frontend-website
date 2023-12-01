import { ChangeEvent, FocusEventHandler } from 'react';

interface TextAreaInputProps {
  name: string;
  value: string | ReadonlyArray<string> | number;
  changed?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  classDef?: string;
  id?: string;
  onBlur?: FocusEventHandler<HTMLTextAreaElement> | undefined;
  error?: string | boolean;
}

const TextAreaInput = ({
  name,
  placeholder,
  classDef,
  value,
  changed,
  id,
  onBlur,
  error,
}: TextAreaInputProps) => {
  return (
    <div className="mb-[45px]">
      <textarea
        id={id}
        onBlur={onBlur}
        className={`h-[300px]  text-black dark:text-black dark:bg-white rounded-lg p-2 resize-none ${classDef}`}
        name={name}
        onChange={changed}
        value={value}
        placeholder={placeholder ? placeholder : undefined}
      ></textarea>
      <span className="text-[red]  text-xs lg:text-sm">{error}</span>
    </div>
  );
};

export default TextAreaInput;
