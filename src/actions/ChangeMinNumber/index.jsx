export default function changeMinNumber(num) {
  return {
    type: "MIN_NUMBER_ALTERED",
    payload: num,
  };
}
