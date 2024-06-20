import { Routes, Route } from "react-router-dom";
import { Todos, Points, Props, Photos, Home, Countries } from "pages";
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
        <Route path="/countries" element={<Countries />} />
      </Routes>
    </>
  );
}

export default App;
