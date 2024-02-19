import OnlinePharmacyForm from '../OnlinePharmacyForm';

const OnlinePharmacyHeader = () => {
  return (
    <div>
      <div className="hidden md:block relative md:mt-6">
        <img
          src="/svg/pharmConsultant.svg"
          alt="Online Consultant"
          className=""
        />
        <div className="grid grid-cols-4 absolute left-8 top-0 mt-5 mdPro:mt-12 mdLite:mt-24 lg:mt-36 xl:mt-44  text-black">
          <div className="col-span-3">
            <HeaderDiv />
          </div>
          <div>{''}</div>
        </div>
        <div className="absolute bottom-[-100px] left-[10%] shadow-sm w-[80%]">
          <OnlinePharmacyForm />
        </div>
      </div>
      <div className="md:hidden text-black">
        <HeaderDiv />
        <div>
          <img
            src="/svg/pharmConsultant.svg"
            alt="Online Consultant"
            className=""
          />
        </div>
        <OnlinePharmacyForm />
      </div>
    </div>
  );
};

export default OnlinePharmacyHeader;

const HeaderDiv = () => {
  return (
    <div className="bg-white md:bg-transparent px-4 py-8 md:py-0 md:px-0">
      <div className="text-2xl/7 md:text-3xl/9 font-bold mb-4">
        Expert guidance at your fingertips
      </div>
      <div className="text-sm/4 md:text-base/5">
        Comprehensive Care Available Both In-Person and Virtually, 7 Days a Week
      </div>
    </div>
  );
};
