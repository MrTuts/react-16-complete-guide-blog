import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import axios from '../../../axios';
import './Posts.css';

class Posts extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    try {
      const response = await axios.get('/posts');
      const posts = response.data.slice(0, 4);
      const updatedPosts = posts.map(post => {
        return {
          ...post,
          author: 'Max',
        };
      });
      this.setState({ posts: updatedPosts });
    } catch (error) {
      this.setState({ error: true });
    }
  }

  postSelectedHandler(id) {
    this.props.history.push('/posts/' + id);
  }

  render() {
    let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
        );
      });
    }

    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;
