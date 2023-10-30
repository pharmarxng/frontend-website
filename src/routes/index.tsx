import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import OnlinePharmacy from '../pages/OnlinePharmacy';
import Shop from '../pages/Shop';
import ProductListings from '../pages/ProductListings';
import ProductDescription from '../pages/ProductDescription';
import Cart from '../pages/Cart';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const ManiRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/online-pharmacist" element={<OnlinePharmacy />} />
        <Route path="/category/:categoryId" element={<ProductListings />} />
        <Route path="/product/:productId" element={<ProductDescription />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="*" element={<NotFoundError />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default ManiRoutes;
