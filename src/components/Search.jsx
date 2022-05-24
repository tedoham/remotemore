import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function Search({ username, setUsername, submitHandler }) {
  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="search_container">
      <h2 className="search_title">Github username</h2>
      <div className="search">
        <input
          placeholder="search..."
          type="text"
          value={username}
          onChange={(e) => onChangeHandler(e)}
        />
        <button type="button" onClick={(e) => submitHandler(e)}>
          <AiOutlineSearch />
        </button>
      </div>
    </div>
  );
}

export default Search;
