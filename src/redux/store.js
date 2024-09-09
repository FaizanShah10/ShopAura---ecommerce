import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../redux/features/cartSlice"
import {authApi} from '../../../Backend/auth/authApi'

const store = configureStore({
    reducer: {
      cart: cartReducer,
      [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authApi.middleware),
  })

  export default store