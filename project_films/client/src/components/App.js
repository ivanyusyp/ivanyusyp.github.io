import React, { Component } from "react"
import FilmsPage from './forms/FilmsPage'
import TopNavigation from "./TopNavigation"
import { orderBy, find } from 'lodash'
import RegistrationForm from "./forms/RegistrationForm"
import LoginForm from './forms/LoginForm'
import axios from "axios";
import api from '../api'
import { Route } from "react-router-dom"
import HomePage from './forms/HomePage'

const AppContext = React.createContext()
export { AppContext }

class App extends Component {
	state = {
		films: [],
		showAddForm: false,
		selectedFilm: {},
		isLoading: true,
	}

	componentDidMount() {
		api.films.fetchAll()
			.then(films =>
				this.setState({
					films: this.sortFilms(films),
					isLoading: false,
				}),
			)
	}


	showAddForm = e => this.setState({
		showAddForm: true,
		selectedFilm: {}
	})

	hideAddForm = e => this.setState({
		showAddForm: false,
		selectedFilm: {}
	})

	sortFilms = films => orderBy(films, ["featured", "title"], ["desc", "asc"])

	toggleFeatured = id => {
		const film = find(this.state.films, { _id: id })
		return this.updateFilm({ ...film, featured: !film.featured })
	}


	saveFilm = film => (film._id ? this.updateFilm(film) : this.addFilm(film))


	addFilm = filmData =>
		api.films.create(filmData).then(film =>
			this.setState(({ films }) => ({
				films: this.sortFilms([...films, { ...film }]),
				showAddForm: false,
			})))

	selectFilmForEdit = selectedFilm => {
		this.setState({
			selectedFilm,
			showAddForm: true,
		})
	}


	updateFilm = filmData =>
		api.films.update(filmData).then(film =>
			this.setState(({ films, showAddForm }) => ({
				films: this.sortFilms(
					films.map(item => (item._id === film._id ? film : item)),
				),
			})))


	deleteFilm = film =>
		api.films.delete(film).then(() =>
			this.setState(({ films }) => ({
				films: this.sortFilms(films.filter(item => item._id !== film._id)),
			})),
		)


	render() {
		const { films, showAddForm, selectedFilm } = this.state
		const numCol = showAddForm ? "ten" : "sixteen"

		return (
			<div className={'ui container'} >
				<TopNavigation />
				<Route exact path="/" component={HomePage} />
				<Route path="/films" component={FilmsPage} />
			</div>
		)
	}
}

export default App
