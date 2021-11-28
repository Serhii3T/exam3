import { Link } from "react-router-dom";
import styles from "./navItem.module.scss";
function NavItem() {
  return (
    <>
      <li className={styles.link}>
        <Link to="/news-arrivals">NEW ARRIVALS</Link>
      </li>
      <li className={styles.link}>
        <Link to="/plus-size">PLUS SIZE</Link>
      </li>
      <li className={styles.link}>
        <Link to="/lingerie">LINGERIE</Link>
      </li>
      <li className={styles.link}>
        <Link to="/nightwear">NIGHTWEAR</Link>
      </li>
      <li className={styles.link}>
        <Link to="/gifts">GIFTS</Link>
      </li>
      <li className={styles.link}>
        <Link to="/collections">COLLECTIONS</Link>
      </li>
    </>
  );
}

export default NavItem;
