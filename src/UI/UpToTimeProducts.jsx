import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const deals = [
    {
        id: 1,
        title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        price: 32.85,
        oldPrice: 33.8,
        image: "/image/products.webp",
        endTime: new Date().getTime() + 5 * 14 * 30 * 60 * 1000,
    },
    {
        id: 2,
        title: "Perdue Simply Smart Organics Gluten Free",
        price: 24.85,
        oldPrice: 26.8,
        image: "/image/products2.webp",
        endTime: new Date().getTime() + 1 * 18 * 34 * 60 * 1000,
    },
    {
        id: 3,
        title: "Signature Wood-Fired Mushroom and Caramelized",
        price: 12.85,
        oldPrice: 13.8,
        image: "/image/products3.webp",
        endTime: new Date().getTime() + 7 * 4 * 50 * 60 * 1000,
    },
    {
        id: 4,
        title: "Signature Wood-Fired Mushroom and Caramelized",
        price: 12.85,
        oldPrice: 13.8,
        image: "/image/products4.webp",
        endTime: new Date().getTime() + 5 * 24 * 10 * 60 * 1000,
    },
];

const UpToTimeProducts = () => {
    const [timeLeft, setTimeLeft] = useState({});
    const [currentImage, setCurrentImage] = useState(deals[0]);

    useEffect(() => {
        const updateTimers = () => {
            const newTimeLeft = {};
            deals.forEach((deal) => {
                const now = new Date().getTime();
                const distance = deal.endTime - now;
                newTimeLeft[deal.id] = {
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000),
                };
            });
            setTimeLeft(newTimeLeft);
        };

        const interval = setInterval(updateTimers, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(deals[Math.floor(Math.random() * deals.length)]);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-5 flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-bold mb-4">Deals of The Day</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-center">
                {deals.map((deal) => (
                    <div key={deal.id} className="p-2 border rounded-lg shadow-lg">
                        <img
                            src={currentImage.id === deal.id ? currentImage.image : deal.image}
                            alt={deal.title}
                            loading="lazy"
                            className="w-full h-48 object-cover rounded-lg transition-opacity duration-500"
                        />
                        <div className="p-2">
                            <div className="flex justify-between">
                                <p className="text-lg font-bold">${deal.price}</p>
                                <p className="text-gray-500 line-through">${deal.oldPrice}</p>
                            </div>
                            <p className="text-sm mt-1">{deal.title}</p>
                            <div className="flex justify-center gap-2 mt-2">
                                {timeLeft[deal.id] && (
                                    <>
                                        <span className="bg-gray-200 px-2 py-1 font-semibold rounded text-sm">
                                            {timeLeft[deal.id].days} Days
                                        </span>
                                        <span className="bg-gray-200 px-2 py-1 font-semibold rounded text-sm">
                                            {timeLeft[deal.id].hours} Hours
                                        </span>
                                        <span className="bg-gray-200 px-2 py-1 font-semibold rounded text-sm">
                                            {timeLeft[deal.id].minutes} Mins
                                        </span>
                                        <span className="bg-gray-200 px-2 py-1 font-semibold rounded text-sm">
                                            {timeLeft[deal.id].seconds} Sec
                                        </span>
                                    </>
                                )}
                            </div>
                            <NavLink to="/product"> <button className="mt-2 w-full cursor-pointer bg-emerald-500 hover:bg-emerald-600 text-white p-2 rounded">Add to Cart</button></NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpToTimeProducts;
