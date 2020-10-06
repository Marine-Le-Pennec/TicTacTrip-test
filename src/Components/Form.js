import React, { useState } from "react";
// import axios from "axios";

// Modal
import { ModalProvider } from "react-modal-hook";

const Form = () => {
  // States

  // Permet le stockage de l'input de recherche
  const [input, setInput] = useState("");

  return (
    <div>
      <section className="form-container">
        <form className="form">
          <div className="input-container">
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
