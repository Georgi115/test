import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./redux/rootReducer";
import { BrowserRouter } from "react-router-dom";

const store = createStore(rootReducer);

store.subscribe(() => {
  localStorage.setItem("state", JSON.stringify(store.getState()));
});

const Application = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    ,
  </BrowserRouter>
);
ReactDOM.render(Application, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
