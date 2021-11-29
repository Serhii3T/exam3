import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'

import './index.scss';
import styles from "./app.module.scss";

// import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Albom from "./components/albom/Albom";
import Footer from "./components/footer/Footer";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faInstagram, faFacebookF)

function App() {
  return (
    <div className={styles.app}>
      <Router>
        {/* <Header /> */}
        <Banner />
        <Albom />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
  