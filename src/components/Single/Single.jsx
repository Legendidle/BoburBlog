import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import Like from "../../assets/read.png"
import Share from "../../assets/share.png"
import { Link, useParams } from "react-router-dom";

import styles from './Single.module.scss'
import { postDetails } from '../../redux/reducer'

function Single() {
  const {post, posts} = useSelector(state => state) 
  const {category} = useParams()
  const dispatch = useDispatch()
  
  return (
    <div className={styles.container}>
      <div className={styles.justify}>
        <ul className={styles.likeList}>
          <li className={styles.likeItem}>
            <img src={Like} alt="like" width={18} height={19}/>
            <p className={styles.likesNumber}>{post.likes}</p>
          </li>
          <li className={styles.likeItem}>
            <img src={Share} alt="share" width={18} height={19}/>
            <p className={styles.likesNumber}>{post.shares}</p>
          </li>
        </ul>
        
        <div>
          <div className={styles.all}>
            <h2 className={styles.title}>{post.title}</h2>
            <div className={styles.dateBox}>
              <p className={`${styles.date} ${styles.cut}`}>{post.createdAt}</p>
              <p className={styles.date}>{post.readTime} minutes read</p>
            </div>
              <img className={styles.image} src={post.image} alt="post.title" />
            <p className={styles.content}>{post.content}</p>
            <h4 className={styles.overload}>Information overload</h4>
            <p className={styles.description}>{post.description}</p>
          </div>
          <div className={styles.more}>
            <h2 className={styles.moreTitle}>More like this</h2>
            <ul className={styles.moreList}>
              {
                posts.slice(0,3).map(post =>(
                  <Link 
                  key={post.id}
                  to={`/${category}/${post.id}`} 
                  className={styles.contentLink} 
                  onClick={() => dispatch(postDetails(post.id))}>
                  <li className={styles.moreItem}>
                    <div className={styles.moreDateBox}>
                      <p className={styles.moreDate}>{post.createdAt.slice(0,10)}</p>
                      <p className={styles.moreDate}>{category}</p>
                    </div>
                    <h3 className={styles.moreName}>{post.title}</h3>
                    <p className={styles.moreDate}>{post.readTime} minutes read </p>
                  </li>
                  </Link>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default Single;