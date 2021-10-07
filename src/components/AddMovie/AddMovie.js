import React, { useState } from "react";
import { FormGroup } from "react-bootstrap";
import Modal from "react-modal";
import "./AddMovie.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function AddMovie({ AddNewMovie }) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [release_date, setRelease_date] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#000";
    subtitle.style.textAlign = "center";
  }

  function closeModal() {
    setIsOpen(false);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Math.random(),
      title,
      description,
      posterURL,
      release_date,
      category,
      rating: +rating,
    };
    AddNewMovie(newMovie);
    setIsOpen(false);
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRelease_date("");
    setCategory("");
    setRating("");
  };

  return (
    <div>
      <div className="text-center my-3">
        <button onClick={openModal} className="btn btn-secondary">
          Add a new movie
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add a nex Movie</h2>
        <form>
          <FormGroup>
            <label>Enter movie title:</label>
            <input
              type="text"
              name="title"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <label>Enter movie description:</label>
            <textarea
              type="text"
              name="description"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <label>Enter movie imageUrl:</label>
            <input
              type="url"
              name="posterURL"
              value={posterURL}
              required
              onChange={(e) => setPosterURL(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <label>Enter movie release_date:</label>
            <input
              type="date"
              name="release_date"
              value={release_date}
              required
              onChange={(e) => setRelease_date(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <label>Enter movie category:</label>
            <input
              type="text"
              name="category"
              value={category}
              required
              onChange={(e) => setCategory(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <label>Enter movie rating:</label>
            <input
              type="number"
              name="rating"
              value={rating}
              required
              onChange={(e) => setRating(e.target.value)}
            />
          </FormGroup>
          <div className="text-center">
            <button className="btn btn-primary mx-2" onClick={handleSubmit}>
              Submit
            </button>
            <button className="btn btn-danger mx-2" onClick={closeModal}>
              close
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default AddMovie;
