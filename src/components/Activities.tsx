import { activitiesList } from '../utils/constants';
import SingleActivity from './SingleActivity';

const Activities = () => {
  const content = activitiesList.map((i, index) => {
    return <SingleActivity key={index} title={i.title} values={i.values} />;
  });
  return (
    <div className="grid grid-cols-2 gap-7 sm:flex text-black mb-8">
      {content}
    </div>
  );
};

export default Activities;
