function BookSection({ imageSrc, imageAlt, title, about, learned, applied, futureUse }) {
  return (
    <section id="boek" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Boek
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-64 h-96 rounded-lg overflow-hidden shadow-lg border border-gray-200">
              <img
                src={imageSrc || "/placeholder-book.jpg"}
                alt={imageAlt || "Boek cover"}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full md:w-2/3 space-y-6">
            {title && (
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{title}</h3>
              </div>
            )}

            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Waar het boek over gaat
              </h3>
              {about ? (
                <p className="text-gray-700 leading-relaxed whitespace-pre-line text-sm">
                  {about}
                </p>
              ) : (
                <p className="text-gray-600 italic text-sm">Voeg een beschrijving van het boek toe...</p>
              )}
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                Wat ik heb geleerd
              </h3>
              {learned ? (
                <p className="text-gray-700 leading-relaxed whitespace-pre-line text-sm">
                  {learned}
                </p>
              ) : (
                <p className="text-gray-600 italic text-sm">Voeg wat je hebt geleerd toe...</p>
              )}
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                Hoe ik het heb toegepast
              </h3>
              {applied ? (
                <p className="text-gray-700 leading-relaxed whitespace-pre-line text-sm">
                  {applied}
                </p>
              ) : (
                <p className="text-gray-600 italic text-sm">Voeg toe hoe je het hebt toegepast...</p>
              )}
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                Hoe ik het ga gebruiken
              </h3>
              {futureUse ? (
                <p className="text-gray-700 leading-relaxed whitespace-pre-line text-sm">
                  {futureUse}
                </p>
              ) : (
                <p className="text-gray-600 italic text-sm">Voeg toe hoe je het gaat gebruiken...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookSection;
