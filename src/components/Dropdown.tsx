import { useState } from 'react';

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
  selectedOption: string;
}

const Dropdown = ({ options, onSelect, selectedOption }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          id="options-menu"
          aria-haspopup="listbox"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 01.707.293l4 4a1 1 0 01-1.414 1.414L10 5.414 6.707 8.707a1 1 0 01-1.414-1.414l4-4A1 1 0 0110 3z"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <ul
          className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="listbox"
          aria-labelledby="options-menu"
        >
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              className="cursor-pointer select-none relative px-4 py-2 text-gray-900"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
