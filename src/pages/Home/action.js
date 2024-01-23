import { SET_STEP } from "./constant";
import { SET_USERDATA } from "./constant";

export const setStep = (step) => ({
  type: SET_STEP,
  step,
});
export const setUserData = (userdata) => ({
  type: SET_USERDATA,
  userdata,
});
