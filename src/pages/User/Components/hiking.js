import React, { useState } from "react";
import "./Modal.css";
import "../App.css"
import hiking from "../../../assets/clubPictures/hiking.jpg"

export default function Hiking() {
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
            <h2>Hiking</h2>
            uvic.hikings@gmail.com | BiblioCafé | Tuesdays 4:00pm - 4:30pm
            <hr/>
            <p>
            The University of Victoria Outdoors Club (ODC) is a student-run 
            club of outdoor enthusiasts. We enjoy hiking, backpacking, snowshoeing, 
            bike-touring, camping, paddling, rock-climbing, and all manners of 
            self-propelled adventure. <br/><br/>

            We are excited to return to leading trips this term that will meet BC Provincial 
            Health Orders and the updated UVIC communicable disease policy. If you are new 
            to Victoria looking to explore all the island has to offer, or a local just 
            looking to share some of your favorite spots with others connect with UVIC 
            Outdoors club execs to learn more about what we are planning! 
            </p>
            <div className="br"></div>
            <img src={hiking} alt="hiking" className="centerImage"/>
            <button className="close-modal" onClick={toggleModal}>
              <font size="+1">✕</font>
            </button>
          </div>
        </div>
      )}
    </>
  );
}