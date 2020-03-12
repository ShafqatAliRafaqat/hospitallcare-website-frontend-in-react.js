import * as actions from "../Actions/MediaHubAction";

const initSate = {
  mediahub : [],
};
const MediaHubReducer = (state = initSate, action) => {
  switch (action.type) {
    case actions.GET_BLOGS: {
      return { ...state, mediahub: action.payload };
    }
    case actions.GET_BLOG: {
      return { ...state, mediahub: action.payload };
    }
    case actions.GET_BLOG_CATEGORY: {
      return { ...state, mediahub: action.payload };
    }
    case actions.GET_VLOGS: {
      return { ...state, mediahub: action.payload };
    }
    case actions.GET_VLOG: {
      return { ...state, mediahub: action.payload };
    }
    case actions.GET_VIDEOS: {
      return { ...state, mediahub: action.payload };
    }
    case actions.GET_VIDEO: {
      return { ...state, mediahub: action.payload };
    }
    default:
    return state;
  }
};

export default MediaHubReducer;
