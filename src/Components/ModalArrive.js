import React, { useState, useEffect } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModalArrive = ({
  modalHideArrive,
  setShowModalArrive,
  departInput,
  arriveInput,
  setArriveInput,
}) => {
  // Passer departInput entièrement en lowercase
  const departInputLower = departInput.toLowerCase();

  // --------State
  // Chargement
  const [isLoading, setIsLoading] = useState(true);

  const [popularCity, setPopularCity] = useState([]);
  const [search, setSearch] = useState([]);

  //   Récupération des données des 5 villes les plus populaires au départ d'une ville
  //   Si il n'y a aucune recherche effectué dans l'input "Départ", la modal affiche par défaut les villes les plus populaires au départ de Paris
  useEffect(() => {
    const fetchData = async () => {
      if (departInputLower === "") {
        const response = await axios.get(
          `https://api.comparatrip.eu/cities/popular/from/paris/5 `
        );
        setPopularCity(response.data);
        setIsLoading(false);
      } else {
        const response = await axios.get(
          `https://api.comparatrip.eu/cities/popular/from/${departInputLower}/5 `
        );
        setPopularCity(response.data);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [departInputLower]);

  //   Récupération des données selon ce que rentre l'utilisateur
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.comparatrip.eu/cities/autocomplete/?q=${arriveInput}`
      );
      setSearch(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [arriveInput]);

  return isLoading ? (
    <div>Chargement...</div>
  ) : (
    <div>
      <div>
        <button className="modal-close-button" onClick={modalHideArrive}>
          <FontAwesomeIcon icon="times" size="2x" />
        </button>
        <h3>Arrivée</h3>

        {/* Effectuer une recherche par mot clefs */}
        <section className={arriveInput === "" && "hidden"}>
          {search.map((city, index) => {
            const cityID = city.gpuid.substring(2, 4);
            return (
              <div
                className="search-line"
                onClick={() => {
                  setShowModalArrive(false);
                  setArriveInput(city.unique_name);
                }}
              >
                <p style={{ flex: 1 }}>{city.unique_name.toUpperCase()}</p>
                <span style={{ flex: 1 }}>{cityID}</span>
              </div>
            );
          })}
        </section>

        {/* Si le champ est vide, afficher les 5 villes les plus populaires */}
        <div className={arriveInput === "" ? "popular" : "hidden"}>
          <h2>Populaires</h2>

          {popularCity.map((city, index) => {
            const cityID = city.gpuid.substring(2, 4);
            return (
              <div
                className="search-line"
                onClick={() => {
                  setArriveInput(city.unique_name);
                }}
              >
                <p style={{ flex: 1 }}>{city.unique_name.toUpperCase()}</p>
                <span style={{ flex: 1 }}>{cityID}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ModalArrive;
