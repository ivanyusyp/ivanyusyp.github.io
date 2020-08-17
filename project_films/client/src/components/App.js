import React, { Component } from "react"
import { generate as id } from "shortid"
import FilmsList from "./films"
import FilmForm from "./films/forms/FilmForm"
import TopNavigation from "./TopNavigation"
import { orderBy } from 'lodash'
import { films } from "../data"
import RegistrationForm from "./films/forms/RegistrationForm"
import LoginForm from './films/forms/LoginForm'

const AppContext = React.createContext()
export { AppContext }

class App extends Component {
	state = {
		films: [],
		showAddForm: false,
		selectedFilm: {},
	}

	componentDidMount() {
		this.setState({
			films: this.sortFilms(films),
		})
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

	toggleFeatured = id =>
		this.setState(({ films }) => ({
			films: this.sortFilms(
				films.map(item =>
					item._id === id ? { ...item, featured: !item.featured } : item,
				),
			),
		}))

	saveFilm = film => (film._id ? this.updateFilm(film) : this.addFilm(film))

	addFilm = film =>
		this.setState(({ films, showAddForm }) => ({
			films: this.sortFilms([...films, { ...film, _id: id() }]),
			showAddForm: false,
		}))

	selectFilmForEdit = selectedFilm => {
		this.setState({
			selectedFilm,
			showAddForm: true,
		})
	}

	updateFilm = film =>
		this.setState(({ films, showAddForm }) => ({
			films: this.sortFilms(
				films.map(item => (item._id === film._id ? film : item)),
			),
			showAddForm: false,
		}))

	deleteFilm = film =>
		this.setState(({ films, selectedFilm, showAddForm }) => ({
			films: films.filter(item => item._id !== film._id),
			selectedFilm: {},
			showAddForm: false,
		}))

	render() {
		const { films, showAddForm, selectedFilm } = this.state
		const numCol = showAddForm ? "ten" : "sixteen"

		return (
			<AppContext.Provider
				value={{
					toggleFeatured: this.toggleFeatured,
					editFilm: this.selectFilmForEdit,
					deleteFilm: this.deleteFilm
				}}
			>
				<div className="ui container">
					<div className="ui divider"></div>
					<div class="ui placeholder segment">
						<div class="ui two column very relaxed stackable grid">
							<div class="column">
								<RegistrationForm />
							</div>
							<div class="column">
							<LoginForm />
							</div>
						</div>
						<div class="ui vertical divider">
							Or
						
        </div>
						
					</div>
					<TopNavigation showAddForm={this.showAddForm} />

					<div className="ui stackable grid">
						{this.state.showAddForm && (
							<div className="six wide column">
								<FilmForm submit={this.saveFilm}
									hideAddForm={this.hideAddForm}
									film={this.state.selectedFilm} />
							</div>
						)}

						<div className={`${numCol} wide column`}>
							<FilmsList films={films} />
						</div>
					</div>
				</div>
			</AppContext.Provider>
		)
	}
}

export default App
