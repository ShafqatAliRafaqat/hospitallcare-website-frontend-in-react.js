import * as actions from "../Actions/TreatmentAction";

const initSate = {
  treatments : [],
};

const TreatmentReducer = (state = initSate, action) => {
  switch (action.type) {
    case actions.GET_ALL_TREATMENTS: {
      return { ...state, treatments: action.payload };
    }
    case actions.FETCH_TREATMENT: {
      return { ...state, treatments: action.payload };
    }
    case actions.FETCH_SPECIALIZATION: {
      return { ...state, treatments: action.payload.top_Specializations_names};
    }
    default:
    return state;
  }
};

export default TreatmentReducer;
