import { CSSProperties } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface Props {
  rating: number;
  onClick: (i: number) => void;
  style?: CSSProperties | undefined;
}

const styles = {
  outlineStar: {
    stroke: '#000000', // Replace with your desired outline color
    strokeWidth: '10', // Adjust the outline width if needed
  },
};
const Rating = ({ rating, onClick, style }: Props) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i)} style={style}>
          {rating > i ? (
            <AiFillStar className="text-yellow-500" fontSize="15px" />
          ) : (
            <AiOutlineStar fontSize="15px" style={styles.outlineStar} />
          )}
        </span>
      ))}
    </div>
  );
};

export default Rating;
