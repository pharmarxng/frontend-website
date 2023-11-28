import Activities from '../Activities';
import Socials from '../Socials';

const Footer = () => {
  return (
    <div className="py-5 sm:py-12">
      <div className="sm:hidden">
        <Activities />
        <div className="flex justify-center">
          <Socials />
        </div>
        <div className="flex justify-center items-center mt-14">
          <img src="/svg/pharmLogo.svg" alt="Logo" />
        </div>
      </div>

      <div className="hidden sm:block">
        <div className="flex justify-between">
          <div>
            <img src="/svg/pharmLogo.svg" alt="Logo" />
          </div>
          <Activities />
        </div>
        <Socials />
      </div>
    </div>
  );
};

export default Footer;
