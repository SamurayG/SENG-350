import React, { useState } from "react";
import "./Modal.css";
import "../App.css"

export default function Soccer() {
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
            <h2>Soccer</h2>
            <p>
            Monday nights is a co-ed 7 aside soccer league wtih small nets 
            and a smaller field and teams must have one member of the opposite 
            gender on the field at all times. Tuesday nights is 11 aside co-ed 
            league that must have a minimum of 2 members of the oppoosite gender 
            on the field at all times. 
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}