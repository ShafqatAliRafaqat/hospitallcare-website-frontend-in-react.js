import * as actions from '../Actions/SearchAction';

const initSate = {
    search : []
  };

const SearchAReducers = (state = initState, action) => {
    switch(action.type){
        case actions.getHomeSearch: {
            return  {...state,search: action.payload };
        }
    }
};

export default SearchAReducers;