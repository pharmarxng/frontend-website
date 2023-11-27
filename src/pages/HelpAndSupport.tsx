import Input from '../components/Input';
import Navbar from '../components/Navbar';
import PaddedWrapper from '../components/PaddedWrapper';
import Footer from '../components/blocks/Footer';
import Label from '../components/Label';
import { Formik } from 'formik';
import { openWhatsapp } from '../utils/whatsapp';
import FormButton from '../components/FormButton';
import TextAreaInput from '../components/TextAreaInput';

const HelpAndSupport = () => {
  const initialState = {
    fullName: '',
    email: '',
    phone: '',
    enquiries: '',
  };

  const validate = (values: typeof initialState) => {
    const errors: {
      fullName?: string;
      email?: string;
      phone?: string;
      enquiries?: string;
    } = {};
    if (!values.fullName) {
      errors.fullName = 'Required';
    } else if (values.fullName.length < 2) {
      errors.fullName = 'Must be a valid fullName';
    }

    if (!values.phone) {
      errors.phone = 'Required';
    } else if (values.phone?.length < 8) {
      errors.phone =
        'Invalid phone number format try this format +234 81x xxx xxx x';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    if (values.enquiries && values.enquiries.length < 3) {
      errors.enquiries = 'Must be at least 3 characters long ';
    }

    return errors;
  };

  const handleDisable = (
    values: typeof initialState,
    isSubmitting: boolean
  ) => {
    return (
      isSubmitting ||
      values.fullName?.length < 2 ||
      values.email?.length === 0 ||
      values.phone?.length === 0 ||
      values.enquiries?.length < 3
    );
  };

  return (
    <div className="bg-white text-black">
      <Navbar />
      <PaddedWrapper>
        <div className="pt-7 flex justify-center">
          <div className="gap-8 flex w-[343px] md:w-[706px] flex-col justify-between md:border border-greyBorder-200 rounded-lg md:p-5">
            <div className="font-normal text-lg/5 md:text-2xl/7 self-start md:p-4">
              How can we be of help?
            </div>

            <Formik
              initialValues={initialState}
              validate={validate}
              onSubmit={(values, { resetForm }) => {
                const message = `Hi Pharmarx, My name, email and phone numbers are: ${values.fullName}, ${values.email} and ${values.phone}. I want to enquire about ${values.enquiries}.`;
                openWhatsapp(message);
                resetForm({ values: initialState });
              }}
            >
              {({
                values,
                handleChange,
                handleSubmit,
                handleBlur,
                isSubmitting,
              }) => (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col px-4 space-y-4"
                >
                  <div>
                    <Label label="Full Name" />
                    <Input
                      name="fullName"
                      type="text"
                      value={values.fullName}
                      changed={handleChange}
                      onBlur={handleBlur}
                      classDef="mt-2 border-[2px]"
                    />
                  </div>

                  <div>
                    <Label label="Email" />
                    <Input
                      name="email"
                      type="text"
                      value={values.email}
                      changed={handleChange}
                      onBlur={handleBlur}
                      classDef="mt-2 border-[2px]"
                    />
                  </div>

                  <div>
                    <Label label="Phone Number" />
                    <Input
                      name="phone"
                      type="text"
                      value={values.phone}
                      changed={handleChange}
                      onBlur={handleBlur}
                      classDef="mt-2 border-[2px]"
                    />
                  </div>

                  <div>
                    <Label label="Equiries" />
                    <TextAreaInput
                      name="enquiries"
                      value={values.enquiries}
                      changed={handleChange}
                      onBlur={handleBlur}
                      classDef="mt-2 border-[2px] w-full"
                    />
                  </div>
                  <FormButton disabled={handleDisable(values, isSubmitting)}>
                    SEND
                  </FormButton>
                </form>
              )}
            </Formik>
          </div>
        </div>
        <Footer />
      </PaddedWrapper>
    </div>
  );
};

export default HelpAndSupport;
