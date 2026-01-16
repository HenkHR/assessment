import MethodCard from './MethodCard';

function MethodsSection({ methods = [] }) {
  // Ensure we have at least 2 method slots
  const method1 = methods[0] || { title: "Methode 1", description: "", pros: [], cons: [] };
  const method2 = methods[1] || { title: "Methode 2", description: "", pros: [], cons: [] };

  return (
    <section id="methoden" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Toolkit
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <MethodCard
            title={method1.title}
            description={method1.description}
            pros={method1.pros}
            cons={method1.cons}
          />
          <MethodCard
            title={method2.title}
            description={method2.description}
            pros={method2.pros}
            cons={method2.cons}
          />
        </div>
      </div>
    </section>
  );
}

export default MethodsSection;
