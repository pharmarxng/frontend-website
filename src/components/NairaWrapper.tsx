import { ReactNode } from 'react';

interface NairaWrapperProps {
  children: ReactNode;
  classDef?: string;
}

const NairaWrapper = ({ children, classDef }: NairaWrapperProps) => {
  return (
    <div className={`flex items-center ${classDef}`}>
      <img
        src="/svg/naira.svg"
        alt="naira"
        className="w-3 h-3 sm:w-6 sm:h-6 mr-1"
      />
      {children}
    </div>
  );
};

export default NairaWrapper;
