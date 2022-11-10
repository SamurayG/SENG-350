import React, { useState } from "react";
import "./Modal.css";
import "../App.css"

export default function Dance() {
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
            <h2>Dancing</h2>
            <p>
            Welcome to the UVic Ballroom, Latin, and Swing Club (UVBLSC)! 
            As a Vikes Rec Club, we believe that ballroom dancing improves 
            physical and social wellbeing and enhances quality of life! We 
            offer lessons not only in Standard Ballroom (like waltz, foxtrot, 
            and tango), but also Latin Ballroom, East Coast Swing, Salsa, 
            Merengue and Bachata. You don’t need a partner or any dance experience 
            (having two left feet is fine), just show up and get ready to have fun, 
            meet new people, and, of course, learn how to dance!.
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