import React from 'react'
import styles from '../styles/Testimonials.module.css'

const Testimonials = () => {
  const testimonials = [
    {id: 1, text: 'Stonepedia stones transformed my home!', author: 'John Doe'},
    {id: 2, text: 'Excellent quality and service.', author: 'Jane Smith'},
  ]

  return (
    <section id='testimonials' className={styles.testimonials}>
      <h2>What Our Clients Say</h2>
      <div className={styles.testimonialList}>
        {testimonials.map(t => (
          <blockquote key={t.id} className={styles.testimonial}>
            <p>"{t.text}"</p>
            <footer>- {t.author}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
