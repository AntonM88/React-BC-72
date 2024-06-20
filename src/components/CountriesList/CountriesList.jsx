import { Link } from "react-router-dom";
import css from "./CountriesList.module.css";

export const CountriesList = ({ countries }) => {
  return (
    <ul className={css.list}>
      {countries.map((country) => (
        <li className={css.item} key={country.id}>
          <Link to={`/countries/${country.id}`}>
            <img src={country.flag} alt={country.country} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
