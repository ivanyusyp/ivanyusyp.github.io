import React, { Component } from "react"
import { films } from "../data"
import FilmsList from "./films"
import { orderBy } from 'lodash';
import FilmsForm from './films/FilmsForm';
import TopNavigator from './films/TopNavigator';

const AppContext = React.createContext()
export { AppContext }

class App extends Component {
	state = {
		films: [
		],
	}
	addDescField = (films) =>
		films.map(item =>
			item.isDescriptionVisible = false
		)
	componentDidMount() {
		this.setState({
			films: this.sortFilms(films),
		})
		this.addDescField(films)
		console.log(films)
	}

	toggleFeatured = id =>
		this.setState(({ films }) => ({
			films: this.sortFilms(
				films.map(item =>
					item._id === id ? { ...item, featured: !item.featured } : item,
				),
			),
		}))

	toggleDescription = id => {
		this.setState(({ films }) => ({
			films: films.map(item =>
				item._id === id ? { ...item, isDescriptionVisible: !item.isDescriptionVisible } : item,
			)
		}))


	}
	findFilmById = id => {
		const currentFilm = this.state.films.find(item => item._id === id)
		return currentFilm
	}


	sortFilms = films => orderBy(films, ["featured", "title"], ["desc", "asc"])

	render() {
		const { films } = this.state;

		return (
			<AppContext.Provider
				value={{
					toggleFeatured: this.toggleFeatured,
					toggleDescription: this.toggleDescription,
					findFilmById: this.findFilmById
				}}
			>
				<div className="ui container mt-3">
					<FilmsForm />
					<FilmsList films={films} />
				</div>

			</AppContext.Provider>
		)
	}
}

export default App