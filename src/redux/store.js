import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../redux/features/cartSlice"
import {cartApi} from '../../../Backend/auth/cartApi'
import authReducer from '../redux/features/authSlice'
import { productApi } from '../../../Backend/auth/productApi'
import { reviewApi } from '../../../Backend/auth/reviewApi'
import { orderApi } from '../../../Backend/auth/orderApi'

const store = configureStore({
    reducer: {
      cart: cartReducer,
      [cartApi.reducerPath]: cartApi.reducer,
      auth: authReducer,
      [productApi.reducerPath]: productApi.reducer,
      [reviewApi.reducerPath]: reviewApi.reducer,
      [orderApi.reducerPath]: orderApi.reducer

    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(cartApi.middleware, productApi.middleware, reviewApi.middleware, orderApi.middleware),
  })

  export default store