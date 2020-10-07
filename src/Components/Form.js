import React, { useState } from "react";

// Date picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Composants
import ModalDepart from "./ModalDepart";
import ModalArrive from "./ModalArrive";

// Icones
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
library.add(faTimes);

const Form = () => {
  //------------ States

  // Permet le stockage de l'input de recherche
  const [departInput, setDepartInput] = useState("");
  const [arriveInput, setArriveInput] = useState("");

  // Permet d'afficher ou non la modal
  const [showModalDepart, setShowModalDepart] = useState(false);
  const [showModalArrive, setShowModalArrive] = useState(false);

  // Fonctions pour la modal Depart (faire apparaitre/disparaitre)
  const modalDisplayDepart = () => {
    setShowModalDepart(true);
  };

  const modalHideDepart = () => {
    setShowModalDepart(false);
  };

  // Fonctions pour la modal Arrive (faire apparaitre/disparaitre)

  const modalDisplayArrive = () => {
    setShowModalArrive(true);
  };

  const modalHideArrive = () => {
    setShowModalArrive(false);
  };

  // Date Picker
  // ---- Activer l'apparition du date picker pour le retour
  const [pickerHidden, setPickerHidden] = useState(true);

  // ---- Fonction affichage datepicker Aller

  const [startDate, setStartDate] = useState(new Date());

  const Start = () => {
    return (
      <DatePicker
        required
        className="datePicker"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="dd/MM/yyyy"
        showTimeSelect={true}
      />
    );
  };

  // ---- Fonction affichage datepicker Retour
  const [endDate, setEndDate] = useState(new Date());
  const End = () => {
    return (
      <DatePicker
        className="datePicker"
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        dateFormat="dd/MM/yyyy"
        showTimeSelect={true}
      />
    );
  };

  return (
    <div className="form-and-modal">
      <section className="form-container">
        <form className="form">
          {/* Visuel mobile */}
          <div
            className="input-container-mobile"
            onClick={() => {
              modalDisplayDepart();
              modalHideArrive();
            }}
          >
            <h3>Départ</h3>
            <input
              value={departInput}
              placeholder="Ville ou aéroports"
              type="text"
              onChange={(event) => {
                setDepartInput(event.target.value);
              }}
            />
          </div>
          {/* Fin visuel mobile */}
          <div
            className="input-container"
            onClick={() => {
              modalDisplayDepart();
              modalHideArrive();
            }}
          >
            <span>
              <p>Départ</p>
            </span>
            <input
              value={departInput}
              placeholder="Ville ou aéroports"
              type="text"
              onChange={(event) => {
                setDepartInput(event.target.value);
              }}
            />
          </div>

          {/* Visuel mobile */}
          <div
            className="input-container-mobile"
            onClick={() => {
              modalDisplayArrive();
              modalHideDepart();
            }}
          >
            <h3>Arrivée</h3>
            <input
              value={departInput}
              placeholder="Ville ou aéroports"
              type="text"
              onChange={(event) => {
                setDepartInput(event.target.value);
              }}
            />
          </div>
          {/* Fin visuel mobile */}
          <div
            className="input-container"
            onClick={() => {
              modalDisplayArrive();
              modalHideDepart();
            }}
          >
            <span>
              <p>Arrivée</p>
            </span>
            <input
              value={arriveInput}
              placeholder="Ville ou aéroports"
              type="text"
              onChange={(event) => {
                setArriveInput(event.target.value);
              }}
            />
          </div>
          {/* Intégration du calendrier */}
          <section className="calendar-container">
            <div className="date-container">
              <p className="datePicker-depart">Départ</p>
              <div style={{ fontSize: "20px" }}>{Start()}</div>
            </div>

            <div className="border"> </div>
            {/* div masquante */}
            <p
              className={!pickerHidden && endDate !== null ? "hidden" : ""}
              onClick={() => {
                setPickerHidden(!pickerHidden);
              }}
            >
              + Ajouter Retour
            </p>
            {/* picker */}
            <div className={pickerHidden ? "hidden" : ""}>
              <div className="date-container">
                <p className="datePicker-depart">Retour</p>
                <div>{End()}</div>
                <button
                  type="button"
                  onClick={() => {
                    setPickerHidden(true);
                    setEndDate(null);
                  }}
                >
                  x
                </button>
              </div>
            </div>
          </section>
          <button type="submit">Rechercher</button>
        </form>
      </section>
      <div className="modals-container">
        <section className={showModalDepart ? "modal" : "modal-hidden"}>
          <ModalDepart
            modalHideDepart={modalHideDepart}
            departInput={departInput}
            setDepartInput={setDepartInput}
          />
        </section>
        <section className={showModalArrive ? "modal" : "modal-hidden"}>
          <ModalArrive
            modalHideArrive={modalHideArrive}
            arriveInput={arriveInput}
            departInput={departInput}
            setArriveInput={setArriveInput}
          />
        </section>
      </div>
    </div>
  );
};

export default Form;
