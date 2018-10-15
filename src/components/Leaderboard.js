import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Leaderboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			leaders: [],
			scores: [],
		};
	}

	componentDidMount() {
		fetch('http://localhost:3000/leaderboard')
			.then(res => res.json())
			.then((data) => {
				if (data.length > 2) {
					const leaders = [];
					const scores = [];
					for (let i = 0; i < 3; i += 1) {
						leaders.push(data[i].name);
						scores.push(data[i].clicks);
					}
					this.setState({
						leaders,
						scores,
					});
				}
			});
	}

	render() {
		const { routeChange, restart, resetClicks } = this.props;
		if (this.state.leaders.length < 3) {
			return (
				<div className="f3 tc">
					{'AT LEAST 3 USERS SHOULD SOLVE GAME FOR LEADERBOARD TO BE CREATED'}
				</div>
			);
		}
		return (
			<div>
				<div className="red f1 tc">
					{' Leaderboard: '}
				</div>
				<div>
					<div className="gold f3 tc">
						{`1. ${this.state.leaders[0]} with ${this.state.scores[0]} clicks`}
					</div>
					<div className="silver f3 tc">
						{`2. ${this.state.leaders[1]} with ${this.state.scores[1]} clicks`}
					</div>
					<div className="#cc6633 f3 tc">
						{`3. ${this.state.leaders[2]} with ${this.state.scores[2]} clicks`}
					</div>
				</div>
				<div className="tc">
					<button onClick={() => { restart(); routeChange('memorygame'); resetClicks(); }} className="button" type="button">PLAY AGAIN</button>
				</div>
			</div>
		);
	}
}

Leaderboard.propTypes = {
	restart: PropTypes.func.isRequired,
	routeChange: PropTypes.func.isRequired,
	resetClicks: PropTypes.func.isRequired,
};

export default Leaderboard;
