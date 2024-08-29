import './globalStyles/index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import * as Phonebook from "./components/Phonebook/index"
import { Provider } from "react-redux";
import { store } from "./components/redux/store";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Phonebook.Contacts />
    </Provider>
  </React.StrictMode>,
);
