import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setProducts } from "../Features/slices/productSlice";
import { useEffect } from "react";

const fetchProducts = async () => {
    try {
        const response = await fetch("https://dummyjson.com/products?limit=194");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("✅ API Response:", data);

        // Manually colors add karna (Agar API me nahi hai)
        const productsWithColors = data.products.map(product => ({
            ...product,
            colors: ["red", "blue", "black", "green"] // Dummy values, actual values dynamically set honi chahiye
        }));

        return productsWithColors;
    } catch (error) {
        console.error("❌ Fetch error:", error);
        throw error;
    }
};

// Product Detail Page
const fetchProductById = async (id) => {
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("✅ Product Detail Response:", data);
        return data;
    } catch (error) {
        console.error("❌ Fetch error:", error);
        throw error;
    }
};

// React Query Hook for Product Detail
export const useFetchProductDetail = (productId) => {
    return useQuery({
        queryKey: ["product", productId],
        queryFn: () => fetchProductById(productId),
        enabled: !!productId,
        staleTime: 1000 * 60 * 5,   // 5 minutes caching
        cacheTime: 1000 * 60 * 10    // Cache for 10 minutes
    });
};

// Color Filtering Function
const filterProductsByColor = (products, selectedColor) => {
    if (!selectedColor) return products; // Agar color select nahi to sab return karo

    return products.filter(product =>
        product.colors.includes(selectedColor.toLowerCase()) ||
        product.description.toLowerCase().includes(selectedColor.toLowerCase()) // Agar description me color ho to match kare
    );
};

// Fetch Products Hook with Color Filter
export const useFetchProducts = (selectedColor = "") => {
    const dispatch = useDispatch();
    const query = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
        staleTime: 1000 * 60 * 5,   // 5 minutes caching
        cacheTime: 1000 * 60 * 10    // Cache for 10 minutes
    });

    useEffect(() => {
        if (query.data) {
            dispatch(setProducts(query.data));
        }
    }, [query.data, dispatch]);

    // Color Filter Apply karna
    const filteredProducts = selectedColor ? filterProductsByColor(query.data ?? [], selectedColor) : query.data;

    return { ...query, data: filteredProducts };
};
