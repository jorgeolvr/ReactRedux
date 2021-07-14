import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "../Card/index";

import changeMinNumber from "../../actions/ChangeMinNumber/index";
import changeMaxNumber from "../../actions/ChangeMaxNumber/index";

import "./styles.css";

export default function Interval() {
  const numbers = useSelector((state) => state.numbers);
  const dispatch = useDispatch();

  function handleMinChange(e) {
    dispatch(changeMinNumber(parseInt(e.target.value)));
  }

  function handleMaxChange(e) {
    dispatch(changeMaxNumber(parseInt(e.target.value)));
  }

  return (
    <Card title="Intervalo de números" red>
      <div className="Interval">
        <span>
          <strong>Mínimo:</strong>
          <input
            type="number"
            value={numbers.min}
            onChange={(event) => handleMinChange(event)}
          />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input
            type="number"
            value={numbers.max}
            onChange={(event) => handleMaxChange(event)}
          />
        </span>
      </div>
    </Card>
  );
}
