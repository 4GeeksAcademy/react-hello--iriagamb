import React from "react";
import PropTypes from "prop-types"

const Card = (props) => {
  return (
    <div className="card col-xs-6 col-sm-4 col-md-4 col-lg m-2">
      <img
        src={props.imageURL}
        className="card-img-top"
        alt="..."
      ></img>
      <div className="card-body">
        <h4 className="card-title text-center">{props.title}</h4>
        <p className="card-text text-center">
          {props.description}
        </p>
      </div>
      <div className="card-footer text-body-secondary d-flex justify-content-center">
        <a href="#" className="btn btn-primary">
          Find Out More!
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageURL: PropTypes.string,

};

export default Card;