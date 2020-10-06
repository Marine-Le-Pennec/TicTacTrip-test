import React, { useState } from "react";
// import axios from "axios";

// Modal
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";

const Form = () => {
  // States

  // Permet le stockage de l'input de recherche
  const [input, setInput] = useState("");

  // Modal
  const [showModal, hideModal] = useModal(() => (
    <ReactModal isOpen>
      <p>Modal content</p>
      <button onClick={hideModal}>Hide modal</button>
    </ReactModal>
  ));

  return (
    <div>
      <section className="form-container">
        <form className="form">
          <div className="input-container" onClick={showModal}>
            <span>
              <p>Départ</p>
            </span>
            <input
              placeholder="Ville"
              type="text"
              onChange={(event) => {
                setInput(event.target.value);
              }}
            />
          </div>

          <div className="input-container">
            <span>
              <p>Arrivée</p>
            </span>
            <input
              placeholder="Ville"
              type="text"
              onChange={(event) => {
                setInput(event.target.value);
              }}
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default Form;
