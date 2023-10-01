import React, { useEffect, useState } from "react";
import styles from "./ProductCard.module.scss";
import { FaCartShopping } from "react-icons/fa6";
import { BsFillHeartFill } from "react-icons/bs";

const ProductCard = ({ product }) => {
  const [discount, setDiscount] = useState(0);

  const calcDiscount = (activePrice, pastPrice) => {
    const result = Math.round((1 - activePrice / pastPrice) * 100);
    setDiscount(result);
  };

  useEffect(() => {
    calcDiscount(product.activePrice, product.pastPrice);
  }, []);
  return (
    <>
      <div className={styles["card"]}>
        <img src={product.imageURL} alt={product.model} />
        <div className={styles["card-text"]}>
          <h3 className={styles["card__title"]}>
            {product.model}, {product.store && product.store + "GB, "}
            {product.color && product.color}
          </h3>
        </div>
        <div className={styles["card-prices"]}>
          <div className={styles["card-prices__num"]}>
            <div>
              <h4 className={styles["card__active-price"]}>
                {product.activePrice.toLocaleString("ru-RU")}₽
              </h4>
              <h3 className={styles["card__past-price"]}>
                {product.pastPrice.toLocaleString("ru-RU")}₽
              </h3>
            </div>
            <small className={styles["discount"]}>-{discount}%</small>
          </div>
          <div className={styles["card-nav"]}>
            <button className={styles["card__btn"]}>
              <BsFillHeartFill color="#fff" />
            </button>
            <button className={styles["card__btn"]}>
              <FaCartShopping color="#fff" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
