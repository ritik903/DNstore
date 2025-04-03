import React from "react";
import { FaTimes } from "react-icons/fa";

const FilterSidebar = ({ showFilters, toggleFilters, categories, brands, colors, selectedCategory, selectedBrand, selectedColor, setSelectedCategory, setSelectedBrand, setSelectedColor }) => {
    return (
        <div
            className={`fixed right-0 top-0 w-60 sm:w-80 h-full bg-white shadow-lg p-6 z-50 transition-transform overflow-y-auto ${showFilters ? "translate-x-0" : "translate-x-full"
                }`}
        >
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Filters</h2>
                <button onClick={toggleFilters} className="text-black">
                    <FaTimes size={24} />
                </button>
            </div>
            <div className="mt-4">
                <h3 className="text-lg font-medium">Category</h3>
                <ul className="mt-2 space-y-2">
                    <li
                        className={`cursor-pointer ${selectedCategory === "all" ? "text-blue-600 font-bold" : ""}`}
                        onClick={() => setSelectedCategory("all")}
                    >
                        All
                    </li>
                    {categories.map((category) => (
                        <li
                            key={category}
                            className={`cursor-pointer ${selectedCategory === category ? "text-blue-600 font-bold" : ""}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-6">
                <h3 className="text-lg font-medium">Company</h3>
                <select
                    className="w-full mt-2 p-2 border rounded"
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                >
                    <option value="all">All</option>
                    {brands.map((brand) => (
                        <option key={brand} value={brand}>
                            {brand}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mt-6">
                <h3 className="text-lg font-medium">Colors</h3>
                <div className="flex mt-2 space-x-2">
                    <span
                        className={`w-6 h-6 bg-gray-300 rounded-full cursor-pointer border ${selectedColor === "all" ? "ring-2 ring-blue-500" : ""}`}
                        onClick={() => setSelectedColor("all")}
                    ></span>
                    {colors.map((color) => (
                        <span
                            key={color}
                            className={`w-6 h-6 rounded-full cursor-pointer border ${selectedColor === color ? "ring-2 ring-blue-500" : ""}`}
                            style={{ backgroundColor: color }}
                            onClick={() => setSelectedColor(color)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default React.memo(FilterSidebar);