import ProsList from './ProsList';
import ConsList from './ConsList';

function MethodCard({ title, description, pros = [], cons = [] }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title || "Methodenaam"}</h3>
      {description && (
        <p className="text-gray-700 mb-6 leading-relaxed whitespace-pre-line">
          {description}
        </p>
      )}
      <ProsList items={pros} />
      <ConsList items={cons} />
    </div>
  );
}

export default MethodCard;
