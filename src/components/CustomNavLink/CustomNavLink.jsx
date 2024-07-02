import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./CustomNavLink.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

export const CustomNavLink = ({ path, children }) => {
  return (
    <NavLink to={path} className={buildLinkClass}>
      {children}
    </NavLink>
  );
};
