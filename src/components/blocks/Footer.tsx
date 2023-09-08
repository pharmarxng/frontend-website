import Socials from '../Socials';

const Footer = () => {
  return (
    <div>
      // This is for mobile
      <div className="sm:hidden">
        <div className="flex justify-center">
          <Socials />
        </div>
      </div>
      // This is for desktop
      <div className="hidden sm:block">
        <Socials />
      </div>
    </div>
  );
};

export default Footer;
