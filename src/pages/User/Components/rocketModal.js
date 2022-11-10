import React, { useState } from "react";
import "./Modal.css";
import "../App.css"

export default function RocketryModal() {
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
            <h2>Rocketry</h2>
            <p>
            The UVic Rocketry Team is a student-led group at the University of 
            Victoria that designs and builds competitive sounding rockets. We participate 
            the annual Spaceport America Cup (SA Cup), located at the world’s 
            first purpose-built commercial spaceport located in southern New Mexico, 
            United States. At the SA Cup 2016, the team earned 3rd place out of 40 teams 
            in the Basic category. Additionally, the team placed 1st in the Space Dynamic 
            Laboratory (SDL) Payload Challenge, launching a 4.54 kg (10 lb) payload to 3.57 km 
            (11,702 ft) above ground level. At the SA Cup 2018, we received an honorable 
            mention in the SDL Payload Challenge. At the first Launch Canada event, the 
            team came in 2nd in the basic category.

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