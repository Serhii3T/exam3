import styles from "./banner.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";
function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <h1 className={classNames("text-green ", `${styles.title}`)}>
            Our new <b>summer</b> 2021 Collection
          </h1>
          <p className={styles.suptitle}>
            Free Luxury Gift Wrap on orders over £400
          </p>
          <Link to='/' className={styles.btn__shop}>Shop Now</Link>
          <Link to='/' className={styles.fitting__room}>Fitting Room</Link>
        </div>
      </div>
    </div>
  );
} 

export default Banner;
