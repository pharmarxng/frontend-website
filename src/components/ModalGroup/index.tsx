import { useModalContext } from 'context/modalContext';
import Modal from 'react-modal';
import { IModal } from 'utils/interfaces';

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

const ModalGroup = () => {
    const { content, isOpenModal } = useModalContext() as IModal;

    return (
        <Modal
            isOpen={isOpenModal}
            style={customStyles}
            className=''
        >
            {content}
        </Modal>
    )
}

export default ModalGroup;