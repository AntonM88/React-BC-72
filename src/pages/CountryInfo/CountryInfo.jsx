import { useParams } from "react-router-dom";
import { fetchCountry } from "service/countriesApi";
import { useEffect, useState } from "react";
import { Container, CountryDetails, Section } from "components";
import { Heading, Loader } from "components";

export const CountryInfo = () => {
  const { countryId } = useParams();

  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchCountry(countryId);
        setCountry(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [countryId]);

  return (
    <Section>
      <Container>
        {country && <CountryDetails {...country} />}
        {isLoading && <Loader />}
        {error && <Heading title={`Something went wrong ${error}`} />}
      </Container>
    </Section>
  );
};
