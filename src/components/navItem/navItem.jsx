import { Link } from "react-router-dom";
import styles from "./navItem.module.scss";
function NavItem() {
  return (
    <>
      <li className={styles.link}>
        <Link to="/main">MAIN</Link>
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
        <Link to="/about">ABOUT</Link>
      </li>
      <li className={styles.link}>
        <Link to="/service">SERVICE</Link>
      </li>
    </>
  );
}

export default NavItem;
