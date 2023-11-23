import { Link } from 'react-router-dom';
import Input from '../components/Input';
import Navbar from '../components/Navbar';
import PaddedWrapper from '../components/PaddedWrapper';
import Footer from '../components/blocks/Footer';

const HelpAndSupport = () => {
  return (
    <div className="bg-white text-black">
      <Navbar />


      <PaddedWrapper>
        <div className="pt-[30px] flex justify-center">
          <div className='gap-[32px] flex w-[343px] md:w-[706px] flex-col justify-between md:border-[1px] border-[#DADADA] rounded-[10px] md:p-[20px]'>
            <div className='font-normal text-[18px] md:text-[24px] self-start md:p-[16px]'>How can we be of help?</div>

            <div className="px-[16px] flex">
              <form className="flex flex-col flex-1 text-[14px] md:text-[18px] gap-[16px]">
                <label className="text-[14px] md:text-[18px]" >Full Name
                  <Input
                    placeholder=""
                    name="fullName"
                    type="text"
                    value=""
                    changed={(e) => { }}
                    classDef="mt-2 border-[2px]"
                  />
                </label>


                <label className="text-[14px] md:text-[18px]" >Email
                  <Input
                    placeholder=""
                    name="email"
                    type="text"
                    value=""
                    changed={(e) => { }}
                    classDef="mt-2 border-[2px]"
                  />
                </label>

                <label className="text-[14px] md:text-[18px]" >Phone Number
                  <Input
                    placeholder=""
                    name="phoneNumber"
                    type="text"
                    value=""
                    changed={(e) => { }}
                    classDef="mt-2 border-[2px]"
                  />
                </label>

                <label className="text-[14px] md:text-[18px]" >Equires
                  <Input
                    placeholder=""
                    name="enquires"
                    type="text"
                    value=""
                    changed={(e) => { }}
                    classDef="mt-2 border-[2px] min-h-[200px]"
                  />
                </label>
              </form>
            </div>

            <div className="bg-[#2D547B] rounded-[10px] h-[48px] md:h-[74px] flex justify-center items-center">
              <div className="font-semibold text-[18px] md:text-[24px] text-white">SEND</div>
            </div>

          </div>
        </div>
        <Footer />
      </PaddedWrapper>
    </div>
  );
};

export default HelpAndSupport;
