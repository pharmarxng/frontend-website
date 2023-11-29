import { useNavigate } from 'react-router-dom';
import { OrderState } from '../../context/orderContext';
import FormButton from '../FormButton';
import Input from '../Input';
import { PATH } from '../../utils/path-constant';

const inputFields = [
  {
    name: 'firstName',
    placeholder: 'First name',
    type: 'text',
    dispatchValue: 'SET_FIRST_NAME',
    label: 'First name*',
  },
  {
    name: 'lastName',
    placeholder: 'Last name',
    type: 'text',
    dispatchValue: 'SET_LAST_NAME',
    label: 'Last name*',
  },
  {
    name: 'phone',
    placeholder: 'Enter your phone number',
    type: 'text',
    dispatchValue: 'SET_PHONE',
    label: 'Phone Number*',
  },
  {
    name: 'address',
    placeholder: 'Enter your address',
    type: 'text',
    dispatchValue: 'SET_ADDRESS',
    label: 'Address*',
  },
  {
    name: 'city',
    placeholder: 'City',
    type: 'text',
    dispatchValue: 'SET_CITY',
    label: 'City*',
  },
  {
    name: 'postalCode',
    placeholder: 'Enter your postal code',
    type: 'text',
    dispatchValue: 'SET_POSTAL_CODE',
    label: 'Postal Code',
  },
];

const ShippingDetailsForm = () => {
  const { orderState, orderDispatch } = OrderState();
  const navigate = useNavigate();

  const handleInputChange = (dispatchValue: string, value: string) => {
    orderDispatch({
      type: dispatchValue,
      payload: value,
    });
  };

  const disableButton = () => {
    return (
      orderState.email?.length <= 0 ||
      orderState.firstName?.length <= 0 ||
      orderState.lastName?.length <= 0 ||
      orderState.address?.length <= 0 ||
      orderState.city?.length <= 0 ||
      orderState.phone?.length <= 0
    );
  };

  const handleButtonClick = () => {
    navigate(`${PATH.SHIPPING_INFO}`);
  };

  return (
    <div className="w-full">
      <div className="text-base md:text-lg font-semibold mb-2 md:mb-5">
        Shipping address
      </div>

      <div className="flex flex-col gap-2 md:gap-5">
        <div className="flex gap-5 justify-between ">
          {inputFields.slice(0, 2).map((field) => (
            <label
              key={field.name}
              className="text-sm w-full font-medium md:text-lg"
            >
              {field.label}
              <Input
                placeholder={field.placeholder}
                name={field.name}
                type={field.type}
                value={orderState[field.name]}
                changed={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(field.dispatchValue, e.target.value)
                }
                classDef="mt-2 border-[2px] w-full bg-grey-200"
              />
            </label>
          ))}
        </div>

        {inputFields.slice(2).map((field) => (
          <label key={field.name} className="text-sm font-medium md:text-lg">
            {field.label}
            <Input
              placeholder={field.placeholder}
              name={field.name}
              type={field.type}
              value={orderState[field.name]}
              changed={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleInputChange(field.dispatchValue, e.target.value)
              }
              classDef="mt-2 border-[2px] bg-grey-200"
            />
          </label>
        ))}
      </div>

      <div className="flex justify-end mt-14">
        <FormButton disabled={disableButton()} clicked={handleButtonClick}>
          Continue to shipping
        </FormButton>
      </div>
    </div>
  );
};

export default ShippingDetailsForm;
