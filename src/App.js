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

// import hook
import {AuthContext} from './context/AuthContext';
import {useAuth} from './hooks/auth.hook';
import {useRoutes} from './routes';
// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import Main from './pages/main/Main'

// components
import Header from './components/header/Header';
import Service from "./pages/service/Service";
import Footer from "./components/footer/Footer";
import Protection from "./pages/protection/Protection";
import About from "./pages/about/About";
import AddProduct from "./pages/product/AddProduct";

// import router from "../../routes/auth.route";
library.add(fab, faInstagram, faFacebookF);

function App() {
  const { login, logout, token, userId, isReady, userEmail } = useAuth()
  const isLogin = !!token;
  const routes = useRoutes(isLogin, userEmail);
  console.log(isLogin);
  return (
    <AuthContext.Provider value={{login, logout, token, userId, isReady, isLogin, userEmail}}>
      <Router>
        <Header />
        <Routes>
          {routes}
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/" element={<Main/>} />
          <Route path="/main" element={<Main/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/protection" element={<Protection/>} />
        </Routes>
        <Footer />
    </Router>
    </AuthContext.Provider>
  );
}

export default App;
  