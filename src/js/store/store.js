const getState = ({ getStore, setStore }) => {
	return {
		store: {
			favorites: [
				{
					name: "Luke Skywalker",
					path: "http://star-wars-blog-using-react-enriqueesmith.c9users.io:8080/details/1"
				},
				{
					name: "Alderaan",
					path: "http://star-wars-blog-using-react-enriqueesmith.c9users.io:8080/details_planets/1"
				}
			],

			detailsPeoples: [],
			detailsPlanets: []
		},
		actions: {
			addToFavorites: koala => {
				var tempStore = getStore();
				var newFavorite = {
					name: koala
				};
				tempStore.favorites.push(newFavorite);
				setStore({ tempStore });
			}
			/*
			getPeople: () => {
				fetch(
					"https://swapi.co/api/people/" +
						this.props.match.params.theid +
						"?format=json"
				)
					.then(res => res.json())
					.then(horse => {
						var temp = getStore();
						temp.people = horse;
						setStore({ temp });
					});
					
			}*/
		}
	};
};

export default getState;
