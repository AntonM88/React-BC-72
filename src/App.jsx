import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components";
import { Suspense, useEffect } from "react";
import { easyLazy } from "helpers/easyLazy";
import { getUserInfo } from "./service/opencagedataApi";

const Home = easyLazy("Home");
const Photos = easyLazy("Photos");
const Todos = easyLazy("Todos");
const Points = easyLazy("Points");
const Props = easyLazy("Props");
const Countries = easyLazy("Countries");
const SearchCountry = easyLazy("SearchCountry");
const CountryInfo = easyLazy("CountryInfo");

function App() {
  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      const crd = pos.coords;

      getUserInfo(pos.coords);

      console.log("Your current position is:");
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);
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
