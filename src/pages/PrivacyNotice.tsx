import Jumbotron from "@components/Jumbotron";
import Navbar from "@components/Navbar";
import PaddedWrapper from "@components/PaddedWrapper";
import Privacy from "@components/PrivacyNoticeBlock";
import Footer from "@components/blocks/Footer";

const PrivacyNotice = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <PaddedWrapper>
        <Jumbotron btn='Privacy Notice' title='Privacy Notice' subTitle="Here is Pharmarx's privacy notice" />
        <Privacy/>
        <Footer />
      </PaddedWrapper>
    </div>
  );
}

export default PrivacyNotice



