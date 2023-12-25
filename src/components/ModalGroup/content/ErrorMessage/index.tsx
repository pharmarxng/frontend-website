import { useModalContext } from "../../../../context/modalContext";
import { ErrorIcon } from "../../../../assets/svg";
import { IModal } from "../../../../utils/interfaces";
import { AddUser } from "..";

const ErrorMessage = () => {
    const { setContent } = useModalContext() as IModal;


    return (
        <div className="p-5 min-h-50 bg-white max-w-lg flex flex-col gap-4 justify-center rounded-xl items-center m-auto">
            <ErrorIcon />
            <h1 className="text-[#232325] font-bold text-2xl text-center">Access Denied!</h1>
            <p className="text-[#6f727a] text-lg text-center">
                You have unsuccessfully onboarded a new employee
                as an admin into the application.
            </p>
            <button
                className="text-[#2b2b2b] w-full bg-[#fdc300] h-12 rounded-xl mt-6 font-bold"
                onClick={() => setContent(<AddUser />)}
            >Try again
            </button>
        </div>
    )
};

export default ErrorMessage;