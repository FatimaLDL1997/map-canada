import React from "react";
import ModalOpen from "./ModalOpen";
import ModalClose from "./ModalClose";
import { useGlobalContext } from "../Pages/context";
const Modal = (props) => {
  const { isClosed, isModalShow, scroll } = useGlobalContext();
  // const x = props.showModal;
  // const province = props.province;
  // const select = false;

  return (
    <>
      {isModalShow && <ModalOpen province={props.province} />}
      {isClosed && <ModalClose />}
    </>
  );
};

export default Modal;
