import { Link } from 'react-router-dom';
import { links } from '../utils/constants';
import { Popover } from '@blueprintjs/core';

const Navbar = () => {
  return (
    <div className="bg-gray-300 text-black px-5 md:px-8 lg:px-12 font-inter text-lg/5 ">
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
          {links.map((link) => (
            <Link key={link.path} to={link.path} className="flex items-center">
              <span>{link.text}</span>
            </Link>
          ))}
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
                {links.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="flex items-center bg-gray-300 text-sm px-5 py-4 hover:shadow-sm hover:bg-white"
                  >
                    <span>{link.text}</span>
                  </Link>
                ))}
              </div>
            }
            renderTarget={({ isOpen, ...targetProps }) => (
              <div>
                {isOpen ? (
                  <img
                    onClick={() => !isOpen}
                    src="/svg/Hamburger_close.svg"
                    alt="Close"
                    className="h-[40px] w-[40px] object-cover"
                    {...targetProps}
                  />
                ) : (
                  <img
                    onClick={() => !isOpen}
                    src={`/svg/Hamburger_menu.svg`}
                    alt={`Hamburger`}
                    className="h-[40px] w-[40px] object-cover"
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
