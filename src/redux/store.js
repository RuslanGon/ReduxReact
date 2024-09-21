import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./products/productsReducer.js"; 

import storage from "redux-persist/lib/storage";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import { detailsReducer } from "./products/productDetailsSlice.js";
import { authReducer } from "./auth/authSlice.js";
import { contactsReducer } from "./contacts/contactsSlice.js";

  const productsPersistConfig = {
    key: 'products',
    storage,
    whitelist: ['products'], 
  };

  const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'], 
  };

export const store = configureStore({
  reducer: {
    products: persistReducer(productsPersistConfig, productsReducer) ,
    details: detailsReducer,
    auth: persistReducer(authPersistConfig, authReducer ),
    phonebook: contactsReducer
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);