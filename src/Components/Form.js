import React, { useState } from "react";

// Import du package react-datepicker ----- https://github.com/Hacker0x01/react-datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Imports des Composants

// --- Modales
import ModalDepart from "./ModalDepart";
import ModalArrive from "./ModalArrive";
// ---Responsive
import DepartChoice from "../Components/Responsive/DepartChoice";
import ArriveChoice from "../Components/Responsive/ArriveChoice";
import ModalResponsiveDepart from "../Components/Responsive/ModalResponsiveDepart";
import ModalResponsiveArrive from "../Components/Responsive/ModalResponsiveArrive";

// Import des icones via Fontawesome ----- https://fontawesome.com/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

  // Activer l'apparition/disparition du date-picker pour le retour avec
  const [pickerHidden, setPickerHidden] = useState(true);

  // Datepicker Aller
  const [startDate, setStartDate] = useState(new Date());
  // Datepicker Retour
  const [endDate, setEndDate] = useState(new Date());

  //------------ Fonctions

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

  // --- Date-picker

  // Choix de la date pour l'aller
  const Start = () => {
    return (
      <DatePicker
        style={{ backgroundColor: "transparent" }}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="dd/MM/yyyy"
        showTimeSelect={true}
      />
    );
  };

  // Choix de la date pour le retour
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

  // -------------------------------------------------------------------------------
  return (
    <div className="form-and-modal">
      <section className="form-container">
        <form className="form">
          {/* Visuel mobile pour le choix du départ*/}
          <DepartChoice
            departInput={departInput}
            setDepartInput={setDepartInput}
            modalHideArrive={modalHideArrive}
            modalDisplayDepart={modalDisplayDepart}
          />
          {/* Fin visuel mobile */}

          {/* Input de recherche pour le départ */}
          <div
            className="input-container"
            onClick={() => {
              modalDisplayDepart();
              modalHideArrive();
            }}
          >
            <span>
              <p className="depart-arrive-p">Départ</p>
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
          {/* Section pour la modale sur mobile Depart*/}
          <section
            className={showModalDepart ? "modal-responsive" : "modal-hidden"}
          >
            <ModalResponsiveDepart
              modalHideDepart={modalHideDepart}
              departInput={departInput}
              setDepartInput={setDepartInput}
              setShowModalDepart={setShowModalDepart}
            />
          </section>
          {/* Fin visuel modale sur mobile */}

          {/* Visuel mobile pour le choix de l'arrivée */}
          <ArriveChoice
            modalDisplayArrive={modalDisplayArrive}
            modalHideDepart={modalHideDepart}
            arriveInput={arriveInput}
            setArriveInput={setArriveInput}
          />
          {/* Fin visuel mobile */}

          {/* Input de recherche pour l'arrivée */}
          <div
            className="input-container"
            onClick={() => {
              modalDisplayArrive();
              modalHideDepart();
            }}
          >
            <span>
              <p className="depart-arrive-p">Arrivée</p>
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
          {/* Section pour la modale sur mobile Arrivée */}
          <section
            className={showModalArrive ? "modal-responsive" : "modal-hidden"}
          >
            <ModalResponsiveArrive
              modalHideArrive={modalHideArrive}
              setShowModalArrive={setShowModalArrive}
              arriveInput={arriveInput}
              departInput={departInput}
              setArriveInput={setArriveInput}
            />
          </section>
          {/* Fin section pour la modale sur mobile Depart */}

          {/* ----- Intégration du calendrier */}
          <section className="calendar-container">
            <div className="date-container">
              <p className="datePicker-depart">Départ</p>
              {/* Appel de la fonction permettant d'afficher le calendrier de l'aller */}
              <div>{Start()}</div>
            </div>

            <div className="border"> </div>
            {/* section masquant l'input de selection de date de retour */}
            <p
              className={!pickerHidden && endDate !== null ? "hidden" : ""}
              onClick={() => {
                setPickerHidden(!pickerHidden);
              }}
            >
              + Ajouter Retour
            </p>
            {/* calendrier de retour visible lorsque l'on clique sur "+ Ajouter Retour" */}
            <div className={pickerHidden ? "hidden" : ""}>
              <div className="date-container">
                <p className="datePicker-depart">Retour</p>
                {/* Appel de la fonction permettant d'afficher le calendrier du retour */}
                <div>{End()}</div>
                <button
                  style={{
                    borderStyle: "none",
                    backgroundColor: "transparent",
                  }}
                  type="button"
                  onClick={() => {
                    setPickerHidden(true);
                    setEndDate(null);
                  }}
                >
                  <FontAwesomeIcon icon="times" size="1x" />
                </button>
              </div>
            </div>
          </section>
        </form>
      </section>
      {/* Apparition des modals en version web. Disparaissent lors d'un certain format en responsive*/}
      <div className="modals-container">
        <section className={showModalDepart ? "modal" : "modal-hidden"}>
          <ModalDepart
            modalHideDepart={modalHideDepart}
            departInput={departInput}
            setDepartInput={setDepartInput}
            setShowModalDepart={setShowModalDepart}
          />
        </section>
        <section className={showModalArrive ? "modal" : "modal-hidden"}>
          <ModalArrive
            modalHideArrive={modalHideArrive}
            setShowModalArrive={setShowModalArrive}
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
