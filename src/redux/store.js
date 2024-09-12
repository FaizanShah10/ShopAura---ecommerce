import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../redux/features/cartSlice"
import {cartApi} from '../../../Backend/auth/cartApi'
import authReducer from '../redux/features/authSlice'
import { productApi } from '../../../Backend/auth/productApi'
import { reviewApi } from '../../../Backend/auth/reviewApi'

const store = configureStore({
    reducer: {
      cart: cartReducer,
      [cartApi.reducerPath]: cartApi.reducer,
      auth: authReducer,
      [productApi.reducerPath]: productApi.reducer,
      [reviewApi.reducerPath]: reviewApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(cartApi.middleware, productApi.middleware, reviewApi.middleware),
  })

  export default store