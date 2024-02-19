import { useModalContext } from 'context/modalContext';
import { ICategory, IModal, IProducts } from 'utils/interfaces';
import { string, object, number, boolean } from 'yup';
import { Formik } from 'formik';
import { Label, Input } from 'components';
import { AdminState } from '@context/adminContext';
import axios from '@axios/axios';
import { getItem } from '@utils/auth';
import { AlertState } from '@context/alertContext';
import { FadeLoader } from 'react-spinners';
import FormButton from '@components/FormButton';
import { useState } from 'react';
import Button from '@components/Button';

type InputType = {
  name: string;
  description: string;
  image: string;
  noOfUnitsAvailable: number;
  price: number;
  purchasable: true;
  rating: number;
  categoryId: string;
  inStock: true;
};

const adminAuth = getItem('adminAuth');

const AddOrEditProduct = ({ prod }: { prod?: IProducts }): JSX.Element => {
  const { setIsOpenModal } = useModalContext() as IModal;
  const {
    adminState: { categories },
  } = AdminState();
  const { alertDispatch } = AlertState();
  const [loading, setLoading] = useState<boolean>(false);

  const formField = [
    { type: 'text', name: 'name', label: 'Product Name' },
    { type: 'text', name: 'description', label: 'Product Description' },
    { type: 'text', name: 'image', label: 'Product Image' },
    {
      type: 'number',
      name: 'noOfUnitsAvailable',
      label: 'No of Units Available',
    },
    { type: 'number', name: 'price', label: 'Price' },
    {
      type: 'dropdown',
      name: 'purchasable',
      label: 'Purchasable',
      options: [
        { label: 'True', value: true },
        { label: 'False', value: false },
      ],
    },
    { type: 'number', name: 'rating', label: 'Rating' },
    {
      type: 'dropdown',
      name: 'categoryId',
      label: 'Category',
      options: categories.map((category: ICategory) => {
        return {
          label: category.name,
          value: category.id,
        };
      }),
    },
    {
      type: 'dropdown',
      name: 'inStock',
      label: 'In Stock',
      options: [
        { label: 'True', value: true },
        { label: 'False', value: false },
      ],
    },
  ];

  const initialValues = {
    name: prod ? prod.name : '',
    description: prod ? prod.description : '',
    image: prod ? prod.image : '',
    noOfUnitsAvailable: prod ? prod.noOfUnitsAvailable : 0,
    price: prod ? prod.price : 0,
    purchasable: prod ? prod.purchasable : true,
    rating: prod ? prod.rating : 4,
    categoryId: prod ? prod.category : categories[0].id,
    inStock: prod ? prod.inStock : true,
  };

  const validationSchema = object({
    description: string().required('Please enter product description'),
    name: string().required('Please enter product name'),
    image: string().required('Please enter product image'),
    noOfUnitsAvailable: number().required('Please enter no of units available'),
    price: number().required('Please enter product price'),
    purchasable: boolean(),
    rating: number(),
    categoryId: string().required('Please select a valid category'),
    inStock: boolean(),
  });

  const handleDisable = (
    values: typeof initialValues,
    isSubmitting: boolean
  ) => {
    if (prod) {
      return false;
    }

    return (
      isSubmitting ||
      values.name?.length === 0 ||
      values.description?.length === 0 ||
      values.price <= 0 ||
      values.image?.length === 0 ||
      values.categoryId?.length === 0
    );
  };

  const handleProductDelete = async (id: string) => {
    try {
      setLoading(true);

      await axios.delete(`/api/v1/admin/delete-product/${id}`, {
        headers: {
          Authorization: `Bearer ${adminAuth.accessToken}`,
        },
      });

      alertDispatch({
        type: 'ALERT_INFO',
        payload: 'Product deleted successfully',
      });
      setIsOpenModal(false);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response) {
        alertDispatch({
          type: 'ALERT_ERROR',
          payload: error.response.data.message,
        });
      } else {
        alertDispatch({
          type: 'ALERT_ERROR',
          payload: 'An error occurred.',
        });
      }
      setLoading(false);
    }
  };

  return (
    <div className="py-5 px-8 h-[500px] overflow-y-scroll bg-white w-[600px] flex flex-col gap-2 justify-start rounded-xl items-start m-auto">
      <h1 className="text-[#232325] font-bold text-lg text-left">
        {`${prod ? 'Edit' : 'Add'} Product`}
      </h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          // POST API request
          try {
            setSubmitting(true);
            setLoading(true);

            if (prod) {
              await axios.patch(
                `/api/v1/admin/edit-product/${prod.id}`,
                { ...values },
                {
                  headers: {
                    Authorization: `Bearer ${adminAuth.accessToken}`,
                  },
                }
              );
            } else {
              await axios.post(
                '/api/v1/admin/create-product',
                { ...values },
                {
                  headers: {
                    Authorization: `Bearer ${adminAuth.accessToken}`,
                  },
                }
              );
            }
            alertDispatch({
              type: 'ALERT_SUCCESS',
              payload: 'Product created successfully',
            });
            setIsOpenModal(false);

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } catch (error: any) {
            if (error.response) {
              alertDispatch({
                type: 'ALERT_ERROR',
                payload: error.response.data.message,
              });
            } else {
              alertDispatch({
                type: 'ALERT_ERROR',
                payload: 'An error occurred.',
              });
            }
            setSubmitting(false);
            setLoading(false);
          }
        }}
      >
        {({
          handleSubmit,
          values,
          handleChange,
          handleBlur,
          errors,
          touched,
          isSubmitting,
        }) => {
          return (
            <div className="w-full">
              {loading ? (
                <div className="flex justify-center pt-[60px]">
                  <FadeLoader
                    color={'#2D547B'}
                    loading={isSubmitting}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="w-full flex flex-col gap-2"
                >
                  {formField.map((field, index) => {
                    if (field.type === 'dropdown') {
                      return (
                        <div key={index}>
                          <Label
                            label={field.label}
                            classDef="text-xs text-[#3f6387]"
                          />
                          <div className="relative">
                            <select
                              className="text-black border-gray-200 border rounded-lg pl-4 py-3 w-full dark:bg-white my-4 appearance-none"
                              key={index}
                              name={field.name}
                              id={field.name}
                              value={
                                values[
                                  field.name as keyof InputType
                                ] as keyof InputType
                              }
                              onChange={handleChange}
                            >
                              {field.options.map(
                                (
                                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                  option: { label: string; value: any },
                                  index: number
                                ) => {
                                  return (
                                    <option key={index} value={option.value}>
                                      {option.label}
                                    </option>
                                  );
                                }
                              )}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                              <svg
                                className="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 12.586l4.293-4.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 12.586z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      );
                    }
                    return (
                      <div key={index}>
                        <Label
                          label={field.label}
                          classDef="text-xs text-[#3f6387]"
                        />
                        <Input
                          name={field.name}
                          type={field.type}
                          value={
                            values[
                              field.name as keyof InputType
                            ] as keyof InputType
                          }
                          changed={handleChange}
                          onBlur={handleBlur}
                          classDef="my-4 pr-4"
                          error={
                            (errors[
                              field.name as keyof InputType
                            ] as keyof InputType) &&
                            (touched[
                              field.name as keyof InputType
                            ] as unknown as keyof InputType) &&
                            (errors[
                              field.name as keyof InputType
                            ] as keyof InputType)
                          }
                        />
                      </div>
                    );
                  })}
                  <div className="flex gap-2">
                    {prod && (
                      <Button
                        onclick={() => handleProductDelete(prod.id)}
                        buttonStyle="w-full bg-red-600 hover:bg-red-400 text-white rounded-lg"
                      >
                        {`Delete Product`}
                      </Button>
                    )}
                    <FormButton
                      disabled={handleDisable(values, isSubmitting)}
                      classDef="w-full bg-deepBlue-100 "
                    >
                      {`${prod ? 'Edit' : 'Add'} Product`}
                    </FormButton>
                  </div>
                </form>
              )}
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default AddOrEditProduct;
