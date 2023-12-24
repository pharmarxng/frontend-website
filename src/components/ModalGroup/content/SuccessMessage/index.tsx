import { useModalContext } from "../../../../context/modalContext";
import { CheckSuccessIcon } from "../../../../assets/svg";
import { IModal } from "../../../../utils/interfaces";

const SuccessMessage = () => {
    const { setIsOpenModal } = useModalContext() as IModal;

    return (
        <div className="p-5 min-h-50 bg-white max-w-lg flex flex-col gap-4 justify-center rounded-xl items-center m-auto">
            <CheckSuccessIcon />
            <h1 className="text-[#232325] font-bold text-2xl text-center">Access Granted!</h1>
            <p className="text-[#6f727a] text-lg text-center">
                You have successfully onboarded a new employee
                as an admin into the application.
            </p>
            <button
                className="text-[#2b2b2b] w-full bg-[#fdc300] h-12 rounded-xl mt-6 font-bold"
                onClick={() => setIsOpenModal(false)}
            >Done
            </button>
        </div>
    )
};

export default SuccessMessage;