import { Route, Routes } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import RegistrationPage from "./RegistrationPage.jsx";

import ContactsPage from "./ContactsPage.jsx";
import Layout from "../components/Layout/Layout.jsx";
import LoginPage from "./LoginPage.jsx";
import { useDispatch } from "react-redux";
import { apiRefresh } from "../redux/auth/operations.js";

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
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/products/:productId/*" element={<Card />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default MainPage;
