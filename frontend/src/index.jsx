import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import promise from "redux-promise";

import App from "./main/app";
import reducers from "./main/reducers";

// o store é o estado unico da aplicação, gerado pelas combinações dos reducers
// a aplicação fica integrada com o redux depois de envolver ela pelo PROVIDER

const store = applyMiddleware(promise)(createStore)(reducers);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
