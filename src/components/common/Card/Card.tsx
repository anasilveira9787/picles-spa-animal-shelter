import thumb from "../../assets/thumb-default.jpg";
import styles from "./Card.module.css";

export function Card() {
  return (
    <div className={styles.Card}>
      <img src={thumb} alt="" />
      <span>Chico</span>
    </div>
  )
}