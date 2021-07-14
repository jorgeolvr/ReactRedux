import React from "react";
import Interval from "./components/Interval/index";
import Average from "./components/Average/index";
import Sum from "./components/Sum/index";
import Sort from "./components/Sort/index";
import { Provider } from "react-redux";
import store from "./store/index";
import "./App.css";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Exercício React-Redux (Simples)</h1>
        <div className="Linha">
          <Interval />
        </div>
        <div className="Linha">
          <Average />
          <Sum />
          <Sort />
        </div>
      </div>
    </Provider>
  );
}
