import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-example navbar-expand-lg navbar-light bg-light">
      <div className="container">
          <a className="navbar-brand" href="/">
            Youtube Search
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-ex-2"
            aria-controls="navbar-ex-2"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-ex-2">
            <div className="navbar-nav me-auto">
              <a className="nav-item nav-link active" href="/">
                Home
              </a>
              <a className="nav-item nav-link" href="/">
                About
              </a>
              <a className="nav-item nav-link" href="/">
                Contact
              </a>
            </div>

            <span className="navbar-text">
              Search your videos and we found it
            </span>
          </div>
        </div>
    
    </nav>
  );
}

export default Navbar;
