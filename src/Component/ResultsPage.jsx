import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../UI/Loading"

const ResultsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("q");

    const { filteredProducts } = useSelector((state) => state.products);

    const [loading, setLoading] = useState(true);  // ✅ Loading state

    useEffect(() => {
        if (!query) {
            navigate("/");  // Redirect to home if no query is present
        }

        // Simulate loading delay
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // 1 sec delay for loading effect

        return () => clearTimeout(timer);
    }, [query, navigate]);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Search Results for "{query}"</h1>

            {loading ? (
                // ✅ Loading effect
                <Loading />
            ) : filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:gap-6 gap-2">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="border rounded-lg p-4 shadow-lg hover:shadow-2xl transition"
                        >
                            <NavLink to={`/product/${product.id}`}>
                                <img
                                    src={product.thumbnail}
                                    loading="lazy"
                                    alt={product.title}
                                    className="w-full h-40 object-cover"
                                />
                                <h2 className="text-lg font-semibold mt-2">
                                    {product.title}
                                </h2>
                                <p className="text-gray-600">${product.price}</p>
                            </NavLink>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-red-500">No products found for "{query}".</p>
            )}
        </div>
    );
};

export default ResultsPage;
