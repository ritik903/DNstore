import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleToggle = () => {
        setIsLogin(!isLogin);
        setFormData({ name: "", email: "", password: "" });  // Reset fields
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);

        // ✅ Store login status in localStorage
        localStorage.setItem("isLoggedIn", "true");

        alert(`${isLogin ? "Logged in" : "Signed up"} successfully!`);
        navigate("/");  // Redirect to home after form submission
    };

    return (
        <div className="fixed inset-0 bg-gray-400 bg-opacity-50 backdrop-blur-md flex justify-center items-center z-50 transition-all duration-500">
            <div className="flex flex-col justify-center bg-white h-full w-full md:w-1/2 lg:w-1/3 p-8 rounded-lg shadow-2xl relative">
                <button
                    onClick={() => navigate("/")}
                    className="absolute top-4 right-4 text-gray-500 hover:text-red-600 transition"
                >
                    ✕
                </button>

                <h2 className="text-3xl font-bold text-center mb-6 text-blue-500">
                    {isLogin ? "Login" : "Sign Up"}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {!isLogin && (
                        <div>
                            <label className="block text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                                required
                            />
                        </div>
                    )}

                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white rounded-lg py-3 hover:bg-blue-600 transition-all"
                    >
                        {isLogin ? "Login" : "Sign Up"}
                    </button>
                </form>

                <div className="text-center mt-4">
                    <p className="text-gray-600">
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                        <button
                            onClick={handleToggle}
                            className="text-blue-500 font-semibold hover:underline ml-2"
                        >
                            {isLogin ? "Sign Up" : "Login"}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;
