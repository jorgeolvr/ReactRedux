import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/index";

export default function Sum() {
  const numbers = useSelector((state) => state.numbers);

  return (
    <Card title="Soma dos números" blue>
      <div>
        <span>Resultado: </span>
        <strong>{numbers.min + numbers.max}</strong>
      </div>
    </Card>
  );
}
