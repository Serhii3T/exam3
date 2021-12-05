import styles from "./ourProducts.module.scss";
import Product from "../products/Product";

import item1 from "../../assets/images/ourprod1.jpg";
import item2 from "../../assets/images/ourprod2.jpg";

function OurProducts() {
  return (
    <div className={styles.wrapper}>

      <h2 className={styles.title}>Shop Our Products</h2>

      <div className={styles.container}>

        <Product
          photo={item1}
          photo_bg={item1}
          article="3 for $30"
          name="Gracija Rim PRISCILLA"
          price="69,00€"
        />

        <Product
          photo={item2}
          photo_bg={item2}
          article="3 for $30"
          like={{ border: "1px solid #1111131A" }}
          name="Panties TOPAZ"
          price={
            <span>
              <s>69,00€</s> <span style={{ color: "#F44E4A" }}>39,00€</span>
            </span>
          }
        />

        <Product
          photo={item1}
          photo_bg={item1}
          article="3 for $30"
          name="Gracija Rim Eva"
          price="20,00€"
        />
      </div>

    </div>
  );
}

export default OurProducts;
