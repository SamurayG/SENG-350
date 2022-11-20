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
            uvic.dogs@gmail.com | SUB 103 | Mondays 1:30pm - 4:30pm
            <hr/>
            <p>
            Missing your pet? Stressed about school? Join us or for cuddles 
            with therapy dogs while enjoying free coffee, tea, and cookies. If you are 
            pet-sick for your best animal pals, or just keen to pat a new dog friend, 
            the Dog club is for you! This is a drop-in program and anyone is welcome 
            to attend.  <br/><br/>

            All of the therapy animal teams are volunteers of Pacific Animal Therapy 
            Society (PATS). The program is sponsored by the Anglican Diocese of BC.
            Come Join us for some fun with our furry friends!
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