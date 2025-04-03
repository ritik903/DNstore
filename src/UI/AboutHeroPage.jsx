import { useState, useEffect } from "react";

const images = [
    "/image/aboutslide.webp",
    "/image/aboutslide2.webp",
    "/image/aboutslide3.webp",
    "/image/aboutslide4.webp",
    "/image/aboutslide5.webp",
    "/image/aboutslide6.webp"
];

const AboutHeroPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleSlides = 3;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length - visibleSlides + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + (images.length - visibleSlides + 1)) % (images.length - visibleSlides + 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); // Auto slide every 4s
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2 md:px-12 py-5 items-center">
            {/* Left Side - Large Image */}
            <div className="w-full">
                <img
                    src="/image/aboutslide3.webp"
                    loading="lazy"
                    alt="Chef preparing food"
                    className="w-full h-auto rounded-xl shadow-lg"
                />
            </div>

            {/* Right Side - Text & Slider */}
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Welcome to DNcart</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                    At DNcart, we believe in making online shopping simple, convenient, and rewarding. Whether you're looking for the latest fashion trends, cutting-edge electronics, stylish home decor, or everyday essentials, we've got you covered with a wide range of high-quality products at unbeatable prices.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                    Discover the best products, enjoy unbeatable prices, and experience a new standard of online shopping with DNcart. 🛒✨
                </p>

                {/* Image Slider */}
                <div className="relative flex items-center overflow-hidden w-full max-w-lg mx-auto">
                    {/* Previous Button */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 md:left-4 p-2 cursor-pointer md:p-3 bg-green-500 hover:bg-green-600 shadow-lg rounded-full transition-transform active:scale-90 z-10"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Carousel */}
                    <div className="flex transition-transform duration-2000 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`, width: `${(images.length / visibleSlides) * 100}%` }}>
                        {images.map((image, index) => (
                            <div key={index} className="w-1/3 flex-shrink-0 rounded-xl shadow-md overflow-hidden px-2">
                                <img
                                    src={image}
                                    alt="Gallery"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 md:right-4 cursor-pointer p-2 md:p-3 bg-green-500 hover:bg-green-600 shadow-lg rounded-full transition-transform active:scale-90 z-10"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutHeroPage;