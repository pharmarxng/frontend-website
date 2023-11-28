import Navbar from '../components/Navbar';
import PaddedWrapper from '../components/PaddedWrapper';
import DeliveryForm from '../components/blocks/Payment';
import Footer from '../components/blocks/Footer';

const DeliveryInfo = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <PaddedWrapper>
        <DeliveryForm />
        <Footer />
      </PaddedWrapper>
    </div>
  );
};

export default DeliveryInfo;
