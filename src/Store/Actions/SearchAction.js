import APIModel from "../../Models/APIModel";
import axios from "axios";

export const    GET_ALL_SEARCH  =   "GET_ALL_SEARCH";

export const getHomeSearch  =   (search)    =>  {
    return axios.get(APIModel.HOST+"homesearch?search="+search,{
        'headers':  {
            'Content-Type': 'application/json',
            'Accept':   'application/json',
        }
    });
};  