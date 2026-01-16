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
      pros: ["Tijdens dit project ben ik bezig geweest met de API van openAI en google books. Dit was een leerzame ervaring.", "Tijdens dit project heb ik veel gecodeerd, veel grote taken op me genomen", "Na de eerste week nam ik een wat meer leidinggevende rol op me en probeerde ik overzicht te creeeren voor iedereen."],
      cons: ["Ik heb veel thuis moeten doen omdat ik teveel op me nam", "In de eerste week nam iemand anders de leiding en gaf ik heel weining input", "Communcatie had beter gemoeten om overzicht te behouden, zo hoefde ik me ook niet overal mee te bemoeien", "We waren niet concreet genoeg in wat we wilden testen en wat hiervoor gebouwd moest worden."],
      goalsReflection: "Mijn doelstelling na dit project was om meer bezig te zijn het opzetten van het concept en hierin meer input te geven. Zo hoopte ik zelf wat meer baat te hebben bij het resultaat wat we neerzetten \n Ook wilde ik me meer gaan richten op communicatie, Zo blijft er overzicht en hoef ik me niet overal mee te bemoeien. Hiermee hoop ik ook mijn eigen workload te verminderen"
    },
    {
      title: "TLE 2 - Natuurmoment",
      description: "NatuurMoment is een interactief groepsspel dat iedereen samen door een natuurgebied laat bewegen. Met hun telefoon als gids, en de natuur als speelveld. Spelers spelen fotobingo tijdens een wandelroute. De host/organisator kan deze foto's goedkeuren en de spelers krijgen hier punten voor. Degende met de meeste punten wint aan het eind van de wandelroute.",
      pros: ["Ik heb erg veel gecodeerd tijdens dit project, haast alle functionaliteit van de bingo zelf", "We lagen tijdens dit project heel erg op 1 lijn, dit zorgde voor weinig conflicten", "Communicatie was heel goed, we wisten goed wat we van elkaar konden verwachten", "Ik ben tijdens dit project een stuk meer betrokken geweest bij het opzetten van het concept."],
      cons: ["Soms hadden we wat moeite met afbakenen door onduidelijkheden vanuit de opdrachtgever", "Ik had nog steeds moeite met mezelf niet overal mee bemoeien, dit werd op een gegeven moment gezien als opdringerig",],
      goalsReflection: "Vergeleken met het eerste project ben ik enorm gegroeid qua werkhouding, vooral qua communicatie en ook qua houding tijdens de ontwerpfase. Ik vond dit project en stuk interessanter dan de vorige en dit was te merken. \n Wel was ik nog steeds teveel bezig met het werk van anderen. Ik had als doelstelling van het vorige project dat ik dit niet meer zou doen maar dit was een beetje mislukt. Ik denk dat dit vooral kwam door mijn enthousiasme. Wel is mijn grote bijdrage nu niet meer te danken aan teveel willen doen uit wantrouwen maar meer uit enthousiasme. De doelstelling waarmee ik dus ook verder wil is nogsteeds mee communiceren, nu vooral zodat ik niet anderen in de gaten hoef te houden maar dat ik door communcatie mezelf op de hoogte houd."
    }
  ];

  const bookData = {
    imageSrc: "https://media.s-bol.com/8kxA8p9PNXr/791x1200.jpg", // Replace with your book cover image path
    imageAlt: "Boek cover",
    title: "Superintelligence",
    about: "Superintelligence gaat over de ontwikkeling van AI en hoe dit kan leiden tot een superintelligentie, Het gaat vooral over hoe we met deze superintelligentie om moeten gaan en hoe we moeten doorhebben hoe we deze superintelligentie onder controle moeten houden voordat we hier te laat voor zijn.",
    learned: "Omdat het boek heel erg gaat over goal alignment kan je dit goed toepassen op een groepsproject, je moet zorgen dat je allemaal op 1 lijn ligt om zo geen andere verwachtingen te hebben van een goed resultaat. Een AI heet geen gevoel voor menselijke normen en waarden, zo kan deze bepaalde problemen heel anders oplossen dan dat wij dat zouden doen. Dit is vaak niet positief. Hetzelfde kan gebeuren binnen een groepsproject, als iemand binnen de groep een hele andere interpretatie heeft van het concept, ga je hele verschillende onderdelen krijgen die niet op elkaar aansluiten. Communciatie is dus erg belangrijk om dit te voorkomen.",
    applied: "Binnen ons laatste project heb ik niet echt actieve stappen hoeven ondernemen om dit toe te passen. zoals ik al eerder beschreef lagen we vanaf dag 1 al heel erg op 1 lijn. Ook was onze communcatie dusdanig goed dat eventuele onduidelijkheden gelijk verholpen konden worden.",
    futureUse: "Omdat ik tijdens dit project vergeleken met het eerste project heel goed heb kunnen zien dat de goal alignment erg belangrijk is, zal ik dit in de toekomst proberen toe te passen bij mijn volgende projecten door goed te communiceren met mijn groep en ook vragen te stellen om te pijlen of iedereen op 1 lijn ligt."
  };

  const futurePlansData = "In de toekomst wil ik vooral mijn enthousiasme voor het bouwen van funtionaliteiten behouden. Waar ik me extra op wil richten is het communceren en samentrekken van onze doelstelling. Dit wil ik doen door erg kritisch te blijven en veel vragen te stellen aan mijn groepsgenoten. Wat ik realistish? Ligt iedereen op 1 lijn? Waarom willen we functionaliteit x toevoegen en is dit het waard? Zo hoop ik toekomstige projecten zo soepel mogelijk te laten verlopen.";

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
