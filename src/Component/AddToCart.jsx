import { useSelector, useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart, clearCart } from "../Features/slices/productsDataSlice";
import { FaTrashAlt, FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const AddToCart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.product.cart);

    // Calculate total amount
    const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

    // remove items 
    const handleRemove = (item) => {
        dispatch(removeFromCart(item.id));
        toast.error(`${item.title} removed from cart!`, {
            position: 'top-right',
            autoClose: 2000,
            theme: "colored",
        });
    };

    // clear cart all 
    const handleClearCart = () => {
        dispatch(clearCart());
        toast.warn('Cart cleared successfully!', {
            position: 'top-right',
            autoClose: 2000,
        });
    };

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Main Content */}
            <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 flex-1 w-full">
                {/* Heading with Clear All Button */}
                <div className="flex flex-col sm:flex-row justify-between items-center border-b pb-4 mb-6">
                    <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-800">
                        <FaShoppingCart className="text-blue-500 text-3xl" /> Your Shopping Cart
                    </h2>
                    {cart.length > 0 && (
                        <button
                            onClick={handleClearCart}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition mt-4 sm:mt-0"
                        >
                            Clear All
                        </button>
                    )}
                </div>

                {/* Cart Items */}
                {cart.length > 0 ? (
                    <div className="flex-1 flex flex-col">
                        {/* Desktop Table */}
                        <div className="hidden sm:block flex-1 overflow-y-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-gray-100 text-gray-700">
                                        <th className="p-3 text-left">Product</th>
                                        <th className="p-3 text-center">Quantity</th>
                                        <th className="p-3 text-center">Price</th>
                                        <th className="p-3 text-center">Total</th>
                                        <th className="p-3 text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((item) => (
                                        <tr key={item.id} className="border-b hover:bg-gray-50 transition">
                                            <td className="p-3 flex items-center gap-4">
                                                <img
                                                    src={item.thumbnail}
                                                    alt={item.title}
                                                    loading="lazy"
                                                    className="w-16 h-16 object-cover border rounded-md"
                                                />
                                                <div>
                                                    <span className="font-medium text-gray-800">{item.title}</span>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <span className="text-sm font-medium text-gray-600">Color:</span>
                                                        <span
                                                            className="w-5 h-5 rounded-full border"
                                                            style={{ backgroundColor: item.color }}
                                                        ></span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-3 text-center">
                                                <div className="flex items-center justify-center space-x-2">
                                                    <button
                                                        onClick={() => dispatch(decreaseQuantity(item.id))}
                                                        className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="px-4 text-lg font-semibold">{item.quantity}</span>
                                                    <button
                                                        onClick={() => dispatch(increaseQuantity(item.id))}
                                                        disabled={item.quantity >= item.stock}
                                                        className={`px-3 py-1 rounded-lg transition ${item.quantity >= item.stock
                                                            ? "bg-gray-300 cursor-not-allowed"
                                                            : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                                                            }`}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="p-3 text-green-600 text-center font-semibold">${item.price.toFixed(2)}</td>
                                            <td className="p-3 text-blue-600 text-center font-semibold">${(item.price * item.quantity).toFixed(2)}</td>
                                            <td className="p-3 flex justify-center items-center">
                                                <button
                                                    onClick={() => handleRemove(item)}
                                                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg flex items-center gap-2 transition"
                                                >
                                                    <FaTrashAlt /> Remove
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile List */}
                        <div className="sm:hidden flex-1 overflow-y-auto">
                            {cart.map((item) => (
                                <div key={item.id} className="border-b p-4 hover:bg-gray-50 transition">
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={item.thumbnail}
                                            alt={item.title}
                                            loading="lazy"
                                            className="w-16 h-16 object-cover border rounded-md"
                                        />
                                        <div>
                                            <span className="font-medium text-gray-800">{item.title}</span>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="text-sm font-medium text-gray-600">Color:</span>
                                                <span
                                                    className="w-5 h-5 rounded-full border"
                                                    style={{ backgroundColor: item.color }}
                                                ></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-between items-center">
                                        <div className="flex items-center space-x-2">
                                            <button
                                                onClick={() => dispatch(decreaseQuantity(item.id))}
                                                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                                            >
                                                -
                                            </button>
                                            <span className="px-4 text-lg font-semibold">{item.quantity}</span>
                                            <button
                                                onClick={() => dispatch(increaseQuantity(item.id))}
                                                disabled={item.quantity >= item.stock}
                                                className={`px-3 py-1 rounded-lg transition ${item.quantity >= item.stock
                                                    ? "bg-gray-300 cursor-not-allowed"
                                                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                                                    }`}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <span className="text-green-600 font-semibold">${item.price.toFixed(2)}</span>
                                    </div>
                                    <div className="mt-4 flex justify-between items-center">
                                        <span className="text-blue-600 font-semibold">Total: ${(item.price * item.quantity).toFixed(2)}</span>
                                        <button
                                            onClick={() => handleRemove(item)}
                                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg flex items-center gap-2 transition"
                                        >
                                            <FaTrashAlt /> Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    // Empty Cart UI
                    <div className="text-center mt-10 flex-1 flex flex-col justify-center items-center">
                        <h3 className="text-xl font-semibold text-gray-600">No products found in your cart! 🛒</h3>
                        <NavLink
                            to="/product"
                            className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg transition"
                        >
                            Continue Shopping
                        </NavLink>
                    </div>
                )}

                {/* Total Amount Section */}
                {cart.length > 0 && (
                    <div className="bg-white p-6 rounded-lg shadow-md border mt-6 w-full max-w-md mx-auto sm:ml-auto sm:mr-0">
                        <div className="border-b pb-3 space-y-3">
                            <div className="flex justify-between text-gray-500 font-medium">
                                <span>Subtotal</span>
                                <span className="text-green-600 font-semibold">${totalAmount}</span>
                            </div>
                            <div className="flex justify-between text-gray-500 font-medium">
                                <span>Shipping</span>
                                <span className="text-gray-800 font-semibold">Free</span>
                            </div>
                            <div className="flex justify-between text-gray-500 font-medium">
                                <span>Estimate for</span>
                                <span className="text-blue-800 font-semibold">United Kingdom</span>
                            </div>
                        </div>

                        <div className="flex justify-between py-3 text-lg font-semibold">
                            <span>Total</span>
                            <span className="text-green-600">${totalAmount}</span>
                        </div>

                        <NavLink to="/orderTracking"><button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg flex justify-center items-center gap-2 font-semibold transition mt-2">
                            Proceed To Checkout <HiArrowRight />
                        </button></NavLink>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddToCart;