export const initialState = { count: 0 };

export function cartReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: Math.max(state.count - 1, 0) };
    default:
      return state;
  }
}
