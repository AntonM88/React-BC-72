import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn, selectIsRefreshing } from "reduxStore/auth/selector";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLogedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  return !isLogedIn && !isRefreshing ? <Navigate to={redirectTo} /> : Component;
};
