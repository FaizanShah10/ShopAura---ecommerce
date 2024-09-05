import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    cartItems: [],
    totalProducts: 0,
    totalAmount: 0,
    tax: 0,
    grandTotal: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload

            // Check if the product is already in the cart
            const existingProduct = state.cartItems.find(item => item.id === product.id);

            if(existingProduct){
                existingProduct.quantity += 1;
            } else {
                state.cartItems.push({...product, quantity: 1})
            }


            //update cart totals
            state.totalProducts += 1
            state.totalAmount += product.price;

            //calculating tax with amount
            state.tax = state.totalAmount * 0.05

            //grand total
            state.grandTotal = state.totalAmount + state.tax

        },
        removeFromCart: (state, action) => {
            const itemId = action.payload
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
            state.totalProducts -= 1

            //updating values after removing item from cart
            state.totalAmount = state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
            state.tax = state.totalAmount * 0.05; 
            state.grandTotal = state.totalAmount + state.tax;
        }  
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions //export action
export default cartSlice.reducer //export reducer