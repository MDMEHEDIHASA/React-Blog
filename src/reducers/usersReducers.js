export default (oldListOfUsers=[],action)=>{
    switch(action.type){
        case 'FETCH_USERS':
            return [...oldListOfUsers,action.payload];
        default:
            return oldListOfUsers;
    }
}