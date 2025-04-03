
const Partner = () => {
    return (
        <>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-2 md:p-12 items-center">
            {/* Left Image */}
            <div className="grid grid-cols-2 gap-4">
                <img
                    src="/image/partner3.webp"
                        alt="E-commerce shopping"
                        loading="lazy"
                    className="w-full h-auto rounded-xl"
                />
                <img
                    src="/image/partner2.webp"
                        alt="Online shopping"
                        loading="lazy"
                    className="w-full h-auto rounded-xl"
                />
            </div>

            {/* Right Content */}
            <div>
                <p className="text-gray-400 text-lg">Our performance</p>
                <h2 className="text-3xl font-bold mb-4">Your Partner for e-commerce grocery solution</h2>
                <p className="text-gray-600 mb-4">
                    Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                </p>
                <p className="text-gray-600 mb-6">
                    Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.
                </p>
            </div>
            </section>
        </>
    );
};

export default Partner;
