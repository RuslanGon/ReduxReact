import { Route, Routes } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import RegistrationPage from "./RegistrationPage.jsx";

import ContactsPage from "./ContactsPage.jsx";
import Layout from "../components/Layout/Layout.jsx";
import LoginPage from "./LoginPage.jsx";
import { useDispatch } from "react-redux";
import { apiRefresh } from "../redux/auth/operations.js";
import RestrictedRoute from "../components/RestrictedRoute/RestrictedRoute.jsx";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute.jsx";

const HomePage = lazy(() => import("./HomePage.jsx"));
const CatalogPage = lazy(() => import("./CatalogPage.jsx"));
const NotFoundPage = lazy(() => import("./NotFoundPage.jsx"));
const Loader = lazy(() => import("../components/Loader/Loader.jsx"));
const FavoritePage = lazy(() => import("./favoritePage.jsx"));
const Card = lazy(() => import("../components/Card/Card.jsx"));

const MainPage = () => {

const dispatch = useDispatch()

useEffect(() => {
  dispatch(apiRefresh())
}, [dispatch])


  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RestrictedRoute> <RegistrationPage /> </RestrictedRoute>} />
          <Route path="/login" element={<RestrictedRoute><LoginPage /> </RestrictedRoute> } />
          <Route path="/contacts" element={<PrivateRoute> <ContactsPage /> </PrivateRoute>} />
          <Route path="/catalog" element={<PrivateRoute> <CatalogPage /> </PrivateRoute>} />
          <Route path="/products/:productId/*" element={<PrivateRoute><Card /> </PrivateRoute> } />
          <Route path="/favorite" element={<PrivateRoute><FavoritePage /> </PrivateRoute> } />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default MainPage;
