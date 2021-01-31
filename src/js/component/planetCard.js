import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
const BASE_URL = "https://www.swapi.tech/api";
function PlanetCard(props) {
	return (
		<div className="card">
			<img className="card-img-top" src="https://via.placeholder.com/200" alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">
					Planet Name: {props.name} <br />
					Population: {props.population}
				</p>
				<Link to={`${BASE_URL}` + "/planets/" + (props.camel + 1) + "/"}>
					<a href="#" className="btn btn-primary">
						Details
					</a>
				</Link>
				<Context.Consumer>
					{({ actions }) => {
						return (
							<button className="ml-3 btn btn-primary" onClick={() => actions.addToFavorites(props.name)}>
								Add to Favorites!
							</button>
						);
					}}
				</Context.Consumer>
			</div>
		</div>
	);
}

export default PlanetCard;

PlanetCard.propTypes = {
	name: PropTypes.string,
	population: PropTypes.string,
	camel: PropTypes.number
};
