import { BlogCard } from "components";
import article from "data/article.json";

function App() {
  return (
    <>
      <BlogCard {...article} />
    </>
  );
}

export default App;
