import APIModel from "../../Models/APIModel";
import axios from "axios";

export const FETCH_CUSTOMER   = "FETCH_CUSTOMER";
export const UPDATE_CUSTOMER   = "UPDATE_CUSTOMER";

export const fetchCustomer = (id, token) => {
  return axios.get(APIModel.HOST+"fetch_customer/"+id,{
    'headers': {
      'Content-Type': 'application/json',
      'Accept':'application/json',
      'Authorization':'Bearer '+token
    }
  });
};

export const updateCustomer = (data, token) => {
  return axios.post(APIModel.HOST+"update_customer_profile",data,{
    'headers': {
      'Content-Type': 'application/json',
      'Accept':'application/json',
      'Authorization':'Bearer '+token
    }
  });
};
export const getRiskFactor = (id, token) => {
  return axios.get(APIModel.HOST+"get_riskfactor/"+id,{
    'headers': {
      'Content-Type': 'application/json',
      'Accept':'application/json',
      'Authorization':'Bearer '+token
    }
  });
};
export const updateRiskFactor = (data, token) => {
  return axios.post(APIModel.HOST+"update_riskfactor",data,{
    'headers': {
      'Content-Type': 'application/json',
      'Accept':'application/json',
      'Authorization':'Bearer '+token
    }
  });
};
export const getAllergies = (id, token) => {
  return axios.get(APIModel.HOST+"get_allergies/"+id,{
    'headers': {
      'Content-Type': 'application/json',
      'Accept':'application/json',
      'Authorization':'Bearer '+token
    }
  });
};
export const updateAllergies = (data, token) => {
  return axios.post(APIModel.HOST+"update_allergies",data,{
    'headers': {
      'Content-Type': 'application/json',
      'Accept':'application/json',
      'Authorization':'Bearer '+token
    }
  });
};
export const getDoctorNotes = (id, token) => {
  return axios.get(APIModel.HOST+"get_doctornotes/"+id,{
    'headers': {
      'Content-Type': 'application/json',
      'Accept':'application/json',
      'Authorization':'Bearer '+token
    }
  });
};