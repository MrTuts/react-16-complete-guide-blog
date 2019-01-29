import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
  state = {
    loadedPost: null,
  };

  componentDidMount() {
    /* 
      to get query params
      const query = new URLSearchParams(this.props.location.search);
      for (let param of query.entries()) {
        console.log(param); // yields ['start', '5']
      }
     */
    const id = this.props.match.params.id;
    if (id) {
      this.setState({ loadedPost: null });
      this.fetchData(id);
    }
  }

  componentDidUpdate(prevProps) {
    const id = this.props.match.params.id;
    if (id !== prevProps.match.params.id) {
      this.setState({ loadedPost: null });
      this.fetchData(id);
    }
  }

  async fetchData(id) {
    try {
      const post = await axios.get(`/posts/${id}`);
      this.setState({ loadedPost: post.data });
    } catch (error) {
      //
    }
  }

  deletePostHandler = () => {
    const { id } = this.props.match.params.id;
    axios.delete(`/posts/${id}`).then(response => console.log(response));
  };

  render() {
    let post = <p style={{ textAlign: 'center' }}>Loading</p>;

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
