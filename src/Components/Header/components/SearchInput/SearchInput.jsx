import React from "react";
import styles from "./SearchInput.module.scss";
import { BsSearch } from "react-icons/bs";

export const SearchInput = () => {
  const [title, setTitle] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Вы ввели: ${title}`);
  };

  return (
    <>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Найти в Apple Ferrum"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          <BsSearch size={20} />
        </button>
      </form>
    </>
  );
};
