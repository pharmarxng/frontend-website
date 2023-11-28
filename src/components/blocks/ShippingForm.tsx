import { Link } from 'react-router-dom';
import Input from '../Input';
import Navbar from '../Navbar';


const ShippingForm = () => {
  return (
    <div className='text-black py-7  flex flex-col items-center'>
      <div className='flex flex-col gap-10'>
        <form className="flex flex-col flex-1 text-sm md:text-lg gap-10 w-full">
          <div className='font-medium text-base md:text-lg flex flex-col gap-6'>
            <div className='md:flex flex-col md:flex-row md:justify-between gap-6'>
              <label>Contant</label>
              <div>Have an account? <span className='text-[#1A4570] font-semibold'><Link to="../pages/login">Log in</Link></span>
              </div>
            </div>
            <Input
              placeholder="Email"
              name="fullName"
              type="text"
              value=""
              changed={(e) => { }}
              classDef="mt-2 border-[2px] text-sm md:text-lg"
            />
            <div className='flex items-center'>
              <Input
                placeholder=""
                name="rememberMe"
                type="checkbox"
                value="lsRememberMe"
                changed={(e) => { }}
                classDef="mt-2 mr-2 w-[11.25px] h-[11.25px] md:w-[15px] md:h-[15px] md:text-lg"
              />
              <div className="h-[22px] font-medium text-sm md:text-lg pl-[10px]">Email me with news and offers</div>
            </div>
          </div>





          <label className="font-semibold text-base md:text-lg flex flex-col items-start gap-6">
            Delivery method
            <div className='w-full'>
              <div className='flex gap-3 p-4 rounded-t-[10px] w-full h-12 bg-grey-200 items-center'>
                <Input
                  placeholder=""
                  name="Delivery"
                  type="radio"
                  value=""
                  changed={(e) => { }}
                  classDef="mt-2 border-[2px] w-[14px] h-[14px] md:w-[19px] md:h-[19px]"
                />
                <img
                  src="../public/images/carbon_delivery.png"
                  alt="carbon_delivery"
                  className="object-cover md:w-[24px]"
                />
                <span className='text-sm md:text-lg'>Ship</span>
              </div>

              <div className='flex gap-3 p-4 rounded-t-[10px] w-full h-12 items-center'>
                <Input
                  placeholder=""
                  name="Delivery"
                  type="radio"
                  value=""
                  changed={(e) => { }}
                  classDef="mt-2 border-[2px] w-[14px] h-[14px] md:w-[19px] md:h-[19px]"
                />
                <img
                  src="public\images\solar_shop-2-linear.png"
                  alt="solar_shop-2-linear"
                  className="object-cover md:w-[24px]"
                />
                <span className='text-sm md:text-lg'>Pick up</span>
              </div>
            </div>
          </label>


          <div className='text-base md:text-lg font-semibold'>Shipping address</div>

          <div className='flex flex-col gap-10'>
            <div className='text-sm font-medium md:text-lg'>
              <label>Full name</label>
              <div className='flex  gap-4'>
                <div className='flex-1'>
                  <Input
                    placeholder="First name"
                    name="firstname"
                    type="text"
                    value=""
                    changed={(e) => { }}
                    classDef="mt-2 border-[2px] bg-grey-200"
                  />
                </div>
                <div className='flex-1'>
                  <Input
                    placeholder="last name"
                    name="lastName"
                    type="text"
                    value=""
                    changed={(e) => { }}
                    classDef="mt-2 border-[2px] bg-grey-200"
                  />
                </div>

              </div>
            </div>

            <label className="text-sm font-medium md:text-lg" >Email address
              <Input
                placeholder="Enter your email address"
                name="phoneNumber"
                type="text"
                value=""
                changed={(e) => { }}
                classDef="mt-2 border-[2px] bg-grey-200"
              />
            </label>

            <label className="text-sm font-medium md:text-lg" >Phone number
              <Input
                placeholder="Enter your phone number"
                name="enquires"
                type="text"
                value=""
                changed={(e) => { }}
                classDef="mt-2 border-[2px] bg-grey-200"
              />
            </label>

            <label className="text-sm font-medium md:text-lg" >Address
              <Input
                placeholder="Enter your Address"
                name="Address"
                type="text"
                value=""
                changed={(e) => { }}
                classDef="mt-2 border-[2px] bg-grey-200"
              />
            </label>

            <div className='text-sm font-medium md:text-lg'>
              <label>City</label>
              <div className='flex gap-4'>
                <div className='flex-1'>
                  <Input
                    placeholder="City"
                    name="City"
                    type="text"
                    value=""
                    changed={(e) => { }}
                    classDef="mt-2 border-[2px] bg-grey-200"
                  />
                </div>

                <div className='flex-1'>
                  <Input
                    placeholder="Region"
                    name="Region"
                    type="text"
                    value=""
                    changed={(e) => { }}
                    classDef="mt-2 border-[2px] bg-grey-200"
                  />
                </div>

              </div>
            </div>

            <label className="text-sm font-medium md:text-lg" >Address
              <Input
                placeholder="Enter your Address"
                name="Address"
                type="text"
                value=""
                changed={(e) => { }}
                classDef="mt-2 border-[2px] bg-grey-200"
              />
            </label>

            <label className="text-sm font-medium md:text-lg" >Postal code
              <Input
                placeholder="Enter your postal code"
                name="Address"
                type="text"
                value=""
                changed={(e) => { }}
                classDef="mt-2 border-[2px] bg-grey-200"
              />
            </label>
          </div>


        </form>
        <div className='flex gap-3 rounded-t-[10px] w-full items-center'>
          <Input
            placeholder=""
            name="checkbox"
            type="checkbox"
            value=""
            changed={(e) => { }}
            classDef="border-[2px] w-[14px] h-[14px] bg-grey-200 md:w-[20px] md:h-[20px]"
          />
          <span className='text-sm md:text-lg'>Save this information for next time</span>
        </div>

        <div className="bg-[#2D547B] rounded-[10px] w-full h-[47px] md:h-[74px] flex justify-center items-center">
          <div className="font-semibold text-base font-semibold md:text-[24px] text-white">Continue to shipping</div>
        </div>
      </div>


    </div>
  );
};

export default ShippingForm;
