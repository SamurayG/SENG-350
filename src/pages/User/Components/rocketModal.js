import React, { useState } from "react";
import "./Modal.css";
import "../App.css"
import rocket from "../../../assets/clubPictures/rocket.jpg"

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
            uvic.robotics@gmail.com | ELW 302B | Thursdays 3:30 - 5:00pm
            <hr/>
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
            <div className="br"></div>
            <img src={rocket} alt="rocket" className="centerImage"/>
            <button className="close-modal" onClick={toggleModal}>
              <font size="+1">✕</font>
            </button>
          </div>
        </div>
      )}
    </>
  );
}