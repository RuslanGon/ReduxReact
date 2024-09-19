import { useEffect,  } from "react";
import Loader from "../components/Loader/Loader.jsx";
import Error from "../components/Error/Error.jsx";
import { requestProducts, requestProductsByQuery } from "../services/api.js";
import ProductList from "../components/ProductList/ProductList.jsx";
import SearchForm from "../components/SearchForm/SearchForm.jsx";
import css from "./CatalogPage.module.css"; 
import { useDispatch, useSelector } from "react-redux";
import { setProducts, setQuery } from "../redux/products/productsReducer.js";
import { apiRequestProductsDetailsById } from "../redux/products/operations.js";
import { useState } from "react";
import { selectProducts, selectQuery } from "../redux/products/selectors.js";

const CatalogPage = () => {
  // const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  // const [query, setQuery] = useState('')
  const dispatch = useDispatch()
  const products = useSelector(selectProducts)

  // const isLoading = useSelector(state => state.details.isLoading)
  // const isError = useSelector(state => state.details.isError)
  // const products = useSelector(state => state.details.products)
  const query = useSelector(selectQuery)

useEffect(() => {
  dispatch(apiRequestProductsDetailsById(query))
},[query, dispatch])


  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        const data = await requestProducts();
        dispatch(setProducts(data.items));
      } catch (error) {
        console.error("Error fetching data: ", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, [dispatch]);

  useEffect(() => {
    if (query.length === 0) return;
    async function fetchProductsByQuery() {
      try {
        setIsLoading(true);
        const data = await requestProductsByQuery(query);
        dispatch(setProducts(data.items));
      } catch (error) {
        console.error("Error fetching data: ", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProductsByQuery();
  }, [query, dispatch]);

  const onSetSearchQuery = (searchTerm) => {
    dispatch(setQuery(searchTerm));
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
