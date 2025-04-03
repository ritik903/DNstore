import { NavLink } from "react-router-dom";

const FreshProducts = () => {
    const slides = [
        {
            title: "Everyday Fresh & Clean with Our Products",
            image: "https://i.ibb.co/DG69bQ4/1.png",
            bgColor: "bg-[#FDF6ED]",
        },
        {
            title: "Make your Breakfast Healthy and Easy",
            image: "https://i.ibb.co/7bQQYkX/2.png",
            bgColor: "bg-[#F7F5F7]",
        },
        {
            title: "The best Organic Products Online",
            image: "https://i.ibb.co/G5pY9kF/3.png",
            bgColor: "bg-[#ECF6EC]",
        },
        {
            title: "Fresh Vegetables for Your Health",
            image: "https://i.ibb.co/G5pY9kF/3.png",
            bgColor: "bg-[#FDF6ED]",
        },
    ];

    return (
        <div className="relative w-full max-w-screen-x2 mx-auto md:px-4 p-2 my-8 overflow-x-hidden">
            <div className="relative overflow-hidden">
                {/* Slider Container */}
                <div className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`flex-shrink-0 w-[90%] sm:w-[48%] lg:w-[32%] p-4 rounded-lg shadow-md ${slide.bgColor} snap-center`}
                        >
                            <div className="p-6 flex justify-between items-center rounded-lg shadow-sm">
                                <div className="max-w-[60%]">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                        {slide.title}
                                    </h3>
                                    <NavLink to="/product">
                                        <button className="bg-emerald-500 cursor-pointer text-white px-4 py-2 rounded-md shadow-md hover:bg-emerald-600 transition">
                                            Shop Now →
                                        </button>
                                    </NavLink>
                                </div>
                                <img
                                    src={slide.image}
                                    loading="lazy"
                                    alt="Product"
                                    className="w-32 h-32 object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FreshProducts;
