import { BlogCard } from "components";
import article from "data/article.json";

function App() {
  return (
    <>
      <BlogCard article={article} />
    </>
  );
}

export default App;
