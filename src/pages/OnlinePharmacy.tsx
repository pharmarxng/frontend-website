import Navbar from '../components/Navbar';
import OnlinePharmacyForm from '../components/OnlinePharmacyForm';

const OnlinePharmacy = () => {
  return (
    <div>
      <Navbar />
      <div className="hidden md:block relative">
        <img
          src="/svg/pharmConsultant.svg"
          alt="Online Consultant"
          className="z-20"
        />
        <div className="grid grid-cols-2 absolute left-8 top-0 mt-5 z-40 text-black">
          <HeaderDiv />
          <div>{''}</div>
        </div>
        <div className="absolute z-40 bottom-[-100px] left-[15%] shadow-sm w-[70%]">
          <OnlinePharmacyForm />
        </div>
      </div>
      <div className="md:hidden">
        <div>
          <img
            src="/svg/pharmConsultant.svg"
            alt="Online Consultant"
            className="z-20"
          />
        </div>
        <OnlinePharmacyForm />
      </div>
    </div>
  );
};

export default OnlinePharmacy;

const HeaderDiv = () => {
  return (
    <div>
      <div className=" md:text-4xl/10 font-bold">
        Expert guidance at your fingertips
      </div>
      <div>
        Comprehensive Care Available Both In-Person and Virtually, 7 Days a Week
      </div>
    </div>
  );
};
