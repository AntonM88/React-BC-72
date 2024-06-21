import { useLocation, useParams } from "react-router-dom";
import { fetchCountry } from "service/countriesApi";
import { useEffect, useRef, useState } from "react";
import {
  Container,
  CountryDetails,
  Section,
  GoBackBtn,
  Heading,
  Loader,
} from "components";

const CountryInfo = () => {
  const { countryId } = useParams();
  const location = useLocation();

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

  const goBack = useRef(location.state || "/countries");

  return (
    <Section>
      <Container>
        <GoBackBtn path={goBack.current} />
        {country && <CountryDetails {...country} />}
        {isLoading && <Loader />}
        {error && <Heading title={`Something went wrong ${error}`} />}
      </Container>
    </Section>
  );
};

export default CountryInfo;
