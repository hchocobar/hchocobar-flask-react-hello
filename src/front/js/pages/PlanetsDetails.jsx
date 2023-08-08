import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { Navigate } from "react-router-dom";


export const PlanetsDetails = () => {
  const { store, actions } = useContext(Context);
  const selectPlanet = store.selectPlanet;
  const urlImage = "https://starwars-visualguide.com/assets/img/planets/" + selectPlanet.id + ".jpg";
  const handleOnErrorImg = (e) => {
    e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
  };

  if (!selectPlanet.id) {
    return (<Navigate to="/planets"/>)
  } else {
    return (
      <div className="container bg-dark">
        <div className="card mb-3  bg-dark text-light">
          <div className="row g-0">
            <div className="col-md-7">
              <img className="img-fluid rounded-start" src={urlImage} onError={handleOnErrorImg}></img>
            </div>
            <div className="col-md-3">
              <div className="card-body">
                <h1>{selectPlanet.name}</h1>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-2">
              <h5>Name</h5>
              <p>{selectPlanet.name}</p>
            </div>
            <div className="col-2">
              <h5>Population</h5>
              <p>{selectPlanet.population}</p>
            </div>
            <div className="col-2">
              <h5>Terrain</h5>
              <p>{selectPlanet.terrain}</p>
            </div>
            <div className="col-2">
              <h5>Climate</h5>
              <p>{selectPlanet.climate}</p>
            </div>
            <div className="col-2">
              <h5>Diameter</h5>
              <p>{selectPlanet.diameter}</p>
            </div>
            <div className="col-2">
              <h5>Rotation Period</h5>
              <p>{selectPlanet.rotation_period}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}