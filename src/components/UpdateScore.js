import React from 'react';
import PropTypes from 'prop-types';

const UpdateScore = (props) => {
	const {
		name,
		id,
		clicks,
		restart,
		routeChange,
	} = props;

	fetch('http://localhost:3000/updatescore', {
		method: 'put',
		headers: {	'Content-Type': 'application/json'	},
		body: JSON.stringify({
			id,
			clicks,
		}),
	})
		.then(res => res.json())
		.catch(() => 'unable to update');
	return (
		<div>
			<div className="red f3 tc">
				{`congratulations ${name}, you solved memorygame after...`}
			</div>
			<div className="red f1 tc">
				{`${clicks} clicks`}
			</div>
			<div className="centerbutton">
				<button onClick={() => { restart(); routeChange('memorygame'); }} className="button" type="button">PLAY AGAIN</button>
				<button onClick={() => routeChange('leaderboard')} className="button" type="button">LEADERBOARD</button>
			</div>
		</div>
	);
};

UpdateScore.propTypes = {
	name: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	clicks: PropTypes.number.isRequired,
	restart: PropTypes.func.isRequired,
	routeChange: PropTypes.func.isRequired,
};

export default UpdateScore;
