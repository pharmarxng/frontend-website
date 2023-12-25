import { Formik } from "formik";
import { Label, Input } from "../../../../components";
import { useModalContext } from "../../../../context/modalContext";
import { IModal } from "../../../../utils/interfaces";
import { string, object } from 'yup';
import { CheckCircleIcon } from "../../../../assets/svg";

const AddUser = () => {
    const { setIsOpenModal } = useModalContext() as IModal;

    const initialValues = {
        owner: 'Pharmx',
        name: '',
        email: ''
    };

    const validationSchema = object({
        owner: string().required('Please enter owner'),
        name: string().required('Please enter full name'),
        email: string().email('Please enter a valid email').required('Please enter email')
    });

    return (
        <div className="p-5 min-h-100 bg-white max-w-sm flex flex-col gap-2 justify-start rounded-xl items-start m-auto">
            <h1 className="text-[#232325] font-bold text-lg text-left">Add new user</h1>
            <p className="text-[#6f727a] text-sm text-left">
                By adding a new user, you are giving them permission to make changes
            </p>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={values => {
                    console.log('Values:', values)
                    // POST API request
                    setIsOpenModal(false);
                }}
            >
                {({ handleSubmit, values, handleChange, handleBlur, errors }) => (
                    <form onSubmit={handleSubmit} className="w-full">
                        <Label label="read carefully" classDef="uppercase text-xs text-[#3f6387]" />
                        <Input
                            name="owner"
                            type="text"
                            value={values.owner}
                            changed={handleChange}
                            onBlur={handleBlur}
                            classDef="my-4"
                            error={errors.owner}
                            endDecorator={<CheckCircleIcon className="my-auto" />}
                        />

                        <Label label="full name" classDef="uppercase text-xs text-[#3f6387]" />
                        <Input
                            name="name"
                            type="text"
                            value={values.name}
                            changed={handleChange}
                            onBlur={handleBlur}
                            classDef="my-4"
                            error={errors.name}
                        />

                        <Label label="email" classDef="uppercase text-xs text-[#3f6387]" />
                        <Input
                            name="email"
                            type="email"
                            value={values.email}
                            changed={handleChange}
                            onBlur={handleBlur}
                            classDef="my-4"
                            error={errors.email}
                        />

                        <button
                            type="submit"
                            className="text-[#2b2b2b] text-base w-full bg-[#fdc300] h-12 mx-auto rounded-xl mt-6 font-bold"
                        >Add User
                        </button>
                    </form>
                )}
            </Formik>


        </div>
    )
};

export default AddUser;