import * as actions from "../Actions/DoctorAction";

const initSate = {
  doctors : []
};

const DoctorReducer = (state = initSate, action) => {
  switch (action.type) {
    case actions.GET_ALL_DOCTORS: {
      return { ...state, doctors: action.payload };
    }
    case actions.FETCH_DOCTOR: {
      return { ...state, doctors: action.payload };
    }
    default:
    return state;
  }
};

export default DoctorReducer;
