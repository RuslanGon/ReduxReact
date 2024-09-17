import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader.jsx";
import Error from "../components/Error/Error.jsx";
import { requestProducts, requestProductsByQuery } from "../services/api.js";
import ProductList from "../components/ProductList/ProductList.jsx";
import SearchForm from "../components/SearchForm/SearchForm.jsx";
import css from "./CatalogPage.module.css"; // Ваши стили для CatalogPage

const CatalogPage = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState('')

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        const data = await requestProducts();
        setProducts(data.items);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    if (query.length === 0) return;
    async function fetchProductsByQuery() {
      try {
        setIsLoading(true);
        const data = await requestProductsByQuery(query);
        setProducts(data.items);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProductsByQuery();
  }, [query]);

  const onSetSearchQuery = (searchTerm) => {
    setQuery(searchTerm);
  };

  return (
    <>
      {isLoading && <Loader />}
      {isError && <Error />}
      {products && (
        <div className={css.div}>
          <SearchForm onSetSearchQuery={onSetSearchQuery} />
          <ProductList products={products} isFavoritePage={false} />
        </div>
      )}
    </>
  );
};

export default CatalogPage;
