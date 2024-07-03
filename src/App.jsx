import { Routes, Route } from "react-router-dom";
import {
  Loader,
  Navigation,
  PrivateRoute,
  RestrictedRoute,
} from "./components";
import { Suspense, useEffect } from "react";
import { easyLazy } from "helpers/easyLazy";
import { fetchBaseCurrency } from "./reduxStore/currency/operations";
import { useDispatch, useSelector } from "react-redux";
import { setBaseCurrency } from "./reduxStore/currency/currencySlice";
import { refreshUserThunk } from "./reduxStore/auth/operation";
import { selectIsRefreshing } from "./reduxStore/auth/selector";

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
  const isRefreshing = useSelector(selectIsRefreshing);
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
  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Navigation />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={<LoginPage />} redirectTo="/todos" />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegisterPage />}
                redirectTo="/todos"
              />
            }
          />
          <Route
            path="/photos"
            element={
              <PrivateRoute component={<Photos />} redirectTo="/login" />
            }
          />
          <Route
            path="/todos"
            element={<PrivateRoute component={<Todos />} redirectTo="/login" />}
          />
          <Route
            path="/points"
            element={
              <PrivateRoute component={<Points />} redirectTo="/login" />
            }
          />
          <Route
            path="/props"
            element={<PrivateRoute component={<Props />} redirectTo="/login" />}
          />
          <Route
            path="/countries"
            element={
              <PrivateRoute component={<Countries />} redirectTo="/login" />
            }
          />
          <Route
            path="/SearchCountries"
            element={
              <PrivateRoute component={<SearchCountry />} redirectTo="/login" />
            }
          />
          <Route
            path="/countries/:countryId"
            element={
              <PrivateRoute component={<CountryInfo />} redirectTo="/login" />
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
