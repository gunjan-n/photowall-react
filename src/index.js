import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';

import './styles/stylesheet.css';
import { BrowserRouter } from "react-router-dom";

import { legacy_createStore as createStore} from 'redux'
import rootReducer from "./redux/reducer"
import { Provider } from "react-redux";
import App from "./Components/App";


const store = createStore(rootReducer);

const root = createRoot(document.getElementById("root"));


root.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>);

