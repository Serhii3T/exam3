import styles from "./footer.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";

import LogoElement from "../../elements/logo2/Logo2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// font awesome
export const Beverage = () => {
  let socialLink = {
    facebook: 'https://www.facebook.com/serega.tritenko',
    instagram: 'https://www.instagram.com/seregatritenko',
  };

  return (
  <div
    className={classNames(
      `${styles.social}`,
      "d-flex",
      "justify-content-between"
    )}
  >
    <a className={styles.link} href={socialLink.facebook}>
      <FontAwesomeIcon className={styles.social} icon={["fab", "facebook-f"]} />
    </a>
    <a className={styles.link} href={socialLink.instagram}>
      <FontAwesomeIcon className={styles.social} icon={["fab", "instagram"]} />
    </a>
  </div>
)};
// export default Beverage;

function Footer() {
  return (
    <footer className={styles.footer}>
      {/* wrapper top */}
      <div className={styles.wrapper}>
        {/* top footer */}
        <div className={styles.top}>
          {/* logo */}
          <div className={styles.logo}>
            <Link to="/main">
              <LogoElement />
            </Link>
          </div>
          {/* end of logo block */}

          {/* main */}
          <div className={styles.main}>
            <p className={styles.heading}>MAIN</p>
            <Link to="/">Shop</Link>
            <Link to="/">Underwear</Link>
            <Link to="/">Bras</Link>
            <Link to="/">Fitting Room</Link>
          </div>
          {/* end of main block */}

          {/* Information */}
          <div className={styles.information}>
            <p className={styles.heading}>Information</p>
            <Link to="/">Payments</Link>
            <Link to="/">Shipping & Delivery</Link>
            <Link to="/">Returns</Link>
            <Link to="/">Conclusion of the purchase</Link>
          </div>
          {/* end of Information block */}

          {/* Company */}
          <div className={styles.company}>
            <p className={styles.heading}>Company</p>
            <Link to="/">About us</Link>
            <Link to="/">Requisites</Link>
            <Link to="/">Contacts</Link>
          </div>
          {/* end of Company block */}

          {/* mail list */}
          <div className={styles.mailList}>
            <p className={styles.heading}>Join Our Mailing List</p>
            <form
              className={styles.form}
              // onSubmit={this.handleSubmit}
            >
              <input
                type="text"
                name="mail"
                placeholder="E-mail"
                className={styles.input}
                // value={this.state.value}
                // onChange={this.handleChange}
              />
              <button type="submit" value="send" className={styles.send_btn}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893C6.90237 0.683418 6.90237 1.31658 7.29289 1.70711L12.5858 7H1C0.447715 7 0 7.44772 0 8C0 8.55229 0.447715 9 1 9H12.5858L7.29289 14.2929C6.90237 14.6834 6.90237 15.3166 7.29289 15.7071C7.68342 16.0976 8.31658 16.0976 8.70711 15.7071L15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L8.70711 0.292893Z"
                    fill="none"
                  />
                </svg>
              </button>
            </form>
            
            <p className={styles.document}>
              By signing up you agree with our{" "}
              <u>
                <Link to="/service">Terms & Conditions</Link>
              </u>{" "}
              and{" "}
              <u>
                <Link to="/protection">Privacy Policy</Link>
              </u>
              . To opt out, click Unsubscribe in our emails.
            </p>
          </div>
          {/* end of mail list block */}

        </div>
        {/* end of top footer */}

      </div>
      {/* end of wrapper top block */}

      {/* footer bottom */}
      <div className={styles.bottom}>

        {/* copyright */}
        <p className={styles.privat}>&#169;2021. Almerna</p>

        {/* regulations & social */}
        <div className={styles.info}>

          {/* regulations */}
          <div className={styles.privat}>
            <p className={styles.terms}>Terms & Condintions</p>
            <p>Privacy Policy</p>
          </div>
          {/* end of regulations block */}

          {/* social link */}
          <div className={styles.icon}>
            <Beverage />
          </div>
          {/* end of social link block */}
        </div>
        {/* end of regulations & social block */}
      </div>
      {/* end of footer bottom block */}
    </footer>
  );
}

export default Footer;
