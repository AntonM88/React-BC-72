export const transformCountries = (data) => {
  return data
    .filter(({ name }) => name.common !== "Russia")
    .map(({ name, flags }) => ({
      id: name.common,
      country: name.common,
      flag: flags.png,
    }));
};
