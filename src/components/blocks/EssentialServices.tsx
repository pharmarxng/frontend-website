import { Link } from 'react-router-dom';
import { essentialServiceLinks } from '../../utils/constants';
import { navbarMessages, openWhatsapp } from '../../utils/whatsapp';

const EssentialServices = () => {
  const essentialServicesContent = essentialServiceLinks.map((i, index) => {
    if (i.path === '/prescription' || i.path === '/contact') {
      return (
        <div
          id="found"
          key={index}
          onClick={() => openWhatsapp(navbarMessages(i.path))}
          className={`text-black text-xs/5 xs:text-sm/5 sm:text-base/5 md:text-xl/6 flex flex-col items-center ${
            index === 3 ? 'md:border-r-0 md:border-b-0' : 'border-r border-b'
          } ${index === 1 ? 'border-r-0 sm:border-r' : ''} ${
            index === 2 ? 'border-b-0' : ''
          } sm:border-b-0  sm:w-full`}
        >
          <div className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 flex justify-center items-center mt-7 mb-7">
            <img
              src={`/svg/${i.img}.svg`}
              alt={i.img}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="whitespace-nowrap mb-7">{i.text}</div>
        </div>
      );
    }

    return (
      <div
        id="found"
        key={index}
        className={`text-black text-xs/5 xs:text-sm/5 sm:text-base/5 md:text-xl/6 flex flex-col items-center ${
          index === 3 ? 'md:border-r-0 md:border-b-0' : 'border-r border-b'
        } ${index === 1 ? 'border-r-0 sm:border-r' : ''} ${
          index === 2 ? 'border-b-0' : ''
        } sm:border-b-0  sm:w-full`}
      >
        <div className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 flex justify-center items-center mt-7 mb-7">
          <Link to={i.path}>
            <img
              src={`/svg/${i.img}.svg`}
              alt={i.img}
              className="object-cover h-full w-full"
            />
          </Link>
        </div>
        <div className="whitespace-nowrap mb-7">{i.text}</div>
      </div>
    );
  });

  return (
    <div className="py-5 sm:py-12 text-black text-center">
      <div className="text-xl/6 sm:text-3xl/10 mb-14">
        <div className="font-bold mb-5 sm:mb-14">Health where you are</div>
        <div className="text-base/5 font-medium">
          Essential services at PharmaRX
        </div>
      </div>
      <div className="border-gray-200 shadow-md py-7 ">
        <div className="grid grid-cols-2 sm:flex mx-2">
          {essentialServicesContent}
        </div>
      </div>
    </div>
  );
};

export default EssentialServices;
