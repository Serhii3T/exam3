import React, {useContext} from 'react'
import { AuthContext } from '../../context/AuthContext';
import styles from "./dashboard.module.scss";
export default function Dashboard(userEmail) {
const {logout,
  //  isLogin
  } = useContext(AuthContext)
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <div className={styles.title}>
         Hello {userEmail.email}
        </div>
        <form className={styles.formSign} onSubmit={(e) => e.preventDefault()}>
        <button onClick={logout} type="submit"
            className={styles.btnSubmit}>Log out</button>
        </form>
      </div>
    </React.Fragment>
  )
}
