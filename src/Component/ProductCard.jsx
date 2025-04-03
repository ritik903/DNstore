import React from "react";
import { NavLink } from "react-router-dom";
import { FaHeart, FaEye, FaRandom } from "react-icons/fa";

const ProductCard = ({ product, gridLayout, likedProducts, toggleLike, shareProduct }) => {
    return (
        <div
            className={gridLayout === "list"
                ? "flex items-center gap-6 border rounded-lg p-4 shadow-md hover:shadow-2xl transition relative group"
                : "bg-white md:bg-gray-100 md:border-none border-1 rounded-lg md:p-4 p-3 shadow-lg hover:shadow-2xl transition relative group mt-5"
            }
        >
            <div className={gridLayout === "list" ? "w-1/5 relative" : "relative"}>
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    loading="lazy"
                    className={gridLayout === "list"
                        ? "w-auto md:h-40 h-30 object-cover rounded-lg"
                        : "w-full md:h-40 h-30 object-contain"
                    }
                />
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition`}>
                    <button
                        onClick={() => toggleLike(product.id)}
                        className="p-2 bg-emerald-500 cursor-pointer rounded-full hover:bg-emerald-600"
                    >
                        <FaHeart
                            className={`w-5 h-5 ${likedProducts[product.id] ? "text-red-500" : "text-white"}`}
                        />
                    </button>
                    <button
                        onClick={() => shareProduct(product)}
                        className="p-2 bg-emerald-500 cursor-pointer rounded-full hover:bg-emerald-600"
                    >
                        <FaRandom className="w-5 h-5 text-white" />
                    </button>
                    <NavLink
                        to={`/product/${product.id}`}
                        className="p-2 bg-emerald-500 rounded-full hover:bg-emerald-600"
                    >
                        <FaEye className="w-5 h-5 text-white" />
                    </NavLink>
                </div>
            </div>
            <div className={gridLayout === "list" ? "w-3/4" : ""}>
                <h2 className="md:mt-4 mt-2 md:text-lg text-sm font-semibold">{product.title}</h2>
                <p className="text-green-500 font-bold">${product.price}</p>
                <p className="text-gray-500 text-sm">By {product.brand}</p>
                <NavLink
                    to={`/product/${product.id}`}
                    className="md:mt-2 mt-0 inline-block text-blue-500 no-underline"
                >
                    View Details
                </NavLink>
            </div>
        </div>
    );
};

export default React.memo(ProductCard);

