import Navbar from '../components/Navbar';
import PaddedWrapper from '../components/PaddedWrapper';
import Footer from '../components/blocks/Footer';
import DeliveryInfoBlock from '../components/blocks/DeliveryInfoBlock';

const DeliveryInfo = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <PaddedWrapper>
        <DeliveryInfoBlock />
        <Footer />
      </PaddedWrapper>
    </div>
  );
};

export default DeliveryInfo;
