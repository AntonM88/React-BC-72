import { BlogCard, Statistics, Section, Container } from "components";
import article from "data/article.json";
import stats from "data/stats.json";

function App() {
  return (
    <>
      <Section>
        <Container>
          <BlogCard {...article} />
          <Statistics stats={stats} />
        </Container>
      </Section>
    </>
  );
}

export default App;
