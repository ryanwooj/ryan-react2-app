import React from 'react';

const Home = ({history}) => (
  <div>
  Home
  <button onClick={()=>{history.push('/posts')}}>버튼</button>
  </div>
  
);

export default Home;
