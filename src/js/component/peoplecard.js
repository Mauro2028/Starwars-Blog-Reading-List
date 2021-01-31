import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
const BASE_URL = "https://www.swapi.tech/api";
function PeopleCard(props) {
	return (
		<div className="card">
			<img className="card-img-top" src="https://via.placeholder.com/200" alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">
					Full Name: {props.name} <br />
					Gender: {props.gender}
				</p>
				<Link to={`${BASE_URL}` + "/people/" + (props.camel + 1) + "/"}>
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

export default PeopleCard;

PeopleCard.propTypes = {
	name: PropTypes.string,
	gender: PropTypes.string,
	camel: PropTypes.number
};
