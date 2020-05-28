export const increment = (nm) => {
  return {
    type: "INCREMENT",
    payload: nm,
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
export const multiplication = (ml) => {
  return {
    type: "MULTIPLICATION",
    payload: ml
  };
};
