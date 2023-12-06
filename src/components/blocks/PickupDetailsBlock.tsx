import { CartState } from '../../context/cartContext';
import { OrderState } from '../../context/orderContext';
import { IProducts } from '../../utils/interfaces';
import FormButton from '../FormButton';
import { PATH } from '../../utils/path-constant';
import { useNavigate } from 'react-router-dom';
import { createOrderApi } from '../../api/order';
import { getItem, setItem } from '../../utils/auth';
import { inputFields } from '../../utils/constants';
import Input from '../Input';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

interface PickupDetailsBlockProps {
  emailValidationErrors?: { [key: string]: string };
}

const PickupDetailsBlock = ({
  emailValidationErrors,
}: PickupDetailsBlockProps) => {
  const { orderState, orderDispatch } = OrderState();
  const result = getItem('auth');
  const [localFirstName] = useState<string>(
    result?.user?.firstName || orderState.firstName
  );
  const [localLastName] = useState<string>(
    result?.user?.lastName || orderState.lastName
  );
  const [localPhone] = useState<string>(
    result?.user?.phone || orderState.phone
  );

  const {
    cartState: { cart, checkedItems },
  } = CartState();
  const navigate = useNavigate();

  const disableButton = (errors: { [key: string]: string }) => {
    return Object.values(errors).some((error) => !!error);
  };

  const handleInputChange = (dispatchValue: string, value: string) => {
    const trimmedValue = value.trim();
    orderDispatch({
      type: dispatchValue,
      payload: trimmedValue,
    });
  };

  const goToOrderPayment = async () => {
    const products = cart
      .filter((product: IProducts) => checkedItems.includes(product.id))
      .map((product: IProducts) => ({
        productId: product.id,
        quantity: product.noOfUnitsToPurchase,
      }));

    const body = {
      deliveryType: 'pickup',
      products,
      email: orderState.email,
      firstName: orderState.firstName,
      lastName: orderState.lastName,
      phone: orderState.phone,
    };
    const { order, user, accessToken } = await createOrderApi(body);
    setItem('auth', { user, accessToken });
    navigate(`${PATH.ORDER_DETAILS}/${order.id}`);
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(1, 'Too Short!')
      .max(50, 'Too Long!')
      .test(
        'no-leading-space',
        'Cannot start or consist only of spaces',
        (value) => !value || !/^\s/.test(value)
      )
      .required('Required'),
    lastName: Yup.string()
      .min(1, 'Too Short!')
      .max(50, 'Too Long!')
      .test(
        'no-leading-space',
        'Cannot start or consist only of spaces',
        (value) => !value || !/^\s/.test(value)
      )
      .required('Required'),
    phone: Yup.string()
      .required('Required')
      .matches(
        /^\+[1-9]\d{1,14}$/,
        'Invalid phone number format try this format +234 81x xxx xxx x'
      )
      .test(
        'no-leading-space',
        'Cannot start or consist only of spaces',
        (value) => !value || !/^\s/.test(value)
      ),
  });

  return (
    <Formik
      initialValues={{
        firstName: localFirstName,
        lastName: localLastName,
        phone: localPhone,
      }}
      validationSchema={validationSchema}
      onSubmit={() => {}}
    >
      {({ values, errors, touched, handleBlur, handleChange }) => (
        <div className="w-full">
          <div className="mb-3 md:mb-6 font-bold">Pickup Locations</div>
          <div className="flex flex-col space-y-[6px] bg-gray-100 px-3 py-2 rounded-lg w-full font-semibold mb-3 md:mb-6">
            <div>PharmaRx</div>
            <div>
              1A, Providence Mall, Providence Street, Lekki Phase 1, Lagos
            </div>
          </div>
          <div className="flex flex-col gap-2 md:gap-5">
            <div className="flex gap-5 justify-between ">
              {inputFields.slice(0, 2).map((field) => {
                const fieldName = field.name as keyof typeof values;
                return (
                  <label
                    key={fieldName}
                    className="text-sm w-full font-medium md:text-lg"
                  >
                    {field.label}
                    <Input
                      placeholder={field.placeholder}
                      name={fieldName}
                      type={field.type}
                      value={values[fieldName]}
                      onBlur={handleBlur}
                      changed={(e: React.ChangeEvent<HTMLInputElement>) => {
                        handleChange(e);
                        handleInputChange(field.dispatchValue, e.target.value);
                      }}
                      error={
                        ((errors[fieldName] && touched[fieldName]) ||
                          errors[fieldName]) &&
                        errors[fieldName]
                      }
                      classDef="mt-2 border-[2px] w-full bg-grey-200"
                    />
                  </label>
                );
              })}
            </div>

            {inputFields.slice(2, 3).map((field) => {
              const fieldName = field.name as keyof typeof values;

              return (
                <label
                  key={fieldName}
                  className="text-sm font-medium md:text-lg"
                >
                  {field.label}
                  <Input
                    placeholder={field.placeholder}
                    name={fieldName}
                    type={field.type}
                    value={values[fieldName]}
                    onBlur={handleBlur}
                    changed={(e: React.ChangeEvent<HTMLInputElement>) => {
                      handleChange(e);
                      handleInputChange(field.dispatchValue, e.target.value);
                    }}
                    error={
                      ((errors[fieldName] && touched[fieldName]) ||
                        errors[fieldName]) &&
                      errors[fieldName]
                    }
                    classDef="mt-2 border-[2px] bg-grey-200"
                  />
                </label>
              );
            })}
          </div>
          <div className="flex justify-end mt-14">
            <FormButton
              disabled={disableButton({ ...errors, ...emailValidationErrors })}
              clicked={goToOrderPayment}
            >
              Continue to payment
            </FormButton>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default PickupDetailsBlock;
