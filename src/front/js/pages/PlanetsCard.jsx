import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';

// people: https://starwars-visualguide.com/assets/img/characters/1.jpg
// planets: https://starwars-visualguide.com/assets/img/planets/1.jpg
// host = "https://starwars-visualguide.com/assets/img/"


export const PlanetsCard = ({ id, name, population, terrain, climate, orbiltal_period, rotation_period, diameter }) => {
  const { store, actions } = useContext(Context);
  const planet = store.planet;
  const favorites = store.favorites;

  const urlImage = "https://starwars-visualguide.com/assets/img/planets/" + id + ".jpg";
  const handleOnErrorImg = (e) => {
    e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
  }

  return (
    <div className="col">
      <div className="card border-dark my-3 mx-2 text-bg-dark">
        <img alt="" src={urlImage} onError={handleOnErrorImg}></img>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Population: {population}</p>
          <p className="card-text">Terrain: {terrain} </p>
          <p className="card-text">Climate: {climate} </p>
          <div className="d-flex justify-content-between">
            <Link to={`/planets/${id}`} className="btn btn-secondary" 
              onClick={() => actions.getPlanet({ id: id, name: name, population: population, terrain: terrain, climate: climate, orbiltal_period: orbiltal_period, rotation_period: rotation_period, diameter: diameter })}>
                Details
            </Link>
            <Link className="btn btn-outline-warning" 
              onClick={() => actions.addFavorite({ id, type: 'Planet', name }, favorites)}>
                <i className="far fa-heart fa-lg"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
