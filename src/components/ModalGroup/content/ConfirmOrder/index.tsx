import { useModalContext } from 'context/modalContext';
import { CheckSuccessIcon, ErrorIcon } from 'assets/svg';
import { IModal } from 'utils/interfaces';
import { AdminState } from '@context/adminContext';
import { confirmOrderByIdApi } from '@api/admin';
import { AlertState } from '@context/alertContext';
import { useState } from 'react';
import FadeLoader from 'react-spinners/FadeLoader';
import Button from '@components/Button';

type ConfirmOrderProps = {
  type: 'cancel' | 'confirm';
};

const ConfirmOrder = ({ type }: ConfirmOrderProps) => {
  const { setIsOpenModal } = useModalContext() as IModal;
  const {
    adminDispatch,
    adminState: { order },
  } = AdminState();
  const { alertDispatch } = AlertState();
  const [loading, setLoading] = useState<boolean>(false);

  const handleOrderConfirmation = async (value: {
    id: string;
    confirm?: boolean;
  }) => {
    try {
      setLoading(true);
      const response = await confirmOrderByIdApi(
        { ...value },
        adminDispatch,
        alertDispatch
      );
      if (!response) {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      console.error('Error fetching order:', error);
    } finally {
      setLoading(false);
      setIsOpenModal(false);
    }
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center mt-10">
          <FadeLoader
            color={'#2D547B'}
            loading={loading}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="p-5 min-h-50 bg-white max-w-lg flex flex-col gap-4 justify-center rounded-xl items-center m-auto">
          {type === 'confirm' ? <CheckSuccessIcon /> : <ErrorIcon />}
          <p className="text-[#6f727a] text-lg text-center">
            {`Are you sure you want to ${type === 'confirm' ? 'confirm' : 'cancel'} this order?`}
          </p>
          <Button
            buttonStyle="text-[#2b2b2b] w-full bg-[#fdc300] h-12 rounded-xl mt-6 font-bold"
            onclick={() =>
              handleOrderConfirmation({
                id: order.id,
                confirm: type === 'confirm' ? true : false,
              })
            }
          >
            {type === 'confirm' ? 'Confirm' : 'Cancel'}
          </Button>
        </div>
      )}
    </>
  );
};

export default ConfirmOrder;
