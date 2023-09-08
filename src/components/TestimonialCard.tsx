import { useState } from 'react';

interface TestimonialCardProps {
  testimonial: { description: string; img: string; name: string };
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const allowdCharLength = 90;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const shortDescription =
    testimonial.description.length > allowdCharLength
      ? testimonial.description.substring(0, allowdCharLength) + '...'
      : testimonial.description;

  return (
    <div className="flex flex-col justify-between rounded-lg px-4 py-8 border border-gray-200 text-base/5 sm:text-xl/6">
      <div
        className={`mb-14 ${
          isExpanded || testimonial.description.length <= allowdCharLength
            ? 'overflow-visible'
            : 'overflow-hidden'
        }`}
      >
        {isExpanded || testimonial.description.length <= allowdCharLength
          ? testimonial.description
          : shortDescription}
        {!isExpanded && testimonial.description.length > allowdCharLength && (
          <button
            className="text-blue-500 cursor-pointer hover:underline text-base"
            onClick={toggleExpand}
          >
            Read more
          </button>
        )}
      </div>
      <div className="flex">
        <img
          src={testimonial.img}
          alt="User Image"
          className="rounded-full h-16 w-16"
        />
        <div className="flex items-center ml-2 ">{testimonial.name}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
