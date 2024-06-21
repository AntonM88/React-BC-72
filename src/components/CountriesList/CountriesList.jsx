import { Link, useLocation } from "react-router-dom";
import css from "./CountriesList.module.css";

export const CountriesList = ({ countries }) => {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {countries.map((country) => (
        <li className={css.item} key={country.id}>
          <Link to={`/countries/${country.id}`} state={location}>
            <img src={country.flag} alt={country.country} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
