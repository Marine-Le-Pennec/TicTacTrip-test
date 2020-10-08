import React from "react";

const DepartChoice = ({
  departInput,
  setDepartInput,
  modalDisplayDepart,
  modalHideArrive,
}) => {
  return (
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
  );
};

export default DepartChoice;
