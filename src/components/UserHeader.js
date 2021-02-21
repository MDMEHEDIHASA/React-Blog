import React from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions/index';



class UserHeader extends React.Component{
    componentDidMount(){
        this.props.fetchUsers(this.props.userId); 
    }
    render(){
        //console.log(this.props);
        //const user = this.props.users.find(user=>user.id === this.props.userId);
        if(!this.props.user){
            return null;
        }
        return(<div className="header">{this.props.user.name}</div>)
        
    }
}

const mapStateToProps = (state,ownProps)=>{
    //console.log(state);
    return{user:state.usersReducers.find(user=>user.id === ownProps.userId)}
}

export default connect(mapStateToProps,{fetchUsers})(UserHeader);