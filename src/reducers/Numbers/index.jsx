const initialState = {
  min: 1,
  max: 10,
};

export default function numbers(state = initialState, action) {
  switch (action.type) {
    case "MIN_NUMBER_ALTERED":
      return {
        ...state,
        min: action.payload,
      };
    case "MAX_NUMBER_ALTERED":
      return {
        ...state,
        max: action.payload,
      };
    default:
      return state;
  }
}
