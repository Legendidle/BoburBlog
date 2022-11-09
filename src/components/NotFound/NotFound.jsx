import React from "react";
import styles from "./NotFound.module.scss";
import errImg from "../../assets/notfound.png";
import { Link } from "react-router-dom";

function notFound() {
  return (
    <div className={styles.container}>
      <img className={styles.errImg} src={errImg} alt="404" />

      <h2 className={styles.errTitle}>Page not found - 404</h2>

      <p className={styles.errText}>
        This page not found (deleted or never exists).Try a phrase in search box
        or back to home and start again.
      </p>

      <Link to={"/"} className={styles.homeLink}>
        TAKE ME HOME!
      </Link>
    </div>
  );
}

export default notFound;
