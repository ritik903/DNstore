import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../Features/slices/productSlice";
import { IoLogoDesignernews } from "react-icons/io";

const Header = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isAdmin, setIsAdmin] = useState(false);

    const [menuOpen, setMenuOpen] = useState(false);
    const data = useSelector((state) => state.product.cart);

    const closeMenu = () => setMenuOpen(false);

    const handleSearch = () => {
        if (query.trim()) {
            dispatch(searchProducts(query)); // Trigger search in Redux
            navigate(`/search?q=${query}`);  // Navigate to results page with query param

            setQuery("")
        }
    };

    return (
        <header className="bg-emerald-500 shadow-md w-full sticky top-0 z-50 py-3">
            <div className="container mx-auto flex items-center justify-between py-2 px-2 lg:px-12">
                {/* Logo */}
                <NavLink to="/"><div className="flex items-center space-x-1">
                    <IoLogoDesignernews className="text-4xl text-gray-700"/>
                    <span className="text-white text-xl font-bold">DNcart</span>
                </div></NavLink>

                {/* Search Bar */}
                <div className="hidden lg:flex flex-1 mx-6">
                    <div className="flex items-center border rounded-full overflow-hidden w-full shadow-md">
                        <select className="bg-emerald-600 px-3 py-2 border-r focus:outline-none rounded-l-full">
                            <option>All Categories</option>
                        </select>
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search for items..."
                            className="flex-1 px-3 py-2 focus:outline-none"
                        />
                        <button className="py-2 px-4 md:px-6 cursor-pointer text-2xl bg-emerald-600 text-white rounded-r-full" onClick={handleSearch}>
                            <IoSearch />
                        </button>
                    </div>
                </div>

                {/* Icons & Cart */}
                <div className="flex items-center md:space-x-6 space-x-3">
                    <NavLink to="/addtocart" className="relative flex items-center">
                        <BsCart4 className="text-3xl" />
                        {data.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full px-2">
                                {data.length}
                            </span>
                        )}
                        <span className="ml-1 hidden md:inline">Cart</span>
                    </NavLink>
                    <NavLink
                        to="/authForm"
                        className="hidden md:flex items-center gap-2 hover:text-blue-500 transition-all duration-300"
                        onMouseEnter={() => setIsAdmin(true)}
                        onMouseLeave={() => setIsAdmin(false)}
                    >
                        {isAdmin ? (
                            <span className="text-yellow-500 text-lg">👑</span>
                        ) : (
                        <span className="text-gray-600 text-lg">👤</span>   
    )}
                        <span>Account</span>
                    </NavLink>

                    {/* Mobile Menu Toggle */}
                    <button className="lg:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
                        <AiOutlineMenu />
                    </button>
                </div>
            </div>

            {/* Navbar */}
            <nav className="bg-gray-100 hidden lg:flex sticky top-16 w-full z-40">
                <div className="container mx-auto flex items-center justify-between py-2 px-6 lg:px-12">
                    <button className="bg-emerald-500 cursor-pointer text-white px-4 py-2 rounded-full">
                        ☰ Browse All Categories
                    </button>
                    <div className="flex items-center space-x-6">
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-green-600 font-semibold border-b-2 border-green-600" : "text-gray-800 font-semibold"}>Home</NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "text-green-600 font-semibold border-b-2 border-green-600" : "text-gray-800 font-semibold"}>About</NavLink>
                        <NavLink to="/product" className={({ isActive }) => isActive ? "text-green-600 font-semibold border-b-2 border-green-600" : "text-gray-800 font-semibold"}>Shop</NavLink>
                        <NavLink to="/blog" className={({ isActive }) => isActive ? "text-green-600 font-semibold border-b-2 border-green-600" : "text-gray-800 font-semibold"}>Blog</NavLink>
                        <a href="https://yoboyritik-port.netlify.app/" target="_blank" rel="noopener noreferrer" className={({ isActive }) => isActive ? "text-green-600 font-semibold border-b-2 border-green-600" : "text-gray-800 font-semibold"}>Portfolio</a>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "text-green-600 font-semibold border-b-2 border-green-600" : "text-gray-800 font-semibold"}>Contact</NavLink>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span>🎧</span>
                        <a href="tel:+919056659781"><span className="text-green-600 font-semibold">90566-59781</span></a>
                        <span className="text-gray-500">24/7 Support Center</span>
                    </div>
                </div>

            </nav>
            {/* Mobile Menu */}
            <div className={`lg:hidden fixed inset-y-0 right-0 bg-gray-100 py-6 px-8 space-y-4 flex flex-col items-start text-left overflow-y-auto transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <button onClick={closeMenu} className="absolute top-4 right-6 text-3xl text-red-500">
                    <AiOutlineClose />
                </button>
                <NavLink to="/" className={({ isActive }) => isActive ? "text-green-600 font-semibold border-b-2 border-green-600" : "text-gray-800 font-semibold"} onClick={closeMenu}>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "text-green-600 font-semibold border-b-2 border-green-600" : "text-gray-800 font-semibold"} onClick={closeMenu}>About</NavLink>
                <NavLink to="/product" className={({ isActive }) => isActive ? "text-green-600 font-semibold border-b-2 border-green-600" : "text-gray-800 font-semibold"} onClick={closeMenu}>Shop</NavLink>
                <NavLink to="/blog" className={({ isActive }) => isActive ? "text-green-600 font-semibold border-b-2 border-green-600" : "text-gray-800 font-semibold"} onClick={closeMenu}>Blog</NavLink>
                <a href="https://yoboyritik-port.netlify.app/" target="_blank" onClick={closeMenu} className={({ isActive }) => isActive ? "text-green-600 font-semibold border-b-2 border-green-600" : "text-gray-800 font-semibold"}>Portfolio</a>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "text-green-600 font-semibold border-b-2 border-green-600" : "text-gray-800 font-semibold"} onClick={closeMenu}>Contact</NavLink>
                <NavLink
                    to="/authForm"
                    className="flex items-center gap-2 hover:text-blue-500 transition-all duration-300"
                    onMouseEnter={() => setIsAdmin(true)}
                    onMouseLeave={() => setIsAdmin(false)}
                >
                    {isAdmin ? (
                        <span className="text-yellow-500 text-lg">👑</span>  // Admin icon on hover
                    ) : (
                        <span className="text-gray-600 text-lg">👤</span>   // User icon by default
                    )}
                    <span>Account</span>
                </NavLink>                <button className="bg-green-500 text-white px-4 py-2 rounded-full mt-2 w-full">☰ Browse All Categories</button>
                <div className="flex items-center space-x-2">
                    <span>🎧</span>
                    <a href="tel:+919056659781"><span className="text-green-600 font-semibold">90566-59781</span></a>
                    <span className="text-gray-500">24/7 Support Center</span>
                </div>
            </div>

            <div className="lg:hidden flex-1 mx-6">
                <div className="flex items-center border rounded-full overflow-hidden w-full shadow-md">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for items..."
                        className="flex-1 px-3 py-2 focus:outline-none "
                    />
                    <button className="py-2 px-4 md:px-6 text-2xl bg-emerald-600 text-white rounded-r-full" onClick={handleSearch}>
                        <IoSearch />
                    </button>
                </div>
            </div>

        </header>
    );
};

export default Header;
