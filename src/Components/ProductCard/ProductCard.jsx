import React, { useEffect, useState } from "react";
import styles from "./ProductCard.module.scss";

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
        <div className={styles["card-image-cover"]}>
          <img
            className={styles[""]}
            src={product.imageURL}
            alt={product.model}
          />
        </div>
        <div className={styles["card-info"]}>
          <div className={styles["card-price"]}>
            <div>
              <h3 className={styles["card-price__active"]}>
                {product.activePrice.toLocaleString("ru-RU")}₽
              </h3>
              <h4 className={styles["card-price__past"]}>
                {product.pastPrice.toLocaleString("ru-RU")}₽
              </h4>
            </div>
            <small>-{discount}%</small>
          </div>
          <p>
            {product.model} | {product.store}ГБ
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
