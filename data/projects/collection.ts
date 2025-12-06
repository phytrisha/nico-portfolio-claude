import type { Project } from '../types';

export const collection: Project = {
  id: 15,
  slug: 'collection',
  title: 'A couple more things...',
  shortTitle: 'A couple more things...',
  category: 'freelance',
  tags: ['INTERACTION DESIGN · FREELANCE WORK'],
  year: '2014 – 2025',
  color: '#E6E2D8',


     // New metadata structure
  metadata: {
    topics: ['A LOOSE COLLECTION OF SOME MORE FREELANCE & UNIVERSITY PROJECTS – IN GERMAN IN ENGLISH'],
  },


  description: 'This is a cornucopia of projects that I worked on over the years in both academic and freelance contexts. These include client based work on professional and consumer products / solutions, as well as more explorative academic studies in interaction patterns and the relation of design to broader scale societal issues. ',



  // New project section structure demonstrating all components
  projectSection: {
    type: 'project-section',
    subSections: [

            // =====  SECTION =====
      {
        header: 'TERRA · INTERACTION DESIGN · 2015',
        number: '01',
        components: [
          {
            type: 'paragraph',
            content: 'An interactive exhibit, that allows the user to navigate through multiple layers of information. The user takes control with the Myo armband, developed by Thalmic Labs and navigates with the movement of his arm and a couple of gestures. Terra can be seen as a content-driven experimental exhibit, as transporting content (and therefore knowledge) was a key focusfrom the beginning. One could argue, that by using the rather unusual (and for most users unknown) interaction pattern, thisgoal was not fully met, a simple website or an table-top installation, if we stay in the context of an exhibition, with knowninteraction patterns could have made the content more accessible for a wider range of users, and this is definitely a validpoint. On the other hand one could also argue, that this interaction is in some form more “interesting”, than known patternsand could therefore encourage users to interact with the system. Users that would not have shown interest in the content,if it were presented in a more traditional fashion. In my opinion, there is no definitive solution for this struggle, butduring the time of “Terra”, I was not as aware of the difficulties in balancing these contrasting poles. During the process,the focus somewhat shifted from doing a system that transports content and knowledge in the most efficient was possible,to doing “something cool”. This “something cool”, that the project now is, may very well transport content, but I believe that if I were to do it again today, it could have been better balanced. Featured on the Myo Developer Blog: Featured Developer: Terra',
          },
          {
            type: 'sublines',
            content: 'WITH: MARK MEYER, BERNADETTE KREHBIEHL · SUPERVISION: ROGER WALK',
            py: 'pt-0 pb-12'
          },
          {
            type: 'hero-video',
            src: '/images/projects/collection/terraVideo.mp4',
            alt: 'Terra Video',
            thumb: '/images/projects/collection/Terracover.jpg',
          },
        ]
      },

      // =====  SECTION =====
      {
        header: 'THE DARWIN PROJECT · STRATEGIC DESIGN · 2018',
        number: '02',
        components: [
          {
            type: 'paragraph',
            content: 'Menschen sind individuell, Produkte sollten es auch sein. The [darwin] project wirft einen bewusst provokanten Blick in die Zukunft der Interaktion zwischen Nutzer und Hardware-Produkten. Über drei aufeinander aufbauende Produkt-Phasen hinweg projiziert das Projekt aktuelle technologische Entwicklungen und Konsumtrends auf drei unterschiedlich entfernte Zeitpunkte und entwickelt für jeden Zeitschnitt ein Szenario, welches es sich zur Aufgabe macht eine positive Konsumvision zu entwickeln. Die Szenarien dienen dabei sowohl als kritische Reflexionsfläche auf unser heutiges (und davon ausgehend extrapoliertes) Konsumverhalten, sowie auch als Ausgangspunkt Individualisierung, Produktgestaltung und Produktzyklus, durch spekulative Entwicklungen etwa im Bereich Materialforschung / Smart Materials, anders zu denken, und so einen Gegenentwurf zu Massenkonsum und Wegwerfgesellschaft zu entwickeln. Artefakte werden durch die in Interaktion mit einer künstlichen Intelligenz namens iwa ermittelten Parameter auf funktionaler, ergonomischer und formal ästhetischer Ebene an die persönlichen Anforderungen des Nutzers angepasst.',
            py: 'pt-8 pb-0'
          },
          {
            type: 'paragraph',
            content: 'Das Leuchtturmszenario spinnt diesen Faden weiter in die Zukunft und stellt die Frage: Was wäre wenn wir in einer Welt leben in der ein Produkt von seiner Form, einer spezifischen Marke, und konkreten Eigenschaften losgelöst ist? Die Basis dieses hypothetischen ‹Produktes› macht eine intelligente Materienansammlung aus – der ‹Cube›. Der Cube besitzt die Fähigkeit sich in eine Vielzahl von vom Nutzer gewünschten Produkten zu transformieren, limitiert lediglich von der Masse selbst. Dieses Szenario dient sowohl als Grundlage für die Entwicklung von Hypothesen über die Interaktion und Kreation einer solchen situativen Bedürfnisbefriedigung, sowie als Ausgangspunkt um kritische Fragen zu den Implikationen einer solchen Welt zu entwickeln: Was bedeutet der Produktbegriff noch? Wie wirkt sich situative Bedürfnisbefriedigung jenseits von Brands und Trends auf Nutzeridentität aus? Verlagert sich und Markenidentifikation einfach in andere Lebensbereiche?',
          },
          {
            type: 'sublines',
            content: 'WITH: ROBERT MEYER, JONATHAN AICHELE, JASMIN GROSSER · SUPERVISION: PROF. GABRIELE N. REICHERT, THOMAS SCHÖNWEITZ, PROF. GÜNTHER BISTE',
            py: 'pt-0 pb-12'
          },
          {
            type: 'hero-image',
            src: '/images/projects/collection/coverdarwin.jpg',
            alt: 'Cover darwin',
          },  
          
        ]
      },


      // =====  SECTION =====
      {
        header: 'FANTIUM · FREELANCE · 2022',
        number: '03',
        components: [
          {
            type: 'paragraph',
            content: 'Fantium provides a platform that allows fans to invest in their favorite athletes and own a share of their future success. The involvement in the project focused on optimizing user journeys, conceptual restructuring of the applications navigation hierarchy and  overhauling the UI / UX. The conceptual restructuring phase involved deconstructing the existing navigation architecture. We discovered that the original hierarchy reflected internal business logic rather than user mental models, leading to a complete reorganization around athlete discovery, portfolio management, and investment tracking as primary navigation pillars. The UI/UX overhaul followed an iterative design sprint methodology. We developed low-fidelity wireframes to test navigation flows, followed by rapid prototyping cycles that validated key interaction patterns.',
          },
          {
            type: 'sublines',
            content: 'CLIENT: FANITUM · INVOLVEMENT: DESIGN RESEARCH, UX CONCEPT, UI / UX DESIGN',
            py: 'pt-0 pb-12'
          },
          {
            type: 'hero-image',
            src: '/images/projects/collection/fantium.jpg',
            alt: 'Beneficial AI Framework Model',
          },  
          
        ]
      },


      // =====  SECTION =====
      {
        header: 'ZASTA · FREELANCE · 2022',
        number: '04',
        components: [
          {
            type: 'paragraph',
            content: 'Zasta is a digital tax platform that enables users to fully delegate the preparation and submission of their tax returns with minimal effort. By leveraging a user’s tax identification number, the platform can retrieve tax-relevant data directly from the tax authority. This automated feature is currently unique within the German tax system. Zasta connects users with certified tax consultants who are responsible for reviewing and finalizing the tax filings. The project focused on designing a back-end filing system tailored to the needs of Zasta’s tax consultants. The goal was to translate the complex workflow into a modular structure, allowing tasks to be distributed across multiple internal stakeholders. A central challenge lay in developing a software solution that optimizes efficiency and enables comprehensive troubleshooting, while adhering to the constraints imposed by legacy processes and tax forms originally designed for analog workflows.',
          },
          {
            type: 'sublines',
            content: 'CLIENT: ZASTA · INVOLVEMENT: UX CONCEPT, DESIGN SYSTEM, UI / UX DESIGN',
            py: 'pt-0 pb-18'
          },

          {
            type: 'hero-image',
            src: '/images/projects/collection/Zasta.jpg',
            alt: 'Beneficial AI Framework Model',
          },  
          
        ]
      },


      // =====  SECTION =====
      {
        header: 'ASSURECARE ADMIN CONSOLE · FREELANCE · 2017',
        number: '05',
        components: [
          {
            type: 'paragraph',
            content: 'AssureCare is a healthcare technology company that specializes in providing integrated software solutions for population health management. Its flagship product, MedCompass, is a comprehensive platform used by commercial and government healthcare providers to automate complex tasks, optimize workflows, and enable data-driven decisions. AssureCare initiated the conceptualization and development of the MedCompass Admin Panel, an internal platform designed to serve as the back-end solution for the MedCompass healthcare product. Drawing on stakeholder interviews and workflow analyses, a concept was developed that is capable of addressing the modular feature requirements of the MedCompass suite.',
          },
          {
            type: 'sublines',
            content: 'CLIENT: ASSURECARE · INVOLVEMENT: DESIGN RESEARCH, UX CONCEPT, UI / UX DESIGN',
            py: 'pt-0 pb-18'
          },
          {
            type: 'hero-image',
            src: '/images/projects/collection/AssureCare.jpg',
            alt: 'Beneficial AI Framework Model',
          },       
        ],
      },
      


  
    ]
  },

};