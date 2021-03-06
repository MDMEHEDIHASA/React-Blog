import React from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../actions";

import UserHeader from '../components/UserHeader'; 

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderList() {
      return this.props.posts.map(post => {
        //console.log(post.title);
        return (
          <div className="item" key={post.id}>
            <i className="large middle aligned icon user" />
            <div className="content">
              <div className="description">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
              <UserHeader userId={post.userId}/>
            </div>
          </div>
        );
      });
    }
  
  render() {
    //console.log(this.props);
    //console.log(this.renderList());
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  //console.log("state:", state);
  return { 
      posts: state.postsReducers,
      
     };
};

export default connect(mapStateToProps, { fetchPosts})(PostList);
