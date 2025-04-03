import { useState, useEffect } from "react";

const slides = [
    { image: "/image/shoping.webp", title: "20% OFF SITE WIDE", subtitle: "Our Summer Sale Is Finally Here!", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." },
    { image: "/image/shoping2.webp", title: "New Arrivals", subtitle: "Check Out Our Latest Collection!", description: "Explore the trendiest styles of the season and stay ahead of fashion." },
    { image: "/image/shoping3.webp", title: "Limited Time Offer", subtitle: "Exclusive Deals Just for You!", description: "Get the best discounts on your favorite products. Hurry, before the offer ends!" },
    { image: "/image/shoping4.webp", title: "Mega Sale Event", subtitle: "Up to 50% Off on Selected Items!", description: "Grab your favorite products at unbeatable prices. Don't miss out!" },
    { image: "/image/shoping5.webp", title: "Shop the Best Brands", subtitle: "Premium Quality, Affordable Prices", description: "We bring you the best brands with quality assurance at the best rates." },
    { image: "/image/shoping6.webp", title: "Shop the Best Brands", subtitle: "Premium Quality, Affordable Prices", description: "We bring you the best brands with quality assurance at the best rates." },
];

const HeroPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-full max-w-screen-xl mx-auto overflow-hidden">
            {/* Slide Images & Text */}
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${index === currentIndex ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            loading="lazy"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center text-left pl-12 md:pl-24 text-white">
                            <p className="text-yellow-400 text-lg font-semibold">{slide.title}</p>
                            <h2 className="text-4xl md:text-6xl font-bold">{slide.subtitle}</h2>
                            <p className="mt-2 text-lg max-w-lg">{slide.description}</p>

                            {/* Line Animation under text */}
                            <div className="relative mt-4 h-1 bg-gray-600 w-40">
                                <div
                                    className={`absolute top-0 left-0 h-full bg-white transition-all duration-[2900ms] ease-linear ${index === currentIndex ? "w-full" : "w-0"
                                        }`}
                                ></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Left Button */}
            <button
                onClick={prevSlide}
                className="absolute left-4 cursor-pointer top-1/2 transform -translate-y-1/2 bg-emerald-500 text-white p-2 rounded-full hover:bg-emerald-600 transition"
            >
                &#10094;
            </button>

            {/* Right Button */}
            <button
                onClick={nextSlide}
                className="absolute right-4 cursor-pointer top-1/2 transform -translate-y-1/2 bg-emerald-500 text-white p-2 rounded-full hover:bg-emerald-600 transition"
            >
                &#10095;
            </button>

            {/* Bottom Progress Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`h-2 w-6 rounded transition-all duration-500 ${index === currentIndex ? "bg-white w-10" : "bg-gray-500 w-6"
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default HeroPage;
