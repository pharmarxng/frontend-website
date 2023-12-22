import { BrowserRouter, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { PATH } from '../utils/path-constant';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { SideNavbar } from '../components';
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
  Orders
} from '../pages';


const ManiRoutes = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <div className="bg-white min-h-screen">
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
          {/* <Route path="*" element={<NotFoundError />} /> */}

          <Route path={PATH.ADMIN} element={<AdminWrapper />}>
            <Route index element={<h1 className='text-black'>Pending...</h1>} />
            <Route path={PATH.PANEL} element={<Panel />} />
            <Route path={PATH.ORDERS} element={<Orders />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const AdminWrapper = () => {
  return (
    <div className='h-screen overflow-hidden'>
      <Container className='flex h-100'>
        <SideNavbar />
        <Outlet />
      </Container>
    </div>
  )
}

export default ManiRoutes;
