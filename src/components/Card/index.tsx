import styles from "./style.module.css";
import { MapPin } from "phosphor-react";

interface CardProps {
  key: number;
  cover: string;
  title: string;
  text: string;
  location: string;
}

export function Card({ title, text, location, cover }: CardProps): JSX.Element {
  return (
    <div className={styles.card}>
      <img src={cover} alt="Carnaval Photo"></img>
      <div className={styles.container}>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className={styles.cardBottom}>
          <MapPin size={24} weight="light" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
}
