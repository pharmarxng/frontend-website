import { Link } from 'react-router-dom';
import { navbarMessages, openWhatsapp } from '../utils/whatsapp';

interface SingleActivityProps {
  title: string;
  values: { title: string; linkedTo: string }[];
}

const SingleActivity = ({ title, values }: SingleActivityProps) => {
  const content = values.map((i, index) => {
    if (i.linkedTo === '/prescription' || i.linkedTo === '/contact') {
      return (
        <div
          className="hover:cursor-pointer"
          key={index}
          onClick={() => openWhatsapp(navbarMessages(i.linkedTo))}
        >
          {i.title}
        </div>
      );
    }
    return (
      <Link className="hover:cursor-pointer" to={i.linkedTo} key={index}>
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
