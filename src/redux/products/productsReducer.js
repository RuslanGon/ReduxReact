
const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_QUERY = 'SET_QUERY';


export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const setQuery = (query) => ({
  type: SET_QUERY,
  payload: query,
});

const INITIAL_STATE = {
  products: null,
  query: '',
};

export const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload, 
      };
    case SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
};
