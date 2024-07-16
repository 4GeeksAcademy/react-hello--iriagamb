import React from "react";

const Header = () => {
    return(
        <div className="container bg-secondary mt-4">
      <div className="py-5 container">
        <div className="container">
          <div className="d-flex justify-content-start fs-3">
            <h1>A Warm Welcome!</h1>
          </div>
          <div className="d-flex justify-content-start">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <button className="btn btn-primary d-flex justify-content-start">
                Call to action!
            </button>
      </div>
    </div>
    );
};
export default Header;