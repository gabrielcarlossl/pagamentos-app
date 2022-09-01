import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./main/app";
import reducers from './main/reducers'

// o store é o estado unico da aplicação, gerado pelas combinações dos reducers
// a aplicação fica integrada com o redux depois de envolver ela pelo PROVIDER 
const store = createStore(reducers)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById("app"));
