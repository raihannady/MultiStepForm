import { produce } from "immer";
import { SET_STEP } from "./constant";
import { SET_USERDATA } from "./constant";

export const initialState = {
  step: 1,
  userdata: {},
};

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_STEP:
        draft.step = action.step;
        break;
      case SET_USERDATA:
        draft.userdata = action.userdata;
        break;
      default:
        break;
    }
  });

export default homeReducer;
