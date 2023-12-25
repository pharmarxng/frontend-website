import { useModalContext } from "context/modalContext";
import { CheckSuccessIcon } from "assets/svg";
import { IModal } from "utils/interfaces";

const DeleteAdmin = ({ id }: { id: number }): JSX.Element => {
    const { setIsOpenModal } = useModalContext() as IModal;

    function deleteUser(): void {
        // async api call using id
        console.log('deleted user', id)
        setIsOpenModal(false);
    }

    return (
        <div className="p-5 min-h-50 bg-white max-w-lg flex flex-col gap-4 justify-center rounded-xl items-center m-auto">
            <CheckSuccessIcon />
            <h1 className="text-[#232325] font-bold text-2xl text-center">Delete Admin?</h1>
            <p className="text-[#6f727a] text-lg text-center">
                Clicking the proceed button will deny admin access to the entire system.
            </p>
            <button
                className="text-[#2b2b2b] w-full bg-[#fdc300] h-12 rounded-xl mt-6 font-bold"
                onClick={() => deleteUser()}
            >
                Proceed
            </button>
        </div>
    )
};

export default DeleteAdmin;