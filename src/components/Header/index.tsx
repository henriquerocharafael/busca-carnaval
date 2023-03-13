import styles from "./style.module.css";
import { MagnifyingGlass, MapPin, CaretDown } from "phosphor-react";

export function Header(): JSX.Element {
  return (
    <header>
      <div className={styles.content}>
        <div className={styles.top}>
          <p>find your block</p>
          <h1>
            Encontre os <span>melhores blocos</span> de carnaval de 2023
          </h1>
        </div>
        <form>
          <div className={styles.searchField}>
            <label htmlFor="name" className={styles.srOnly}>
              Pesquise por nome
            </label>
            <MagnifyingGlass size={24} weight="light" />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Pesquise por nome"
            />
          </div>
          <div className={`${styles.searchField} ${styles.select}`}>
            <label htmlFor="city" className={styles.srOnly}>
              Selecione uma cidade
            </label>
            <MapPin size={24} weight="light" />
            <select name="city" id="city">
              <option value="0">Selecione sua cidade</option>
              <option value="sao-paulo">São Paulo</option>
              <option value="rio-de-janeiro">Rio de Janeiro</option>
              <option value="salvador">Salvador</option>
            </select>
            <CaretDown className={styles.downArrow} size={24} weight="light" />
          </div>
          <button className={styles.primary}>buscar agora</button>
        </form>
      </div>
    </header>
  );
}
