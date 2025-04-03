import { useParams, useNavigate } from "react-router-dom";
import { useFetchProductDetail } from "../api/fetchProducts";
import { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import FeaturedProducts from "./FeaturedProducts";
import { useDispatch } from "react-redux";
import { addToCart } from "../Features/slices/productsDataSlice";
import Loading from "../UI/Loading";
import { toast } from 'react-toastify';
import { GiReturnArrow } from "react-icons/gi";
import { FcShipped } from "react-icons/fc";
import { TbTruckDelivery } from "react-icons/tb";
import { FaStamp } from "react-icons/fa";

const ProductDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate(); // Hook for navigation
    const { data: product, isLoading, error } = useFetchProductDetail(id);
    const images = product ? [product.thumbnail, ...(product.images || [])] : [];
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedColor, setSelectedColor] = useState(null);
    const mainImage = images[activeIndex] || "";
    const availableColors = product?.colors || ["red", "blue", "black", "green"];
    const [zoomStyle, setZoomStyle] = useState({});
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (images.length === 0) return;
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    const handleBack = () => {
        navigate(-1);
    };

    const handleImageClick = (index) => {
        setActiveIndex(index);
    };

    const handleColorSelect = (color) => {
        setSelectedColor(color);
    };

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setZoomStyle({ transformOrigin: `${x}% ${y}%`, transform: "scale(2)" });
    };

    const handleMouseLeave = () => {
        setZoomStyle({ transform: "scale(1)" });
    };

    useEffect(() => {
        if (product?.minimumOrderQuantity) {
            setQuantity(1);
        }
    }, [product]);

    const handleIncrement = () => {
        if (quantity < product?.minimumOrderQuantity) {
            setQuantity(quantity + 1);
        }
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;

        return (
            <>
                {[...Array(fullStars)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                ))}
                {halfStar === 1 && <FaStarHalfAlt className="text-yellow-400" />}
                {[...Array(emptyStars)].map((_, i) => (
                    <FaRegStar key={i + fullStars} className="text-gray-400" />
                ))}
            </>
        );
    };

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <h2 className="text-center text-red-500 font-semibold">Error fetching product details.</h2>;
    }

    const handleAddToCart = (product) => {
        if (!selectedColor) {
            alert("Please select a color before adding to cart.");
            return;
        }

        const cartItem = {
            id: product.id,
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail,
            images: product.images,
            brand: product.brand,
            category: product.category,
            description: product.description,
            stock: product.stock,
            discountPercentage: product.discountPercentage,
            rating: product.rating,
            color: selectedColor,
            quantity: quantity,
        };

        dispatch(addToCart(cartItem));
        toast.success(`${product.title} add from cart!`);
    };

    return (
        <div className="container mx-auto md:px-4 px-2 py-8">
            {/* Back Button */}
            <button
                onClick={handleBack}
                className="mb-6 bg-gray-200 cursor-pointer text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-300"
            >
                🔙 Back
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product Images */}
                <div className="flex flex-col items-center gap-4">
                    <div className="relative w-full max-w-md h-76 overflow-hidden rounded-lg shadow-lg">
                        <img
                            src={mainImage}
                            alt={product.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-200"
                            style={zoomStyle}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                        />
                    </div>
                    <div className="flex gap-4">
                        {images.slice(0, 4).map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Thumbnail ${index + 1}`}
                                loading="lazy"
                                className={`w-20 h-20 border-2 rounded-lg cursor-pointer transition-all duration-200 
                          ${index === activeIndex ? "border-red-500" : "border-gray-300"}`}
                                onClick={() => handleImageClick(index)}
                            />
                        ))}
                    </div>
                </div>

                {/* Product Details */}
                <div className="space-y-3">
                    <h1 className="text-3xl font-bold">{product.title}</h1>
                    <div className="flex items-center gap-2">
                        <div className="flex gap-2 items-center">{product.rating}{renderStars(product.rating)}</div>
                        <span className="text-gray-600 text-sm">
                            ({product.reviews?.length || 0} reviews)
                        </span>
                    </div>
                    <p className="text-gray-700">{product.description}</p>
                    <p className="text-red-500 font-semibold">Discount: {product.discountPercentage}%</p>
                    <p className="text-2xl font-bold">Price: ₹{product.price}</p>
                    <p className="text-gray-700">Available: {product.stock} {product.stock >= 0 ? "in stock" : "not available"}</p>

                    <div className="grid  md:grid-cols-4 grid-cols-2 gap-4 mt-6 text-sm text-gray-600">
                        <div>
                            <GiReturnArrow className="text-center text-5xl"/>
                            {product.returnPolicy}
                        </div>
                        <div>
                            <FcShipped className="text-center text-5xl"/>
                            {product.shippingInformation}
                        </div>
                        <div>
                            <TbTruckDelivery className="text-center text-5xl" />
                            Free Delivery
                        </div>
                        <div>
                            <FaStamp className="text-center text-5xl" />
                            {product.warrantyInformation}
                        </div>
                    </div>

                    {/* Color Selection */}
                    <div className="space-y-2 mt-6">
                        <h3 className="text-lg font-semibold">Select Color:</h3>
                        <div className="flex gap-3">
                            {availableColors.map((color) => (
                                <button
                                    key={color}
                                    className={`w-10 h-10 rounded-full cursor-pointer border-2 transition flex items-center justify-center 
                                    ${selectedColor === color ? "border-black scale-110" : "border-gray-300"}`}
                                    style={{ backgroundColor: color }}
                                    onClick={() => handleColorSelect(color)}
                                >
                                    {selectedColor === color && <span className="text-white font-bold">✓</span>}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-4">
                        <button onClick={handleDecrement} className="px-4 py-2 cursor-pointer bg-gray-200 rounded-lg hover:bg-gray-300">-</button>
                        <span className="px-4 text-lg font-semibold">{quantity}</span>
                        <button onClick={handleIncrement} className="px-4 py-2 cursor-pointer bg-gray-200 rounded-lg hover:bg-gray-300">+</button>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                        className="w-full bg-red-500 text-white cursor-pointer px-6 py-3 rounded-lg hover:bg-red-600 transition duration-300"
                        onClick={() => handleAddToCart(product)}
                    >
                        🛒 Add To Cart
                    </button>
                </div>
            </div>

            {/* Customer Reviews */}
            <div className="bg-gray-50 py-16 px-2 md:px-12 lg:px-24">
                <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
                    ⭐ Customer Reviews
                </h2>

                {product.reviews && product.reviews.length > 0 ? (
                    <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {product.reviews.map((review, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 p-8"
                            >
                                {/* Reviewer Info */}
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                                        {review.reviewerName.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold">{review.reviewerName}</h3>
                                        <p className="text-gray-500 text-sm">{review.date}</p>
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center mt-4">
                                    {renderStars(review.rating)}
                                    <span className="text-gray-600 text-sm ml-2">
                                        ({review.rating} / 5)
                                    </span>
                                </div>

                                {/* Review Comment */}
                                <p className="mt-4 text-gray-700 leading-relaxed italic">
                                    "{review.comment}"
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500 text-lg mt-12">
                        😔 No reviews yet. Be the first to leave a review!
                    </p>
                )}
            </div>

            {/* Featured Products */}
            <div className="mt-12">
                <FeaturedProducts />
            </div>
        </div>
    );
};

export default ProductDetail;