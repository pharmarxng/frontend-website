import { IOnlinePharmacyCardProps } from '../utils/interfaces';

interface OnlinePharmacyCardProps {
  card: IOnlinePharmacyCardProps;
}

const OnlinePharmacyCard = ({ card }: OnlinePharmacyCardProps) => {
  return (
    <div className="border rounded-2xl">
      <div>
        <img src={card.img} alt="Card Img" className="rounded-2xl" />
      </div>
      <div className="px-4 py-5 md:py-20">
        <div className="text-midbase md:text-xl/6 font-bold mb-5">
          {card.title}
        </div>
        <div className="text-base/5 md:text-xl/6">{card.description}</div>
      </div>
    </div>
  );
};

export default OnlinePharmacyCard;
