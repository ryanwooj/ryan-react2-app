import React from 'react';
import { Route, Link} from 'react-router-dom';

const Post = ({match}) => {
  return (
    <h2>
      {match.params.title}
    </h2>
  )
};

const Posts = ({}) => (
  <div>
    <Link to="/posts/react">React</Link>
    <hr/>
    <Link to="/posts/redux">Redux</Link>
    <hr/>
    <Link to="/posts/relay">Relay</Link>
    <Route
      path="/posts/:title"
      component={Post}
    />
  </div>
);

export default Posts;
