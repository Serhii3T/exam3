import styles from "./header.module.scss";
import { Link } from "react-router-dom";

import LogoComponent from "../../elements/logo/Logo";
import Navigation from "../../components/navigation/navigation";
import UsersButton from "../../elements/usersButton/usersButton";

function Header() {
  return (
    <header>

      {/* top header config */}
      <div className={styles.config}>

        {/* config wrapper */}
        <div className={styles.config__wrapper}>

          {/* select languages */}
          <div className={styles.languages}>
            <select className={styles.select}>
              <option value="ENG">ENG</option>
              <option value="RU">RU</option>
            </select>
          </div>
          {/* end of select languages block*/}

          {/* title */}
          <div className={styles.title}>
            <span>Free shipping & free returns</span>
          </div>
          {/* end of title block */}

          {/* support link*/}
          <div className={styles.support}>
            <Link to="/support">Support</Link>
          </div>
          {/* end of support link block */}

        </div>
        {/* end of config wrapper block */}
        
      </div>
      {/* end of top header config block */}

      {/* bottom header main */}
      <div className={styles.main}>

        {/* main wrapper */}
        <div className={styles.main__wrapper}>

          {/* logo */}
          <div className={styles.logo}>
            <Link className={styles.link} to='/main'>
              <LogoComponent />
            </Link>
          </div>
          {/* end of logo block */}

          <div className={styles.nav}>
            <Navigation />
          </div>

          <div className={styles.buttons}>
            <UsersButton />
          </div>

        </div>
        {/* end of main wrapper block */}

      </div>
      {/* end of bottom header main */}

    </header>
  );
}

export default Header;
