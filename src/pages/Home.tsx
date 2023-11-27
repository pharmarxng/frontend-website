import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProductSearchBar from '../components/ProductSearchBar';
import { ILink } from '../utils/interfaces';
import Categories from '../components/blocks/Categories';
import EssentialServices from '../components/blocks/EssentialServices';
import TrendingProducts from '../components/blocks/TrendingProducts';
import Testimonials from '../components/blocks/Testimonials';
import Questionaire from '../components/blocks/Questionaire';
import Footer from '../components/blocks/Footer';
import PaddedWrapper from '../components/PaddedWrapper';
import AboutUs from '../components/blocks/AboutUs';
import { useEffect } from 'react';
import { getProductsApi } from '../api/products';
import { ProductState } from '../context/productContext';

const HomeButtonsLinks: ILink[] = [
  { path: '/online-pharmacist', text: 'Talk to a pharmacist' },
  { path: '/shop', text: 'Purchase a healthcare product' },
  { path: '/prescription', text: 'Upload your prescription' },
];

const Home = () => {
  const { productDispatch } = ProductState();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  useEffect(() => {
    const fetchData = async (params?: Record<string, unknown>) => {
      await getProductsApi(productDispatch, params);
    };
    fetchData();
  }, [productDispatch]);

  const homeButtonContent = HomeButtonsLinks.map((i, index) => {
    return (
      <Link
        key={index}
        to={i.path}
        className="text-black rounded py-3 px-4 md:py-5 md:px-12 bg-gray-300 text-xs/5 md:text-2xl/7 my-1 md:my-4 hover:shadow-2xl hover:bg-gray-100 hover:cursor-pointer"
      >
        {i.text}
      </Link>
    );
  });
  return (
    <div className="bg-white">
      <Navbar />
      <PaddedWrapper>
        <div className="flex justify-center md:hidden mx-7 my-5">
          <ProductSearchBar />
        </div>
        <div className="relative">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col bg-primary-100 px-4 md:px-16">
              <div className="text-2xl/7 md:text-5xl/[65px] font-bold mb-5 mt-8 md:mt-56 md:mb-16">
                Welcome to PharmaRx
              </div>
              <div className="flex flex-col">{homeButtonContent}</div>
            </div>
            <div className="flex">
              <img
                src="/svg/Home_Image1.svg"
                alt="Home"
                className="object-cover w-full h-64 md:h-auto"
              />
            </div>
          </div>
          <div className="hidden md:flex justify-center absolute top-11 left-[35%] w-[30%]">
            <ProductSearchBar />
          </div>
        </div>
        <Categories />
        <EssentialServices />
        <TrendingProducts />
        <Testimonials />
        <div id="about-us">
          <AboutUs />
        </div>
        <Questionaire />
        <Footer />
      </PaddedWrapper>
    </div>
  );
};

export default Home;
