import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Input from '../components/Input';
import Label from '../components/Label';
import FormButton from '../components/FormButton';
import { Formik } from 'formik';
import { useState } from 'react';
import { signUpApi } from '../api/auth';
import { setItem } from '../utils/auth';
import { FadeLoader } from 'react-spinners';
import { PATH } from '../utils/path-constant';

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const initialState = {
    firstName: '',
    lastName: '',
    username: '',
    address: '',
    email: '',
    confirmPassword: '',
    password: '',
    terms: false,
  };

  const validate = (values: typeof initialState) => {
    const errors: {
      firstName?: string;
      lastName?: string;
      email?: string;
      username?: string;
      address?: string;
      confirmPassword?: string;
      password?: string;
    } = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName.length < 1) {
      errors.firstName = 'Must be a valid first name';
    }

    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if (values.lastName.length < 1) {
      errors.lastName = 'Must be a valid last name';
    }

    if (!values.username) {
      errors.username = 'Required';
    } else if (values.username.length < 1) {
      errors.username = 'Must be a valid username';
    }

    if (!values.address) {
      errors.address = 'Required';
    } else if (values.address.length < 1) {
      errors.address = 'Must be a valid address';
    }

    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = 'Required';
    } else if (
      values.confirmPassword.length < 8 ||
      values.confirmPassword !== values.password
    ) {
      errors.confirmPassword = 'Confirm password must match password';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  const handleDisable = (
    values: typeof initialState,
    isSubmitting: boolean
  ) => {
    return (
      isSubmitting ||
      values.firstName?.length === 0 ||
      values.lastName?.length === 0 ||
      values.address?.length === 0 ||
      values.username?.length === 0 ||
      values.email?.length === 0 ||
      values.password?.length < 8 ||
      values.confirmPassword?.length < 8 ||
      values.terms === false
    );
  };

  return (
    <div className="bg-white min-h-screen text-black">
      <Navbar />
      <div className="flex item-center mt-[30px] px-[30px] py-[0px]">
        <Formik
          initialValues={initialState}
          validate={validate}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            try {
              setSubmitting(true);
              setLoading(true);
              const { user, accessToken } = await signUpApi({ ...values });
              setItem('auth', { user, accessToken });
              setLoading(false);
              setSubmitting(false);
              resetForm({ values: initialState });
              navigate(`${PATH.HOME}`);
            } catch (error) {
              console.log(error);
              setLoading(false);
              setSubmitting(false);
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            handleBlur,
            isSubmitting,
          }) => (
            <form
              onSubmit={handleSubmit}
              className="grid gap-[30px] m-auto w-[323px] md:w-[666px]"
            >
              <div className="font-normal text-[18px] md:text-[32px]">
                Sign Up
              </div>
              <div className="h-[597px] px-[16px] py-[0px]">
                <div className="grid gap-[8px] text-[14px] md:text-[18px] font-normal h-[48px] rounded-[6px]  border-[#CBD2E0]">
                  <div>
                    <Label label="First Name*" />
                    <Input
                      name="firstName"
                      type="text"
                      value={values.firstName}
                      onBlur={handleBlur}
                      changed={handleChange}
                      error={
                        errors.firstName &&
                        touched.firstName &&
                        errors.firstName
                      }
                      classDef="mt-2 border-[2px]"
                    />
                  </div>

                  <div>
                    <Label label="Last Name*" />
                    <Input
                      name="lastName"
                      type="text"
                      value={values.lastName}
                      onBlur={handleBlur}
                      changed={handleChange}
                      error={
                        errors.lastName && touched.lastName && errors.lastName
                      }
                      classDef="mt-2 border-[2px]"
                    />
                  </div>

                  <div>
                    <Label label="Username*" />
                    <Input
                      name="username"
                      type="text"
                      value={values.username}
                      onBlur={handleBlur}
                      changed={handleChange}
                      error={
                        errors.username && touched.username && errors.username
                      }
                      classDef="mt-2 border-[2px]"
                    />
                  </div>

                  <div>
                    <Label label="Address*" />
                    <Input
                      name="address"
                      type="text"
                      value={values.address}
                      onBlur={handleBlur}
                      changed={handleChange}
                      error={
                        errors.address && touched.address && errors.address
                      }
                      classDef="mt-2 border-[2px]"
                    />
                  </div>

                  <div>
                    <Label label="Email*" />
                    <Input
                      name="email"
                      type="email"
                      value={values.email}
                      onBlur={handleBlur}
                      changed={handleChange}
                      error={errors.email && touched.email && errors.email}
                      classDef="mt-2 border-[2px]"
                    />
                  </div>

                  <div>
                    <Label label="Password*" />
                    <Input
                      name="password"
                      type="password"
                      value={values.password}
                      onBlur={handleBlur}
                      changed={handleChange}
                      error={
                        errors.password && touched.password && errors.password
                      }
                      classDef="mt-2 border-[2px]"
                    />
                  </div>

                  <div>
                    <Label label="Confirm Password*" />
                    <Input
                      placeholder=""
                      name="confirmPassword"
                      type="password"
                      value={values.confirmPassword}
                      onBlur={handleBlur}
                      changed={handleChange}
                      error={
                        errors.confirmPassword &&
                        touched.confirmPassword &&
                        errors.confirmPassword
                      }
                      classDef="mt-2 border-[2px]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex px-[16px] md:mt-14 md:mb-4">
                <label className="justify-center items-center flex m-auto">
                  <Input
                    placeholder=""
                    name="terms"
                    type="checkbox"
                    checked={values.terms}
                    onBlur={handleBlur}
                    changed={handleChange}
                    classDef="mt-2 mr-2"
                  />
                  <div className="m-auto text-[16px] md:text-[24px] pl-3">
                    I agree to the terms and conditions.
                  </div>
                </label>
              </div>

              <div className="">
                <FormButton
                  disabled={handleDisable(values, isSubmitting)}
                  classDef="w-full"
                >
                  SIGN UP
                </FormButton>
              </div>

              <div className="flex items-center m-auto">
                Already have an account?
                <Link
                  className="font-semibold hover:cursor-pointer"
                  to="/Login"
                >
                  Log in
                </Link>
              </div>
            </form>
          )}
        </Formik>
        {loading && (
          <div className="flex justify-center pt-[60px]">
            <FadeLoader
              color={'#2D547B'}
              loading={loading}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
