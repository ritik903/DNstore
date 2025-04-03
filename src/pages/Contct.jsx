import { useEffect, useState } from "react";
import Loading from "../UI/Loading";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [error, setError] = useState("");

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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setError("All fields are required");
            return;
        }
        setError("");
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <>
            <div className="bg-white py-16 px-6 md:px-12 lg:px-24">

                {/* Header */}
                <h3 className="text-emerald-500 text-xl font-semibold mb-2">
                    How can help you ?
                </h3>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
                    Let us know how we can help you
                </h2>

                <p className="text-gray-600 mb-12 max-w-3xl">
                    At DNcart, your satisfaction is our priority. Whether you have a question, feedback, or need assistance, we're just a message away. Fill out the form below, and our support team will get back to you promptly.                </p>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Left Side */}
                    <div className="space-y-10">
                        <div>
                            <h4 className="text-lg font-bold text-gray-800">01. Visit Feedback</h4>
                            <p className="text-gray-600 mt-2">
                                ⭐ Feedback & Suggestions: Share your experience with us. Your feedback helps us improve.                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold text-emerald-500">03. Billing Inquiries</h4>
                            <p className="text-gray-600 mt-2">
                                User-Friendly Platform: Easily manage your products, orders, and inventory with our intuitive seller dashboard.                            </p>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="space-y-10">
                        <div>
                            <h4 className="text-lg font-bold text-gray-800">02. Employer Services</h4>
                            <p className="text-gray-600 mt-2">
                                Whether you want to expand your online presence, increase sales, or streamline operations, DNcart is the perfect partner for your e-commerce success.                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold text-gray-800">04. General Inquiries</h4>
                            <p className="text-gray-600 mt-2">
                                If you have any questions, suggestions, or need information about DNcart, feel free to reach out to us. Our friendly support team is always ready to help!                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Location</h2>

                    <div className="relative w-full h-0" style={{ paddingBottom: "56.25%" }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27404.56278361544!2d75.94887458071838!3d30.842703019974536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39107614872ab7b5%3A0xaf8165cce2800588!2sSahnewal%2C%20Punjab!5e0!3m2!1sen!2sin!4v1742542986284!5m2!1sen!2sin"
                            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
            <div className="bg-white py-16 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">

                    {/* Contact Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

                        {/* Office */}
                        <div className="text-center md:text-left">
                            <h3 className="text-emerald-500 text-2xl font-bold">Office</h3>
                            <p className="text-gray-600 mt-4">
                                205 North Michigan Avenue, Suite 810 <br />
                                Chicago, 60601, USA
                            </p>
                            <p className="mt-2">
                                <a href="tel:+11234567890" className="text-emerald-500 hover:underline">
                                    Phone:
                                </a> (123) 456-7890
                            </p>
                            <p>
                                <a href="mailto:contact@evara.com" className="text-emerald-500 hover:underline">
                                    Email:
                                </a> contact@Evara.com
                            </p>
                            <button className="mt-4 px-6 py-2 cursor-pointer bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition">
                                📍 View map
                            </button>
                        </div>

                        {/* Studio */}
                        <div className="text-center md:text-left">
                            <h3 className="text-emerald-500 text-2xl font-bold">Studio</h3>
                            <p className="text-gray-600 mt-4">
                                205 North Michigan Avenue, Suite 810 <br />
                                Chicago, 60601, USA
                            </p>
                            <p className="mt-2">
                                <a href="tel:+11234567890" className="text-emerald-500 hover:underline">
                                    Phone:
                                </a> (123) 456-7890
                            </p>
                            <p>
                                <a href="mailto:contact@evara.com" className="text-emerald-500 hover:underline">
                                    Email:
                                </a> contact@Evara.com
                            </p>
                            <button className="mt-4 px-6 py-2 cursor-pointer bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition">
                                📍 View map
                            </button>
                        </div>

                        {/* Shop */}
                        <div className="text-center md:text-left">
                            <h3 className="text-emerald-500 text-2xl font-bold">Shop</h3>
                            <p className="text-gray-600 mt-4">
                                205 North Michigan Avenue, Suite 810 <br />
                                Chicago, 60601, USA
                            </p>
                            <p className="mt-2">
                                <a href="tel:+11234567890" className="text-emerald-500 hover:underline">
                                    Phone:
                                </a> (123) 456-7890
                            </p>
                            <p>
                                <a href="mailto:contact@evara.com" className="text-emerald-500 hover:underline">
                                    Email:
                                </a> contact@Evara.com
                            </p>
                            <button className="mt-4 px-6 py-2 cursor-pointer bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition">
                                📍 View map
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="bg-white py-16 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* left Side - Image */}
                    <div className="flex justify-center">
                        <img
                            src="/image/contact.webp"
                            loading="lazy"
                            alt="Contact Us"
                            className="w-full max-w-sm rounded-lg shadow-lg"
                        />
                    </div>

                    {/* right Side - Form */}
                    <div>
                        <h3 className="text-emerald-500 text-xl font-semibold mb-2">Contact form</h3>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Get in Touch with DNcart</h2>
                        <p className="text-gray-600 mb-8">
                            Your email address will not be published. Required fields are marked <span className="text-red-500">*</span>
                        </p>

                        <form className="space-y-6">

                            {/* Name & Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>

                            {/* Phone & Subject */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="tel"
                                    placeholder="Your Phone"
                                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>

                            {/* Message */}
                            <textarea
                                placeholder="Message"
                                rows="5"
                                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full md:w-auto cursor-pointer bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-8 rounded-lg  transition"
                            >
                                Send message
                            </button>
                        </form>
                    </div>




                </div>
            </div>

        </>
    );
};

export default Contact;
