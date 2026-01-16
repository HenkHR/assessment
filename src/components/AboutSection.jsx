function AboutSection({ imageSrc, imageAlt, title, interests, strengths }) {
    return (
        <section id="over-mij" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg border-4 border-white">
                            <img
                                src={imageSrc || "/placeholder-profile.jpg"}
                                alt={imageAlt || "Profiel foto"}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-2/3">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            {title || "Over Mij"}
                        </h1>
                        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                            {interests && (
                                <div>
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">Mijn Interesses</h2>
                                    <p className="whitespace-pre-line">{interests}</p>
                                </div>
                            )}
                            {strengths && (
                                <div>
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">Waar ik goed in ben</h2>
                                    <p className="whitespace-pre-line">{strengths}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
