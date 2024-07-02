import { ToggleTheme, UserMenu, AuthNav, CustomNavLink } from "components";
import s from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectBaseCurrency } from "reduxStore/currency/selector";
import { selectIsLoggedIn, selectUser } from "reduxStore/auth/selector";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const baseCurrency = useSelector(selectBaseCurrency);
  const user = useSelector(selectUser);

  return (
    <header className={s.header}>
      <nav>
        <ul className={s.list}>
          <li>
            <CustomNavLink path="/">Home</CustomNavLink>
          </li>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </ul>
      </nav>
      {user && <p>Welcome {user.name}</p>}
      {baseCurrency && <p>Your base currency: {baseCurrency}</p>}
      <ToggleTheme />
    </header>
  );
};
