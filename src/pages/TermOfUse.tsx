import Jumbotron from "@components/Jumbotron";
import Navbar from "@components/Navbar";
import PaddedWrapper from "@components/PaddedWrapper";
import Terms from "@components/TermOfUseBlock";
import Footer from "@components/blocks/Footer";

const TermOfUse = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <PaddedWrapper>
        <Jumbotron btn='Terms' title='Terms of Use' subTitle='Here are the terms of use for Pharmarx'/>
        <Terms/>
        <Footer />
      </PaddedWrapper>
    </div>
  );
}

export default TermOfUse



