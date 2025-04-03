import { FaPhone, FaEnvelope, FaClock, FaApple, FaGooglePlay, FaArrowUp } from "react-icons/fa";
import { IoLogoDesignernews } from "react-icons/io";
import SocialMeadia from "../UI/SocialMeadia";
import { useEffect, useState } from "react";

const Footer = () => {
    const dt = new Date().getFullYear();

    // State to handle scroll visibility
    const [showScroll, setShowScroll] = useState(false);

    // Handle scroll visibility
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll to Top function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-emerald-500 text-gray-700 pt-10 relative">
            <div className="container mx-auto md:px-6 px-4">
                {/* Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b">

                    {/* Logo & Contact Info */}
                    <div>
                        <div className="flex items-center space-x-2">
                            <IoLogoDesignernews className="text-4xl text-gray-700" />
                            <span className="text-white text-2xl font-bold">DNcart</span>
                        </div>
                        <p className="mt-2 text-white">Awesome grocery store website template</p>
                        <ul className="mt-4 space-y-2">
                            <li className="flex items-center">
                                <span className="text-green-600"><FaPhone /></span>
                                <a href="tel:+919056659781" className="ml-2 text-white">(+91) - 9056659781</a>
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-600"><FaEnvelope /></span>
                                <span className="ml-2 text-white">ritikchoudhary90566@gmail.com</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-green-600"><FaClock /></span>
                                <span className="ml-2 text-white">10:00 - 18:00, Mon - Sat</span>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Company</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-white hover:text-gray-900">About Us</a></li>
                            <li><a href="#" className="text-white hover:text-gray-900">Privacy Policy</a></li>
                            <li><a href="#" className="text-white hover:text-gray-900">Terms & Conditions</a></li>
                            <li><a href="#" className="text-white hover:text-gray-900">Support Center</a></li>
                            <li><a href="#" className="text-white hover:text-gray-900">Careers</a></li>
                        </ul>
                    </div>

                    {/* Account Links */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Account</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-white hover:text-gray-900">Sign In</a></li>
                            <li><a href="#" className="text-white hover:text-gray-900">View Cart</a></li>
                            <li><a href="#" className="text-white hover:text-gray-900">My Wishlist</a></li>
                            <li><a href="#" className="text-white hover:text-gray-900">Track My Order</a></li>
                            <li><a href="#" className="text-white hover:text-gray-900">Compare Products</a></li>
                        </ul>
                    </div>

                    {/* Popular Categories */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Popular</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-white hover:text-gray-900">Milk & Flavoured Milk</a></li>
                            <li><a href="#" className="text-white hover:text-gray-900">Butter and Margarine</a></li>
                            <li><a href="#" className="text-white hover:text-gray-900">Eggs Substitutes</a></li>
                            <li><a href="#" className="text-white hover:text-gray-900">Marmalades</a></li>
                            <li><a href="#" className="text-white hover:text-gray-900">Sour Cream and Dips</a></li>
                            <li><a href="#" className="text-white hover:text-gray-900">Tea & Kombucha</a></li>
                            <li><a href="#" className="text-white hover:text-gray-900">Cheese</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center py-8">
                    {/* Install App Section */}
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h2 className="text-lg font-semibold">Install App</h2>
                        <p>From App Store or Google Play</p>
                        <div className="flex space-x-2 mt-2">
                            <a href="#" className="bg-black text-white px-4 py-2 flex items-center space-x-2 rounded-md">
                                <FaApple /> <span>App Store</span>
                            </a>
                            <a href="#" className="bg-black text-white px-4 py-2 flex items-center space-x-2 rounded-md">
                                <FaGooglePlay /> <span>Google Play</span>
                            </a>
                        </div>
                    </div>

                    {/* Payment Methods */}
                    <div className="text-center">
                        <h2 className="text-lg font-semibold">Secured Payment Gateways</h2>
                        <div className="flex space-x-2 mt-2 cursor-pointer">
                            <img src="/image/payment-method.png" alt="Visa" className="h-9" />
                        </div>
                    </div>

                    <SocialMeadia />
                </div>

                <div className="text-center font-semibold">
                    ©{dt}, <span className="font-extrabold">DNcart</span> - REACT Ecommerce Template
                    All rights reserved
                </div>

                {/* Scroll to Top Button */}
                {showScroll && (
                    <button
                        className="fixed md:bottom-8 bottom-15 right-8 bg-emerald-500 text-white p-3 rounded-full shadow-lg shadow-gray-500 hover:bg-emerald-600 transition-all duration-300"
                        onClick={scrollToTop}
                    >
                        <FaArrowUp size={24} />
                    </button>
                )}
            </div>
        </footer>
    );
};

export default Footer;
