export const transformCountryData = ({
  name,
  flags,
  languages,
  population,
  capital,
}) => {
  return {
    country: name.common,
    flag: flags.png,
    capital: capital[0],
    population,
    languages: Object.values(languages),
  };
};
