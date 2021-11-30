import styles from "./about.module.scss";
// import { Link } from "react-router-dom";

function About() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topic}>
        <h1 className={styles.title}>Our oath, You beautiful</h1>
        <p className={styles.suptitle}>Explore Almerna Lingerie Mission</p>
      </div>
      <div className={styles.boxes}>
        <div className={styles.box1}>
          <div className={styles.text}>
            <h2 className={styles.heading}>Elaborated for <b>All body</b> shapes</h2>
            <p className={styles.supheading}>
              Тело каждой из нас прекрасно по-своему, и главная цель AlmerNa
              Luxury сделать так, чтобы вы наслаждались своей уникальностью. Мы
              поставили перед собой задачу — сделать бельё, которое поменяет
            </p>
          </div>
          <div className={styles.img1}>
            {/* <img src={imageGirls} alt="girls" /> */}
          </div>
        </div>

        <div className={styles.box2}>
          <div className={styles.img2}>
          </div>
          <div className={styles.text}>
            <h2 className={styles.heading}>Elaborated for <b>All body</b> shapes</h2>
            <p className={styles.supheading}>
              Тело каждой из нас прекрасно по-своему, и главная цель AlmerNa
              Luxury сделать так, чтобы вы наслаждались своей уникальностью. Мы
              поставили перед собой задачу — сделать бельё, которое поменяет
            </p>
          </div>
        </div>

        <div className={styles.box3}>
          <div className={styles.text}>
            <h2 className={styles.heading}>High <b>Quality</b> Materials</h2>
            <p className={styles.supheading}>
              Тело каждой из нас прекрасно по-своему, и главная цель AlmerNa
              Luxury сделать так, чтобы вы наслаждались своей уникальностью. Мы
              поставили перед собой задачу — сделать бельё, которое поменяет
            </p>
          </div>
          <div className={styles.img3}>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
