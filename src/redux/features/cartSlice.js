import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
    totalProducts: JSON.parse(localStorage.getItem('totalProducts')) || 0,
    totalAmount: JSON.parse(localStorage.getItem('totalAmount')) || 0,
    tax: JSON.parse(localStorage.getItem('tax')) || 0,
    grandTotal: JSON.parse(localStorage.getItem('grandTotal')) || 0
}

const saveCartToLocalStorage = (cartState) => {
    localStorage.setItem('cartItems', JSON.stringify(cartState.cartItems));
    localStorage.setItem('totalProducts', JSON.stringify(cartState.totalProducts));
    localStorage.setItem('totalAmount', JSON.stringify(cartState.totalAmount));
    localStorage.setItem('tax', JSON.stringify(cartState.tax));
    localStorage.setItem('grandTotal', JSON.stringify(cartState.grandTotal));
};

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

            saveCartToLocalStorage(state)

        },
        removeFromCart: (state, action) => {
            const itemId = action.payload
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
            state.totalProducts -= 1

            //updating values after removing item from cart
            state.totalAmount = state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
            state.tax = state.totalAmount * 0.05; 
            state.grandTotal = state.totalAmount + state.tax;

            saveCartToLocalStorage(state)
        },
        //update cartItems quantity
        updateCartItems: (state, action) => {
            const {id, quantity} = action.payload

            const product = state.cartItems.find((item) => item.id === id)

            if(product && quantity > 0){
                const quantityDifference = quantity - product.quantity
                product.quantity = quantity

                //updating totals
                state.totalProducts += quantityDifference
                state.totalAmount += product.price * quantityDifference
                state.tax = state.totalAmount * 0.05
                state.grandTotal = state.totalAmount + state.tax
            }
        },
        clearCart: (state, action) => {
            state.cartItems = [];

            state.totalProducts = 0;
            state.totalAmount = 0;
            state.tax = 0;
            state.grandTotal = 0;

            saveCartToLocalStorage(state)

        }
    }
})

export const {addToCart, removeFromCart, updateCartItems, clearCart} = cartSlice.actions //export action
export default cartSlice.reducer //export reducer