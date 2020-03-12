import APIModel from "../../Models/APIModel";
import axios from "axios";

export const GET_ALL_DOCTORS  = "GET_ALL_DOCTORS";
export const GET_TOP_DOCTORS  = "GET_TOP_DOCTORS";
export const FILTER_DOCTORS   = "FILTER_DOCTORS";
export const FETCH_DOCTOR     = "FETCH_DOCTOR";

export const getAllDoctors = (search,data) => {
  return axios.post(APIModel.HOST+"all_doctors?"+search,data,{
    'headers': {
      'Content-Type': 'application/json',
      'Accept':'application/json',
    }
  });
};

export const getTopDoctors = (search,data) => {
  return axios.get(APIModel.HOST+"top_doctors?"+search,data,{
    'headers': {
      'Content-Type': 'application/json',
      'Accept':'application/json',
    }
  });
};

export const fetchDoctor = (id,data) => {
  return axios.post(APIModel.HOST+"fetch_doctor/"+id,data,{
    'headers': {
      'Content-Type': 'application/json',
      'Accept':'application/json',
    }
  });
};

export const filterDoctors = (data) => {
  return axios.get(APIModel.HOST+"filter_doctor",data,{
    'headers': {
      'Content-Type': 'application/json',
      'Accept':'application/json',
    }
  });
};