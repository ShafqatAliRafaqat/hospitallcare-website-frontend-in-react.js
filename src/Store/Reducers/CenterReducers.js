import * as actions from "../Actions/CenterAction";

const initSate = {
  centers : []
};

const CenterReducer = (state = initSate, action) => {
  switch (action.type) {
    case actions.GET_ALL_CENTERS: {
      return { ...state, centers: action.payload };
    }
    default:
    return state;
  }
};

export default CenterReducer;
