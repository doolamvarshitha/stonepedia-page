import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 Stonepedia. All rights reserved.</p>
      <div className={styles.socialLinks}>
        <a href='https://facebook.com'>Facebook</a>
        <a href='https://instagram.com'>Instagram</a>
        <a href='https://twitter.com'>Twitter</a>
      </div>
    </footer>
  )
}

export default Footer
