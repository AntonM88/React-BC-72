import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components";
import { Suspense } from "react";
import { easyLazy } from "helpers/easyLazy";

const Home = easyLazy("Home");
const Photos = easyLazy("Photos");
const Todos = easyLazy("Todos");
const Points = easyLazy("Points");
const Props = easyLazy("Props");
const Countries = easyLazy("Countries");
const SearchCountry = easyLazy("SearchCountry");
const CountryInfo = easyLazy("CountryInfo");

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/points" element={<Points />} />
          <Route path="/props" element={<Props />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/SearchCountries" element={<SearchCountry />} />
          <Route path="/countries/:countryId" element={<CountryInfo />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
