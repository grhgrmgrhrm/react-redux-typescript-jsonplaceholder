import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { fetchUsers, filterUsers, selectUsers } from "./store";
import { selectKeyword } from "../search/store";
import ListItem from "./ListItem";

import "./styles.scss";

const UserList = () => {
  const { filteredUsers, loading } = useSelector(selectUsers);
  const keyword = useSelector(selectKeyword);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(filterUsers());
  }, [keyword, dispatch]);

  const LoadingSection = (
    <CSSTransition timeout={400} classNames="fade">
      <div className="loading listing">Loading users...</div>
    </CSSTransition>
  );

  const NoResultsSection = (
    <CSSTransition timeout={400} classNames="animate">
      <div className="no-result listing">No results</div>
    </CSSTransition>
  );

  const List = (
            <TransitionGroup>
                {filteredUsers.map((user, index) => (
                  <CSSTransition key={user.id} timeout={400} classNames="fade">
                    <ListItem key={user.id} {...user} />
                  </CSSTransition>
                ))}
            </TransitionGroup>
  );

    // const ListTable = (
    //     <div className="table-responsive">
    //         <table className="table">
    //             <thead>
    //             <tr>
    //                 <th>Name</th>
    //                 <th>Username</th>
    //                 <th>Email</th>
    //             </tr>
    //             </thead>
    //             <tbody>
    //             {filteredUsers.map((user, index) => (
    //                 // <TableItem key={user.id} {...user}></TableItem>
    //                     <tr>
    //                         <td>{user.name}</td>
    //                         <td>{user.username}</td>
    //                         <td>{user.email}</td>
    //                     </tr>
    //             ))}
    //             </tbody>
    //         </table>
    //     </div>
    //
    // );

  return (
    <>
        <div className="user-list">
        <h5>Results in List</h5>
        {loading
            ? LoadingSection
            : filteredUsers.length > 0
                ? List
                : NoResultsSection}
        </div>
        {/*<div className="user-listTable">*/}
        {/*    <h5>Results in Table</h5>*/}
        {/*    {loading*/}
        {/*        ? LoadingSection*/}
        {/*        : filteredUsers.length > 0*/}
        {/*            ? ListTable*/}
        {/*            : NoResultsSection}*/}
        {/*</div>*/}
    </>
  );
};

export default UserList;
