import FormButton from '../FormButton';
import Input from '../Input';
import Label from '../Label';

const Payment = () => {
  return (
    <div className="flex flex-col text-black pt-[30px] gap-12 ite">
      <form>
        {/* Contact Section */}
        <div className="flex justify-between items-center border-2 grey-300 rounded-t-lg font-medium px-1">
          <div className="flex items-center">
            <div className="opacity-50">
              <Label label="Contact" />
            </div>
            <Input
              placeholder="brightpreye@gmail.com"
              name="email"
              type="text"
              value=""
              changed={(e) => {}}
              classDef="border-none focus:outline-none text-black bg-white text-sm md:text-lg"
            />
          </div>
          <div className="flex justify-end text-sm text-deepBlue-100 md:text-lg">
            change
          </div>
        </div>

        {/* Ship To Section */}
        <div className="flex justify-between items-center border-2 grey-300 rounded-b-lg px-1">
          <div className="flex items-center">
            <div className="opacity-50">
              <Label label="Ship to" />
            </div>
            <Input
              placeholder="No 45 Abraham George street, Ikeja, Lagos, Nigeria"
              name="email"
              type="text"
              value=""
              changed={(e) => {}}
              classDef="border-none focus:outline-none text-black bg-white text-sm md:text-lg"
            />
          </div>
          <div className="flex justify-end text-sm text-deepBlue-100 md:text-lg">
            change
          </div>
        </div>
      </form>

      <div className="flex flex-col gap-6">
        <div className="font-medium text-base md:text-lg">Shipping Method</div>
        <div className="font-medium text-sm md:text-lg">
          We are committed to delivering standard shipping orders to you within
          2-24 hours, provided that the orders are placed Monday to Friday
          before 2 pm. If you're seeking express delivery, simply return to your
          cart and click on the chat widget. Our team is here to assist you with
          expediting your order.
        </div>
      </div>

      <div className="h-[150px] overflow-y-auto">
        <form className="border-2 borber-grey-300 rounded-lg text-sm md:text-lg font-medium">
          <div className="flex justify-between items-center h-16 font-medium px-7">
            <div className="flex gap-3">
              <Input
                placeholder="brightpreye@gmail.com"
                name="email"
                type="radio"
                value=""
                changed={(e) => {}}
                classDef="w-[14px h-[14px] md:w-[19px] md:h-[19px]"
              />
              <div>Standard (Ajah/Sangotedo)</div>
            </div>
            <div className="flex justify-end text-deepBlue-100">
              &#x20A6; 7000
            </div>
          </div>

          <div className="flex justify-between h-16 items-center border-y-2 grey-300  font-medium px-7">
            <div className="flex gap-3">
              <Input
                placeholder="brightpreye@gmail.com"
                name="email"
                type="radio"
                value=""
                changed={(e) => {}}
                classDef="w-[14px h-[14px] md:w-[19px] md:h-[19px]"
              />
              <div>Standard (Ajah/Sangotedo)</div>
            </div>
            <div className="flex justify-end text-deepBlue-100">
              &#x20A6; 7000
            </div>
          </div>

          <div className="flex justify-between h-16 items-center font-medium px-7">
            <div className="flex gap-3">
              <Input
                placeholder="brightpreye@gmail.com"
                name="email"
                type="radio"
                value=""
                changed={(e) => {}}
                classDef="w-[14px h-[14px] md:w-[19px] md:h-[19px]"
              />
              <div>Standard (Ajah/Sangotedo)</div>
            </div>
            <div className="flex justify-end text-deepBlue-100">
              &#x20A6; 7000
            </div>
          </div>

          <div className="flex justify-between h-16 items-center border-t-2 grey-300 font-medium px-7">
            <div className="flex gap-3">
              <Input
                placeholder="brightpreye@gmail.com"
                name="email"
                type="radio"
                value=""
                changed={(e) => {}}
                classDef="w-[14px h-[14px] md:w-[19px] md:h-[19px]"
              />
              <div>Standard (Ajah/Sangotedo)</div>
            </div>
            <div className="flex justify-end text-deepBlue-100">
              &#x20A6; 7000
            </div>
          </div>
          <FormButton>Continue to shipping</FormButton>
        </form>
      </div>
    </div>
  );
};

export default Payment;
