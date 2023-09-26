import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import OnlinePharmacy from '../pages/OnlinePharmacy';
import Shop from '../pages/Shop';
import ProductListings from '../pages/ProductListings';

const ManiRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/online-pharmacist" element={<OnlinePharmacy />} />
        <Route path="/category/:categoryId" element={<ProductListings />} />
        {/* <Route path="*" element={<NotFoundError />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default ManiRoutes;
