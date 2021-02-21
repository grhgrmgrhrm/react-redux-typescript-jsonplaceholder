import React from "react";
import { useDispatch } from "react-redux";
import { toggleModal } from "./store";
import { User } from "../users/types";

const UserDetails = ({ id, name, username, email, website, street, company }: User) => {
  const dispatch = useDispatch();

  return (
    <div className="user-details shadow-01dp">
      <h5>User Details</h5>
      <ul className="green-blue-list">
        <li className="green-blue-list-item">
          <span className="label listing">Company: </span>
          <span className="listing">
            <b>Company</b>
          </span>
        </li>
        <li className="green-blue-list-item">
          <span className="label listing">Street: </span>
          <span className="listing">
            <b>{street}</b>
          </span>
        </li>
      </ul>
      <button
        onClick={() => dispatch(toggleModal())}
        className="btn-outline btn-md"
      >
        Close
      </button>
    </div>
  );
};

export default UserDetails;
