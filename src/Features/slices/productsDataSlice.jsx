import { createSlice } from "@reduxjs/toolkit";

// Helper function to load cart from localStorage
const loadCartFromLocalStorage = () => {
    try {
        const serializedCart = localStorage.getItem('cart');
        if (serializedCart === null) {
            return [];
        }
        return JSON.parse(serializedCart);
    } catch (e) {
        console.warn("Could not load cart from localStorage", e);
        return [];
    }
};

const initialState = {
    likedProducts: {},
    showFilters: false,
    cart: loadCartFromLocalStorage(), // Initialize cart from localStorage
};

const productDataSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        toggleLike: (state, action) => {
            const id = action.payload;
            state.likedProducts[id] = !state.likedProducts[id];
        },
        shareProduct: (state, action) => {
            const url = `${window.location.origin}/product/${action.payload}`;
            navigator.clipboard.writeText(url);
            alert("Product link copied to clipboard!");
        },
        toggleFilters: (state) => {
            state.showFilters = !state.showFilters;
        },

        // ✅ Updated Add to Cart Reducer with localStorage sync
        addToCart: (state, action) => {
            const { id, title, price, stock, color, quantity, thumbnail, images } = action.payload;

            // Check if the same product with the same color exists
            const existingItem = state.cart.find(item => item.id === id && item.color === color);

            if (existingItem) {
                existingItem.quantity += quantity; // Increase quantity
            } else {
                state.cart.push({ id, title, stock, price, color, quantity, thumbnail, images }); // Add new product
            }

            // Sync with localStorage
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },

        // ✅ Remove from Cart with localStorage sync
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },

        // ✅ Update Quantity with localStorage sync
        updateQuantity: (state, action) => {
            const { id, color, quantity } = action.payload;
            const item = state.cart.find(item => item.id === id && item.color === color);
            if (item) {
                item.quantity = quantity;
                localStorage.setItem('cart', JSON.stringify(state.cart));
            }
        },

        // ✅ Increase Quantity with localStorage sync
        increaseQuantity: (state, action) => {
            const item = state.cart.find(i => i.id === action.payload);
            if (item) {
                item.quantity += 1;
                localStorage.setItem('cart', JSON.stringify(state.cart));
            }
        },

        // ✅ Decrease Quantity with localStorage sync
        decreaseQuantity: (state, action) => {
            const item = state.cart.find(i => i.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                localStorage.setItem('cart', JSON.stringify(state.cart));
            }
        },

        // ✅ Clear Cart with localStorage sync
        clearCart: (state) => {
            state.cart = [];
            localStorage.removeItem('cart');
        }
    },
});

export const {
    toggleLike,
    shareProduct,
    toggleFilters,
    clearCart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    updateQuantity
} = productDataSlice.actions;

export default productDataSlice.reducer;