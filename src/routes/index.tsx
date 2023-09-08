import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

const ManiRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="*" element={<NotFoundError />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default ManiRoutes;
