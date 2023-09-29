import React from "react";
import styles from "./CartLink.module.scss";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
export const CartLink = () => {
  return (
    <>
      <Link to="/orders" className={styles.link}>
        <FaCartShopping />
        <span className={styles["count"]}>{!null && 0}</span>
      </Link>
    </>
  );
};
