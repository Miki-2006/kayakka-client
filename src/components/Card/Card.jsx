import styles from './card.module.css'

const Card = ({el}) => {
  return (
    <div className={styles.card}>
        <b className={styles.title}>{el.title}</b>
        <span className={styles.price}>{el.price}</span>
    </div>
  )
}

export default Card