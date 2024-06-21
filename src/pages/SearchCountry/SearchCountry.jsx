import { CountryForm, Section, Container } from "components";
import { useSearchParams } from "react-router-dom";

export const SearchCountry = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onSubmit = (region) => {
    setSearchParams({ region });
  };

  return (
    <Section>
      <Container>
        <CountryForm onSubmit={onSubmit} />
      </Container>
    </Section>
  );
};
