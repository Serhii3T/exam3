import styles from "./about.module.scss";
// import { Link } from "react-router-dom";
import photoImg from "../../assets/images/almerna.png";
import signImg from "../../assets/images/sign.png";

import Slider from "../../components/slider/Slider";


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
            <h2 className={styles.heading}>
              Elaborated for <b>All body</b> shapes
            </h2>
            <p className={styles.supheading}>
              Тело каждой из нас прекрасно по-своему, и главная цель AlmerNa
              Luxury сделать так, чтобы вы наслаждались своей уникальностью. Мы
              поставили перед собой задачу — сделать бельё, которое поменяет
            </p>
          </div>
          <div className={styles.img1}></div>
        </div>

        <div className={styles.box2}>
          <div className={styles.img2}></div>
          <div className={styles.text}>
            <h2 className={styles.heading}>
              Elaborated for <b>All body</b> shapes
            </h2>
            <p className={styles.supheading}>
              Тело каждой из нас прекрасно по-своему, и главная цель AlmerNa
              Luxury сделать так, чтобы вы наслаждались своей уникальностью. Мы
              поставили перед собой задачу — сделать бельё, которое поменяет
            </p>
          </div>
        </div>

        <div className={styles.box3}>
          <div className={styles.text}>
            <h2 className={styles.heading}>
              High <b>Quality</b> Materials
            </h2>
            <p className={styles.supheading}>
              Тело каждой из нас прекрасно по-своему, и главная цель AlmerNa
              Luxury сделать так, чтобы вы наслаждались своей уникальностью. Мы
              поставили перед собой задачу — сделать бельё, которое поменяет
            </p>
          </div>
          <div className={styles.img3}></div>
        </div>
      </div>

      <div className={styles.article}>
        <h1 className={styles.description}>
          When creating AlmerNa <b>Luxury collections</b> exclusively Italian fabrics
          and lace are used.
        </h1>
      </div>

      <div className={styles.slider}>
        <Slider />
      </div>

      <div className={styles.article}>
        <h1 className={styles.description}>
          Women inspire us and we want to inspire them too
        </h1>
      </div>

      <div className={styles.photo}>
        <img src={photoImg} alt="woman"></img>
      </div>

      <div className={styles.tale}>
        <div>
          <p>
            <b>
              Нижнее белье ежедневно играет большую роль для любой из нас.
              Красивое, утонченное, оно преображает, и мы начинаем излучать
              уверенность и соблазнительность, которые становятся заметны всем
              окружающим.
            </b>
          </p>
          <p>
            Именно это подтолкнуло меня к созданию бренда белья, в котором будут
            сочетаться высокое качество материалов и красивый дизайн. Изделия
            AlmerNa Luxury призваны подчёркивать природную красоту женских форм,
            оставаясь при этом максимально комфортными.
          </p>
        </div>

        <div>
          <p>
            Тело каждой из нас прекрасно по-своему, и главная цель AlmerNa
            Luxury сделать так, чтобы вы наслаждались своей уникальностью.
            <br /> Мы поставили перед собой задачу — сделать бельё, которое
            поменяет отношение женщины к себе: к своей истинной сущности и
            сексуальности, и мы справились! Просто примерьте его и подойдите к
            зеркалу- вы увидите, насколько вы можете быть харизматичной. AlmerNa
            Luxury-это бельё с характером!
          </p>
          <p>
            Основатель бренда <br />
            Natalia Brauer
          </p>
        </div>
      </div>

      <div className={styles.sign}>
      <img src={signImg} alt="sign"></img>
      </div>
    </div>
  );
}

export default About;
