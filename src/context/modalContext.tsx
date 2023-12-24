import { ReactNode, createContext, useContext, useState } from "react";
import { IContextProps, IModal } from '../utils/interfaces';

const ModalContext = createContext({} as IModal);

const ModalContextProvider = ({children}: IContextProps) => {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [content, setContent] = useState<ReactNode>('');

    return (
        <ModalContext.Provider value={{isOpenModal, setIsOpenModal, content, setContent}}>
            {children}
        </ModalContext.Provider>
    )
};

export const useModalContext = () => useContext(ModalContext);

export default ModalContextProvider;
