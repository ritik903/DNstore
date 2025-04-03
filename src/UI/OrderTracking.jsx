import { useState, useEffect } from "react";
import { FaBox, FaTruck, FaShippingFast, FaCheckCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

const OrderTracking = () => {
    const [status, setStatus] = useState("shipped"); // "pending", "shipped", "in-transit", "delivered"

    // ✅ Simulate Status Change
    useEffect(() => {
        const statuses = ["pending", "shipped", "in-transit", "delivered"];
        let index = 0;

        const interval = setInterval(() => {
            setStatus(statuses[index]);
            index = (index + 1) % statuses.length;
        }, 4000); // Change status every 4 seconds

        return () => clearInterval(interval);
    }, []);

    // ✅ Steps Configuration
    const steps = [
        { id: "pending", label: "Pending", icon: <FaBox />, color: "bg-gray-400" },
        { id: "shipped", label: "Shipped", icon: <FaTruck />, color: "bg-blue-500" },
        { id: "in-transit", label: "In Transit", icon: <FaShippingFast />, color: "bg-yellow-500" },
        { id: "delivered", label: "Delivered", icon: <FaCheckCircle />, color: "bg-green-500" }
    ];

    const currentIndex = steps.findIndex((step) => step.id === status);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-8">
            <h1 className="text-3xl font-bold text-center mb-10">📦 Order Tracking</h1>

            {/* ✅ Tracking Steps */}
            <div className="flex items-center justify-between w-full max-w-4xl relative">

                {/* Line Connector */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 z-0"></div>
                <div
                    className="absolute top-1/2 left-0 h-1 bg-blue-500 z-10 transition-all duration-500"
                    style={{ width: `${(currentIndex / (steps.length - 1)) * 100}%` }}
                ></div>

                {steps.map((step, index) => (
                    <div key={step.id} className="flex flex-col items-center relative w-1/4 z-20">

                        {/* ✅ Step Icon */}
                        <div
                            className={`w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full text-white transition-all duration-300
                            ${index <= currentIndex ? step.color : "bg-gray-300"}
                            ${index === currentIndex ? "scale-110 shadow-lg" : ""}`}
                        >
                            {step.icon}
                        </div>

                        {/* ✅ Step Label */}
                        <p className={`text-sm md:text-lg font-medium mt-2 transition-all 
                            ${index <= currentIndex ? "text-black" : "text-gray-400"}`}>
                            {step.label}
                        </p>
                    </div>
                ))}
            </div>

            {/* ✅ Current Status */}
            <div className="mt-10 p-6 bg-white shadow-lg rounded-lg text-center">
                <h2 className="text-2xl font-bold">Current Status:
                    <span className={`ml-2 capitalize ${currentIndex === steps.length - 1 ? "text-green-500" : "text-blue-500"}`}>
                        {status}
                    </span>
                </h2>
            </div>
        </div>
    );
};

export default OrderTracking;
