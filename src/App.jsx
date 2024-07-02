import {Routes, Route} from "react-router-dom";
import {Navigation} from "./components";
import {Suspense, useEffect} from "react";
import {easyLazy} from "helpers/easyLazy";
import {fetchBaseCurrency} from "./reduxStore/currency/operations";
import {useDispatch} from "react-redux";
import {setBaseCurrency} from "./reduxStore/currency/currencySlice";
import {refreshUserThunk} from "./reduxStore/auth/operation";

const LoginPage = easyLazy("LoginPage");
const RegisterPage = easyLazy("RegisterPage");
const Home = easyLazy("Home");
const Photos = easyLazy("Photos");
const Todos = easyLazy("Todos");
const Points = easyLazy("Points");
const Props = easyLazy("Props");
const Countries = easyLazy("Countries");
const SearchCountry = easyLazy("SearchCountry");
const CountryInfo = easyLazy("CountryInfo");

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUserThunk());
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      dispatch(fetchBaseCurrency(pos.coords));
    }

    function error() {
      dispatch(setBaseCurrency("USD"));
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [dispatch]);
  return (
    <>
      <Navigation />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
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
