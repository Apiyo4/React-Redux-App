import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {reducer} from './state/reducers';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux'

const monsterReducer = combineReducers({
    reducer: reducer,
})
const store = createStore(monsterReducer);

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
