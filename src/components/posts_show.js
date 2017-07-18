import React, { Component } from 'react';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    this.props.fetchPost();
  }

  render() {
    return (
      <div>
        {this.props.post.title}
      </div>
    );
  };
}

export default PostsShow;
