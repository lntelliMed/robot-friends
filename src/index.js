import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'tachyons';

import './index.css';
import CardList from './containers/CardList';
import robotGeneratorReducer from './store/reducers/robotGenerator';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
  robotGenerator: robotGeneratorReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
  <Provider store={store} >
    <BrowserRouter>
      <CardList />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
