import { BsInstagram } from 'react-icons/bs';
import { PiFacebookLogoBold } from 'react-icons/pi';
import { FaRegCopyright } from 'react-icons/fa';
import CircularWrapper from './CircularWrapper';

const Socials = () => {
  return (
    <div>
      <div className="flex flex-col space-y-5 sm:flex-row-reverse sm:justify-between items-center text-center text-black ">
        <div className="flex flex-col space-y-5 sm:flex-row-reverse sm:justify-between sm:space-x-3 items-center text-base/5 sm:text-lg/5 lg:text-xl/6">
          <div className="flex text-white justify-center items-center sm:ml-3">
            <a
              href="https://www.facebook.com/pharmarxpharmacy?mibextid=ZbWKwL"
              className="mr-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CircularWrapper isSmall={true}>
                <PiFacebookLogoBold />
              </CircularWrapper>
            </a>

            <a
              href="https://instagram.com/pharmarxpharmacy?igshid=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <CircularWrapper isSmall={true}>
                <BsInstagram />
              </CircularWrapper>
            </a>
          </div>
          <a href="tel:+2348171833999">08171833999</a>
          <a href="mailto:pharmarxng@gmail.com">pharmarxng@gmail.com</a>
        </div>
        <div className="flex items-center justify-between">
          <FaRegCopyright />
          <div className="ml-1 text-xs/5 sm:text-sm/5 lg:text-base/6">
            {new Date().getFullYear()} PharmaRx | All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;
