import { useModalContext } from '../../context/modalContext';
import Modal from 'react-modal';
import { IModal } from '../../utils/interfaces';
import { CloseIcon } from '../../assets/svg';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
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
      <CloseIcon onClick={() => setIsOpenModal(false)} />
      {content}
    </Modal>
  )
}

export default ModalGroup;