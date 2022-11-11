import React from "react";
import {useSelector,useDispatch} from "react-redux"
import styles from "./Main.module.scss";
import Facebook from "../../assets/facebook.png";
import Twitter from "../../assets/twitter.png";
import Github from "../../assets/github.png";
import Lenkidin from "../../assets/lenkidin.png";
import { Link, useParams } from "react-router-dom";
import { postDetails } from "../../redux/reducer";
import Loading from "../loading/Loading";

function Main() {
  const { posts,loading } = useSelector(state => state)
  const {category} = useParams()

  const dispatch = useDispatch()

  
  if(loading) return <Loading />

  return (
    <div className={styles.container}>
      <div className={styles.infoBox}>
        <h3 className={styles.infoTitle}>What I do!</h3>
        <p className={styles.infoText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum
          augue erat ac eros. Cras ultricies mattis convallis.
        </p>
        <a className={styles.infoExplorer} href="/">
          EXPLORE ME
        </a>

        <ul className={styles.infoList}>
          <li className={styles.infoItem}>
            <a
              className={styles.infoLink}
              href="https://www.facebook.com"
              target={"_blank"}
              rel="noreferrer"
            >
              <img
                className={styles.infoLogos}
                src={Facebook}
                alt="facebook"
                width={10}
                height={18}
              />
            </a>
          </li>
          <li className={styles.infoItem}>
            <a
              className={styles.infoLink}
              href="https://www.github.com"
              target={"_blank"}
              rel="noreferrer"
            >
              <img
                className={styles.infoLogos}
                src={Github}
                alt="github"
                width={20}
                height={20}
              />
            </a>
          </li>
          <li className={styles.infoItem}>
            <a
              className={styles.infoLink}
              href="https://www.twitter.com"
              target={"_blank"}
              rel="noreferrer"
            >
              <img
                className={styles.infoLogos}
                src={Twitter}
                alt="twitter"
                width={20}
                height={17}
              />
            </a>
          </li>
          <li className={styles.infoItem}>
            <a
              className={styles.infoLink}
              href="https://www.linkedin.com"
              target={"_blank"}
              rel="noreferrer"
            >
              <img
                className={styles.infoLogos}
                src={Lenkidin}
                alt="lenkidin"
                width={17}
                height={17}
              />
            </a>
          </li>
        </ul>
      </div>

      <ul className={styles.contentList}>
        <h3 className={styles.contentTitle}>Recent Posts</h3>
        {
          posts.map( post => (
          <Link 
          key={post.id}
          to={`/${category}/${post.id}`} 
          className={styles.contentLink} 
          onClick={() => dispatch(postDetails(post.id))}
          >
            <li className={styles.contentItem}>
              <div className={styles.categoryInfo}>
                <p className={styles.contentDate}>{post.createdAt.slice(0,10)}</p>
                <p className={styles.contentDate}>{category}</p>
              </div>
              <h4 className={styles.contentName}>
                {post.title}
              </h4>
              <p className={styles.contentText}>
                {post.description}
              </p>
              <p className={styles.contentTime}>{post.readTime} minutes read</p>
            </li>
          </Link>
        ))
        }
      </ul>
    </div>
  );
}
export default Main;
