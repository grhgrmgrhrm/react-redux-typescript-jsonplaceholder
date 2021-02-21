import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { selectModalStatus } from "./store";
import { selectUsers } from "../users/store";
import UserDetails from "./UserDetails";
import "./styles.scss";

const Modal = () => {
  const { currentUser } = useSelector(selectUsers);
  const isOpen = useSelector(selectModalStatus);
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={200}
      classNames="modal-transition"
    >
      <div ref={nodeRef} className={`modal ${isOpen ? "open" : "close"}`}>
        {currentUser && <UserDetails {...currentUser} />}
      </div>
    </CSSTransition>
  );
};

export default Modal;
