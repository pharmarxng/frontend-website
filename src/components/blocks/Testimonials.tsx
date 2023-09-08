import { useEffect, useState } from 'react';
import { testimonialList } from '../../utils/constants';
import TestimonialCard from '../TestimonialCard';
import ForwardBackwardButtons from '../ForwardBackwardButtons';
import PaginationBlob from '../PaginationBlob';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialList.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialList.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="py-5 sm:py-12 text-black">
      <div className="text-center text-xl/6 sm:text-3xl/10 font-medium mb-8 sm:mb-14">
        Our Testimonials
      </div>
      <div className="hidden sm:grid sm:gap-5 grid-cols-3 mb-14">
        {testimonialList.map((testimonial) => (
          <div key={testimonial.id}>
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>
      <div className="sm:hidden">
        <ForwardBackwardButtons
          onRightClick={handleNextClick}
          onLeftClick={handlePrevClick}
        >
          <TestimonialCard testimonial={testimonialList[currentIndex]} />
        </ForwardBackwardButtons>
        <PaginationBlob
          ListItems={testimonialList}
          currentIndex={currentIndex}
        />
      </div>
    </div>
  );
};

export default Testimonials;
