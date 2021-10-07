import React from "react";
import "./MovieCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const MovieCard = ({
  movie: { title, description, posterURL, release_date, category, rating },
}) => {
  return (
    <div className="col-md-3">
      <div className="card movie mb-3">
        <img src={posterURL} className="card-img-top" alt={title} />
        <div className="card-body">
          <div className="movie-info d-flex align-items-center justify-content-between">
            <h3>{title}</h3>
            {/*<span className="green">{release_date}</span>*/}
          </div>
          <div className="rate">
            <FontAwesomeIcon icon={faStar} className="iconSatr" />
            <span>{rating}</span>
          </div>
        </div>
        <div className="overview">
          <h3>Overview</h3>
          {description}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
