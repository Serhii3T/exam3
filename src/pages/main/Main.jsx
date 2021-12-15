import Banner from '../../components/banner/Banner';
import Albom from '../../components/albom/Albom';
import Product from '../../components/products/Product';
import OurProducts from '../../components/ourProducts/OurProducts';

import styles from './main.module.scss';

import item1 from '../../assets/images/prod32.jpg';
import item11 from '../../assets/images/prod31.jpg';
import item2 from '../../assets/images/prod51.jpg';
import item21 from '../../assets/images/prod52.jpg';
import item3 from '../../assets/images/prod71.jpg';
import item31 from '../../assets/images/prod72.jpg';



function Main() {
  return (
    <>
      <Banner />
      <div style={{display: 'flex', flexWrap: 'wrap'}} className={styles.prod}>
        <Product 
          photo={item1}
          photo_bg={item11}
          article='NEW!'
          name='Gracija Rim PRISCILLA'
          price='69,00€'
        />
        <Product 
          photo={item2}
          photo_bg={item21}
          article='SALE!'
          like={{border: '1px solid #1111131A'}}
          name='Panties TOPAZ'
          price={<span><s>69,00€</s> <span style={{color:'#F44E4A'}}>39,00€</span></span>}
        />
        <Product 
          photo={item3}
          photo_bg={item31}
          // article_display={{display:'none'}}
          article='3 for $30'
          name='Gracija Rim Eva'
          price='20,00€'
        />
      </div>
      <Albom />
      <OurProducts />
    </>
  );
} 

export default Main;