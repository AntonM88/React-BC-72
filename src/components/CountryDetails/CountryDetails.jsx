import styles from "./CountryDetails.module.css";

export const CountryDetails = ({
  flag,
  country,
  capital,
  population,
  languages,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.flag}>
        <img className={styles.img} src={flag} alt={country} />
      </div>
      <div className={styles.box}>
        <h3 className={styles.capital}>
          Capital: <span className={styles.accent}>{capital}</span>
        </h3>

        <h1 className={styles.title}>{country}</h1>

        <p className={styles.details}>
          Population: <span className={styles.accent}>{population}</span>
        </p>

        <p className={styles.details}>
          Languages:
          <span className={styles.accent}> {languages.join(", ")}</span>
        </p>
      </div>
    </div>
  );
};
