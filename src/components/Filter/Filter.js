import { FormControl, Navbar } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import "./Filter.css";

const Filter = ({ setTitleSearch, ratingSearche, setRatingSearche }) => {
  return (
    <Navbar className="navigation d-flex justify-content-between align-items-center p-2 mb-4">
      <Navbar.Brand href="#">Movies App</Navbar.Brand>

      <div className="search">
        <ReactStars
          rating={ratingSearche}
          isHalf={true}
          starRatedColor="#fe0"
          onChange={(newRating) => {
            setRatingSearche(newRating);
          }}
          numberOfStars={5}
          size={40}
          name="rating"
        />

        <FormControl
          type="search"
          placeholder="Search movie by title"
          className="mr-2"
          aria-label="Search"
          onChange={(e) => {
            setTitleSearch(e.target.value);
          }}
        />
      </div>
    </Navbar>
  );
};

export default Filter;
