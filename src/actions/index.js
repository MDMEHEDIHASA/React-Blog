import _ from "lodash";
import jsonplaceholder from "../api/jsonplaceholder";

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const response = await jsonplaceholder.get("/posts");
    //we are not going to return any actin from our inner fuc in redux-thunk so
    //console.log(response);
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};

export const fetchUsers = (id) => {
  //console.log(id);
  return(dispatch,getState)=>{
    _fetchUser(id,dispatch);
  }
  }
  
  // return (dispatch, getState) => {
  //   let newId=id;
  //   _fetchUser(dispatch,newId);
  //   console.log(id);
  // };
//};

const _fetchUser = _.memoize(async(id,dispatch)=>{
  const response = await jsonplaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USERS', payload: response.data });
});

/*

export const fetchPosts = (jsonplaceholder) => {
  return async (dispatch,getState) => {
    const response = await jsonplaceholder.get("/posts");
    //we are not going to return any actin from our inner func in  redux-thunk
    return {
      type: "FETCH_POSTS",
      payload: response,
    };
  };
};

*/
