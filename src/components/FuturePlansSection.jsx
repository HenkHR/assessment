function FuturePlansSection({ plans = "" }) {
  return (
    <section id="toekomstplannen" className="py-16 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Toekomst
        </h2>
        
        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200 max-w-4xl mx-auto">
          {plans ? (
            <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
              {plans}
            </p>
          ) : (
            <p className="text-gray-600 italic text-lg">
              Voeg je toekomstplannen toe voor verdere ontwikkeling in dit vakgebied...
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default FuturePlansSection;
