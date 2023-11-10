import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Input from '../components/Input';
import Label from '../components/Label';

const Login = () => {
  return (
    <div className="bg-white font-normal text-primary-200">
      <Navbar />
      <div className='flex items-center bg-white h-[330px] md:h-[477px] py-[30px] md:py-[88px]'>
        <div className="w-[343px] md:w-[666px] h-[270px] m-auto center">
          <div className=" text-[18px] md:text-3xl">Reset Password
          </div>

          <div>
            <div className="mt-[32px] h-[72px]">
              <form className="px-[16px] font-medium text-[#2D3648]">
                <label className="text-[14px]">
                  New Password*
                  <Input
                    placeholder=""
                    name="NewPassword"
                    type="text"
                    value=""
                    changed={(e) => { }}
                    classDef="mt-2 h-[48px] rounded-[6px] border-[2px]"
                  />
                </label>
              </form>
            </div>

          
            <div className="mt-[32px] h-[72px]">
              <form className="px-[16px] font-medium text-[#2D3648]">
                <label className="text-[14px]">
                  Confirm Password*
                  <Input
                    placeholder=""
                    name="ConfirmPassword"
                    type="text"
                    value=""
                    changed={(e) => { }}
                    classDef="mt-2 h-[48px] rounded-[6px] border-[2px]"
                  />
                </label>
              </form>
            </div>
          </div>

          <div>
            <div className="bg-secondary-300 rounded-[10px] h-[48px] md:h-[74px] w-full  mt-[32px] text-center flex">
              <div className="w-full h-[29px] font-semibold text-[18px] md:text-2xl text-white m-auto"><Link to="/Login">LOG IN
              </Link>
              </div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
