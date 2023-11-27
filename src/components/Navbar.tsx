import { Link } from 'react-router-dom';
import { links } from '../utils/constants';
import { Popover } from '@blueprintjs/core';
import { navbarMessages, openWhatsapp } from '../utils/whatsapp';

const Navbar = () => {
  const handleLinkRendering = (classDef: string) => {
    return links.map((link) => {
      if (link.path === '/prescription' || link.path === '/contact') {
        return (
          <div
            key={link.path}
            className={classDef}
            onClick={() => openWhatsapp(navbarMessages(link.path))}
          >
            {link.text}
          </div>
        );
      }
      return (
        <Link key={link.path} to={link.path} className={classDef}>
          <span>{link.text}</span>
        </Link>
      );
    });
  };

  return (
    <div className="bg-secondary-200 text-black px-5 md:px-8 lg:px-12 font-inter text-lg/5 ">
      <nav className="flex justify-between items-center h-16 md:h-20">
        <div className="flex items-center hover:border-transparent hover:shadow-sm">
          <Link to="/">
            <div className="">
              <img
                className="object-cover h-8 md:h-12"
                src="/svg/pharmLogo.svg"
                alt="Logo"
              />
            </div>
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          {handleLinkRendering('flex items-center')}
        </div>
        <Link
          to="/login"
          className={`pl-4 pr-6 hidden md:flex bg-primary-100 text-white items-center h-full`}
        >
          Register / Login
        </Link>
        <div className="md:hidden">
          <Popover
            interactionKind="click"
            popoverClassName="pt-popover-content-sizing"
            placement="bottom"
            hasBackdrop={true}
            content={
              <div className="text-black bg-white flex flex-col">
                {handleLinkRendering(
                  'flex items-center bg-white text-sm px-5 py-4 hover:shadow-sm hover:bg-gray-300'
                )}
              </div>
            }
            renderTarget={({ isOpen, ...targetProps }) => (
              <div>
                {isOpen ? (
                  <img
                    onClick={() => !isOpen}
                    src="/svg/Hamburger_close.svg"
                    alt="Close"
                    className="h-[40px] w-[40px] object-cover "
                    {...targetProps}
                  />
                ) : (
                  <img
                    onClick={() => !isOpen}
                    src={`/svg/Hamburger_menu.svg`}
                    alt={`Hamburger`}
                    className="h-[40px] w-[40px] object-cover "
                    {...targetProps}
                  />
                )}
              </div>
            )}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
