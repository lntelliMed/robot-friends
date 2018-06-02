import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createLogger } from 'redux-logger';
import 'tachyons';

import './index.css';
import App from './App';
import robotGeneratorReducer from './store/reducers/robotGenerator';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
  robotGenerator: robotGeneratorReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = createLogger();

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

const app = (
  <Provider store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
