import React from "react";
import ModalOpen from "./ModalOpen";
import ModalClose from "./ModalClose";
import { useGlobalContext } from "../Pages/context";
const Modal = (props) => {
  const { isClosed, isModalShow } = useGlobalContext();

  return (
    <>
      {isModalShow && <ModalOpen province={props.province} />}
      {isClosed && <ModalClose />}
    </>
  );
};

export default Modal;
