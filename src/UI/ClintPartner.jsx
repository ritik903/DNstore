import { useState, useEffect } from "react";
import dataPartner from "../api/clintPartner.json";

const ClintPartner = () => {
    const [data, setData] = useState([]);
    const [counters, setCounters] = useState({
        years: 0,
        clients: 0,
        projects: 0,
        advisors: 0,
        sales: 0
    });

    useEffect(() => {
        setData(dataPartner);
        const interval = setInterval(() => {
            setCounters((prev) => ({
                years: Math.min(prev.years + 1, 10),
                clients: Math.min(prev.clients + 10, 500),
                projects: Math.min(prev.projects + 5, 200),
                advisors: Math.min(prev.advisors + 1, 50),
                sales: Math.min(prev.sales + 20, 1000)
            }));
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* Partner Cards */}
            <div className="py-14 px-2 md:px-12">
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {data.map(({ id, heading, para }) => (
                        <li key={id} className="bg-white shadow-lg p-6 rounded-xl border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-2xl">
                            <h1 className="text-xl font-bold text-gray-900">{heading}</h1>
                            <p className="text-gray-600 mt-2">{para}</p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Stats Section */}
            <section className="bg-gray-100 py-12 px-6 md:px-12">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
                    {[
                        { label: "Glorious Years", value: counters.years },
                        { label: "Happy Clients", value: counters.clients },
                        { label: "Projects Complete", value: counters.projects },
                        { label: "Team Advisors", value: counters.advisors },
                        { label: "Products Sale", value: counters.sales }
                    ].map((item, index) => (
                        <div key={index} className="bg-white shadow-md p-6 rounded-lg border border-gray-200 hover:shadow-xl transition-transform transform hover:scale-105">
                            <h3 className="text-3xl font-bold text-green-600">{item.value}+</h3>
                            <p className="text-gray-700 mt-2">{item.label}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default ClintPartner;