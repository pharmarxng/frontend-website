import { onlinePharmacyHealthCardList } from '../../utils/constants';
import OnlinePharmacyCard from '../OnlinePharmacyCard';

const OnlinePharmacyHealthBlock = () => {
  const content = onlinePharmacyHealthCardList.map((i, index) => {
    return <OnlinePharmacyCard key={index} card={i} />;
  });
  return (
    <div className="text-black">
      <div className="text-xl/6 md:text-header text-center md:text-left font-medium mb-3 md:mb-12">
        Health where you are
      </div>
      <div className="flex flex-col space-y-7 md:space-y-0 md:grid grid-cols-2 md:gap-5">
        {content}
      </div>
    </div>
  );
};

export default OnlinePharmacyHealthBlock;
