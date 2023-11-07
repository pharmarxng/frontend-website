import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Input from '../components/Input';
import Label from '../components/Label';

const Login = () => {
  return (
    <div className="bg-white font-normal text-primary-200 h-[1440px]">
        <Navbar />
        <div className='flex items-center'>
        <div className="w-[343px] md:w-[666px] h-[627px] m-auto mt-[88px] p-[10px] center">
          <div className=" text-[18px] md:text-3xl">Log in
          </div>
          <div className="h-[19px] md:h-7 font-normal text-[16px] md:text-2xl mt-[32px]">Welcome back!</div>
          <div className="whitespace-normal font-normal text-[16px] md:text-xl mt-[32px]">Enter the email and password you used to create an account to sign in.</div>

          <div className="h-[253px] mt-[45px] ">
            <div className="h-[160px] py-0 px-[16px]">
              <form className="">
                <Label label="Email*" />
                <Input
                  placeholder=""
                  name="Email"
                  type="text"
                  value=""
                  changed={(e) => { }}
                  classDef="mt-2"
                />
              </form>

              <form>
                <Label label="Password*" />
                <Input
                  placeholder=""
                  name="password"
                  type="text"
                  value=""
                  changed={(e) => { }}
                  classDef="mt-2"
                />
              </form>
            </div>


            <div className="flex h-[48px] mt-[45px]" >
              <div className="w-full flex justify-between items-center">
                <div className="flex justify-between border-[1px] rounded-[10px] items-center h-[48px]">
                  <label className="flex justify-between w-[169px] h-[25px]">
                    <Input
                      placeholder=""
                      name="rememberMe"
                      type="checkbox"
                      value="lsRememberMe"
                      changed={(e) => { }}
                      classDef="mt-2 mr-2"
                    />
                    <span className="h-[22px] opacity-50 font-medium text-lg">Remember me</span>
                  </label>
                </div>
                <div className="flex justify-end">
                  <a href=''>
                    <span className="h-[22px] top-[219px] mt-[10px]">Forget password?</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-secondary-300 rounded-[10px] h-[48px] md:h-[74px] w-full  mt-[32px] text-center flex">
              <div className="w-full h-[29px] font-semibold text-[18px] md:text-2xl text-white m-auto">SIGN IN</div></div>
          </div>
          <div className='mt-[4px] flex'>
            <div className="text-primary-200">Don't have an account? <span className="font-semibold text-[18px]"><Link
              to="/Signup"
            >
              Sign up
            </Link></span></div>
          </div>
        </div>
        </div>
    </div>    
  );
};

export default Login;
