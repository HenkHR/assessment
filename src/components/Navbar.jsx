function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-8">
            <button
              onClick={() => scrollToSection('over-mij')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Over Mij
            </button>
            <button
              onClick={() => scrollToSection('methoden')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Toolkit
            </button>
            <button
              onClick={() => scrollToSection('groepsprojecten')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Projecten
            </button>
            <button
              onClick={() => scrollToSection('boek')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Boek
            </button>
            <button
              onClick={() => scrollToSection('toekomstplannen')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Toekomst
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
