import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Characters = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container bg-dark mb-3">
			<h1 className="text-light text-center pt-4">Characters</h1>
			<div className="row row-cols-1 row-cols-md-3 row-cols-xl-5 g-2">
				{ store.characters.map((item, index) => {
          // console.log(item, index)
          const id = index + 1;
          const urlImage = "https://starwars-visualguide.com/assets/img/characters/" + id + ".jpg";
          const handleOnErrorImg = (e) => {e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"};

          return (
            <div className="col">
              <h2>Item {index}</h2>
              <div className="card border-dark my-3 mx-2 text-bg-dark">
                <img alt="" src={urlImage} onError={handleOnErrorImg}></img>
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <div className="d-flex justify-content-between">
                    <Link to={`/characters/${id}`} className="btn btn-secondary" 
                      onClick={() => actions.getCharacter({ id, urlImage, item })}>
                        Details
                    </Link>
                    <Link className="btn btn-outline-warning" 
                      onClick={() => actions.addFavorite({ id: index, type: 'Character', name: item.name }, store.favorites)}>
                        <i className="far fa-heart fa-lg"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            )
          })
        }
			</div>
		</div>
	);
};
