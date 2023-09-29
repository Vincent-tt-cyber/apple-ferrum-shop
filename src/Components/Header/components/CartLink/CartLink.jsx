import React from "react";
import styles from "./CartLink.module.scss";
import { FaCartShopping } from "react-icons/fa6";
export const CartLink = () => {
  return (
    <>
      <div className={styles.link}>
        <FaCartShopping />
        <span className={styles["count"]}>{!null && 0}</span>
      </div>
    </>
  );
};
