function ConsList({ items = [] }) {
  if (!items || items.length === 0) {
    return (
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-red-700 mb-2">Negatieve punten</h3>
        <ul className="space-y-2">
          <li className="text-gray-600 italic">Voeg negatieve punten toe...</li>
        </ul>
      </div>
    );
  }

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center">
        <span className="mr-2">✗</span>
        Negatieve punten
      </h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start text-gray-700">
            <span className="text-red-500 mr-2 mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ConsList;
