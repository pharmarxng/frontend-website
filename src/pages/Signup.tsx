import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Input from '../components/Input';
import Label from '../components/Label';

const Signup = () => {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <div className="flex item-center mt-[30px] px-[30px] py[0px]">
        <div className='grid gap-[30px] m-auto w-[323px] md:w-[666px]'>
          <div className='font-normal text-[18px] md:text-[32px]'>Sign Up</div>
          <div className='h-[597px] px-[16px] py-[0px]'>
            <form className="grid gap-[8px] text-[14px] md:text-[18px] font-normal h-[48px] rounded-[6px]  border-[#CBD2E0]">
              <label className="text-[14px] md:text-[18px]" >First Name*
                <Input
                  placeholder=""
                  name="firstName"
                  type="text"
                  value=""
                  changed={(e) => { }}
                  classDef="mt-2 border-[2px]"
                />
              </label>
              

              <label className="text-[14px] md:text-[18px]" >last Name*
                <Input
                  placeholder=""
                  name="firstName"
                  type="text"
                  value=""
                  changed={(e) => { }}
                  classDef="mt-2 border-[2px]"
                />
              </label>

              <label className="text-[14px] md:text-[18px]" >Userame*
                <Input
                  placeholder=""
                  name="firstName"
                  type="text"
                  value=""
                  changed={(e) => { }}
                  classDef="mt-2 border-[2px]"
                />
              </label>

              <div className=" md:max-w-[358px]">
                <label className="text-[14px] md:text-[18px]" >Location*
                  <Input
                    placeholder=""
                    name="firstName"
                    type="text"
                    value=""
                    changed={(e) => { }}
                    classDef="mt-2 border-[2px]"
                  />
                </label>
              </div>
              

              <label className="text-[14px] md:text-[18px]" >Email*
                <Input
                  placeholder=""
                  name="firstName"
                  type="text"
                  value=""
                  changed={(e) => { }}
                  classDef="mt-2 border-[2px]"
                />
              </label>


              <label className="text-[14px] md:text-[18px]" >Password*
                <Input
                  placeholder=""
                  name="firstName"
                  type="text"
                  value=""
                  changed={(e) => { }}
                  classDef="mt-2 border-[2px]"
                />
              </label>

              <label className="text-[14px] md:text-[18px]" >Confirm Password*
                <Input
                  placeholder=""
                  name="firstName"
                  type="text"
                  value=""
                  changed={(e) => { }}
                  classDef="mt-2 border-[2px]"
                />
              </label>

            </form>
          </div>


          <div className="flex px-[16px] md:my-[54px]">
            <label className="justify-center items-center flex m-auto">
              <Input
                placeholder=""
                name="rememberMe"
                type="checkbox"
                value="lsRememberMe"
                changed={(e) => { }}
                classDef="mt-2 mr-2"
              />
              <div className="m-auto text-[16px] md:text-[24px] pl-[16px]">I agree to the terms and conditions.</div>
            </label>
          </div>



          <div>
            <div className="bg-[#2D547B] rounded-[10px] h-[48px] md:h-[74px] w-full  text-center flex">
              <div className="w-full h-[29px] font-semibold text-[18px] md:text-[24px] text-white m-auto">SIGN UP</div></div>
          </div>
          <div className='flex items-center'>
            <div className='m-auto'>Already have an account?? <span><Link
              to="/Login"
            >
              Log in
            </Link></span></div>
          </div>
        </div>
      </div>

    </div>

  );
};

export default Signup;
