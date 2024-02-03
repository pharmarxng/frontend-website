import { adminLogInApi } from '@api/admin';
import FormButton from '@components/FormButton';
import Input from '@components/Input';
import { AlertState } from '@context/alertContext';
import useAdminAuth from '@utils/hooks/admin-auth';
import { PATH } from '@utils/path-constant';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';

const AdminLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { isAdminAuthenticated, adminLogin } = useAdminAuth();
  const navigate = useNavigate();
  const { alertDispatch } = AlertState();

  useEffect(() => {
    if (isAdminAuthenticated) {
      console.log('It got here');
      navigate('/admin');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    <div className="bg-cover bg-center bg-[url('/svg/admin_login_bg.svg')] min-h-screen flex justify-center items-center px-4">
      <Formik
        initialValues={initialState}
        validate={validate}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            setSubmitting(true);
            setLoading(true);
            const result = await adminLogInApi({ ...values }, alertDispatch);
            if (!result || !result.accessToken) {
              throw new Error('Something went wrong');
            }
            adminLogin(result);
            setLoading(false);
            setSubmitting(false);
            console.log({ values });
            resetForm({ values: initialState });
            console.log({ values });
            navigate(`${PATH.ADMIN}`);
          } catch (error) {
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
            className="w-[300px] flex flex-col items-center"
          >
            <img src="/svg/pharmLogo.svg" alt="logo" />
            <div className="w-full mt-20">
              <Input
                name="email"
                type="email"
                placeholder="USERNAME"
                value={values.email}
                onBlur={handleBlur}
                changed={handleChange}
                error={errors.email && touched.email && errors.email}
                classDef="mt-2"
              />
            </div>
            <div className="w-full mt-5">
              <Input
                name="password"
                type="password"
                placeholder="PASSWORD"
                value={values.password}
                onBlur={handleBlur}
                changed={handleChange}
                error={errors.password && touched.password && errors.password}
                classDef="mt-2"
              />
            </div>
            <div className="w-full mt-10">
              <FormButton
                disabled={handleDisable(values, isSubmitting)}
                classDef="w-full"
              >
                LOGIN
              </FormButton>
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
  );
};

export default AdminLogin;
