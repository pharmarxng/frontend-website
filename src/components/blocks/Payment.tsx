import { Link } from 'react-router-dom';
import Input from '../Input';
import Navbar from '../Navbar';
import Label from '../Label';


const Payment = () => {
  return (
    <div className='text-black mt-[30px]'>

      <div className='flex flex-col text-black p-[10px] border-2 gap-6 grey-300 rounded-lg'>
        <div className='md:flex flex-col md:flex-row md:justify-between'>
          <div className='text-base md:text-lg font-semibold'>Contant</div>
          <div>Have an account? <span className='text-[#1A4570] font-semibold'><Link to="../pages/login">Log in</Link></span>
          </div>
        </div>

        <form className='border-2 borber-grey-300 rounded-lg'>
          {/* Contact Section */}
          <div className='flex justify-between items-center border-b-2 grey-300 rounded-t-lg font-medium px-1'>
            <div className='flex items-center'>
              <div className='opacity-50'>
                <Label label="Contact" />
              </div>
              <Input
                placeholder="brightpreye@gmail.com"
                name="email"
                type="text"
                value=""
                changed={(e) => { }}
                classDef="border-none focus:outline-none text-black bg-white text-sm md:text-lg"
              />
            </div>
            <div className='flex justify-end text-sm text-deepBlue-100 md:text-lg'>change</div>
          </div>

          {/* Ship To Section */}
          <div className='flex justify-between items-center px-1'>
            <div className='flex items-center'>
              <div className='opacity-50'>
                <Label label="Ship to" />
              </div>
              <div className=''>
                <Input
                  placeholder="No 45 Abraham George street, Ikeja, Lagos, Nigeria"
                  name="email"
                  type="text"
                  value=""
                  changed={(e) => { }}
                  classDef="border-none focus:outline-none text-black bg-white text-sm md:text-lg"
                />
              </div>
            </div>
            <div className='flex justify-end text-sm text-deepBlue-100 md:text-lg'>change</div>
          </div>

          {/* Method To Section */}
          <div className='flex justify-between items-center border-t-2 grey-300 rounded-b-lg px-1'>
            <div className='flex items-center'>
              <div className='opacity-50'>
                <Label label="Method" />
              </div>
              <Input
                placeholder="Standard (Ajah/Sangotode)"
                name="email"
                type="text"
                value=""
                changed={(e) => { }}
                classDef="border-none focus:outline-none text-black bg-white text-sm md:text-lg"
              />
            </div>
            <div className='flex justify-end text-sm text-deepBlue-100 md:text-lg'>change</div>
          </div>
        </form>

        <div className='flex flex-col mt-[40px]'>
          <div className='font-medium text-base md:text-lg'>Payment</div>
          <div className='font-normal text-sm md:text-lg'>All transactions are secure and encrypted.</div>
        </div>

        <form className='flex flex-col gap-4'>
          
          <div className='border-2 grey-300 rounded-lg p-1'>
            <div className='flex justify-between h-16 items-center border-b-2 grey-300  font-medium px-7'>
              <div className='flex gap-3'>
                <Input
                  placeholder=""
                  name="email"
                  type="radio"
                  value=""
                  changed={(e) => { }}
                  classDef="w-[14px h-[14px] md:w-[19px] md:h-[19px]"
                />
                <div>Credit card</div>
              </div>
            </div>

            <Input
              placeholder="Enter your phone number"
              name="enquires"
              type="text"
              value=""
              changed={(e) => { }}
              classDef="mt-2 border-[2px] bg-grey-200"
            />

            <Input
              placeholder="Enter your Address"
              name="Address"
              type="text"
              value=""
              changed={(e) => { }}
              classDef="mt-2 border-[2px] bg-grey-200"
            />

            <div className='text-sm font-medium md:text-lg'>
              <div className='flex gap-4'>
                <div className='flex-1'>
                  <Input
                    placeholder="Enter expiration dater (MM/YY)"
                    name="City"
                    type="text"
                    value=""
                    changed={(e) => { }}
                    classDef="text-sm md:text-lg mt-2 border-[2px] bg-grey-200"
                  />
                </div>
                <div className='flex-1'>
                  <Input
                    placeholder="CVV"
                    name="Region"
                    type="text"
                    value=""
                    changed={(e) => { }}
                    classDef="text-sm md:text-lg mt-2 border-[2px] bg-grey-200"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='flex justify-between h-16 items-center border-2 rounded-lg grey-300  font-medium px-7'>
            <div className='flex gap-3'>
              <Input
                placeholder=""
                name="email"
                type="radio"
                value=""
                changed={(e) => { }}
                classDef="w-[14px h-[14px] md:w-[19px] md:h-[19px]"
              />
              <div>PayPal</div>
            </div>
          </div>

          <div className='flex justify-between h-16 items-center border-2 rounded-lg grey-300  font-medium px-7'>
            <div className='flex gap-3'>
              <Input
                placeholder=""
                name="email"
                type="radio"
                value=""
                changed={(e) => { }}
                classDef="w-[14px h-[14px] md:w-[19px] md:h-[19px]"
              />
              <div>Bank Transfer</div>
            </div>
          </div>

          <div className='mt-46px'>
            <div className='font-medium text-base md:text-lg'>Billing Address</div>

            <div className='border-2 grey-300 rounded-lg p-1 my-[30px]'>
              <div className='flex justify-between h-16 items-center grey-300  font-medium px-7'>
                <div className='flex gap-3'>
                  <Input
                    placeholder=""
                    name="email"
                    type="checkbox"
                    value=""
                    changed={(e) => { }}
                    classDef="w-[14px h-[14px] md:w-[19px] md:h-[19px] border-[2px] bg-grey-200"
                  />
                  <div>Same as shipping address</div>
                </div>
              </div>
            </div>

            <div className='font-medium text-base md:text-lg'>Phone number</div>
            <div className=''>
              <Input
                placeholder="Enter your phone number"
                name="email"
                type="text"
                value=""
                changed={(e) => { }}
                classDef="border-[2px] bg-grey-200"
              />
            </div>

            <div className='font-medium text-base md:text-lg'>Address</div>
            <div className=''>
              <Input
                placeholder="Enter your address"
                name="email"
                type="text"
                value=""
                changed={(e) => { }}
                classDef="border-[2px] bg-grey-200"
              />
            </div>

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
          </div>

        </form>
      </div>

      <div className="bg-[#2D547B] rounded-[10px] w-full h-[47px] md:h-[74px] flex justify-center items-center mt-[40px]">
        <div className="font-semibold text-base font-semibold md:text-[24px] text-white">Pay Now</div>
      </div>

    </div>
  );
};

export default Payment;
