import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {
  render() {
    return (
      <div className={'Blog'}>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts"
                  activeClassName="my-active" // use different class name for active
                  activeStyle={{
                    color: '#da923f',
                    textDecoration: 'underline',
                  }} //inline style for active
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    //pathname: `${this.props.match.url}/new-post`, relative path
                    pathname: '/new-post', //absolute path
                    hash: '#submit',
                    search: '?quick-submit=true',
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <Posts />} /> */}
        <Route path="/posts" exact component={Posts} />
        <Switch>
          <Route path="/new-post" component={NewPost} />
          <Route path="/posts/:id" exact component={FullPost} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
