// components/ButtonSearch.tsx
import { Fragment } from "react";
import Modal from "./Modal";
import ModalItem from "./ModalItem";
import useFoodsContext from "../hooks/useFoodsContext";

function ButtonSearch() {
  const { isOpen, setIsOpen } = useFoodsContext();

  return (
    <Fragment>
      <button
        className="relative w-3xl pl-14 py-3 text-[14px] sm:text-[16px] rounded-full inline-flex cursor-pointer bg-[#f2f2f2] text-[#949cae] dark:bg-[#1e2939]"
        onClick={() => setIsOpen(true)}
      >
        <span className="inline-flex items-center justify-center before:content-[''] absolute left-6 top-3 sm:top-4 before:w-[16px] before:h-[16px] before:bg-[url(/search.svg)]" />
        Pesquisar alimento 
      </button>

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <ModalItem />
        </Modal>
      )}
    </Fragment>
  );
}

export default ButtonSearch;
