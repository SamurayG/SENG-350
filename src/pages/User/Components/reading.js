import React, { useState } from "react";
import "./Modal.css";
import "../App.css"
import book from "../../../assets/clubPictures/book.jpg"

export default function Reading() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  
  return (
    <>
    <button onClick={toggleModal} className="btn-modal">
        Details
      </button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Reading</h2>
            uvic.reading@gmail.com | CLE 120B | Wednesdays 5:00 - 6:30pm
            <hr/>
            <p>
            We are a group of UVic students who are interested 
            in getting together to talk about books that inspire us!
            </p>
            <div className="br"></div>
            <img src={book} alt="book" className="centerImage"/>
            <button className="close-modal" onClick={toggleModal}>
              <font size="+1">✕</font>
            </button>
          </div>
        </div>
      )}
    </>
  );
}