import { PageWrapper, Table } from "components";
import { TableConfig } from "./TableConfig";
import { data } from "./static";
import { PlusIcon } from "assets/svg";
import { AddUser } from "components/ModalGroup/content";
import { useModalContext } from "context/modalContext";
import { IModal } from "utils/interfaces";
import { ReactNode } from "react";


const Panel = (): JSX.Element => {

  const { setContent, setIsOpenModal } = useModalContext() as IModal;

  function showModal(content: ReactNode): void {
    setIsOpenModal(true);
    setContent(content);
  };

  return (
    <PageWrapper>
      <div className="flex-1 min-h-screen p-6 lg:p-12">
        <header className="flex flex-row justify-between mb-7 items-center">
          <h2 className="text-2xl text-[#292929] font-bold">Administrative Panel</h2>
          <button
            onClick={() => showModal(<AddUser />)}
            className="capitalize flex flex-row items-center gap-3 bg-white br-2 text-[#2b2b2b] font-bold p-4 text-base rounded-xl">
            <PlusIcon />
            Add new user
          </button>
        </header>

        <Table
          config={TableConfig(data, showModal)}
        />
      </div>

    </PageWrapper>
  )
};

export default Panel;