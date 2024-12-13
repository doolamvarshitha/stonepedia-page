import React from 'react'
import styles from '../styles/FeaturedProducts.module.css'

const FeaturedProducts = () => {
  const products = [
    {id: 1, name: 'Granite', image: '/images/product1.jpg'},
    {id: 2, name: 'Marble', image: '/images/product2.jpg'},
  ]

  return (
    <section id='products' className={styles.products}>
      <h2>Featured Products</h2>
      <div className={styles.productGrid}>
        {products.map(product => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedProducts
