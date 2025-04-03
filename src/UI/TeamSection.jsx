import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const TeamSection = () => {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto md:px-4 px-2">
                {/* Heading with Wave */}
                <h2 className="text-3xl font-bold text-center text-gray-900 relative">
                    Our Team
                    <span className="block w-20 h-2 mx-auto mt-2 bg-green-500 rounded-full"></span>
                    <svg
                        className="absolute left-1/2 transform -translate-x-1/2 -bottom-1"
                        width="100"
                        height="10"
                        viewBox="0 0 100 10"
                    >
                        <path
                            d="M 0 5 Q 25 10, 50 5 T 100 5"
                            stroke="green"
                            strokeWidth="2"
                            fill="transparent"
                        />
                    </svg>
                </h2>

                <div className="text-center mt-4 text-green-600 font-semibold">
                    Our Team
                </div>
                <h3 className="text-4xl font-bold text-gray-900 text-center mt-2">
                    Meet Our Expert Team
                </h3>
                <p className="text-gray-600 text-center max-w-2xl mx-auto mt-3">
                    Proin ullamcorper pretium orci. Donec nec scelerisque risus, leo. Nam
                    massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada
                    faucibus finibus.
                </p>

                {/* Team Members Grid */}
                <div className="grid md:grid-cols-2 gap-8 mt-12">
                    {/* Team Member 1 */}
                    <div className="bg-gray-100 p-6 rounded-lg text-center shadow-md transition-all duration-300 hover:shadow-xl">
                        <img
                            src="/image/team.webp"
                            alt="H. Merinda"
                            loading="lazy"
                            className="w-full h-64 object-cover rounded-lg"
                        />
                        <div className="mt-4">
                            <h4 className="text-xl font-semibold">H. Merinda</h4>
                            <p className="text-gray-500">CEO & Co-Founder</p>
                            <div className="flex justify-center gap-3 mt-3">
                                {[
                                    { icon: <FaFacebookF />, color: "bg-blue-600" },
                                    { icon: <FaTwitter />, color: "bg-blue-400" },
                                    { icon: <FaInstagram />, color: "bg-pink-500" },
                                    { icon: <FaYoutube />, color: "bg-red-600" },
                                ].map(({ icon, color }, index) => (
                                    <span
                                        key={index}
                                        className={`w-10 h-10 flex cursor-pointer items-center justify-center rounded-full text-white ${color} transition-transform duration-300 hover:scale-110`}
                                    >
                                        {icon}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Team Member 2 */}
                    <div className="bg-gray-100 p-6 rounded-lg text-center shadow-md transition-all duration-300 hover:shadow-xl">
                        <img
                            src="/image/team2.webp"
                            alt="Dilan Specter"
                            loading="lazy"
                            className="w-full h-64 object-cover rounded-lg"
                        />
                        <div className="mt-4">
                            <h4 className="text-xl font-semibold">Dilan Specter</h4>
                            <p className="text-gray-500">Head Engineer</p>
                            <div className="flex justify-center gap-3 mt-3">
                                {[
                                    { icon: <FaFacebookF />, color: "bg-blue-600" },
                                    { icon: <FaTwitter />, color: "bg-blue-400" },
                                    { icon: <FaInstagram />, color: "bg-pink-500" },
                                    { icon: <FaYoutube />, color: "bg-red-600" },
                                ].map(({ icon, color }, index) => (
                                    <span
                                        key={index}
                                        className={`w-10 h-10 flex cursor-pointer items-center justify-center rounded-full text-white ${color} transition-transform duration-300 hover:scale-110`}
                                    >
                                        {icon}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-8">
                    <button className="bg-emerald-500 cursor-pointer text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition duration-300">
                        View All Members
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
