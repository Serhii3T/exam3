import styles from "./albom.module.scss";
import { Link } from "react-router-dom";

function Albom() {
  return (
    <div className={styles.wrapper}>

      {/* container */}
      <div className={styles.containers}>

        {/* bra */}
        <div className={styles.bra}>
          <div className={styles.text}>
            <h2>
              Must Have Intimates <br/> <b>BRA</b>
            </h2>
            <Link to='/' className={styles.link}><u>SHOP BRA</u></Link>
          </div>
        </div>
        {/* end of bra block */}

        {/* body */}
        <div className={styles.bodyy}>
          <div className={styles.text}>
            <h2>
              Your Pefect Summer <br/> <b>BODY</b>
            </h2>
            <Link to='/' className={styles.link}><u>SHOP BODY</u></Link>
          </div>
        </div>
        {/* end of body block */}

      </div>
      {/* end of container block */}

      {/* nightwear */}
      <div className={styles.nightwear}>
        <div className={styles.text}>
          <h2>
            Must Have Intimates <br/> <b>NIGHTWEAR</b>
          </h2>
          <Link to='/' className={styles.link}><u>SHOP NIGHTWEAR</u></Link>
        </div>
      </div>
      {/* end of nightwear block */}

    </div>
  );
} 

export default Albom;
