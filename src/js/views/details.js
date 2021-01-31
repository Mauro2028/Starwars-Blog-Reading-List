// import React from "react";
// import PropTypes from "prop-types";
// import { Context } from "../store/appContext.js";
// const BASE_URL = "https://www.swapi.tech/api";
// export class Details extends React.Component {
// 	render() {
// 		return (
			
// 			<Context.Consumer>
// 				{({ store, actions }) => {
// 					var detailsPeople =
// 						store.detailsPeoples[
// 							parseInt(this.props.match.params.theid) - 1
// 						];

// 					return (
						
// 						<div className="container-fluid text-center mt-5">
// 							<div className="row justify-content">
// 								<div className="col-6">
// 									<img src="https:///via.placeholder.com/640x480" />
// 								</div>
// 								<div className="col-6">
// 									<h3>{detailsPeople.name}</h3>
// 									<p>Epic backstory of character....</p>
// 								</div>
// 							</div>
							
// 							<div className="row mt-5">
// 								<div className="col descriptionColumns">
// 									<h6>Gender</h6>
// 									{detailsPeople.gender}
// 									<br />
// 								</div>
// 								<div className="col descriptionColumns">
// 									<h6>Height</h6>
// 									{detailsPeople.height}
// 									<br />
// 								</div>
// 								<div className="col descriptionColumns">
// 									<h6>Mass</h6>
// 									{detailsPeople.mass}
// 									<br />
// 								</div>
// 								<div className="col descriptionColumns">
// 									<h6>Hair Color</h6>
// 									{detailsPeople.hair_color}
// 									<br />
// 								</div>
// 								<div className="col descriptionColumns">
// 									<h6>Eye Color</h6>
// 									{detailsPeople.eye_color}
// 									<br />
// 								</div>
// 								<div className="col descriptionColumns">
// 									<h6>Skin Color</h6>
// 									{detailsPeople.skin_color}
// 									<br />
// 								</div>
// 								<div className="col descriptionColumns">
// 									<h6>Birth Year</h6>
// 									{detailsPeople.birth_year}
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

// Details.propTypes = {
// 	match: PropTypes.object
// };