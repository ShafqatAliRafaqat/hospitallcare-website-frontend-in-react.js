import APIModel from "../../Models/APIModel";
import axios from "axios";

export const POST_LEAD                  =   "POST_LEAD";
export const FETCH_CURRENT_APPOINTMENT  =   "FETCH_CURRENT_APPOINTMENT";
export const CANCEL_APPOINTMENT         =   "CANCEL_APPOINTMENT";
export const FETCH_APPOINTMENT_HISTORY  =   "FETCH_APPOINTMENT_HISTORY";
export const FETCH_CURRENT_LAB_TEST     =   "FETCH_CURRENT_LAB_TEST";
export const FETCH_LAB_TEST_HISTORY     =   "FETCH_LAB_TEST_HISTORY";

export const postLeadCrm    =   (data)  =>  {
    return axios.post(APIModel.HOST+"create_lead",data,{
        'header': {
            'Content-Type'  :   'application/json',
            'Action'        :   'application/json',
        }
    });
};
export const fetchApprovedAppointment = (id,token) => {
    return axios.get(APIModel.HOST + "approved_treatment_appointments",{
      'headers': {
        'Content-Type': 'application/json',
        'Accept':'application/json',
        'Authorization':'Bearer '+token
      }
    });
};
export const fetchPendingAppointment = (id,token) => {
    return axios.get(APIModel.HOST + "pending_treatment_appointments",{
      'headers': {
        'Content-Type': 'application/json',
        'Accept':'application/json',
        'Authorization':'Bearer '+token
      }
    });
};
export const cancelAppointment = (id,token) => {
    return axios.get(APIModel.HOST + "cancel_appointments/"+id,{
      'headers': {
        'Content-Type': 'application/json',
        'Accept':'application/json',
        'Authorization':'Bearer '+token
      }
    });
};
export const fetchAppointmentHistory = (id,token) => {
    return axios.get(APIModel.HOST + "get_treatment_history",{
      'headers': {
        'Content-Type': 'application/json',
        'Accept':'application/json',
        'Authorization':'Bearer '+token
      }
    });
};
export const fetchCurrentLabTest = (id,token) => {
    return axios.get(APIModel.HOST + "get_lab_appointments",{
      'headers': {
        'Content-Type': 'application/json',
        'Accept':'application/json',
        'Authorization':'Bearer '+token
      }
    });
};
export const fetchLabTestHistory = (id,token) => {
    return axios.get(APIModel.HOST + "get_lab_history",{
      'headers': {
        'Content-Type': 'application/json',
        'Accept':'application/json',
        'Authorization':'Bearer '+token
      }
    });
};