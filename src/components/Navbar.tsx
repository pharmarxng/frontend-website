import { Link, useNavigate } from 'react-router-dom';
import { authLinks, links } from '../utils/constants';
import { Popover } from '@blueprintjs/core';
import { navbarMessages, openWhatsapp } from '../utils/whatsapp';
import { ILink } from '../utils/interfaces';
import { isAthenticated, logout } from '../utils/auth';
import { PATH } from '../utils/path-constant';
import { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);

  const authVerifiedLinksForSmallScreens = !isAthenticated()
    ? authLinks.slice(0, 2)
    : authLinks.slice(1);

  const handleLogout = () => {
    setOpen(false);
    logout();
    navigate(PATH.HOME);
  };

  const handleSmallScreenPopoverToggle = () => {
    setOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleLinkRendering = (classDef: string, links: ILink[]) => {
    return links.map((link) => {
      if (link.path === PATH.PRESCRIPTION || link.path === PATH.CONTACT) {
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
      if (link.path === PATH.LOGOUT) {
        return (
          <div
            key={link.path}
            className={classDef}
            onClick={() => handleLogout()}
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

  const handleLogoLinksRendering = (classDef: string, links: ILink[]) => {
    return links.map((link) => {
      // if (link.path === ) {

      // }
      return (
        <Link key={link.path} className={`${classDef}`} to={link.path}>
          <img src={`/svg/${link.icon}.svg`} alt={link.text} />
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
        <div className="hidden md:flex medium:space-x-3 md:space-x-4">
          {handleLinkRendering('flex items-center', links)}
        </div>
        <div className="hidden md:flex space-x-2 md:space-x-4 items-center">
          {handleLogoLinksRendering('', authLinks.slice(0, 2))}
        </div>
        <div className="md:hidden">
          <Popover
            interactionKind="click"
            popoverClassName="pt-popover-content-sizing"
            placement="bottom"
            hasBackdrop={true}
            isOpen={open}
            onInteraction={(nextOpenState) => setOpen(nextOpenState)}
            content={
              <div className="text-black bg-white flex flex-col shadow-sm md:hidden">
                <div className="border-b border-greyBorder-200">
                  {handleLinkRendering(
                    'flex items-center bg-white text-sm px-5 py-4 hover:shadow-sm hover:bg-gray-300',
                    links
                  )}
                </div>
                <div>
                  {handleLinkRendering(
                    'flex items-center bg-white text-sm px-5 py-4 hover:shadow-sm hover:bg-gray-300',
                    authVerifiedLinksForSmallScreens
                  )}
                </div>
              </div>
            }
            onClosed={() => setOpen(false)}
            renderTarget={({ isOpen, ...targetProps }) => (
              <div className="hover:cursor-pointer">
                {isOpen ? (
                  <img
                    onClick={handleSmallScreenPopoverToggle}
                    src="/svg/Hamburger_close.svg"
                    alt="Close"
                    className="h-[40px] w-[40px] object-cover "
                    {...targetProps}
                  />
                ) : (
                  <img
                    onClick={handleSmallScreenPopoverToggle}
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
