import Label from './Label';
import Input from './Input';
import { openWhatsapp } from '../utils/whatsapp';
import { Formik } from 'formik';
import FormButton from './FormButton';

const OnlinePharmacyForm = () => {
  const initialState = {
    symptom: '',
    location: '',
  };

  const validate = (values: typeof initialState) => {
    const errors: {
      symptom?: string;
      location?: string;
    } = {};
    if (!values.symptom) {
      errors.symptom = 'Required';
    } else if (values.symptom.length < 1) {
      errors.symptom = 'Must be a valid symptom';
    }

    if (!values.location) {
      errors.location = 'Required';
    } else if (values.location.length < 1) {
      errors.location = 'Must be a valid location';
    }

    return errors;
  };

  const handleDisable = (
    values: typeof initialState,
    isSubmitting: boolean
  ) => {
    return (
      isSubmitting ||
      values.symptom?.length === 0 ||
      values.location?.length === 0
    );
  };

  return (
    <div className="bg-white text-black rounded-lg p-10 md:px-8 md:py-7 shadow-md my-5 md:my-0">
      <div className="text-xl/6 md:text-2xl/8 font-bold mb-2">
        Chat with a Pharmacist
      </div>
      <div className="text-base/5 md:text-xl/6 mb-7">
        All fields are required
      </div>
      <Formik
        initialValues={initialState}
        validate={validate}
        onSubmit={(values, { resetForm }) => {
          const message = `Hi Pharmarx, I have been having the symptoms: ${values.symptom}. I am currently at ${values.location}.`;
          openWhatsapp(message);
          resetForm({ values: initialState });
        }}
      >
        {({ values, handleChange, handleSubmit, handleBlur, isSubmitting }) => (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0"
          >
            <div className="mr-7 flex flex-col justify-between">
              <Label label="Type a symptom or condition" />
              <Input
                placeholder="Severe Headache"
                name="symptom"
                type="text"
                value={values.symptom}
                changed={handleChange}
                onBlur={handleBlur}
                classDef="mt-2"
              />
            </div>
            <div className="mr-7 flex flex-col justify-between">
              <Label label="Tell us a location" />
              <Input
                placeholder="Lagos Island"
                name="location"
                type="text"
                value={values.location}
                changed={handleChange}
                onBlur={handleBlur}
                classDef="mt-2"
              />
            </div>
            <div className="flex items-end">
              <FormButton disabled={handleDisable(values, isSubmitting)}>
                Chat with a pharmacist
              </FormButton>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default OnlinePharmacyForm;
