import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
  state = {
    loadedPost: null,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.setState({ loadedPost: null });
      this.fetchData(this.props.id);
    }
  }

  async fetchData(id) {
    if (!id) {
      return;
    }
    try {
      const post = await axios.get(`/posts/${id}`);
      this.setState({ loadedPost: post.data });
    } catch (error) {
      //
    }
  }

  deletePostHandler = () => {
    const { id } = this.props;
    axios.delete(`/posts/${id}`).then(response => console.log(response));
  };

  render() {
    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
    if (this.props.id) {
      post = <p style={{ textAlign: 'center' }}>Loading</p>;
    }
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={this.deletePostHandler}>
              Delete
            </button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
