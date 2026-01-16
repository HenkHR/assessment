import ProsList from './ProsList';
import ConsList from './ConsList';

function ProjectCard({ title, description, pros = [], cons = [], goalsReflection = "" }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title || "Project Titel"}</h3>

      {description && (
        <p className="text-gray-700 mb-6 leading-relaxed whitespace-pre-line">
          {description}
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <ProsList items={pros} />
        <ConsList items={cons} />
      </div>

      {goalsReflection && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">
            Reflectie op Eerdere Doelen/Doelstelling
          </h4>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {goalsReflection}
          </p>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
