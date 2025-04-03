import React, { useEffect, useState } from "react";
import BannerSlider from "../UI/BannerSlider";
import Loading from "../UI/Loading";

const cards = [
    { title: "Where Music Is Headed Next", date: "February 12, 2016", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: null },
    { title: "You can't put a limit on anything.", date: "February 12, 2016", content: "The more you dream, the farther you get.", image: "/image/aboutslide.webp" },
    { title: "The 12 Best Apps Of 2015", date: "February 12, 2016", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: null },
    { title: "You can't put a limit on anything.", date: "February 12, 2016", content: "The more you dream, the farther you get.", image: "/image/blog2.webp" },
    { title: "Another Inspiring Story", date: "February 12, 2016", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/image/blog.webp" },
    { title: "New Music Video Will Blow Your Mind", date: "February 12, 2016", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: null },
    { title: "The Future of AI and You", date: "February 12, 2016", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/image/blog3.webp" },
    { title: "Tech Trends You Should Follow", date: "February 12, 2016", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: null },
    { title: "Breaking News in the Industry", date: "February 12, 2016", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: null },
    { title: "You can't put a limit on anything.", date: "February 12, 2016", content: "The more you dream, the farther you get.", image: "/image/blog4.webp" },
    { title: "Breaking News in the Industry", date: "February 12, 2016", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: null },
    { title: "You can't put a limit on anything.", date: "February 12, 2016", content: "The more you dream, the farther you get.", image: "/image/blog5.webp" },
];

console.log(cards);


const Blog = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800); // 👈 Delay for 800ms
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loading />;
    }
    return (
        <>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="relative group w-full h-64 bg-gray-100 text-gray-900 rounded-xl overflow-hidden shadow-lg cursor-pointer"
                    >
                        {card.image ? (
                            <div
                                className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 ease-in-out group-hover:translate-x-full"
                                style={{ backgroundImage: `url(${card.image})` }}
                            >
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-semibold">
                                    {card.title}
                                </div>
                            </div>
                        ) : (
                            <div className="absolute inset-0 bg-white flex flex-col items-start justify-center p-6 transform transition-transform duration-500 ease-in-out group-hover:-translate-x-full">
                                <h2 className="text-xl font-bold">{card.title}</h2>
                                <p className="text-sm text-gray-500">{card.date}</p>
                                <p className="text-sm mt-2">{card.content}</p>
                                <span className="mt-4 text-blue-600 font-semibold">Continue reading →</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <BannerSlider />
        </>
    );
};

export default Blog;
