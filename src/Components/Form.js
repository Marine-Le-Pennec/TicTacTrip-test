import React, { useState } from "react";
// import axios from "axios";

const Form = () => {
  // States

  // Permet le stockage de l'input de recherche
  const [input, setInput] = useState("");

  // Permet d'afficher ou non la modal
  const [showModal, setShowModal] = useState(false);

  const modalDisplay = () => {
    setShowModal(true);
  };

  return (
    <div style={{ display: "flex" }}>
      <section className="form-container">
        <form className="form">
          <div className="input-container" onClick={modalDisplay}>
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
      <section className={showModal ? "modal" : "modal-hidden"}></section>
    </div>
  );
};

export default Form;
