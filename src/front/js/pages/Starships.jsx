import React from "react";


export const Starships = () => {
	return (
		<div className="container bg-dark mb-3">
      <h1 className="text-light text-center pt-4">Starships</h1>
      <h2 className="text-light text-center pt-4">Under Construction</h2>
			<div className="row row-cols-1 row-cols-md-3 row-cols-xl-5 g-2">
        <div className="col">
          <div className="card border-dark my-3 mx-2 text-bg-dark">
            <img src="https://starwars-visualguide.com/assets/img/starships/10.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Millennium Falcon</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className="d-flex justify-content-between">
                <span to="#" className="btn btn-secondary">Details</span>
                <span to="#" className="btn btn-outline-warning"><i className="far fa-heart fa-lg"></i></span>
              </div>
            </div>
          </div>
        </div>
			</div>
		</div>
	);
};
