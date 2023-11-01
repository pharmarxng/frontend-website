import { Link } from 'react-router-dom';

interface SingleActivityProps {
  title: string;
  values: { title: string; linkedTo: string }[];
}

const SingleActivity = ({ title, values }: SingleActivityProps) => {
  const content = values.map((i, index) => {
    return (
      <Link to={i.linkedTo} key={index}>
        {i.title}
      </Link>
    );
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
