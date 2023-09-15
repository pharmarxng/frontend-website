interface SingleActivityProps {
  title: string;
  values: string[];
}

const SingleActivity = ({ title, values }: SingleActivityProps) => {
  const content = values.map((i, index) => {
    return <div key={index}>{i}</div>;
  });
  return (
    <div className="text-base/5 ">
      <div className="sm:text-xl/6 mb-6 sm:mb-8 font-bold">{title}</div>
      <div className="sm:text-midbase flex flex-col space-y-6 sm:space-y-8">
        {content}
      </div>
    </div>
  );
};

export default SingleActivity;
