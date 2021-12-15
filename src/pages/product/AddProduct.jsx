import React, { useState } from "react";
// to work with requests 
import axios from "axios";

// img logo
import Logo2 from "../../elements/logo2/Logo2";

// module style
import styles from "../autorization/autorization.module.scss";
export default function AddProduct() {
  // create state for form
  const [form, setForm] = useState({
    title: "",
    price: "",
    color: "",
  });

  // function for inputs
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  // function for dispatch(request)
  const addProductHandler = async () => {
   
    try {
      await axios
        .post(
          "/api/product/addProduct",
          { ...form },
          {
            headers: {
              "Content-type": "application/json",
            },
          }
        )
        .then((response) => {
         console.log(response);
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
          Add Product
        </div>

        {/* form */}
        <form className={styles.formSign} onSubmit={(e) => e.preventDefault()}>

          {/* input e-mail */}
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="validate"
            onChange={changeHandler}
          />

          <input
            type="text"
            name="color"
            placeholder="Color"
            className="validate"
            onChange={changeHandler}
          />  

          {/* input-password */}  
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="validate"
            onChange={changeHandler}
          />

          {/* btn registration form */}
          <button
            type="submit"
            onClick={addProductHandler}
            className={styles.btnSubmit}
        >
            Add Product
          </button>
        </form>
        {/* end of form block */}

      </div>
      {/* end of wrapper block */}
    </React.Fragment>
  );
}
