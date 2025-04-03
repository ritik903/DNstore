import React from "react";
import { NavLink } from "react-router-dom";
import { FaHeart, FaEye, FaRandom } from "react-icons/fa";

const ProductCard = ({ product, likedProducts, toggleLike, shareProduct }) => {
    return (
        <div className="bg-white md:bg-gray-100 md:border-none border-1 rounded-lg md:p-4 p-3 shadow-md hover:shadow-2xl transition relative group">
            {/* Product Image */}
            <div className="relative">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    loading="lazy"
                    className="md:h-40 h-30 w-full object-contain"
                />
                {/* Hover Action Buttons */}
                <div className="absolute top-30 inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                    {/* Like Button */}
                    <button
                        onClick={() => toggleLike(product.id)}
                        className="p-2 bg-emerald-500 rounded-full cursor-pointer hover:bg-emerald-600"
                    >
                        <FaHeart
                            className={`w-5 h-5 ${likedProducts[product.id] ? "text-red-500" : "text-white"}`}
                        />
                    </button>

                    {/* Share Button */}
                    <button
                        onClick={() => shareProduct(product)}
                        className="p-2 bg-emerald-500 rounded-full cursor-pointer hover:bg-emerald-600"
                    >
                        <FaRandom className="w-5 h-5 text-white" />
                    </button>

                    {/* View Details */}
                    <NavLink
                        to={`/product/${product.id}`}
                        className="p-2 bg-emerald-500 rounded-full hover:bg-emerald-600"
                    >
                        <FaEye className="w-5 h-5 text-white" />
                    </NavLink>
                </div>
            </div>

            {/* Product Info */}
            <h2 className="md:mt-4 mt-2 md:text-lg text-sm font-semibold">{product.title}</h2>
            <p className="text-green-500 font-bold">${product.price}</p>
            <p className="text-gray-500 text-sm">By {product.brand}</p>

            {/* View Details Button */}
            <NavLink
                to={`/product/${product.id}`}
                className="md:mt-2 mt-0 inline-block cursor-pointer text-blue-500 no-underline"
            >
                View Details
            </NavLink>
        </div>
    );
};

export default React.memo(ProductCard);