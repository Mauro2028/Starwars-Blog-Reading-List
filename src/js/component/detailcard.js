import React, { Component } from "react";

export class DetailCard extends Component {
	render() {
		return (
			<div className="card mb-3">
				<img
					className="card-img-left"
					src="https://via.placeholder.com/100"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</p>
				</div>
			</div>
		);
	}
}