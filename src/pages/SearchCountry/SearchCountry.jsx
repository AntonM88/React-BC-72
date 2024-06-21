import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  CountryForm,
  Section,
  Container,
  Loader,
  Heading,
  CountriesList,
} from "components";
import { getCountriesByRegion } from "service/countriesApi";

const SearchCountry = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const region = searchParams.get("region");
    if (!region) return;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getCountriesByRegion(region);
        setCountries(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [searchParams]);

  const onSubmit = (region) => {
    setSearchParams({ region });
  };

  return (
    <Section>
      <Container>
        <CountryForm onSubmit={onSubmit} />
        {countries.length > 0 && <CountriesList countries={countries} />}
        {isLoading && <Loader />}
        {error && <Heading title={`Something went wrong ${error}`} />}
      </Container>
    </Section>
  );
};

export default SearchCountry;
