import { ToggleTheme, UserMenu, AuthNav, CustomNavLink } from "components";
import s from "./Navigation.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectBaseCurrency } from "reduxStore/currency/selector";
import { selectIsLoggedIn, selectUser } from "reduxStore/auth/selector";
import { logOutThunk } from "../../reduxStore/auth/operation";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const baseCurrency = useSelector(selectBaseCurrency);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

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
      {user && (
        <>
          <p className={s.text}>Welcome {user.name}</p>
          <button className={s.btn} onClick={() => dispatch(logOutThunk())}>
            Logout
          </button>
        </>
      )}
      {baseCurrency && (
        <p className={s.text}>Your base currency: {baseCurrency}</p>
      )}
      <ToggleTheme />
    </header>
  );
};
