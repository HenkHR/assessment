import ProjectCard from './ProjectCard';

function GroupProjectsSection({ projects = [] }) {
  // Ensure we have at least 2 project slots
  const project1 = projects[0] || { 
    title: "Project 1", 
    description: "", 
    pros: [], 
    cons: [], 
    goalsReflection: "" 
  };
  const project2 = projects[1] || { 
    title: "Project 2", 
    description: "", 
    pros: [], 
    cons: [], 
    goalsReflection: "" 
  };

  return (
    <section id="groepsprojecten" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Projecten
        </h2>
        
        <div className="space-y-8">
          <ProjectCard
            title={project1.title}
            description={project1.description}
            pros={project1.pros}
            cons={project1.cons}
            goalsReflection={project1.goalsReflection}
          />
          <ProjectCard
            title={project2.title}
            description={project2.description}
            pros={project2.pros}
            cons={project2.cons}
            goalsReflection={project2.goalsReflection}
          />
        </div>
      </div>
    </section>
  );
}

export default GroupProjectsSection;
