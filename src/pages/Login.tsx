import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Input from '../components/Input';
import Label from '../components/Label';
import { useState } from 'react';
import { logInApi } from '../api/auth';
import { Formik } from 'formik';
import { setItem } from '../utils/auth';
import { PATH } from '../utils/path-constant';
import FormButton from '../components/FormButton';
import { FadeLoader } from 'react-spinners';
import { AuthState } from '../context/authContext';
import { OrderState } from '../context/orderContext';

const Login = () => {
  const {
    authtDispatch,
    authState: { redirectTo },
  } = AuthState();
  const { orderDispatch } = OrderState();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const initialState = {
    email: '',
    password: '',
  };

  const validate = (values: typeof initialState) => {
    const errors: {
      email?: string;
      password?: string;
    } = {};

    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }

    return errors;
  };

  const handleDisable = (
    values: typeof initialState,
    isSubmitting: boolean
  ) => {
    return (
      isSubmitting || values.email?.length === 0 || values.password?.length < 8
    );
  };

  return (
    <div className="bg-white min-h-screen font-normal text-primary-200 h-[1440px]">
      <Navbar />
      <div className="flex items-center">
        <Formik
          initialValues={initialState}
          validate={validate}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            try {
              setSubmitting(true);
              setLoading(true);
              const { user, accessToken } = await logInApi({ ...values });
              setItem('auth', { user, accessToken });
              setLoading(false);
              setSubmitting(false);
              resetForm({ values: initialState });
              orderDispatch({
                type: 'SET_FIRST_NAME',
                payload: user.firstName,
              });
              orderDispatch({
                type: 'SET_LAST_NAME',
                payload: user.lastName,
              });
              orderDispatch({
                type: 'SET_EMAIL',
                payload: user.email,
              });
              orderDispatch({
                type: 'SET_PHONE',
                payload: user.phone,
              });
              orderDispatch({
                type: 'SET_ADDRESS',
                payload: user.address,
              });
              if (redirectTo) {
                const path = redirectTo;
                authtDispatch({ type: 'CLEAR_REDIRECT_PATH' });
                navigate(path);
              } else {
                navigate(`${PATH.HOME}`);
              }
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
              className="w-[343px] md:w-[666px] h-[627px] m-auto mt-[30px] p-[10px] center"
            >
              <div className=" text-[18px] md:text-3xl">Log in</div>
              <div className="h-[19px] md:h-7 font-normal text-[16px] md:text-2xl mt-[32px]">
                Welcome back!
              </div>
              <div className="whitespace-normal font-normal text-[16px] md:text-xl mt-[32px]">
                Enter the email and password you used to create an account to
                sign in.
              </div>

              <div className="h-[253px] mt-[32px] ">
                <div className="h-[160px] py-0 px-[16px]">
                  <div className="">
                    <Label label="Email*" />
                    <Input
                      name="email"
                      type="email"
                      value={values.email}
                      onBlur={handleBlur}
                      changed={handleChange}
                      error={errors.email && touched.email && errors.email}
                      classDef="mt-2"
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
                      classDef="mt-2"
                    />
                  </div>
                </div>

                <div className="flex justify-end h-[48px] mt-[45px] px-[16px]">
                  <span className="h-[22px] top-[219px] mt-[10px] text-[14px] md:text-[18px] opacity-50">
                    <Link to="/Otp">Forgot password?</Link>
                  </span>
                </div>
              </div>

              <div>
                <FormButton
                  disabled={handleDisable(values, isSubmitting)}
                  classDef="w-full"
                >
                  SIGN IN
                </FormButton>
              </div>
              <div className="mt-[4px] flex">
                <div className="text-primary-200">
                  Don't have an account?{' '}
                  <span className="font-semibold text-[18px]">
                    <Link to="/Signup">Sign up</Link>
                  </span>
                </div>
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

export default Login;
