import { ReactNode } from 'react';

interface PaddedWrapperProps {
  children: ReactNode;
}

const PaddedWrapper = ({ children }: PaddedWrapperProps) => {
  return <div className="mx-5 md:mx-8 lg:mx-12">{children}</div>;
};

export default PaddedWrapper;
