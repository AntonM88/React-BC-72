import { BlogCard, Statistics } from "components";
import article from "data/article.json";
import stats from "data/stats.json";


function App() {
  return (
    <>
      <BlogCard {...article} />
      <Statistics stats={stats}/>
    </>
  );
}

export default App;
