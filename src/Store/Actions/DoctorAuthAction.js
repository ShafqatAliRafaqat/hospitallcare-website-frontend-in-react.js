import APIModel from "../../Models/APIModel";
import axios from "axios";

export const DOCTOR_SIGN_UP             =   "DOCTOR_SIGN_UP";
export const DOCTOR_SIGN_IN             =   "DOCTOR_SIGN_IN";
export const PHONE_VARIFICATION         =   "PHONE_VARIFICATION";
export const CODE_VARIFICATION          =   "CODE_VARIFICATION";
export const FORGET_PHONE_VARIFICATION  =   "FORGET_PHONE_VARIFICATION";
export const FORGET_PASSWORD            =   "FORGET_PASSWORD";
export const NEW_PASSWORD               =   "NEW_PASSWORD";
export const doctorSignIn = (data) => {
    return axios.post(APIModel.HOST+"doctor_signIn",data,{
        'header': {
            'Content-Type'  :   'application/json',
            'Action'        :   'application/json',
        }
    });
}  
export const doctorSignUp = (data) => {
    return axios.post(APIModel.HOST+"doctor_signUp",data,{
        'header': {
            'Content-Type'  :   'application/json',
            'Action'        :   'application/json',
        }
    });
}  
export const phoneVarification = (data) => {
    return axios.post(APIModel.HOST+"phone",data,{
        'header': {
            'Content-Type'  :   'application/json',
            'Action'        :   'application/json',
        }
    });
}   
export const codeVarification = (data) => {
    return axios.post(APIModel.HOST+"doctorCodeVarification",data,{
        'header': {
            'Content-Type'  :   'application/json',
            'Action'        :   'application/json',
        }
    });
}   
export const doctorForgetCodeVarification = (data) => {
    return axios.post(APIModel.HOST+"doctorForgetCodeVarification",data,{
        'header': {
            'Content-Type'  :   'application/json',
            'Action'        :   'application/json',
        }
    });
}  
export const newPassword = (data) => {
    return axios.post(APIModel.HOST+"newPasswordDoctor",data,{
        'header': {
            'Content-Type'  :   'application/json',
            'Action'        :   'application/json',
        }
    });
}   

export const forgetPhoneVarification = (data) => {
    return axios.post(APIModel.HOST+"forgotPasswordDoctor",data,{
        'header': {
            'Content-Type'  :   'application/json',
            'Action'        :   'application/json',
        }
    });
}   