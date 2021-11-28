import styles from "./navigation.module.scss";
import NavItem from "../../components/navItem/navItem";

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <NavItem />
      </ul>
    </nav>
  );
}

export default Navigation;
