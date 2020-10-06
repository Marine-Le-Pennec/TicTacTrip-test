import React, { useState, useEffect } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModalDepart = ({ modalHideDepart, departInput }) => {
  // -----States
  // Chargement
  const [isLoading, setIsLoading] = useState(true);
  // Stockage 5 villes les plus populaires
  const [mostPopularCity, setMostPopularCity] = useState([]);
  // Recherche par input
  const [search, setSearch] = useState([]);

  //   Récupération des données des 5 villes les plus populaires
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.comparatrip.eu/cities/popular/5`
      );
      setMostPopularCity(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  //   Récupération des données selon ce que rentre l'utilisateur
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.comparatrip.eu/cities/autocomplete/?q=${departInput}`
      );
      setSearch(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [departInput]);

  return isLoading ? (
    <div>En cours de chargement</div>
  ) : (
    <div>
      <button className="modal-close-button" onClick={modalHideDepart}>
        <FontAwesomeIcon icon="times" size="2x" />
      </button>

      {/* Effectuer une recherche par mot clefs */}
      <section className={departInput === "" && "hidden"}>
        {search.map((city, index) => {
          return <div>{city.local_name}</div>;
        })}
      </section>

      {/* Si le champ est vide, afficher les 5 villes les plus populaires */}
      <section className={departInput === "" ? "popular" : "hidden"}>
        <h2>Populaires</h2>

        {mostPopularCity.map((city, index) => {
          const cityID = city.gpuid.substring(2, 4);
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <p style={{ flex: 1 }}>{city.unique_name.toUpperCase()}</p>
              <span style={{ flex: 1 }}>{cityID}</span>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default ModalDepart;
