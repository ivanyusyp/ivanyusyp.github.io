import React, { useContext } from "react"
import PropTypes from "prop-types"
import { AppContext } from "../App"

const Description = ({ isDescriptionVisible, id }) => {
	const { toggleDescription, findFilmById } = useContext(AppContext)
	const film = findFilmById(id);
	const cls = isDescriptionVisible ? "eye slash" : "eye"
	return (
		<div>
			<span className="left floated" onClick={() => toggleDescription(id)}>
				<i className={`icon ${cls}`} />
			</span>
			{isDescriptionVisible && <span>{film.description}</span>}
		</div>
	)
}

Description.propTypes = {
	isDescriptionVisible: PropTypes.bool.isRequired,
}

export default Description