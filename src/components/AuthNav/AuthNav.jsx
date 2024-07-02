import { CustomNavLink } from "components";

export const AuthNav = () => {
  return (
    <>
      <li>
        <CustomNavLink path="/login">Login</CustomNavLink>
      </li>
      <li>
        <CustomNavLink path="/register">Register</CustomNavLink>
      </li>
    </>
  );
};
