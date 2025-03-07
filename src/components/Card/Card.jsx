import styles from "./card.module.css";

const Card = ({ el }) => {
  return (
    <div className={styles.card}>
      <img src={el.image} alt={el.title} />
      <div className={styles.card_bottom}>
        <b className={styles.title}>{el.title}</b>
        <span className={styles.price}>{el.price}</span>
      </div>
    </div>
  );
};

export default Card;
