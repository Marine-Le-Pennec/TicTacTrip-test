import React, { useState } from "react";

// Date picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Composants
import ModalDepart from "./ModalDepart";
import ModalArrive from "./ModalArrive";
// ---Responsive
import DepartChoice from "../Components/Responsive/DepartChoice";
import ArriveChoice from "../Components/Responsive/ArriveChoice";
import ModalResponsiveDepart from "../Components/Responsive/ModalResponsiveDepart";
import ModalResponsiveArrive from "../Components/Responsive/ModalResponsiveArrive";

// Icones
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
        style={{ backgroundColor: "transparent" }}
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

          {/* Visuel mobile */}
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
          {/* Intégration du calendrier */}
          <section className="calendar-container">
            <div className="date-container">
              <p className="datePicker-depart">Départ</p>
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
            {/* picker visible */}
            <div className={pickerHidden ? "hidden" : ""}>
              <div className="date-container">
                <p className="datePicker-depart">Retour</p>
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
      {/* Apparition des modals */}
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
