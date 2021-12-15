import React from 'react'
import styles from './popup.module.scss'

export default function Popup(props) {
  return (
    <div>
      <div id='popap' className={styles.popap}>
        <div className={styles.box}>
          <div className={styles.content}>
            <button className={styles.content}>X</button>

            <div className={styles.left}></div>

            <div className={styles.right}>
              <div className={styles.name}></div>
              <div className={styles.price}></div>
              <form className={styles.content}>
                <select className={styles.color}></select>
                  <option value='' >Color</option>
                  <option value='green'>green</option>
                <select className={styles.size}></select>
                  <option value='' >Size</option>
                  <option value='38' >38</option>
                  <option value='40' >40</option>
                  <option value='42' >42</option>
                <div className={styles.counter}></div>
                  <button className={styles.minus}>-</button>
                  <select className={styles.number}>0</select>
                  <button className={styles.plus}>+</button>
                <button className={styles.buy}>In Basket</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
