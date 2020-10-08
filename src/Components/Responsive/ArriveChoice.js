import React from "react";

const ArriveChoice = ({
  modalDisplayArrive,
  modalHideDepart,
  arriveInput,
  setArriveInput,
}) => {
  // --------------------------------------------------
  return (
    <div
      className="input-container-mobile"
      onClick={() => {
        modalDisplayArrive();
        modalHideDepart();
      }}
    >
      <h3>Arrivée</h3>
      <input
        value={arriveInput}
        placeholder="Ville ou aéroports"
        type="text"
        onChange={(event) => {
          setArriveInput(event.target.value);
        }}
      />
    </div>
  );
};

export default ArriveChoice;
