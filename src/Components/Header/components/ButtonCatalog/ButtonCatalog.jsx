import React from "react";
import { TbAppsFilled } from "react-icons/tb";
import styles from "./ButtonCatalog.module.scss";

export const ButtonCatalog = () => {
  return (
    <>
      <button className={styles["button"]}>
        <TbAppsFilled />
        Каталог
      </button>
    </>
  );
};
