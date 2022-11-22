import React, { useState } from "react";
import "./Modal.css";
import "../App.css"
import chess from "../../../assets/clubPictures/chess.jpg"

export default function Chess() {
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
            <h2>Chess</h2>
            uvic.chess@gmail.com | BiblioCafé | Thursdays 3:00pm - 6:00pm
            <hr/>
            <p>
            For those interested in playing casual chess at the University of Victoria.
            Every Friday At the BiblioCafé.
            </p>
            <div className="br"></div>
            <img src={chess} alt="chess" className="centerImage"/>
            <button className="close-modal" onClick={toggleModal}>
              <font size="+1">✕</font>
            </button>
          </div>
        </div>
      )}
    </>
  );
}