import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import MethodsSection from './components/MethodsSection';
import GroupProjectsSection from './components/GroupProjectsSection';
import BookSection from './components/BookSection';
import FuturePlansSection from './components/FuturePlansSection';

function App() {
  // Example data structure - replace with your actual content
  const aboutData = {
    imageSrc: "https://www.focushealthfitness.nl/wp-content/uploads/freshizer/0a69b07088d6579f68e282c17bed512a_Henk-Jan-2-min-768-c-100.jpeg", // Replace with your image path
    imageAlt: "Profiel foto",
    title: "Over Mij",
    interests: "Ik ben graag bezig met het bouwen van functionaliteit, ook vind ik het leuk om bezig te zijn met technisch ontwerp van onze applicaties."
  };

  const methodsData = [
    {
      title: "Expirimenteren",
      description: "De Expirimenteer methode sprak mij persoonlijk niet zo aan. Ik werk altijd heel doelgericht naar een eindproduct toe. Bij deze methode voelde ik me erg teruggehouden door het feit dat we per idee/functionaliteit moesten testen en dat er soms leuke dingen geschrapt moesten worden.  ",
      pros: ["Je werkt uit wat echt werkt en kunt dit aantonen", "Je leert veel over je doelgroep door te interviewen en te itereren op basis van feedback", "Je weet dat er behoefte is aan dat wat je ontwikkeld"],
      cons: ["Je kan veel tijd investeren in een experiment dat niet succesvol gaat zijn", "Je kunt niet te veel nadenken over verschillende functionaliteiten omdat je heel gericht moet testen", "Je moet soms dingen waar je trots op bent schrappen", "In ons specifieke geval wist ik op een gegeven moment niet meer waar we het nou voor aan het doen waren"]
    },
    {
      title: "Agency",
      description: "De Agile en Design sprint methoden die gebruikt wordt tijdens TLE agency spraken mij persoonlijk veel meer aan. Aan het begin van het project kon je eigenlijk gelijk aan de slag met het verzinnen wat je product ging worden. De doelgroep en doelstelling waren allemaal al vastgelegd door de opdrachtgever. Wel moest er tussendoor nog getest worden om te kijken of onze oplossing ook echt aansloeg bij de doelgroep.",
      pros: ["Je kan gelijk een compleet plaatje uitwerken tijdens de design fase", "Je weet precies wat er van je verwacht wordt (Als je briefing/debriefing goed is verlopen)", "Je kan gelijk aan de slag met de ontwikkeling van je product", "Alle code word eerst gereviewd door teamgenoten & 1 iemand merged de code in de main branch, dit zorgt voor een hoge kwaliteit van de code"],
      cons: ["Als de opdrachtgever zelf niet weet wat ze willen word het erg lastig voor jezelf", "Je werkt binnen een vastgestelde scope (kan ook een pro zijn)", "Werkdruk kan hoog liggen door eisen van de opdrachtgever", "Je moet goed communiceren met de opdrachtgever over de scope en eisen - er moet niet teveel verwacht worden"]
    }
  ];

  const groupProjectsData = [
    {
      title: "TLE 1 - Yshelf",
      description: "De Yshelf is een webapp voor een doelgroep van lezers die graag een digitale collectie wilden bijhouden van hun boeken. Deze konden ze dan sorteren op status (gelezen, gestopt, te lezen, favoriet). En konden ze deze delen met vrienden/volgers.",
      pros: ["Tijdens dit project ben ik bezig geweest met de API van openAI en google books. Dit was een leerzame ervaring.",],
      cons: ["",],
      goalsReflection: ""
    },
    {
      title: "TLE 2 - Natuurmoment",
      description: "NatuurMoment is een interactief groepsspel dat iedereen samen door een natuurgebied laat bewegen. Met hun telefoon als gids, en de natuur als speelveld. Spelers spelen fotobingo tijdens een wandelroute. De host/organisator kan deze foto's goedkeuren en de spelers krijgen hier punten voor. Degende met de meeste punten wint aan het eind van de wandelroute.",
      pros: ["",],
      cons: ["",],
      goalsReflection: ""
    }
  ];

  const bookData = {
    imageSrc: "https://media.s-bol.com/8kxA8p9PNXr/791x1200.jpg", // Replace with your book cover image path
    imageAlt: "Boek cover",
    title: "",
    about: "",
    learned: "",
    applied: "",
    futureUse: ""
  };

  const futurePlansData = "";

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <AboutSection
        imageSrc={aboutData.imageSrc}
        imageAlt={aboutData.imageAlt}
        title={aboutData.title}
        interests={aboutData.interests}
        strengths={aboutData.strengths}
      />
      <MethodsSection methods={methodsData} />
      <GroupProjectsSection projects={groupProjectsData} />
      <BookSection
        imageSrc={bookData.imageSrc}
        imageAlt={bookData.imageAlt}
        title={bookData.title}
        about={bookData.about}
        learned={bookData.learned}
        applied={bookData.applied}
        futureUse={bookData.futureUse}
      />
      <FuturePlansSection plans={futurePlansData} />
    </div>
  );
}

export default App
