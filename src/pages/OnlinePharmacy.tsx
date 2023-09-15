import Navbar from '../components/Navbar';
import PaddedWrapper from '../components/PaddedWrapper';
import EssentialServices from '../components/blocks/EssentialServices';
import Footer from '../components/blocks/Footer';
import OnlinePharmacyHeader from '../components/blocks/OnlinePharmacyHeader';
import OnlinePharmacyHealthBlock from '../components/blocks/OnlinePharmacyHealthBlock';
import Testimonials from '../components/blocks/Testimonials';

const OnlinePharmacy = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <PaddedWrapper>
        <OnlinePharmacyHeader />
        <div className="md:mt-[100px]">
          <EssentialServices />
        </div>
        <OnlinePharmacyHealthBlock />
        <Testimonials />
        <Footer />
      </PaddedWrapper>
    </div>
  );
};

export default OnlinePharmacy;
