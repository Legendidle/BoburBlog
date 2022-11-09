import React from "react";
import Logo from "../../assets/whiteLogo.png";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <a className={styles.logoLink} href="/footer">
          <img
            className={styles.logo}
            src={Logo}
            alt="logo"
            width={182}
            height={70}
          />
        </a>

        <div className={styles.box}>
          <div className={styles.suggest}>
            <h3 className={styles.suggestTitle}>FIGHT WITH ME ON:</h3>

            <ul className={styles.list}>
              <li className={styles.item}>
                <a
                  className={styles.link}
                  href="https://twitter.com"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  Twitter
                </a>
              </li>
              <li className={styles.item}>
                <a
                  className={styles.link}
                  href="https://instagram.com"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  Instagram
                </a>
              </li>
              <li className={styles.item}>
                <a
                  className={styles.link}
                  href="https://telegram.com"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  Telegram
                </a>
              </li>
              <li className={styles.item}>
                <a
                  className={styles.link}
                  href="https://youtube.com"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  YouTube
                </a>
              </li>
              <li className={styles.item}>
                <a
                  className={styles.link}
                  href="https://figma.com"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  Figma
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.suggest}>
            <h3 className={styles.suggestTitle}>WHAT I HAVE DONE:</h3>

            <ul className={styles.list}>
              <li className={styles.item}>
                <a
                  className={styles.link}
                  href="http://www.wayu.uz"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  Xalq Kutubxonasi
                </a>
              </li>
              <li className={styles.item}>
                <a
                  className={styles.link}
                  href="https://instagram.com"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  Websites
                </a>
              </li>
              <li className={styles.item}>
                <a
                  className={styles.link}
                  href="https://facebook.com"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  Website
                </a>
              </li>
              <li className={styles.item}>
                <a
                  className={styles.link}
                  href="https://play.google.com/store/games"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  Play Market
                </a>
              </li>
              <li className={styles.item}>
                <a
                  className={styles.link}
                  href="https://www.apple.com"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  App Store
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.suggest}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <a
                  className={styles.link}
                  href="http://www.wayu.uz"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  Contact
                </a>
              </li>
              <li className={styles.item}>
                <a
                  className={styles.link}
                  href="https://instagram.com"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  Blog
                </a>
              </li>
              <li className={styles.item}>
                <a
                  className={styles.link}
                  href="https://facebook.com"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  Dribbble
                </a>
              </li>
              <li className={styles.item}>
                <a
                  className={styles.link}
                  href="https://play.google.com/store/games"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  Behance
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
