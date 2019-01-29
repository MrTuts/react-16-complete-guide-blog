import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
  render() {
    return (
      <div className={'Blog'}>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts/"
                  exact //handle active class
                  activeClassName="my-active" // use different class name for active
                  activeStyle={{
                    color: '#da923f',
                    textDecoration: 'underline',
                  }} //inline style for active
                >
                  Home
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
        <Switch>
          <Route path="/new-post" component={NewPost} />
          <Route path="/posts/" component={Posts} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
