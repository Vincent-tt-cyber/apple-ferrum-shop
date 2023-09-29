import React from "react";
import styles from "./Header.module.scss";
import Logo from "../../assets/images/AppleFerrumLogo@2x.png";
import { Link } from "react-router-dom";
import { ButtonCatalog } from "./components/ButtonCatalog/ButtonCatalog";
import { SearchInput } from "./components/SearchInput/SearchInput";
import { FavouritesLink } from "./components/FafouritesLink/FavouritesLink";
import { CartLink } from "./components/CartLink/CartLink";

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);
  return (
    <>
      <header className={styles["header"]}>
        <div className="container">
          <div className={styles["header-row"]}>
            <Link to="/" className={styles["header-logo__cover"]}>
              <img
                className={styles["header-logo__img"]}
                src={Logo}
                alt="Logo"
              />
              <div className={styles["header-logo__text"]}>
                <h1>
                  <span>Apple</span> Ferrum
                </h1>
                <small>
                  Только оригинальная техника <span>Apple</span>
                </small>
              </div>
            </Link>
            <div className={styles["header-catalog"]}>
              <ButtonCatalog />
            </div>
            <div className={styles["header-search"]}>
              <SearchInput />
            </div>
            <nav>
              <FavouritesLink />
              <CartLink />
            </nav>
            <div className={styles["header-burger-menu"]}>
              <span></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
