// React
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

// Style
import './index.scss';
// import styles from "./app.module.scss";

// components
import Header from './components/header/Header';
import Main from "./pages/main/Main";
import Service from "./pages/service/Service";
import Footer from "./components/footer/Footer";
import Protection from "./pages/protection/Protection";

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faInstagram, faFacebookF);

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      
        <Route path="/main" exact element={<Main/>} />

        <Route path="/service" element={<Service/>} />

        <Route path="/protection" element={<Protection/>} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
  