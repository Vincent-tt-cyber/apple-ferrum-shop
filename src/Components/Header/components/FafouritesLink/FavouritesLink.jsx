import React from "react";
import styles from "./FavouritesLink.module.scss";
import { BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const FavouritesLink = () => {
  return (
    <>
      <Link to="/favourites" className={styles["link"]}>
        <BsFillHeartFill />
        <span className={styles["count"]}>{!null && 0}</span>
      </Link>
    </>
  );
};
