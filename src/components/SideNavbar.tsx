import useAdminAuth from '@utils/hooks/admin-auth';
import {
  ProductsIcon,
  OrdersIcon,
  StatisticsIcon,
  LogoutIcon,
  DashboardIcon,
  SettingsIcon,
  ArrowdownIcon,
} from 'assets/svg';
import { useState } from 'react';

const SideNavbar = ({
  isSideNavOpen,
}: {
  isSideNavOpen: boolean;
}): JSX.Element => {
  const [show, setShow] = useState(false);
  const { adminLogout } = useAdminAuth();

  const handleLogin = () => {
    adminLogout();
  };

  const upper_panel = [
    ['Dashboard', '/admin', <DashboardIcon />],
    ['Statistics', '/admin/statistics', <StatisticsIcon />],
    ['Orders', '/admin/orders', <OrdersIcon />],
    ['Products', '/admin/products', <ProductsIcon />],
  ];

  const lower_panel = [
    ['Admin Panel', '/admin/panel'],
    ['Notifications', '/'],
    ['Change Password', '/'],
  ];

  return (
    <>
      {isSideNavOpen && (
        <aside className="flex-none h-screen overflow-hidden w-64 lg:w-1/5 absolute md:relative bg-white px-5 py-8">
          <div className="flex flex-col justify-between h-full">
            <div>
              <img
                src="/images/pharmarxlogo.png"
                alt="pharmarx"
                className="h-30 w-28 mx-auto mb-10"
              />
              {upper_panel.map((link: (string | JSX.Element)[], id: number) => (
                <a
                  href={`${link[1]}`}
                  key={`link-${id}`}
                  className="link text-[#808191] text-sm bg-[#d9e0e7] flex items-center my-3 rounded-2xl py-3 px-5 no-underline gap-2 hover:bg-[#3f6387] hover:text-[#fff] active:bg-[#3f6387]"
                >
                  {link[2]}
                  {link[0]}
                </a>
              ))}
            </div>

            <div className="mb-20">
              <span className="link text-[#808191] bg-[#d9e0e7] flex flex-row justify-between my-3 rounded-2xl items-center p-3 no-underline hover:bg-[#3f6387] hover:text-[#fff] active:bg-[#3f6387]">
                <p className="text-sm flex justify-start items-center gap-2 px-2">
                  <SettingsIcon />
                  Settings
                </p>
                <ArrowdownIcon
                  className="cursor-pointer"
                  onClick={() => setShow(!show)}
                />
              </span>
              {show && (
                <>
                  {lower_panel.map((link: string[], id: number) => (
                    <a
                      href={`${link[1]}`}
                      key={`link-1-${id}`}
                      className="text-[#808191] pl-8 flex my-3 text-xs"
                    >
                      {link[0]}
                    </a>
                  ))}
                </>
              )}
              <span className="flex flex-row gap-2 items-center cursor-pointer">
                <LogoutIcon className="w-5 h-5" />
                <p className="text-[#cf3d3d]" onClick={handleLogin}>
                  Sign out
                </p>
              </span>
            </div>
          </div>
        </aside>
      )}
    </>
  );
};

export default SideNavbar;
