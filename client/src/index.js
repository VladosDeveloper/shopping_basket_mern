import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StateProvider } from "./store";
import { initialState, reducer } from "./reducers/rootReducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialState={initialState}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
