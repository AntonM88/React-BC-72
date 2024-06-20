import { useEffect, useState } from "react";
import { getCountries } from "service/countriesApi";
import { Section, Container, CountriesList, Loader, Heading } from "components";

export const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <Section>
      <Container>
        {countries.length > 0 && <CountriesList countries={countries} />}
        {isLoading && <Loader />}
        {error && <Heading title={`Something went wrong ${error}`} />}
      </Container>
    </Section>
  );
};
