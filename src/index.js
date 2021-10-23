import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk";
import App from './App';
import rootReducer from "./reducers/rootReducer.js"

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))



ReactDOM.render(
  <Provider store={store}>
    <Router>
          <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
