import React, { useState } from "react";
import 'boxicons/css/boxicons.css';
function SearchBar({getKeyword}) {
  const [search , setSearch] = useState();
  const searchKeyword = (event)=>{
    setSearch(event.target.value);
    getKeyword(event.target.value);

  }


  return (
    <div className="container">
      <div className="card card-search">
      <h1>Search your youtube video</h1>
        <div className="input-group input-group-merge">
          <span className="input-group-text" id="basic-addon-search31">
            <i className="bx bx-search"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            aria-label="Search..."
            aria-describedby="basic-addon-search31"
            onChange={searchKeyword}
            value={search}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
