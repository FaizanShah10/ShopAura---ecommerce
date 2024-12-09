import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
    totalProducts: JSON.parse(localStorage.getItem('totalProducts')) || 0,
    totalAmount: JSON.parse(localStorage.getItem('totalAmount')) || 0,
    tax: JSON.parse(localStorage.getItem('tax')) || 0,
    grandTotal: JSON.parse(localStorage.getItem('grandTotal')) || 0,
};

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
            const product = action.payload;
        
            // Check if the product is already in the cart by its ID
            const existingProductIndex = state.cartItems.findIndex((item) => item._id === product._id);
        
            if (existingProductIndex >= 0) {
                // If the product exists, increment its quantity
                state.cartItems[existingProductIndex].quantity += 1;
            } else {
                // Add the product to the cart with quantity 1
                state.cartItems.push({ ...product, quantity: 1 });
            }
        
            // Update cart totals
            state.totalProducts += 1;
            state.totalAmount = state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        
            // Calculate tax and grand total
            state.tax = state.totalAmount * 0.05;
            state.grandTotal = state.totalAmount + state.tax;
        
            // Save updated cart state to localStorage
            saveCartToLocalStorage(state);
        },
        removeFromCart: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item._id !== itemId);
        
            state.totalProducts -= 1;
        
            // Recalculate totals
            state.totalAmount = state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
            state.tax = state.totalAmount * 0.05; 
            state.grandTotal = state.totalAmount + state.tax;
        
            // Save to localStorage
            saveCartToLocalStorage(state);
        },       
        updateCartItems: (state, action) => {
            const { _id, quantity } = action.payload;  // Expecting _id and quantity in the payload
        
            const product = state.cartItems.find((item) => item._id === _id);
        
            if (product && quantity > 0) {
                const quantityDifference = quantity - product.quantity;
                product.quantity = quantity;
        
                // Update totals
                state.totalProducts += quantityDifference;
                state.totalAmount = state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
                state.tax = state.totalAmount * 0.05;
                state.grandTotal = state.totalAmount + state.tax;
        
                // Save to localStorage
                saveCartToLocalStorage(state);
            }
        },     
        clearCart: (state) => {
            state.cartItems = [];
            state.totalProducts = 0;
            state.totalAmount = 0;
            state.tax = 0;
            state.grandTotal = 0;

            saveCartToLocalStorage(state);
        },
    },
});

export const { addToCart, removeFromCart, updateCartItems, clearCart } = cartSlice.actions; // export actions
export default cartSlice.reducer; // export reducer
