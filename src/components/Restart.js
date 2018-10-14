import React from 'react';
import PropTypes from 'prop-types';

const Restart = ({ restart, resetClicks }) => (
	<div className="centerbutton">
		<button onClick={() => { restart(); resetClicks(); }} className="button" type="button">RESTART GAME</button>
	</div>
);

Restart.propTypes = {
	restart: PropTypes.func.isRequired,
	resetClicks: PropTypes.func.isRequired,
};

export default Restart;
