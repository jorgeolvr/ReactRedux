import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/index";

export default function Sort() {
  const numbers = useSelector((state) => state.numbers);

  return (
    <Card title="Sorteio de um dos números" purple>
      <div>
        <span>Resultado: </span>
        <strong>
          {parseInt(Math.random() * (numbers.max - numbers.min)) + numbers.min}
        </strong>
      </div>
    </Card>
  );
}
