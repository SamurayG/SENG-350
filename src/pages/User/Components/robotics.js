import React, { useState } from "react";
import "./Modal.css";
import "../App.css"
import robot from "../../../assets/clubPictures/robot.png"

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
          uvic.robotics@gmail.com | ELW 302B | Thursdays 3:30 - 5:00pm
          <hr/>
            <p>
            The UVic Robotics Club comprises of undergraduate students from a 
            variety of backgrounds – engineering, computer science, business, 
            & more. We design, build, and program all things robotics. The clubs 
            current goal is to build a rover to compete in the 2021 Canadian 
            International Rover Challenge (CIRC).  We welcome all those interested, 
            whatever the current skill set.
            </p>
            <div className="br"></div>
            <img src={robot} alt="robot" />
            <button className="close-modal" onClick={toggleModal}>
              <font size="+1">✕</font>
            </button>
          </div>
        </div>
      )}
    </>
  );
}