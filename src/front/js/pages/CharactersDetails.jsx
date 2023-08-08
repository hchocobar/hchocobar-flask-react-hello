import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { Navigate } from "react-router-dom";


export const CharactersDetails = () => {
  const { store, actions } = useContext(Context);
  const selectCharacter = store.selectCharacter;
  const urlImage = selectCharacter.urlImage;
  const handleOnErrorImg = (e) => {
      e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
  };

  if (!selectCharacter.id) { 
    return (<Navigate to="/characters"/>)
  } else {
    return (
      <div className="container bg-dark">
        <div className="card mb-3  bg-dark text-light">
          <div className="row g-0">
              <div className="col-md-7 col-lg-6 col-xl-5">
                  <img className="img-fluid rounded-start" src={urlImage} onError={handleOnErrorImg}></img>
              </div>
              <div className="col-md-5 col-lg-6 col-xl-7">
                  <div className="card-body">
                      <h1>{selectCharacter.item.name}</h1>
                      <p> </p>
                      <p><strong>Height: </strong>{selectCharacter.item.height}</p>
                      <p><strong>Mass: </strong>{selectCharacter.item.mass}</p>
                      <p><strong>Hair color: </strong>{selectCharacter.item.hair_color}</p>
                      <p><strong>Skin color: </strong>{selectCharacter.item.skin_color}</p>
                      <p><strong>Eye color: </strong>{selectCharacter.item.eye_color}</p>
                      <p><strong>Birth year: </strong>{selectCharacter.item.birht_year}</p>
                      <p><strong>Gender: </strong>{selectCharacter.item.gender}</p>
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}