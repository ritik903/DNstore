import { useEffect, useState } from "react";
import FeaturedProducts from "../Component/FeaturedProducts";
import SalesProducts from "../Component/SalesProducts";
import BannerSlider from "../UI/BannerSlider";
import CategoryWiseProducts from "../UI/CategoryWiseProducts";
import FreshProducts from "../UI/FreshProducts";
import HeroPage from "../UI/HeroPage";
import UpToTimeProducts from "../UI/UpToTimeProducts";
import Loading from "../UI/Loading";
import { NavLink } from "react-router-dom";
import { IoMdCloseCircle } from "react-icons/io";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [showPopup, setShowPopup] = useState(true);
    const [timeLeft, setTimeLeft] = useState({
        days: 2,
        hours: 12,
        mins: 2,
        secs: 40
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800);

        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                let { days, hours, mins, secs } = prev;
                if (secs > 0) secs -= 1;
                else {
                    secs = 59;
                    if (mins > 0) mins -= 1;
                    else {
                        mins = 59;
                        if (hours > 0) hours -= 1;
                        else {
                            hours = 23;
                            if (days > 0) days -= 1;
                        }
                    }
                }
                return { days, hours, mins, secs };
            });
        }, 1000);

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, []);

    const closePopup = () => {
        setShowPopup(false);
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="relative min-h-screen">

            {/* ✅ Fixed Popup in the Center */}
            {showPopup && (
                <>
                    {/* Blurred Background */}
                    <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-50"></div>

                    {/* Popup Content */}
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="bg-white p-10 rounded-xl shadow-2xl w-[90%] max-w-2xl text-center animate-popup relative">

                            {/* Close Button */}
                            <button
                                className="absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-red-500"
                                onClick={closePopup}
                            >
                                <IoMdCloseCircle className="text-3xl"/>
                            </button>

                            {/* Deal Content */}
                            <h2 className="text-xl font-semibold text-orange-500">Deal of the Day</h2>
                            <h1 className="text-4xl font-bold text-gray-800 my-4">
                                Organic fruit for your family's health
                            </h1>

                            <div className="flex justify-center items-center gap-4 my-4">
                                <p className="text-4xl text-emerald-500 font-bold">$38</p>
                                <span className="text-gray-400 line-through text-2xl">$52</span>
                                <span className="text-orange-500 font-semibold">26% Off</span>
                            </div>

                            {/* Countdown Timer */}
                            <div className="flex justify-center gap-4 mt-6">
                                {Object.entries(timeLeft).map(([unit, value]) => (
                                    <div key={unit} className="text-center">
                                        <div className="text-2xl font-bold bg-emerald-100 text-emerald-600 px-4 py-2 rounded-lg">
                                            {value.toString().padStart(2, "0")}
                                        </div>
                                        <div className="text-sm text-gray-600">{unit.toUpperCase()}</div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <NavLink to="/product"><button
                                className="mt-6 px-8 py-3 cursor-pointer bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-all duration-300"
                            >
                                Shop Now →
                            </button></NavLink>
                        </div>
                    </div>
                </>
            )}

            {/* ✅ Scrollable Website Content */}
            <div className={`transition-all duration-700 ${showPopup ? "blur-md" : "blur-0"}`}>
                <HeroPage />
                <CategoryWiseProducts />
                <FreshProducts />
                <FeaturedProducts />
                <UpToTimeProducts />
                <SalesProducts />
                <BannerSlider />
            </div>
        </div>
    );
};

export default Home;
