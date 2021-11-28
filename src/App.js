import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'

import './index.scss';
import styles from "./app.module.scss";

import Header from './components/header/Header';
import Banner from './components/banner/Banner';

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Header />
        <Banner />
      </Router>
    </div>
  );
}

export default App;
  