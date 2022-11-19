import React, { useState } from "react";
import "./Modal.css";
import "../App.css"
import dog from "../../../assets/clubPictures/dog.png"

export default function Dog() {
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
            <h2>Dogs</h2>
            uvic.robotics@gmail.com | ELW 302B | Thursdays 3:30 - 5:00pm
            <hr/>
            <p>
            Dogs are highly social animals who enjoy the company of other canines. 
            They also like being active and having something to do. Many of today’s 
            dogs are lucky enough to be treated as family members and don’t have to 
            work like their ancestors did, but spending a lot of time at home often 
            leaves them bored. Lack of socialization and boredom can lead to health 
            and behavioral problems, but for many dogs, hanging out with other canines 
            on a regular basis can help keep them happy and healthy. 
            </p>
            <div className="br"></div>
            <img src={dog} alt="dog" className="centerImage"/>
            <button className="close-modal" onClick={toggleModal}>
              <font size="+1">✕</font>
            </button>
          </div>
        </div>
      )}
    </>
  );
}