import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
// import NewPost from './NewPost/NewPost';

const AsyncNewPost = asyncComponent(() => {
  return import('./NewPost/NewPost');
});

class Blog extends Component {
  state = {
    auth: true,
  };

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
          {this.state.auth && (
            <Route path="/new-post" component={AsyncNewPost} />
          )}
          <Route path="/posts/" component={Posts} />
          <Route render={() => <h1>Not found</h1>} />

          {/* <Redirect from="/" to="/posts/" /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
