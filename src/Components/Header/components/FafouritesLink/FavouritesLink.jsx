import React from "react";
import styles from "./FavouritesLink.module.scss";
import { BsFillHeartFill } from "react-icons/bs";

export const FavouritesLink = () => {
  return (
    <>
      <div className={styles["link"]}>
        <BsFillHeartFill />
        <span className={styles["count"]}>{!null && 5}</span>
      </div>
    </>
  );
};
