import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CardList from '../components/CardList';
import Restart from '../components/Restart';
import SignIn from '../components/SignIn';
import Navigation from '../components/Navigation';
import Register from '../components/Register';
import UpdateScore from '../components/UpdateScore';
import Leaderboard from '../components/Leaderboard';
import allActions from '../actions/actions';
import './App.css';

const mapStateToProps = state => ({
	cards: state.update.toJS().cards,
	route: state.route,
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(allActions, dispatch),
});

let count = 0;

class App extends Component {
	constructor() {
		super();
		this.state = {
			user: {
				id: '',
				name: '',
				email: '',
				clicks: 0,
				joined: '',
			},
		};
	}

	clicking = () => {
		const { user } = this.state;
		count += 1;
		this.setState(Object.assign(user, { clicks: count }));
	}

	loadUser = (data) => {
		this.setState({
			user: {
				id: data.id,
				name: data.name,
				email: data.email,
				clicks: 0,
				joined: data.joined,
			},
		});
	}

	resetClicks = () => {
		const { user } = this.state;
		count = 0;
		this.setState(Object.assign(user, { clicks: count }));
	}

	render() {
		const { cards, route, actions } = this.props;
		let isSignedIn = false;
		if (route === 'memorygame' || route === 'updatescore' || route === 'leaderboard') {
			isSignedIn = true;
		}
		const user = this.state;
		const {
			id,
			name,
			clicks,
		} = user;
		return (
			<div>
				<Navigation
					isSignedIn={isSignedIn}
					routeChange={actions.routeChange}
					restart={actions.restart}
					resetClicks={this.resetClicks}
				/>
				{(route === 'signin')
					? (
						<div>
							<SignIn routeChange={actions.routeChange} loadUser={this.loadUser} />
						</div>
					)
					: (route === 'register')
						? (
							<Register loadUser={this.loadUser} routeChange={actions.routeChange} />
						)
						: (route === 'updatescore')
							? (
								<div>
									<UpdateScore
										name={name}
										id={id}
										clicks={clicks}
										restart={actions.restart}
										routeChange={actions.routeChange}
										resetClicks={this.resetClicks}
									/>
								</div>
							)
							: (route === 'leaderboard')
								? (
									<Leaderboard
										routeChange={actions.routeChange}
										restart={actions.restart}
										resetClicks={this.resetClicks}
									/>
								)
								: (
									<div>
										<div className="cards">
											<CardList
												flipCard={actions.flipCard}
												cards={cards}
												clicking={this.clicking}
												routeChange={actions.routeChange}
											/>
										</div>
										<Restart resetClicks={this.resetClicks} restart={actions.restart} />
									</div>
								)
				}
			</div>
		);
	}
}

App.propTypes = {
	cards: PropTypes.arrayOf(PropTypes.object).isRequired,
	actions: PropTypes.objectOf(PropTypes.func).isRequired,
	route: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
