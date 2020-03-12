import APIModel from "../../Models/APIModel";
import axios from "axios";

export const    GET_BLOGS         =   "GET_BLOGS";
export const    GET_BLOG          =   "GET_BLOG";
export const    GET_BLOG_CATEGORY =   "GET_BLOG_CATEGORY";
export const    GET_VLOGS         =   "GET_VLOGS";
export const    GET_VLOG          =   "GET_VLOG";
export const    GET_VIDEOS        =   "GET_VIDEOS";
export const    GET_VIDEO         =   "GET_VIDEO";

export const getAllBlogs  =   (search)    =>  {
    return axios.get(APIModel.HOST+"blogs"+search,{
        'headers':  {
            'Content-Type': 'application/json',
            'Accept':   'application/json',
        }
    });
};
export const fetchBlog  =   (id)    =>  {
    return axios.get(APIModel.HOST+"blog/"+id,{
        'headers':  {
            'Content-Type': 'application/json',
            'Accept':   'application/json',
        }
    });
};
export const getBlogCategory  =   (id,search)    =>  {
    return axios.get(APIModel.HOST+"blog_category/"+id+"?page ="+search,{
        'headers':  {
            'Content-Type': 'application/json',
            'Accept':   'application/json',
        }
    });
};
export const getAllVlogs  =   (search)    =>  {
    return axios.get(APIModel.HOST+"vlogs"+search,{
        'headers':  {
            'Content-Type': 'application/json',
            'Accept':   'application/json',
        }
    });
};
export const fetchVlog  =   (id)    =>  {
    return axios.get(APIModel.HOST+"vlog/"+id,{
        'headers':  {
            'Content-Type': 'application/json',
            'Accept':   'application/json',
        }
    });
};
export const getAllVideos  =   (search)    =>  {
    return axios.get(APIModel.HOST+"videos"+search,{
        'headers':  {
            'Content-Type': 'application/json',
            'Accept':   'application/json',
        }
    });
};
export const fetchVideo  =   (id)    =>  {
    return axios.get(APIModel.HOST+"video/"+id,{
        'headers':  {
            'Content-Type': 'application/json',
            'Accept':   'application/json',
        }
    });
};