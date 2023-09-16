import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import OnlinePharmacy from '../pages/OnlinePharmacy';
import Shop from '../pages/Shop';

const ManiRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/online-pharmacist" element={<OnlinePharmacy />} />
        {/* <Route path="*" element={<NotFoundError />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default ManiRoutes;
