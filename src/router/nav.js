import React from 'react';
import { NavLink } from 'react-router-dom';
import "./nav.css";

//nav.js
const NavBar = () => (
	<div>
		<div>
			<NavLink  exact to='/'>redirect</NavLink>--
			<NavLink to='/home'>home</NavLink>--
			<NavLink to='/demo'>demo</NavLink>--
			<NavLink to='/react' >404</NavLink>
		</div>
	</div>
)
export default NavBar;