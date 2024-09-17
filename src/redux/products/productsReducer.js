import { createSlice } from "@reduxjs/toolkit";

// Начальное состояние
const INITIAL_STATE = {
  products: null,
  query: '',
};

const productsSlice = createSlice({
  name: "products",  
  initialState: INITIAL_STATE,  
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { setProducts, setQuery } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;



// export const productsReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case SET_PRODUCTS:
//       return {
//         ...state,
//         products: action.payload, 
//       };
//     case SET_QUERY:
//       return {
//         ...state,
//         query: action.payload,
//       };
//     default:
//       return state;
//   }
// };
