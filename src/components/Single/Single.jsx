import React from 'react'
import {useSelector} from "react-redux"

import styles from './Single.module.scss'

function Single() {
  
  const {post} = useSelector(state => state)

  console.log(post);

  return (
    <div className={styles.container}>
        Single
    </div>
  )
}

export default Single