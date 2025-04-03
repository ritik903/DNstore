import { useState, useEffect } from "react";

const images = [
    "/image/banner.webp",
    "/image/banner2.webp",
    "/image/banner3.webp"
];

const BannerSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-auto md:h-[600px] flex items-center justify-start overflow-hidden mt-10 px-6 md:px-16 lg:px-24">
            {/* Background Image Slider */}
            <div className="absolute inset-0 w-full h-full transition-all duration-700 ease-in-out">
                <img
                    src={images[currentIndex]}
                    alt="Banner"
                    loading="lazy"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Text Content - Fixed on Left */}
            <div className="relative z-10 w-full max-w-lg text-left md:text-black text-white bg-black/50 p-6 rounded-xl md:rounded-none md:bg-transparent md:p-0">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                    Stay home & get your daily needs from our shop
                </h1>
                <p className="text-lg md:text-gray-900 text-gray-200 mt-3">
                    Start Your Daily Shopping with
                    <span className="text-green-400 font-semibold"> Nest Mart</span>
                </p>

                {/* ✅ Fully Responsive Input Box */}
                <div className="mt-5 flex items-center bg-white p-2 rounded-full shadow-lg w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="flex-grow outline-none px-0 text-gray-700 bg-transparent text-sm sm:text-base"
                    />
                    <button className="bg-green-500 cursor-pointer hover:bg-green-600 text-white px-4 sm:px-6 py-2 rounded-full transition text-sm sm:text-base">
                        Subscribe
                    </button>
                </div>
            </div>

            {/* Progress Dots */}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`h-3 w-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-green-500 w-6" : "bg-gray-300"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default BannerSlider;
