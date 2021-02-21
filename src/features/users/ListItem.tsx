import React from "react";
import { useDispatch } from "react-redux";
import { updateCurrentUser } from "./store";
import { toggleModal } from "../modal/store";
import { ListUser } from "./types";

const ListItem = ({ id, name, username, email }: ListUser) => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(updateCurrentUser(id));
    dispatch(toggleModal());
  };

  return (

        <ul>
            <li className="list-style-first">
                <div onClick={openModal}> {/* по клику на пользователя вызывается модальное окно */}
                    <h5>Name: {name}</h5>
                </div>
            </li>
            <li>
                Username: <strong>{username}</strong>
            </li>
            <li>
                Email:  <strong>{email}</strong>
            </li>
        </ul>

  );
};

export default ListItem;
