import { ReactNode } from 'react';

interface CircularWrapperProps {
  children?: ReactNode;
  clicked?: () => void;
  isSmall?: boolean;
}

const CircularWrapper = ({
  children,
  clicked,
  isSmall,
}: CircularWrapperProps) => {
  return (
    <div
      onClick={clicked}
      className={`rounded-full ${
        isSmall ? 'p-2' : 'p-3 sm:p-5 '
      } bg-primary-100 flex items-center justify-center`}
    >
      {children}
    </div>
  );
};

export default CircularWrapper;
