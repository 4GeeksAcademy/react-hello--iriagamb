import React from "react";

const NavBar = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-secondary bg-dark">
          <div className="container-fluid d-flex justify-content-between">
  
            <div>
              <a className="navbar-brand text-white mx-4" href="#">
                Start Bootsrap
              </a>
            </div>
  
            <div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars text-white"></i>
            </button>
  
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link active text-white"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled text-white"
                    aria-disabled="true"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            </div>
          </div>
        </nav>
      </div>
    );
  };
  export default NavBar;