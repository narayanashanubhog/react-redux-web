import 'babel-polyfill';
import React from 'react';
import {render }from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router,browserHistory} from 'react-router';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {loadcourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';

const store=configureStore();
store.dispatch(loadcourses());
store.dispatch(loadAuthors());

render(
    <Provider store={store}>
<Router history={browserHistory} routes={routes} />
</Provider>,
document.getElementById('app')
);