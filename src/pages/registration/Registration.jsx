import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// to work with requests 
import axios from "axios";

// img logo
import Logo2 from "../../elements/logo2/Logo2";

// module style
import styles from "../autorization/autorization.module.scss";


export default function Registration() {
  // create state for form
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // function for inputs
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const navigate = useNavigate();
  // function for dispatch(request)
  const registerHandler = async () => {
   
    try {
      await axios
        .post(
          "/api/auth/registration",
          { ...form },
          {
            headers: {
              "Content-type": "application/json",
            },
          }
        )
        .then((response) => {
          navigate("/autorization");
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
          Be a part of <b>Almerna’s</b> Club Members
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

          {/* btn registration form */}
          <button
            type="submit"
            onClick={registerHandler}
            className={styles.btnSubmit}
          >
            Register
          </button>

          {/* btn for sign */}
          <Link to="/autorization" className={styles.btnRegistration}>Already have account?</Link>

        </form>
        {/* end of form block */}

      </div>
      {/* end of wrapper block */}
    </React.Fragment>
  );
}
