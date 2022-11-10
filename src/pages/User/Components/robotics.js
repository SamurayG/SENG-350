import React, { useState } from "react";
import "./Modal.css";
import "../App.css"

export default function Robotics() {
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
            <h2>Robotics</h2>
            <p>
            The UVic Robotics Club comprises of undergraduate students from a 
            variety of backgrounds – engineering, computer science, business, 
            & more. We design, build, and program all things robotics. The clubs 
            current goal is to build a rover to compete in the 2021 Canadian 
            International Rover Challenge (CIRC).  We welcome all those interested, 
            whatever the current skill set.
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