import React from 'react';
import ReactDOM from 'react-dom';
import pandaImg from './images/pandas.jpg'

const App = () => {
  return (
    <div>
      <h1>PANDA SHRINE</h1>
      <h2>I'm the React App now!</h2>
      <h3>So what if I make a change now...</h3>
      <a href="/donations">Donations</a>
    </div>
  )
};

const Root = document.getElementById("app");

ReactDOM.render(<App />, Root);