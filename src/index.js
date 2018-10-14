import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/reducers';
import App from './containers/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

const [update, route] = reducers;
const rootReducers = combineReducers({ update, route });
const store = createStore(rootReducers);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
