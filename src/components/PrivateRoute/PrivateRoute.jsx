import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "reduxStore/auth/selector";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLogedIn = useSelector(selectIsLoggedIn);

  return !isLogedIn ? <Navigate to={redirectTo} /> : Component;
};
