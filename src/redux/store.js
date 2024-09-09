import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../redux/features/cartSlice"
import {authApi} from '../../../Backend/auth/authApi'
import authReducer from '../redux/features/authSlice'

const store = configureStore({
    reducer: {
      cart: cartReducer,
      [authApi.reducerPath]: authApi.reducer,
      auth: authReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authApi.middleware),
  })

  export default store