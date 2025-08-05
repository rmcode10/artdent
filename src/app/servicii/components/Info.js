import React from 'react'
import styles from "./Info.module.scss"
import Image from 'next/image'

const Info = ({ icon, text }) => {
  return (
    <div className={styles.infoContainer}>
        <div className={styles.infoIcon}>
            {icon}
        </div>
        <p>{text}</p>
    </div>
  )
}

export default Info