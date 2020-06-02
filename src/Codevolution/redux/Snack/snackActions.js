import { BUY_SNACK } from "./snackTypes";

export const buySnack = (number) => {
  return {
    type: BUY_SNACK,
    payload: number
  };
};
