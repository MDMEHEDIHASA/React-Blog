import {combineReducers} from 'redux';

import postsReducers from '../reducers/postsReducers';
import usersReducers from '../reducers/usersReducers';

/*const getDataReducer = (oldDataFetch=[],action)=>{
    switch(action.type){
        case 'FETCH_USER':
            return [...oldDataFetch,action.payload];
        default:
            return oldDataFetch;
    }
}*/

export default combineReducers({
   postsReducers:postsReducers,
   usersReducers:usersReducers
})