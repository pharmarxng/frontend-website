import Navbar from '../components/Navbar';
import PaddedWrapper from '../components/PaddedWrapper';
import Footer from '../components/blocks/Footer';
import ShippingForm from '../components/blocks/ShippingForm';

const DeliveryInfo = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <PaddedWrapper>
        <ShippingForm />
        <Footer />
      </PaddedWrapper>
    </div>
  );
};

export default DeliveryInfo;
