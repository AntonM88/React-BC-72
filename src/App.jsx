import { Routes, Route } from "react-router-dom";
import { Todos, Points, Props, Photos, Home } from "pages";
import { Navigation } from "./components";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/points" element={<Points />} />
        <Route path="/props" element={<Props />} />
      </Routes>
    </>
  );
}

export default App;
