import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchProducts } from "../api/fetchProducts";
import { FaFilter, FaThLarge, FaThList, FaRandom } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import {
    setSelectedCategory,
    setSelectedBrand,
    setSelectedColor,
    toggleFilters,
} from "../Features/slices/productSlice";
import BannerSlider from "../UI/BannerSlider";
import ProductCard from "./ProductCard";
import FilterSidebar from "./FilterSidebar";
import Loading from "../UI/Loading";

const ProdutsAll = () => {
    const dispatch = useDispatch();
    const { isLoading } = useFetchProducts();
    const {
        filteredProducts,
        categories,
        brands,
        colors,
        selectedCategory,
        selectedBrand,
        selectedColor,
        showFilters,
    } = useSelector((state) => state.products);

    const [showAll, setShowAll] = useState(false);
    const [likedProducts, setLikedProducts] = useState({});
    const [sortBy, setSortBy] = useState("default");
    const [gridLayout, setGridLayout] = useState("5cols");


    // loading effacts 
    const [pageLoading, setPageLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setPageLoading(false);
        }, 800); // Show loading spinner for 800ms
        return () => clearTimeout(timer);
    }, []);
    


    const sortProducts = useCallback((products, sortBy) => {
        switch (sortBy) {
            case "name_asc":
                return [...products].sort((a, b) => (a.title || "").localeCompare(b.title || ""));
            case "name_desc":
                return [...products].sort((a, b) => (b.title || "").localeCompare(a.title || ""));
            case "price_asc":
                return [...products].sort((a, b) => (a.price || 0) - (b.price || 0));
            case "price_desc":
                return [...products].sort((a, b) => (b.price || 0) - (a.price || 0));
            default:
                return products;
        }
    }, []);

    const sortedProducts = sortProducts(filteredProducts, sortBy);
    const visibleProducts = showAll ? sortedProducts : sortedProducts.slice(0, 50);

    const toggleGridLayout = useCallback((layout) => {
        setGridLayout(layout);
    }, []);

    const toggleLike = useCallback((id) => {
        setLikedProducts((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    }, []);

    const shareProduct = useCallback((product) => {
        const url = `${window.location.origin}/product/${product.id}`;
        navigator.clipboard.writeText(url);
        alert("Product link copied to clipboard!");
    }, []);

    if (isLoading || pageLoading) {
        return <Loading />;
    }

    const gridClasses = {
        "list": "flex flex-col space-y-4",
        "3cols": "grid-cols-2 sm:grid-cols-2 lg:grid-cols-3",
        "4cols": "grid-cols-2 sm:grid-cols-2 lg:grid-cols-4",
        "5cols": "grid-cols-2 sm:grid-cols-2 lg:grid-cols-5",
    };


    return (
        <>
            <div className="relative flex flex-col min-h-screen">
                <div className={`w-full md:p-6 px-2 min-h-screen overflow-y-auto transition ${showFilters ? "blur-sm" : ""}`}>
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-white shadow-sm rounded-lg">
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
                            Product List
                        </h1>
                        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
                            <div className="w-full sm:w-auto">
                                <select
                                    className="w-full cursor-pointer sm:w-48 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-sm sm:text-base"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                >
                                    <option value="default">Default</option>
                                    <option value="name_asc">Name (A-Z)</option>
                                    <option value="name_desc">Name (Z-A)</option>
                                    <option value="price_asc">Price (Low to High)</option>
                                    <option value="price_desc">Price (High to Low)</option>
                                </select>
                            </div>
                            <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
                                <button
                                    onClick={() => toggleGridLayout("list")}
                                    className={`p-2 rounded-lg cursor-pointer transition-all ${gridLayout === "list" ? "bg-emerald-500 text-white" : "bg-transparent text-gray-500 hover:bg-gray-200"}`}
                                >
                                    <FaThList size={20} />
                                </button>
                                <button
                                    onClick={() => toggleGridLayout("3cols")}
                                    className={`p-2 rounded-lg cursor-pointer transition-all ${gridLayout === "3cols" ? "bg-emerald-500 text-white" : "bg-transparent text-gray-500 hover:bg-gray-200"}`}
                                >
                                    <FaThLarge size={20} />
                                </button>
                                <button
                                    onClick={() => toggleGridLayout("4cols")}
                                    className={`p-2 rounded-lg cursor-pointer transition-all ${gridLayout === "4cols" ? "bg-emerald-500 text-white" : "bg-transparent text-gray-500 hover:bg-gray-200"} hidden md:block`}
                                >
                                    <BsFillGrid3X3GapFill size={20} />
                                </button>
                                <button
                                    onClick={() => toggleGridLayout("5cols")}
                                    className={`p-2 rounded-lg cursor-pointer transition-all ${gridLayout === "5cols" ? "bg-emerald-500 text-white" : "bg-transparent text-gray-500 hover:bg-gray-200"} hidden md:block`}
                                >
                                    <TfiLayoutGrid4Alt size={20} />
                                </button>
                            </div>
                            <button
                                className="flex items-center cursor-pointer gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-all text-sm sm:text-base"
                                onClick={() => dispatch(toggleFilters())}
                            >
                                <FaFilter />
                                {showFilters ? "Close Filters" : "Open Filters"}
                            </button>
                        </div>
                    </div>
                    <div className={gridLayout === "list" ? "flex flex-col space-y-6" : `grid md:gap-6 gap-2 ${gridClasses[gridLayout]}`}>
                        {visibleProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                gridLayout={gridLayout}
                                likedProducts={likedProducts}
                                toggleLike={toggleLike}
                                shareProduct={shareProduct}
                            />
                        ))}
                    </div>
                    {filteredProducts.length > 50 && (
                        <div className="text-center mt-6">
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="px-4 py-2 bg-emerald-500 cursor-pointer text-white rounded hover:bg-emerald-600 transition"
                            >
                                {showAll ? "Show Less" : "View All Products"}
                            </button>
                        </div>
                    )}
                </div>
                <FilterSidebar
                    showFilters={showFilters}
                    toggleFilters={() => dispatch(toggleFilters())}
                    categories={categories}
                    brands={brands}
                    colors={colors}
                    selectedCategory={selectedCategory}
                    selectedBrand={selectedBrand}
                    selectedColor={selectedColor}
                    setSelectedCategory={(category) => dispatch(setSelectedCategory(category))}
                    setSelectedBrand={(brand) => dispatch(setSelectedBrand(brand))}
                    setSelectedColor={(color) => dispatch(setSelectedColor(color))}
                />
            </div>
            <BannerSlider />
        </>
    );
};

export default ProdutsAll;