import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import OnlinePharmacy from '../pages/OnlinePharmacy';
import Shop from '../pages/Shop';
import ProductListings from '../pages/ProductListings';
import ProductDescription from '../pages/ProductDescription';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Otp from '../pages/Otp';
import Reset from '../pages/Reset';
import ConfirmPassword from '../pages/ConfirmPassword';
import HelpAndSupport from '../pages/HelpAndSupport';
import { PATH } from '../utils/path-constant';
import Cart from '../pages/Cart';
import DeliveryInfo from '../pages/DeliveryInfo';
import ShippingInfo from '../pages/ShippingInfo';
import { useEffect } from 'react';

const ManiRoutes = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={PATH.HOME} element={<Home />} />
        <Route path={PATH.SHOP} element={<Shop />} />
        <Route path={PATH.CART} element={<Cart />} />
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
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.SIGNUP} element={<Signup />} />
        <Route path={PATH.OTP} element={<Otp />} />
        <Route path={PATH.RESET_PASSWORD} element={<Reset />} />
        <Route path={PATH.CONFIRM_PASSWORD} element={<ConfirmPassword />} />
        <Route path={PATH.HELP_AND_SUPPORT} element={<HelpAndSupport />} />
        {/* <Route path="*" element={<NotFoundError />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default ManiRoutes;
