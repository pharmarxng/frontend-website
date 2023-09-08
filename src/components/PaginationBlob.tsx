interface PaginationBlobProps {
  ListItems: Array<unknown>;
  currentIndex: number;
}

const PaginationBlob = ({ ListItems, currentIndex }: PaginationBlobProps) => {
  return (
    <div className="flex justify-center mt-6">
      {ListItems.map((_, index) => {
        return (
          <div
            key={index}
            className={`rounded-full mx-[2px] ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            } w-[10px] h-[10px]`}
          ></div>
        );
      })}
    </div>
  );
};

export default PaginationBlob;
