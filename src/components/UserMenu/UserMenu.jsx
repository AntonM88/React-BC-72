import { CustomNavLink } from "components";

export const UserMenu = () => {
  return (
    <>
      <li>
        <CustomNavLink path="/photos">Photos</CustomNavLink>
      </li>
      <li>
        <CustomNavLink path="/todos">Todos</CustomNavLink>
      </li>
      <li>
        <CustomNavLink path="/points">Points</CustomNavLink>
      </li>
      <li>
        <CustomNavLink path="/props">Props</CustomNavLink>
      </li>
      <li>
        <CustomNavLink path="/countries">Countries</CustomNavLink>
      </li>
      <li>
        <CustomNavLink path="/searchCountries">Search countries</CustomNavLink>
      </li>
    </>
  );
};
