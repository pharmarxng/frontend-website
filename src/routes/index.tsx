import { BrowserRouter, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { PATH } from 'utils/path-constant';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { SideNavbar, TopNavbar, ModalGroup } from 'components';
import {
  Home,
  OnlinePharmacy,
  Shop,
  ProductDescription,
  ProductListings,
  Login,
  Signup,
  Otp,
  Reset,
  ConfirmPassword,
  HelpAndSupport,
  Cart,
  DeliveryInfo,
  OrderDetails,
  ShippingInfo,
  OrderList,
  Panel,
  Orders,
  Products,
  Statistics,
  ProductDetails
} from 'pages';

import AlertModal from '../components/AlertModal';
import { AlertState } from '../context/alertContext';

const ManiRoutes = () => {
  const {
    alertState: { show },
  } = AlertState();
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <div className="bg-white min-h-screen">
      {show && <AlertModal />}
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={PATH.HOME} element={<Home />} />
          <Route path={PATH.SHOP} element={<Shop />} />
          <Route path={PATH.CART} element={<Cart />} />
          <Route path={PATH.ORDER_LIST} element={<OrderList />} />
          <Route
            path={`${PATH.ORDER_DETAILS}/:id`}
            element={<OrderDetails />}
          />
          <Route path={PATH.DELIVERY_INFO} element={<DeliveryInfo />} />
          <Route path={PATH.SHIPPING_INFO} element={<ShippingInfo />} />
          <Route path={PATH.ONLINE_PHARMACIST} element={<OnlinePharmacy />} />
          <Route
            path={`${PATH.CATEGORY}/:categoryId`}
            element={<ProductListings />}
          />
          <Route
            path={`${PATH.SEARCH}/:searchQuery`}
            element={<ProductListings />}
          />
          <Route
            path={`${PATH.PRODUCT}/:productId`}
            element={<ProductDescription />}
          />
          <Route path={`${PATH.LOGIN}`} element={<Login />} />
          <Route path={PATH.SIGNUP} element={<Signup />} />
          <Route path={PATH.OTP} element={<Otp />} />
          <Route path={PATH.RESET_PASSWORD} element={<Reset />} />
          <Route path={PATH.CONFIRM_PASSWORD} element={<ConfirmPassword />} />
          <Route path={PATH.HELP_AND_SUPPORT} element={<HelpAndSupport />} />

          <Route path={PATH.ADMIN} element={<AdminWrapper />}>
            <Route index element={<h1 className='text-black'>Pending...</h1>} />
            <Route path={PATH.PANEL} element={<Panel />} />
            <Route path={PATH.ORDERS} element={<Orders />} />
            <Route path={PATH.PRODUCTS} element={<Products/>} />
            <Route path={PATH.STATISTICS} element={<Statistics/>} />
            <Route path={PATH.PRODUCT_DETAIL} element={<ProductDetails/>} />
          </Route>
        </Routes>
        <ModalGroup />
      </BrowserRouter>
    </div>
  );
};

const AdminWrapper = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState<boolean>(true);

  return (
    <div className='h-screen overflow-hidden'>
      <Container className='flex h-100 relative'>
        <TopNavbar setIsSideNavOpen={setIsSideNavOpen} />
        <SideNavbar isSideNavOpen={isSideNavOpen} />
        <Outlet />
      </Container>
    </div>
  )
}

export default ManiRoutes;
