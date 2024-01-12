import { BsInstagram } from 'react-icons/bs';
import { PiFacebookLogoBold } from 'react-icons/pi';
import { FaRegCopyright } from 'react-icons/fa';
import CircularWrapper from './CircularWrapper';
import { Link } from 'react-router-dom';
import { PATH } from '@utils/path-constant';

const Socials = () => {
  return (
    <div>
      <div className="flex flex-col space-y-5 md:flex-row-reverse md:justify-between items-center text-center text-black ">
        <div className="flex flex-col space-y-5 md:flex-row-reverse md:justify-between md:space-x-3 items-center ">
          <div className="flex text-white justify-center items-center md:ml-3">
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
          <a href="tel:+2348171833999" className='hover:text-primary-100' >08171833999</a>
          <a href="mailto:pharmarxng@gmail.com" className='hover:text-primary-100' >pharmarxng@gmail.com</a>
        </div>
       <div className='flex space-x-2 '>
          <Link className='hover:text-primary-100' to={PATH.TERM_OF_USE}> Terms of Service</Link>
          <Link className='hover:text-primary-100' to={PATH.PRIVACY_NOTICE}> Privacy Notice</Link>
       </div>
        <div className="flex items-center justify-between">
          <FaRegCopyright />
          <div className="ml-1 text-xs/5 md:text-sm/5 lg:text-base/6">
            {new Date().getFullYear()} PharmaRx | All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;
