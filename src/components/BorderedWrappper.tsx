import { ReactNode } from 'react';

interface BorderedWrappperProps {
  children?: ReactNode;
  classDef?: string;
  bgColor?: string;
}

const BorderedWrappper = ({
  children,
  classDef,
  bgColor,
}: BorderedWrappperProps) => {
  return (
    <div
      className={`${
        bgColor ? bgColor : 'bg-[#fafafa]'
      } h-auto w-auto rounded-2xl border-[#CBD2E0] ${classDef}`}
    >
      {children}
    </div>
  );
};

export default BorderedWrappper;
