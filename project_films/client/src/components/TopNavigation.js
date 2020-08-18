import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const TopNavigation = () => (
	<div className='ui secondary pointng menu'>
		<NavLink exact to='/' className="item">
			Home
		</NavLink>
		<NavLink exact to='/films' className='item'>
			Films
		</NavLink>
		<NavLink exact to="/films/new" classname='item'>
			<i className="icon plus" />
				Add new film
		</NavLink>
	</div>
)

TopNavigation.propTypes = {
	showAddForm: PropTypes.func.isRequired,
}

export default TopNavigation
