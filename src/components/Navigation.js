import React from 'react';
import PropTypes from 'prop-types';

const Navigation = (props) => {
	const {
		isSignedIn,
		routeChange,
		restart,
		resetClicks,
	} = props;

	if (isSignedIn) {
		return (
			<nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
				<p onClick={() => { routeChange('signin'); restart(); resetClicks(); }} className="f3 link dim black underline pa3 pointer" role="presentation">Sign Out</p>
			</nav>
		);
	}
	return (
		<nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
			<p onClick={() => routeChange('signin')} className="f3 link dim black underline pa3 pointer" role="presentation">Sign In</p>
			<p onClick={() => routeChange('register')} className="f3 link dim black underline pa3 pointer" role="presentation">Register</p>
		</nav>
	);
};

Navigation.propTypes = {
	isSignedIn: PropTypes.bool.isRequired,
	routeChange: PropTypes.func.isRequired,
	restart: PropTypes.func.isRequired,
	resetClicks: PropTypes.func.isRequired,
};

export default Navigation;
