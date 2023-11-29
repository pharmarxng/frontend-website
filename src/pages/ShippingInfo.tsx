import Navbar from '../components/Navbar';
import PaddedWrapper from '../components/PaddedWrapper';
import Footer from '../components/blocks/Footer';
import ShippingInfoBlock from '../components/blocks/ShippingInfoBlock';

const ShippingInfo = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <PaddedWrapper>
        <ShippingInfoBlock />
        <Footer />
      </PaddedWrapper>
    </div>
  );
};

export default ShippingInfo;
