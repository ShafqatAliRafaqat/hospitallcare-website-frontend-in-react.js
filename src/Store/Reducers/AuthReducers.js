import * as actions from "../Actions/AuthAction";
import * as customerActions from "../Actions/CustomerAction";

const initSate = {
  user : (localStorage.user)? JSON.parse(localStorage.user):null,
};

const AuthReducers = (state = initSate, action) => {
  setTimeout(function(){localStorage.user = null; window.location.assign("https://www.hospitallcare.com/"); window.location.reload();}, 1000*60*30);
  switch (action.type) {
    case actions.PHONE_VARIFICATOIN: {
      return { ...state, users: action.payload };
    }
    case actions.CODE_VARIFICATOIN: {
      return { ...state, users: action.payload };
    }
    case actions.BOOK_APPOINTMENT: {
      return { ...state, users: action.payload };
    }
    case actions.SIGN_IN: {
      let user = {...action.payload,accessToken:action.payload.access_token};
      localStorage.user = JSON.stringify(user);
      return { ...state, users: action.payload };
    }
    case actions.SIGN_UP: {
      let user = {...action.payload,accessToken:action.payload.access_token};
      localStorage.user = JSON.stringify(user);
      return { ...state, users: action.payload };
    }
    case customerActions.FETCH_CUSTOMER: {
      let user = {customer:action.payload,accessToken:action.access_token, access_token:action.access_token,};
      
      localStorage.user = null;
      localStorage.user = JSON.stringify(user);
      return { ...state, users: action.payload.data };
    }
    case customerActions.UPDATE_CUSTOMER: {
      let user = {customer:action.payload,accessToken:action.access_token, access_token:action.access_token,};

      localStorage.user = null;
      localStorage.user = JSON.stringify(user);
      return { ...state, users: action.payload.data };
    }
    case actions.LOGOUT: {
      localStorage.user = null;
      return { ...state, user: null };
    }
    default:
    return state;
  }
};

export default AuthReducers;
