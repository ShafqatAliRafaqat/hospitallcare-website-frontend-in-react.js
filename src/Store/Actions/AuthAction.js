import APIModel from "../../Models/APIModel";
import axios from "axios";

export const PHONE_VARIFICATOIN         =   "PHONE_VARIFICATOIN";
export const FORGET_PHONE_VARIFICATOIN  =   "FORGET_PHONE_VARIFICATOIN";
export const CODE_VARIFICATOIN          =   "CODE_VARIFICATOIN";
export const BOOK_APPOINTMENT           =   "BOOK_APPOINTMENT";
export const FORGET_PASSWORD            =   "FORGET_PASSWORD";
export const NEW_PASSWORD               =   "NEW_PASSWORD";
export const SIGN_UP                    =   "SIGN_UP";
export const SIGN_IN                    =   "SIGN_IN";
export const LOGOUT                     =   "LOGOUT";
export const SEND_FEEDBACK              =   "SEND_FEEDBACK";

export const phoneVarification = (data) => {
    return axios.post(APIModel.HOST+"phone",data,{
        'header': {
            'Content-Type'  :   'application/json',
            'Action'        :   'application/json',
        }
    });
}   
export const forgetPhoneVarification = (data) => {
    return axios.post(APIModel.HOST+"forgetPhoneVarification",data,{
        'header': {
            'Content-Type'  :   'application/json',
            'Action'        :   'application/json',
        }
    });
}   
export const codeVarification = (data) => {
    return axios.post(APIModel.HOST+"codeVarification",data,{
        'header': {
            'Content-Type'  :   'application/json',
            'Action'        :   'application/json',
        }
    });
}   
export const signUp = (data) => {
    return axios.post(APIModel.HOST+"signUp",data,{
        'header': {
            'Content-Type'  :   'application/json',
            'Action'        :   'application/json',
        }
    });
}   
export const signIn = (data) => {
    return axios.post(APIModel.HOST+"signIn",data,{
        'header': {
            'Content-Type'  :   'application/json',
            'Action'        :   'application/json',
        }
    });
}   
  
export const newPassword = (data) => {
    return axios.post(APIModel.HOST+"newPassword",data,{
        'header': {
            'Content-Type'  :   'application/json',
            'Action'        :   'application/json',
        }
    });
}   
export const bookAppointment = (data) => {
    return axios.post(APIModel.HOST+"book_appointment",data,{
        'header': {
            'Content-Type'  :   'application/json',
            'Action'        :   'application/json',
        }
    });
}   
export const logout = token => {
    return axios.post(APIModel.HOST + "logout",null,{
      'headers': {
        'Content-Type': 'application/json',
        'Accept':'application/json',
        'Authorization':'Bearer '+token
      }
    });
  };
export const sendFeedback = (data) => {
    return axios.post(APIModel.HOST+"send_feedback",data,{
        'header': {
            'Content-Type'  :   'application/json',
            'Action'        :   'application/json',
        }
    });
}

export const doctorSignIn = (data) => {
    return axios.post(APIModel.HOST+"doctor_signIn",data,{
        'header': {
            'Content-Type'  :   'application/json',
            'Action'        :   'application/json',
        }
    });
}  