import React from 'react'
import styles from '../styles/HeroSection.module.css'

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <h1>Discover the World of Stonepedia</h1>
      <p>Find the finest stones for your projects.</p>
      <button className={styles.ctaButton}>Explore Now</button>
    </section>
  )
}

export default HeroSection
