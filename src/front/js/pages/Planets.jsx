import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

// Custom Componet que muestra las Cards de los planetas
import { PlanetsCard } from "../pages/PlanetsCard.jsx";


export const Planets = () => {
	const { store, actions } = useContext(Context);
	const planets = store.planets;

	return (
		<div className="container bg-dark mb-3">
      <h1 className="text-light text-center pt-4">Planets</h1>
			<div className="row row-cols-1 row-cols-md-3 row-cols-xl-5 g-2">
				{ planets.map((e, i)=>{
            let card = <PlanetsCard key= {i} id={i+1} name = {e.name} population = {e.population} terrain = {e.terrain} climate = {e.climate} orbiltal_period = {e.orbiltal_period} rotation_period = {e.rotation_period} diameter = {e.diameter}/>
            return card;
          })
        }
			</div>
		</div>
	);
};
