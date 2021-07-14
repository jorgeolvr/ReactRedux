import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/index";

export default function Average() {
  const numbers = useSelector((state) => state.numbers);

  return (
    <Card title="Média dos números" green>
      <div>
        <span>Resultado: </span>
        <strong>{(numbers.max + numbers.min) / 2}</strong>
      </div>
    </Card>
  );
}
