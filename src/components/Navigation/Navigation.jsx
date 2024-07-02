import { NavLink } from "react-router-dom";
import { ToggleTheme } from "components";
import s from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectBaseCurrency } from "reduxStore/currency/selector";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

export const Navigation = () => {
  const baseCurrency = useSelector(selectBaseCurrency);
  return (
    <header className={s.header}>
      <nav>
        <ul className={s.list}>
          <li>
            <NavLink to="/" className={buildLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className={buildLinkClass}>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" className={buildLinkClass}>
              Register
            </NavLink>
          </li>
          <li>
            <NavLink to="/photos" className={buildLinkClass}>
              Photos
            </NavLink>
          </li>
          <li>
            <NavLink to="/todos" className={buildLinkClass}>
              Todos
            </NavLink>
          </li>
          <li>
            <NavLink to="/points" className={buildLinkClass}>
              Points
            </NavLink>
          </li>
          <li>
            <NavLink to="/props" className={buildLinkClass}>
              Props
            </NavLink>
          </li>
          <li>
            <NavLink to="/countries" className={buildLinkClass}>
              Countries
            </NavLink>
          </li>
          <li>
            <NavLink to="/searchCountries" className={buildLinkClass}>
              Search countries
            </NavLink>
          </li>
        </ul>
      </nav>
      {baseCurrency && <p>Your base currency: {baseCurrency}</p>}
      <ToggleTheme />
    </header>
  );
};
