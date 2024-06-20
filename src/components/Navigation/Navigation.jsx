import { NavLink } from "react-router-dom";
import { ToggleTheme } from "components";
import s from "./Navigation.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

export const Navigation = () => {
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
        </ul>
      </nav>

      <ToggleTheme />
    </header>
  );
};
