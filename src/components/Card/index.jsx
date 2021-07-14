import React from "react";
import "./styles.css";

export default function Card(props) {
  function getColor(props) {
    var color = "";

    if (props.red) {
      color = "Red";
    } else if (props.green) {
      color = "Green";
    } else if (props.blue) {
      color = "Blue";
    } else if (props.purple) {
      color = "Purple";
    }

    return color;
  }

  return (
    <div className={`Card ${getColor(props)}`}>
      <div className="Header">
        <span className="Title">{props.title}</span>
      </div>
      <div className="Content">{props.children}</div>
    </div>
  );
}
