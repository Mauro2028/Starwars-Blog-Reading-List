// import React from "react";
// import PropTypes from "prop-types";
// import { Context } from "../store/appContext.js";
// import { Link } from "react-router-dom";
// const BASE_URL = "https://www.swapi.tech/api";
// export class DetailsPlanets extends React.Component {
// 	render() {
// 		return (
// 			<Context.Consumer>
// 				{({ store, actions }) => {
// 					var detailsPlanet = store.detailsPlanets.find(item => {
// 						return item.id == this.props.match.params.theid;
// 					});
// 					return (
// 						<div className="container-fluid text-center mt-5">
// 							<div className="row justify-content">
// 								<div className="col-6">
// 									<img src="https:///via.placeholder.com/640x480" />
// 								</div>
// 								<Link to={`${BASE_URL}` + "/planets/" + (props.camel + 1) + "/"}>
// 					<a href="#" className="btn btn-primary">
// 						Details
// 					</a>
// 				</Link>
// 								<div className="col-6">
// 									<h3>{detailsPlanet.name}</h3>
// 									<p>Epic description of planet....</p>
// 								</div>
// 							</div>
// 							<div className="row mt-5">
// 								<div className="col descriptionColumns">
// 									<h6>Population</h6>
// 									{detailsPlanet.population}
// 									<br />
// 								</div>
// 								<div className="col descriptionColumns">
// 									<h6>Climate</h6>
// 									{detailsPlanet.climate}
// 									<br />
// 								</div>
// 								<div className="col descriptionColumns">
// 									<h6>Gravity</h6>
// 									{detailsPlanet.gravity}
// 									<br />
// 								</div>
// 								<div className="col descriptionColumns">
// 									<h6>Orbital Period</h6>
// 									{detailsPlanet.orbital_period}
// 									<br />
// 								</div>
// 								<div className="col descriptionColumns">
// 									<h6>Rotation Period</h6>
// 									{detailsPlanet.rotation_period}
// 									<br />
// 								</div>
// 								<div className="col descriptionColumns">
// 									<h6>Surface Water</h6>
// 									{detailsPlanet.surface_water}
// 									<br />
// 								</div>
// 								<div className="col descriptionColumns">
// 									<h6>Terrain</h6>
// 									{detailsPlanet.terrain}
// 									<br />
// 								</div>
// 							</div>
// 						</div>
// 					);
// 				}}
// 			</Context.Consumer>
// 		);
// 	}
// }

// DetailsPlanets.propTypes = {
// 	match: PropTypes.object
// };