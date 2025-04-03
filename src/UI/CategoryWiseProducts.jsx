import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useFetchProducts } from "../api/fetchProducts";
import { NavLink } from "react-router-dom";

const CategoryWiseProducts = () => {
    useFetchProducts();
    const data = useSelector((state) => state.products.products);

    // Extract unique categories with images and count
    const categoryData = {};
    data.forEach((product) => {
        if (!categoryData[product.category]) {
            categoryData[product.category] = {
                name: product.category,
                image: product.thumbnail,
                count: 1,
                products: [product],
            };
        } else {
            categoryData[product.category].count += 1;
            categoryData[product.category].products.push(product);
        }
    });

    const categories = Object.values(categoryData);

    // States
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(6);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [loading, setLoading] = useState(false);

    // Auto-slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    // Adjust visible cards based on screen width
    useEffect(() => {
        const updateVisibleCards = () => {
            if (window.innerWidth >= 1024) setVisibleCards(6);
            else if (window.innerWidth >= 768) setVisibleCards(4);
            else setVisibleCards(2);
        };

        updateVisibleCards();
        window.addEventListener("resize", updateVisibleCards);
        return () => window.removeEventListener("resize", updateVisibleCards);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 < categories.length ? prevIndex + 1 : 0
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 >= 0 ? prevIndex - 1 : categories.length - visibleCards
        );
    };

    // Handle category selection with loading effect
    const handleCategoryClick = (category) => {
        setLoading(true);
        setSelectedCategory(null);

        // Simulate loading delay
        setTimeout(() => {
            setSelectedCategory(category);
            setLoading(false);
        }, 1000);  // Loading delay of 1 second
    };

    return (
        <div className="relative w-full max-w-screen-xl mx-auto my-8">
            <h2 className="text-3xl font-bold text-center mb-6">Featured Categories</h2>

            {/* Category Slider */}
            <div className="relative overflow-hidden">
                <div
                    className="flex transition-transform duration-2000 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
                >
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="p-4 flex-shrink-0 cursor-pointer"
                            style={{ minWidth: `${100 / visibleCards}%` }}
                            onClick={() => handleCategoryClick(category)}
                        >
                            <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center hover:bg-gray-200 transition">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    loading="lazy"
                                    className="w-24 h-24 object-cover rounded-full mx-auto mb-3"
                                />
                                <h3 className="text-lg font-semibold">{category.name}</h3>
                                <p className="text-gray-500">{category.count} items</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                className="absolute cursor-pointer left-2 top-1/2 transform -translate-y-1/2 bg-gray-300 p-3 rounded-full hover:bg-gray-400"
                onClick={prevSlide}
            >
                ❮
            </button>
            <button
                className="absolute cursor-pointer right-2 top-1/2 transform -translate-y-1/2 bg-gray-300 p-3 rounded-full hover:bg-gray-400"
                onClick={nextSlide}
            >
                ❯
            </button>

            {/* Show Selected Category Products with Loading */}
            {loading ? (
                <div className="mt-10 flex justify-center items-center">
                    <div className="w-16 h-16 border-4 border-gray-300 border-t-emerald-500 rounded-full animate-spin"></div>
                </div>
            ) : (
                selectedCategory && (
                    <div className="mt-10 bg-white p-6 shadow-lg rounded-lg fade-in">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold">{selectedCategory.name} Products</h2>
                            <button
                                className="bg-gray-300 px-3 py-1 rounded-full hover:bg-gray-400"
                                onClick={() => setSelectedCategory(null)}
                            >
                                ✖ Close
                            </button>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                            {selectedCategory.products.map((product) => (
                                <NavLink
                                    key={product.id}
                                    to={`/product/${product.id}`}
                                    className="border p-3 rounded-lg text-center hover:shadow-lg transition"
                                >
                                    <img
                                        src={product.thumbnail}
                                        alt={product.title}
                                        loading="lazy"
                                        className="w-24 h-24 object-cover mx-auto mb-2 rounded-lg"
                                    />
                                    <h3 className="text-sm font-semibold">{product.title}</h3>
                                    <p className="text-gray-600">${product.price}</p>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default CategoryWiseProducts;
