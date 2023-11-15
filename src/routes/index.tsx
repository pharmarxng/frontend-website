import { BrowserRouter, Route, Routes } from 'react-router-dom';
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




const ManiRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/online-pharmacist" element={<OnlinePharmacy />} />
        <Route path="/category/:categoryId" element={<ProductListings />} />
        <Route path="/product/:productId" element={<ProductDescription />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Otp" element={<Otp />} />
        <Route path="/Reset" element={<Reset />} />
        <Route path="/ComfirmPassword" element={<ConfirmPassword />} />
        {/* <Route path="*" element={<NotFoundError />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default ManiRoutes;
