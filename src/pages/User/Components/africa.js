import React, { useState } from "react";
import "./Modal.css";
import "../App.css"
import acsa from "../../../assets/clubPictures/acsa.png"

export default function Africa() {
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
            <h2>African & Caribbean Association</h2>
            uvicacsa@gmail.com | CLE 200A | Fridays 6:00pm - 9:30pm
            <hr/>
            <p>
            A University of Victoria association that aims to increase cultural awareness and community unity 🌍
            </p>
            <div className="br"></div>
            <img src={acsa} alt="acsa" className="centerImage"/>
            <button className="close-modal" onClick={toggleModal}>
              <font size="+1">✕</font>
            </button>
          </div>
        </div>
      )}
    </>
  );
}