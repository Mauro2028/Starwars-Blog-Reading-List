import React from "react";
import PeopleCard from "../component/peopleCard.js";
import PlanetCard from "../component/planetCard.js";
import { Context } from "../store/appContext.js";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="container-fluid text-center mt-5">
				<div className="row character">
					<h2> Characters </h2>
					<div className="card-columns d-flex justify-content-between">
						<Context.Consumer>
							{({ store }) => {
								return store.detailsPeoples.map((elem, index) => {
									return (
										<PeopleCard name={elem.name} gender={elem.gender} key={index} camel={index} />
									);
								});
							}}
						</Context.Consumer>
					</div>
				</div>
				<div className="row character">
					<h2> Planets </h2>
					<div className="card-columns d-flex justify-content-between">
						<Context.Consumer>
							{({ store }) => {
								return store.detailsPlanets.map((elem, index) => {
									return (
										<PlanetCard name={elem.name} gender={elem.gender} key={index} camel={index} />
									);
								});
							}}
						</Context.Consumer>
					</div>
				</div>
			</div>
		);
	}
}
