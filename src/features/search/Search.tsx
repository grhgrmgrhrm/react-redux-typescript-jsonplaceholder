import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateKeyword, selectKeyword } from "./store";

import "./styles.scss";

const Search = () => {
  const keyword = useSelector(selectKeyword);
  const dispatch = useDispatch();
  return (
    <div className="search">
      <h5>Search</h5>
      <input
        className="input-primary input-md"
        placeholder="Search by name"
        value={keyword}
        onChange={(e) => dispatch(updateKeyword(e.target.value))}
      />
    </div>
  );
};

export default Search;
