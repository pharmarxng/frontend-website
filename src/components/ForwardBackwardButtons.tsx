import { ReactNode } from 'react';

interface ForwardBackwardButtonsProps {
  children?: ReactNode;
  onRightClick?: () => void;
  onLeftClick?: () => void;
}

const ForwardBackwardButtons = ({
  children,
  onRightClick,
  onLeftClick,
}: ForwardBackwardButtonsProps) => {
  return (
    <div className="relative">
      {/* Forward Button */}
      <button
        className="absolute right-2 top-1/2 transition-opacity opacity-0 hover:opacity-10 px-4 py-2 bg-gray-500 text-black rounded-full text-2xl"
        onClick={onRightClick}
      >
        <span className="text-black">&gt;</span>
      </button>

      {/* Backward Button */}
      <button
        className="absolute left-2 top-1/2 transition-opacity opacity-0 hover:opacity-100 px-4 py-2 bg-gray-200 text-black rounded-full text-2xl"
        onClick={onLeftClick}
      >
        &lt;
      </button>

      {/* Content */}
      <div className="text-center">{children}</div>
    </div>
  );
};

export default ForwardBackwardButtons;
