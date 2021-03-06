import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

import Logo2 from "../../elements/logo2/Logo2";

import styles from "./autorization.module.scss";

export default function Autorization() {
  // create state for form
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { login } = useContext(AuthContext);

  // function for inputs
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  // console.log(form);

  // const authHandler = async () => {
  //   try {
  //     await axios.post(
  //         "/api/auth/authentication",
  //         { ...form },
  //         {
  //           headers: {
  //             "Content-type": "application/json",
  //           },
  //         }
  //       )
  //       .then(response => console.log(response));
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const loginHandler = async () => {
    try {
      await axios
        .post(
          "/api/auth/login",
          { ...form },
          {
            headers: {
              "Content-type": "application/json",
            },
          }
        )
        .then(response => {
          console.log(response);
          login(response.data.token, response.data.userId, response.data.email);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      {/* wrapper */}
      <div className={styles.wrapper}>
        {/* logo */}
        <div className={styles.logo}>
          <Logo2 />
        </div>

        {/* title */}
        <div className={styles.title}>
          Members <b>please</b> Sign In
        </div>

        {/* form */}
        <form className={styles.formSign} onSubmit={(e) => e.preventDefault()}>
          {/* input e-mail */}
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className="validate"
            onChange={changeHandler}
          />

          {/* input-password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="validate"
            onChange={changeHandler}
          />

          {/* btn submit form */}
          <button
            type="submit"
            onClick={loginHandler}
            className={styles.btnSubmit}
          >
            Sign in
          </button>

          {/* btn for registration */}
          <Link to="/registration" className={styles.btnRegistration}>
            Don't have account?
          </Link>
          
        </form>
        {/* end of form block */}
      </div>
      {/* end of wrapper block */}
    </React.Fragment>
  );
}
