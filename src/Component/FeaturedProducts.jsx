import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFetchProducts } from "../api/fetchProducts";
import { toggleLike, shareProduct } from "../Features/slices/productsDataSlice";
import ProductCard from "../UI/ProductsCard";
import Loading from "../UI/Loading"

const FeaturedProducts = () => {
    const dispatch = useDispatch();
    const { isLoading } = useFetchProducts(); // Fetching loading state
    const data = useSelector((state) => state.products.products);
    const likedProducts = useSelector((state) => state.product.likedProducts);

    // Filter featured products (rating 4.5+)
    const featuredProducts = data.filter((product) => product.rating >= 4.5);

    // State to manage product display count
    const [showAll, setShowAll] = useState(false);
    const visibleProducts = showAll ? featuredProducts : featuredProducts.slice(0, 15);

    // Memoized functions to prevent unnecessary re-renders
    const handleToggleLike = useCallback((id) => {
        dispatch(toggleLike(id));
    }, [dispatch]);

    const handleShareProduct = useCallback((product) => {
        dispatch(shareProduct(product));
    }, [dispatch]);

    // Show loading indicator while data is fetching
    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="max-w-8xl mx-auto my-10 md:px-5 px-2">
            <h1 className="text-3xl font-bold text-center mb-8">Featured Products</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:gap-6 gap-2">
                {visibleProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        likedProducts={likedProducts}
                        toggleLike={handleToggleLike}
                        shareProduct={handleShareProduct}
                    />
                ))}
            </div>

            {/* Show "All Products" button only if there are more than 10 products */}
            {featuredProducts.length > 10 && (
                <div className="text-center mt-6">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="px-5 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition"
                    >
                        {showAll ? "Show Less" : "Show more..."}
                    </button>
                </div>
            )}
        </div>
    );
};

export default FeaturedProducts;