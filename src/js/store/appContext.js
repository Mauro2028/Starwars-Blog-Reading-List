import React from "react";
import getState from "./store.js";

export const Context = React.createContext(null);

const Store = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);
			this.state = getState({
				getStore: () => this.state.store,
				setStore: updatedStore =>
					this.setState({
						store: Object.assign(this.state.store, updatedStore)
					})
			});
		}

		componentDidMount() {
			fetch("https://www.swapi.tech/api/people/")
				.then(response => response.json())
				.then(data => {
					let { store } = this.state;
					store.detailsPeoples = data.results;
					this.setState({ store });
					console.log(data);
				});
			fetch("https://www.swapi.tech/api/planets/")
				.then(response => response.json())
				.then(dataPlanets => {
					let { store } = this.state;
					store.detailsPlanets = dataPlanets.results;
					this.setState({ store });
					console.log(dataPlanets);
				});
		}

		render() {
			return (
				<Context.Provider value={this.state}>
					<PassedComponent {...this.props} />
				</Context.Provider>
			);
		}
	}
	return StoreWrapper;
};

export default Store;
