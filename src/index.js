import React from 'react';
import ReactDOM from 'react-dom';

import Candle from './components/Candle';

import pandaURL from './images/pandas.jpg';
import styles from './styles.css';

const App = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <h1 className={styles.brand}>Panda Shrine</h1>
        <img src={pandaURL} height="200" />
        <hr />
        <h2>Candles:</h2>
        <Candle />
        <hr />
        <div className={styles.button}>Create a Candle</div>
        <a className={styles.button} href="/donations">Donations</a>
      </div>
    </div>
  )
};

const Root = document.getElementById("app");

ReactDOM.render(<App />, Root);