import React, { useState } from "react";
import "./Modal.css";
import "../App.css"
import basketball from "../../../assets/clubPictures/basketball.png"

export default function Basketball() {
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
            <h2>Basketball</h2>
            uvic.basketball@gmail.com | CARSA Gym 1 | Tuesdays 7:00pm - 10:00pm
            <hr/>
            <p>
            A group of Ballers plaing every Tuesday night at 6pm, Carsa. 
            Come join us for some scrimmage games!
            </p>
            <div className="br"></div>
            <img src={basketball} alt="basketball" className="centerImage"/>
            <button className="close-modal" onClick={toggleModal}>
              <font size="+1">✕</font>
            </button>
          </div>
        </div>
      )}
    </>
  );
}