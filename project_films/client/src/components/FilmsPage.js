// import React, { useState, useEffect } from "react"
// import { Route, Redirect } from 'react-router-dom'
// import api from "../api"
// import FilmsList from "./films"
// import { AppContext } from './App'
// import FilmForm from "./forms/FilmForm"
// import { orderBy, find } from 'lodash';

// const initialData = {
// 	films: [],
// 	showAddForm: false,
// 	selctedFilm: '',
// }

// const isLoading = {
// 	loading: true
// }
// const FilmsPage = props => {

// 	const [films, setFilms] = useState(initialData)
// 	const [loading, setLoading] = useState(isLoading)

// 	useEffect(
// 		api.films
// 			.fetchAll()
// 			.then(films =>
// 				setFilms(films), setLoading(false)
// 			), [props.films]
// 	)





// 	const sortFilms = films => orderBy(films, ["featured", "title"], ["desc", "asc"])

// 	const toggleFeatured = id => {
// 		const film = find(setFilms(films), { _id: id })

// 		return updateFilm({ ...film, featured: !film.featured })
// 	}

// 	const saveFilm = film => (film._id ? updateFilm(film) : addFilm(film))

// 	const addFilm = filmData =>
// 		api.films.create(filmData).then(film =>
// 			setFilms(({ films, showAddForm }) => ({
// 				films: sortFilms([...films, { ...film }]),
// 				showAddForm: false,
// 			})),
// 		)

// 	const updateFilm = filmData =>
// 		api.films.update(filmData).then(film =>
// 			setFilms(({ films, showAddForm }) => ({
// 				films: sortFilms(
// 					films.map(item => (item._id === film._id ? film : item)),
// 				),
// 				showAddForm: false,
// 			})),
// 		)

// 	const deleteFilm = film =>
// 		api.films.delete(film).then(() =>
// 			setFilms(({ films }) => ({
// 				films: sortFilms(films.filter(item => item._id !== film._id)),
// 			})),
// 		)

// 	const selectFilmForEdit = selectedFilm => () =>
// 		setFilms({
// 			selectedFilm: selectedFilm,
// 			showAddForm: true,
// 		})

// 	const numCol = props.location.pathname === "/films" ? "sixteen" : "ten"

// 	return (
// 		<AppContext.Provider
// 			value={{
// 				toggleFeatured: toggleFeatured,
// 				deleteFilm: deleteFilm,
// 				user: props.user,
// 			}}
// 		>
// 			<div className="ui stackable grid">
// 				{props.user.role === 'admin' ? (
// 					<>
// 						<Route
// 							path="/films/new"
// 							render={() => (
// 								<div className="six wide column">
// 									<FilmForm submit={saveFilm} film={{}} />
// 								</div>
// 							)}
// 						/>

// 						<Route
// 							path="/films/edit/:_id"
// 							render={props => (
// 								<div className="six wide column">
// 									<FilmForm
// 										submit={saveFilm}
// 										film={find(films, { _id: props.match.params._id, }) || {}}
// 									/>
// 								</div>
// 							)}
// 						/>
// 					</>
// 				) : (
// 						<Route path="/films/*" render={() => <Redirect to="/films" />} />
// 					)}


// 				<div className={`${numCol} wide column`}>
// 					{
// 						loading ? (
// 							<div className="ui icon message">
// 								<i className="notched circle loading icon" />
// 								<div className="content">
// 									<div className="header">films loading</div>
// 								</div>
// 							</div>
// 						) : (
// 								<FilmsList films={setFilms} editFilm={selectFilmForEdit} deleteFilm={deleteFilm} />
// 							)
// 					}
// 				</div>
// 			</div>
// 		</AppContext.Provider>
// 	)
// }

// export default FilmsPage


import React, { Component } from "react"
import { Route, Redirect } from 'react-router-dom'
import api from "../api"
import FilmsList from "./films"
import { AppContext } from './App'
import FilmForm from "./forms/FilmForm"
import { orderBy, find } from 'lodash';


class FilmsPage extends Component {
	state = {
		films: [],
		isLoading: true,
	}

	componentDidMount() {
		api.films
			.fetchAll()
			.then(films =>
				this.setState({ films: this.sortFilms(films), isLoading: false }),
			)
	}


	sortFilms = films => orderBy(films, ["featured", "title"], ["desc", "asc"])

	toggleFeatured = id => {
		const film = find(this.state.films, { _id: id })

		return this.updateFilm({ ...film, featured: !film.featured })
	}

	saveFilm = film => (film._id ? this.updateFilm(film) : this.addFilm(film))

	addFilm = filmData =>
		api.films.create(filmData).then(film =>
			this.setState(({ films, showAddForm }) => ({
				films: this.sortFilms([...films, { ...film }]),
				showAddForm: false,
			})),
		)

	updateFilm = filmData =>
		api.films.update(filmData).then(film =>
			this.setState(({ films, showAddForm }) => ({
				films: this.sortFilms(
					films.map(item => (item._id === film._id ? film : item)),
				),
				showAddForm: false,
			})),
		)

	deleteFilm = film =>
		api.films.delete(film).then(() =>
			this.setState(({ films }) => ({
				films: this.sortFilms(films.filter(item => item._id !== film._id)),
			})),
		)

	selectFilmForEdit = selectedFilm => () =>
		this.setState({
			selectedFilm,
			showAddForm: true,
		})

	render() {
		const { films } = this.state
		const numCol = this.props.location.pathname === "/films" ? "sixteen" : "ten"

		return (
			<AppContext.Provider
				value={{
					toggleFeatured: this.toggleFeatured,
					deleteFilm: this.deleteFilm,
					user: this.props.user,
				}}
			>
				<div className="ui stackable grid">
					{this.props.user.role === 'admin' ? (
						<>
							<Route
								path="/films/new"
								render={() => (
									<div className="six wide column">
										<FilmForm submit={this.saveFilm} film={{}} />
									</div>
								)}
							/>

							<Route
								path="/films/edit/:_id"
								render={props => (
									<div className="six wide column">
										<FilmForm
											submit={this.saveFilm}
											film={find(films, { _id: props.match.params._id, }) || {}}
										/>
									</div>
								)}
							/>
						</>
					) : (
							<Route path="/films/*" render={() => <Redirect to="/films" />} />
						)}


					<div className={`${numCol} wide column`}>
						{
							this.state.loading ? (
								<div className="ui icon message">
									<i className="notched circle loading icon" />
									<div className="content">
										<div className="header">films loading</div>
									</div>
								</div>
							) : (
									<FilmsList films={this.state.films} editFilm={this.selectFilmForEdit} deleteFilm={this.deleteFilm} />

								)
						}
					</div>
				</div>
			</AppContext.Provider>
		)
	}
}

export default FilmsPage
