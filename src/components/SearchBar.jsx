import React from "react";
import 'boxicons/css/boxicons.css';
function SearchBar() {
  return (
    <div className="container">
      <div className="card card-search">
      <h1>Search your youtube video</h1>
        <div className="input-group input-group-merge">
          <span className="input-group-text" id="basic-addon-search31">
            <i class="bx bx-search"></i>
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Search..."
            aria-label="Search..."
            aria-describedby="basic-addon-search31"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
