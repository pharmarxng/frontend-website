import { aboutUsContentList } from '../../utils/constants';

const AboutUs = () => {
  const content = aboutUsContentList.map((i, index) => {
    return (
      <div key={index} className="text-base/5 md:text-midbase">
        {i}
      </div>
    );
  });
  return (
    <div className="mb-6 md:mb-12 text-black">
      <div className="md:hidden font-bold text-center mb-4 text-xl/6">
        ABOUT US
      </div>
      <div className="md:grid grid-cols-2 md:gap-20">
        <img
          src="/svg/about_us.svg"
          alt="About us"
          className="h-full object-cover mb-4 md:mb-0"
        />
        <div>
          <div className="text-3xl mb-4 font-bold hidden md:block">
            ABOUT US
          </div>
          <div className="flex flex-col space-y-3">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
