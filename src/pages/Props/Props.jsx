import { BlogCard, Statistics, Section, Container, Heading } from "components";
import article from "data/article.json";
import stats from "data/stats.json";

const Props = () => {
  return (
    <Section>
      <Container>
        <Heading title="Blog card" bottom />
        <BlogCard {...article} />
        <Heading title="Statistics" top bottom />
        <Statistics stats={stats} />
      </Container>
    </Section>
  );
};

export default Props;
