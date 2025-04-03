const services = [
    {
        icon: "\uD83D\uDCB8",
        title: "Best Prices & Offers",
        description: "At DNcart, we bring you the best deals and unbeatable prices on a wide range of products. Whether you're shopping for fashion, electronics, home essentials, or beauty products, you’ll find exciting discounts and exclusive offers every day!"
    },
    {
        icon: "\uD83D\uDCB0",
        title: "Wide Assortment",
        description: "At DNcart, we offer a diverse and extensive range of products to meet all your needs. Whether you're shopping for fashion, electronics, home decor, or personal care, our wide assortment ensures you’ll find exactly what you’re looking for – and more!"
    },
    {
        icon: "\uD83D\uDCCB",
        title: "Free Delivery",
        description: "At DNcart, we believe in making your shopping experience convenient and cost-effective. That’s why we offer FREE DELIVERY on a wide range of products, so you can shop without worrying about extra shipping costs."
    },
    {
        icon: "\uD83D\uDCB8",
        title: "Secure Payments",
        description: "Shop with confidence using our secure payment gateway and multiple payment options. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
    },
    {
        icon: "\uD83D\uDCB0",
        title: "Customer Support",
        description: "Our dedicated support team is available 24/7 to assist you with any queries or concerns. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
    },
    {
        icon: "\uD83D\uDCCB",
        title: "Easy Returns & Refunds",
        description: "Hassle-free return policy with quick refunds, making your shopping experience smooth and worry-free. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration"
    }
];

const WhatWeProvide = () => {
    return (
        <section className="py-12 px-2 md:px-16 text-center">
            <h2 className="text-3xl font-bold mb-6">What We Provide?</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg p-6 text-center w-full max-w-xs sm:max-w-sm md:max-w-md"
                    >
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <a href="#" className="text-emerald-500 font-semibold hover:underline">Read more</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhatWeProvide;
