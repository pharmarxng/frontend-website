import { useModalContext } from 'context/modalContext';
import Modal from 'react-modal';
import { IModal } from 'utils/interfaces';
import { CloseIcon } from 'assets/svg';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '10',
    transition: 'opacity 1s ease-in 0s',
    border: 'none',
    background: 'transparent'
  },
};

Modal.setAppElement('#root');

const ModalGroup = () => {
  const { content, isOpenModal, setIsOpenModal } = useModalContext() as IModal;

  return (
    <Modal
      isOpen={isOpenModal}
      style={customStyles}
      className=''
    >

      <div className='relative'>
        <CloseIcon
          className='absolute right-4 top-4 w-4 h-4 cursor-pointer'
          onClick={() => setIsOpenModal(false)}
        />
        {content}
      </div>
    </Modal>
  )
}

export default ModalGroup;