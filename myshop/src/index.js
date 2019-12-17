import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import Login from './Login';
import Registration from './Registration';
import Cart from './Cart';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer';
import { BrowserRouter, Route } from 'react-router-dom';


let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
/*
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
      		<div>
        		<Route exact path="/" component={App} />
        		<Route exact path="/login" component={Login} />
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/cart" component={Cart} />
      		</div>
    	</BrowserRouter>
    </Provider>,
   	document.getElementById('root')
); */
setTimeout(ReactDOM.render, 100, <Provider store={store}>
    <BrowserRouter>
          <div>
            <Route exact path="/" component={App} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/cart" component={Cart} />
          </div>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root'));