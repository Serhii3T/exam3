import styles from "./product.module.scss";
// import { Link } from "react-router-dom";

function Product(props) {
  return (
    <div className={styles.wrapper}>

      {/* Photo and info product */}
      <div className={styles.picture}>

        {/* img */}
        <img
          className={styles.img}
          src={props.photo}
          alt="girl"
        ></img>

        {/* img background */}
        <img
          className={styles.img_bg}
          src={props.photo_bg}
          alt="girl"
        ></img>

        {/* btn buy */}
        <button className={styles.buy}> View more details! </button>

        {/* article */}
        <div className={styles.article} style={props.article_display}>{props.article}</div>

        {/* btn like */}
        <button className={styles.like} type='button' style={props.like}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          > 
            <path
              d="M13.7501 2.5C12.3001 2.5 10.9084 3.175 10.0001 4.24167C9.09175 3.175 7.70008 2.5 6.25008 2.5C3.68341 2.5 1.66675 4.51667 1.66675 7.08333C1.66675 10.2333 4.50008 12.8 8.79175 16.7L9.32715 17.1837C9.70896 17.5287 10.2902 17.5276 10.6707 17.1812L11.2084 16.6917C15.5001 12.8 18.3334 10.2333 18.3334 7.08333C18.3334 4.51667 16.3167 2.5 13.7501 2.5ZM10.0834 15.4583L10.0001 15.5417L9.91675 15.4583C5.95008 11.8667 3.33341 9.49167 3.33341 7.08333C3.33341 5.41667 4.58341 4.16667 6.25008 4.16667C7.26307 4.16667 8.25529 4.68069 8.84559 5.45874C9.12846 5.83158 9.5336 6.13333 10.0016 6.13333C10.4722 6.13333 10.879 5.82807 11.1631 5.45289C11.7499 4.67812 12.7396 4.16667 13.7501 4.16667C15.4167 4.16667 16.6667 5.41667 16.6667 7.08333C16.6667 9.49167 14.0501 11.8667 10.0834 15.4583Z"
              fill='currentColor'
            />
          </svg>
        </button>

      </div>
      {/* end of Photo and info product block */}

      {/* name product */}
      <div className={styles.name}>{props.name}</div>

      {/* price */}
      <div className={styles.price}>{props.price}</div>

    </div>

  );
}

export default Product;
