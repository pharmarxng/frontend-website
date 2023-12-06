import { useNavigate } from 'react-router-dom';
import { OrderState } from '../../context/orderContext';
import FormButton from '../FormButton';
import Input from '../Input';
import { PATH } from '../../utils/path-constant';
import { inputFields } from '../../utils/constants';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { getItem } from '../../utils/auth';
import { useState } from 'react';

interface ShippingDetailsFormProps {
  emailValidationErrors?: { [key: string]: string };
}

const ShippingDetailsForm = ({
  emailValidationErrors,
}: ShippingDetailsFormProps) => {
  const { orderState, orderDispatch } = OrderState();
  const result = getItem('auth');
  const [localFirstName] = useState<string>(
    result?.user?.firstName || orderState.firstName
  );
  const [localLastName] = useState<string>(
    result?.user?.lastName || orderState.lastName
  );
  const [localAddress] = useState<string>(
    result?.user?.address || orderState.address
  );
  const [localCity] = useState<string>(result?.user?.city || orderState.city);
  const [localPhone] = useState<string>(
    result?.user?.phone || orderState.phone
  );
  const navigate = useNavigate();

  const handleInputChange = (dispatchValue: string, value: string) => {
    const trimmedValue = value.trim();
    orderDispatch({
      type: dispatchValue,
      payload: trimmedValue,
    });
  };

  const disableButton = (errors: { [key: string]: string }) => {
    return Object.values(errors).some((error) => !!error);
  };

  const handleButtonClick = () => {
    navigate(`${PATH.SHIPPING_INFO}`);
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
    address: Yup.string()
      .required('Required')
      .min(1, 'Too Short!')
      .test(
        'no-leading-space',
        'Cannot start or consist only of spaces',
        (value) => !value || !/^\s/.test(value)
      ),
    city: Yup.string()
      .required('Required')
      .min(1, 'Too Short')
      .test(
        'no-leading-space',
        'Cannot start or consist only of spaces',
        (value) => !value || !/^\s/.test(value)
      ),
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
        address: localAddress,
        city: localCity,
        phone: localPhone,
      }}
      validationSchema={validationSchema}
      onSubmit={() => {}}
    >
      {({ values, errors, touched, handleBlur, handleChange }) => (
        <div className="w-full">
          <div className="text-base md:text-lg font-semibold mb-2 md:mb-5">
            Shipping address
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

            {inputFields.slice(2).map((field) => {
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
              clicked={handleButtonClick}
            >
              Continue to shipping
            </FormButton>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default ShippingDetailsForm;
