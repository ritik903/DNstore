import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    filteredProducts: [],
    categories: [],
    brands: [],
    colors: [],
    selectedCategory: "all",
    selectedBrand: "all",
    selectedColor: "all",
    showFilters: false,
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
            state.filteredProducts = action.payload;

            // Extract unique categories, brands, and colors dynamically
            const categoriesSet = new Set();
            const brandsSet = new Set();
            const colorsSet = new Set();

            action.payload.forEach((product) => {
                categoriesSet.add(product.category);
                brandsSet.add(product.brand);
                if (product.color) colorsSet.add(product.color);
            });

            state.categories = Array.from(categoriesSet);
            state.brands = Array.from(brandsSet);
            state.colors = Array.from(colorsSet);
        },
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
            state.filteredProducts = state.products.filter(
                (product) =>
                    action.payload === "all" || product.category === action.payload
            );
        },
        setSelectedBrand: (state, action) => {
            state.selectedBrand = action.payload;
            state.filteredProducts = state.products.filter(
                (product) =>
                    action.payload === "all" || product.brand === action.payload
            );
        },
        setSelectedColor: (state, action) => {
            state.selectedColor = action.payload;
            state.filteredProducts = state.products.filter(
                (product) =>
                    action.payload === "all" || product.color === action.payload
            );
        },
        toggleFilters: (state) => {
            state.showFilters = !state.showFilters;
        },
        searchProducts: (state, action) => {
            const query = action.payload.toLowerCase().trim();

            state.filteredProducts = state.products.filter((product) => {
                const title = product.title?.toLowerCase() || "";
                const description = product.description?.toLowerCase() || "";
                const category = product.category?.toLowerCase() || "";
                const brand = product.brand?.toLowerCase() || "";

                // 🔥 Strict matching using regex to find whole words only
                const regex = new RegExp(`\\b${query}\\b`, "i");

                return (
                    regex.test(title) ||
                    regex.test(description) ||
                    regex.test(category) ||
                    regex.test(brand)
                );
            });
        },


    },
});

export const { setProducts, setSelectedCategory, setSelectedBrand, setSelectedColor, toggleFilters, searchProducts, } =
    productSlice.actions;
export default productSlice.reducer;
