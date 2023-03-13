import { Card } from "../Card";
import styles from "./style.module.css";
import { cards } from "./cardContent";

export function Main(): JSX.Element {
  return (
    <main>
      <div className={styles.content}>
        <section className={styles.top}>
          <h2>Blocos recomendados</h2>
          <div className={styles.view}>
            <button className={styles.primary}>lista</button>
            <button className={styles.secondary}>mapa</button>
          </div>
        </section>
        <section className={styles.cards}>
          {cards.map((card) => {
            return (
              <Card
                key={card.id}
                cover={card.cover}
                title={card.title}
                text={card.text}
                location={card.location}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
}
