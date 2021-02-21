

export default (oldDataFetch=[],action)=>{
    switch(action.type){
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return oldDataFetch;
    }
}