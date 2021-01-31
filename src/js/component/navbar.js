import React from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	state = {
		isOpen: false
	};

	toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

	render() {
		const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
		return (
			<div className="navbar">
				<h2 className="text-left">Star Wars</h2>
				<div>
					<Link to="/">
						<button className="btn btn-primary w-100">Home</button>
					</Link>
					<div className="dropdown dropleft" onClick={this.toggleOpen}>
						<a
							className="btn btn-primary dropdown-toggle"
							href="#"
							role="button"
							id="dropdownMenuLink"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Favorites
						</a>
						<div className={menuClass} aria-labelledby="dropdownMenuLink">
							<Context.Consumer>
								{({ store }) => {
									return store.favorites.map((fav, ind) => (
										<a key={ind} className="dropdown-item">
											{fav.name}
										</a>
									));
								}}
							</Context.Consumer>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
