import { useNavigate } from 'react-router-dom';
import Input from '../Input';
import { OrderState } from '../../context/orderContext';
import ShippingDetailsForm from './ShippingDetailsForm';
import { radioButtonContent } from '../../utils/constants';
import PickupDetailsBlock from './PickupDetailsBlock';
import { AuthState } from '../../context/authContext';
import { PATH } from '../../utils/path-constant';
import { getItem } from '../../utils/auth';
import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const DeliveryForm = () => {
  const {
    orderState: { email, deliveryType },
    orderDispatch,
  } = OrderState();
  const result = getItem('auth');
  const [localEmail] = useState<string>(result?.user?.email || email);
  const { authtDispatch } = AuthState();
  const navigate = useNavigate();

  const goToLogin = () => {
    authtDispatch({ type: 'SET_REDIRECT_PATH', payload: PATH.DELIVERY_INFO });
    navigate(PATH.LOGIN);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
  });

  return (
    <Formik
      initialValues={{
        email: localEmail,
      }}
      validationSchema={validationSchema}
      onSubmit={() => {}}
    >
      {({ values, errors, touched, handleBlur, handleChange }) => (
        <div className="text-black py-6  flex flex-col items-center w-full">
          <div className="flex flex-col w-full">
            <div className="flex flex-col flex-1 text-sm md:text-lg gap-5 md:gap-10 w-full">
              <div className="font-medium text-base md:text-lg flex flex-col gap-6">
                <div className="md:flex flex-col md:flex-row md:justify-between space-y-6 md:space-y-0">
                  <label>Contact</label>
                  {!result?.user && (
                    <div>
                      Have an account?
                      <span
                        onClick={goToLogin}
                        className="text-[#1A4570] font-semibold"
                      >
                        Log in
                      </span>
                    </div>
                  )}
                </div>

                <Input
                  placeholder="Email*"
                  name="email"
                  type="email"
                  value={values.email}
                  onBlur={handleBlur}
                  changed={(e) => {
                    handleChange(e);
                    orderDispatch({
                      type: 'SET_EMAIL',
                      payload: e.target.value,
                    });
                  }}
                  error={
                    ((errors.email && touched.email) || errors.email) &&
                    errors.email
                  }
                  classDef="mt-2 border-[2px] text-sm md:text-lg"
                />
              </div>

              <label className="font-semibold text-base md:text-lg flex flex-col items-start gap-6">
                Delivery method
                <div className="w-full">
                  {radioButtonContent.map((option) => (
                    <div
                      key={option.type}
                      className={`flex gap-3 p-4 rounded-lg w-full h-12 ${
                        deliveryType === option.type
                          ? 'bg-grey-200'
                          : 'bg-white'
                      } items-center`}
                    >
                      <Input
                        name="deliveryType"
                        type="radio"
                        value={option.type}
                        checked={deliveryType === option.type}
                        changed={() =>
                          orderDispatch({
                            type: 'SET_DELIVERY_TYPE',
                            payload: option.type,
                          })
                        }
                        classDef="mt-2 border-[2px]  h-[14px] md:h-[19px]"
                      />
                      <img
                        src={option.image}
                        alt={`delivery-type-${option.type}`}
                        className="object-cover "
                      />
                      <span className="text-sm md:text-lg">{option.label}</span>
                    </div>
                  ))}
                </div>
              </label>

              {deliveryType === 'delivery' ? (
                <ShippingDetailsForm emailValidationErrors={errors} />
              ) : (
                <PickupDetailsBlock emailValidationErrors={errors} />
              )}
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default DeliveryForm;
