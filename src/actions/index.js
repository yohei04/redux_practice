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
