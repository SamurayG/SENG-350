import React, { useState } from "react";
import "./Modal.css";
import "../App.css"

export default function Modal() {
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
            <p>
            Dogs are highly social animals who enjoy the company of other canines. 
            They also like being active and having something to do. Many of today’s 
            dogs are lucky enough to be treated as family members and don’t have to 
            work like their ancestors did, but spending a lot of time at home often 
            leaves them bored. Lack of socialization and boredom can lead to health 
            and behavioral problems, but for many dogs, hanging out with other canines 
            on a regular basis can help keep them happy and healthy. 
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