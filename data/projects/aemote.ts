import type { Project } from '../types';

export const aemote: Project = {
  id: 3,
  slug: 'aemote',
  title: 'æ:mote – Supporting people with autism in understanding emotions',
  shortTitle: 'æ:mote – Supporting people with autism in understanding emotions',
  category: 'strategic-design',
  tags: ['STRATEGIC DESIGN · SOCIAL DESIGN · ACCESSIBILITY'],
  year: '2019',
  color: '#FF6D01',

  // New metadata structure
  metadata: {
    entries: [
      'Master Thesis (MA) · Strategic Design · Oct - Jan 2019 · HfG Schwäbisch Gmünd ·  With: [Mark F. Meyer](https://mark-gestaltung.de), [Luis Holeczek](https://mark-gestaltung.de)',
      'Supervision: [Prof. Benedikt Groß](https://www.hfg-gmuend.de/personen/david-oswald), [Prof. Julia Kühne](https://www.hfg-gmuend.de/en/people/ulrich-barnh%C3%B6fer), [Dr. Eileen Mandir](https://www.hfg-gmuend.de/en/people/ulrich-barnh%C3%B6fer)'
    ]
  },

  description: 'æ:mote is a concept, designed to train people on the autistic spectrum disorder (ASD) in recognizing and understanding emotions. Developed in cooperation with the Paulinenpflege Winnenden, an institution that prepares young adults on the ASD for work, æ:mote can be seen as a first step in order to enable parents, as well as professional therapists to better support people on the ASD and to simplify their everyday life a bit. æ:mote combines a smartphone application used in face to face training sessions with the participant on the ASD with analog communication cards that are supposed to trigger guided conversations around topics that likely evoke specific emotions.',










// New project section structure demonstrating all components
  projectSection: {
    type: 'project-section',
    subSections: [
      // ===== INTRODUCTION SECTION =====
      {
        header: 'DESCRIPTION',
        number: '01',
        components: [
            {
            type: 'hero-video',
            src: '/images/projects/aemote/aemote_1.mp4',
            alt: 'Research methodology overview',
            thumb: '/images/projects/aemote/coverimage01.jpg',
          },

          {
            type: 'intro-text',
            content: 'æ:mote is a concept, designed to train people on the autistic spectrum disorder (ASD) in recognizing and understanding emotions. Developed in cooperation with the Paulinenpflege Winnenden, an institution that prepares young adults on the ASD for work, æ:mote can be seen as a first step in order to enable parents, as well as professional therapists to better support people on the ASD and to simplify their everyday life a bit. æ:mote combines a smartphone application used in face to face training sessions with the participant on the ASD with analog communication cards that are supposed to trigger guided conversations around certain topics that likely evoke specific emotions. The digital component can be placed in a cardboard stand on the table so the phone does not become a distracting part of the conversation. As soon as the software detects a certain emotion in the face of the conversation partner the autistic student is promted to make a guess about type of emotion he just witnessed in his counterpart and is presented with additional information or hints in case he / she has trouble identifying the facial expression correctly.',
            py: 'pt-12 pb-10',          
          },          
        ]
      },


      // ===== SECTION =====
      {
        header: 'WHAT IS AUTISM?',
        number: '02',
        components: [
          {
            type: 'paragraph',
            content: 'When talking about autism, it is common to refer the disorder as a spectrum, due to the variety of types it may occur. This was apparent after an initial visit at the Paulinenpflege Winnenden. As Dr. Stephen Shore says, "If you have met one person with autism, youve met one person with autism."[1] Generalized solutions are therefore difficult to build. Nevertheless, we wanted to create a tool, which could help at least some of the participants at Paulinenpflege.',
          },
          
        ]
      },

      // ===== SECTION =====
      {
        header: 'POTENTIALS',
        number: '03',
        components: [          
        ]
      },
      {
        components: [
          {
            type: 'inline-header',
            content: 'After an initial desk research and on site observation, we considered three opportunity areas, which we could tackle.',
            py: 'pt-8 pb-0',
          },
        ]
      },
      // ===== FEATURE BLOCK EXAMPLE =====
      {
        //header: 'Key Features',
        number: '02',
        components: [
          {
            type: 'feature-block',
            skyline: 'OPPORTUNITY AREA 1: STRESS',
            description: 'Often, people on the ASD are constantly under a lot of stress. This is due to the disorder leading to a questioning of every given thing. Things that people, who are not on the ASD perhaps do not even notice, and if they do, do not question (e.g. "Why is this person wearing a red sweater today, when he was wearing a green one yesterday?"). Often, the many impulses we encounter on a daily basis lead to an overflow of impulses, which are typically not handled very well, possibly leading to panic attacks. This can lead to difficult situations in everyday life. The first opportunity area therefore considers blocking these impulses in certain situations or training handling them.',
            py: 'pt-6 pb-8',
          },       
          {
            type: 'full-width-image',
            src: '/images/projects/aemote/OA5.jpg',
            alt: 'Research methodology overview',
            py: 'pt-3 pb-12',
          },
        
          {
            type: 'feature-block',
            skyline: 'OPPORTUNITY AREA 2: LEARNING',
            description: 'These difficulties in dealing with a lot of impulses may also lead to numerous problems when learning. As most impressions can not simply be ignored, they can quickly be distracting when facing the challenge to concentrate on a certain task. This does not only apply exclusively to cognitive tasks, but also repetitive manual tasks, as for example different initial circumstances can lead to confusion. The second opportunity area suggests establishing a more concentrated space with fewer distractions and clearer instructions in certain predictable situations.',
            py: 'py-0'
          },
          {
            type: 'full-width-image',
            src: '/images/projects/aemote/OA4.jpg',
            alt: 'Research methodology overview',
            py: 'pt-3 pb-6',
          },
        
          {
            type: 'feature-block',
            skyline: 'OPPORTUNITY AREA 3: COMMUNICATION',
            description: 'The third opportunity area tackles the problems that occur during communication. People with ASD often have difficulties communicating with other people, as communication often heavily relies on recognizing and reacting to messages in a way, which general society has deemed appropriate. The recognition and "appropriate" reaction can be very difficult for people with ASD and the consequences can be fairly frustrating, as a lack of communication can impact almost every area of day-to-day life. There are already numerous research projects concerned with improving the communication skills of people with ASD, nevertheless this area was the most interesting to us, as we saw the most potential in improving day-to-day life here.'
          },
          {
            type: 'full-width-image',
            src: '/images/projects/aemote/OA6.jpg',
            alt: 'Research methodology overview',
            py: 'pt-3 pb-0',
          },
        ]
      },
      

      {
        header: 'STRATEGIES',
        number: '04',
        components: [
        ]
      },
      {
        components: [
          {
            type: 'inline-header',
            content: 'To tackle the challenge of improving communication we outlined three different strategies of how we might approach our goal of inclusion.', 
            py: 'pt-8 pb-0',
          },
          {
            type: 'feature-block',
            skyline: 'STRATEGY 1: RAPID TECH APPROACH',
            description: 'The idea behind the first strategy is to make use of the opportunity of testing with real people with ASD and therefore immediately validate the product. To tackle the issue of communication, we could therefore currently work with smartphone applications, smartwatches or other devices, that are common nowadays.',
            py: 'pt-6 pb-0',
          },       
          {
            type: 'full-width-image',
            src: '/images/projects/aemote/ST1.jpg',
            alt: 'Research methodology overview',
            py: 'pt-3 pb-14',
          },
        
          {
            type: 'feature-block',
            skyline: 'STRATEGY 2: VISION 2030 APPROACH',
            description: 'The second approach is set a bit further in the future. Here we could assume that a lot more technology is available in terms of hardware and we could also speculate, that several crucial improvements in software development have been made, such as improved deep learning methods, that have been fed from more reliable data. Possibilities would be to include assistance, which is powered by deep learning, in wearable devices, such as augmented glasses, which are perhaps more common in a couple of years. This approach does rely heavily on speculation though, as it cannot be validated accordingly.',
            py: 'py-0'
          },
          {
            type: 'full-width-image',
            src: '/images/projects/aemote/ST2.jpg',
            alt: 'Research methodology overview',
            py: 'pt-3 pb-8',
          },
        
          {
            type: 'feature-block',
            skyline: 'STRATEGY 3: SOCIAL / POLITICAL APPROACH',
            description: 'A completely different strategy on the other hand would be to not design a product in the traditional sense – which in its core simply approaches solving a problem, which is already present – but rather to look into how people with ASD could be assisted, if there was more awareness in society, as well as in politics. This approach could consist of different types of awareness campaigns, which include multiple milestones that are based on top of each other.',
            py: 'pt-8 pb-0',
          },
          {
            type: 'full-width-image',
            src: '/images/projects/aemote/ST3.jpg',
            alt: 'Research methodology overview',
            py: 'pt-3 pb-12',
          },
        ]
      },


      {
        header: 'CONCEPT',
        number: '05',
        components: [
        ]
      },
      {
        components: [
          {
            type: 'paragraph',
            content: 'For us as designers, we concluded, that the strategy, that could have the most real impact, was the first one, the rapid tech approach. We went on to develop a concept, which is based on three low fidelity components, which can be easily assembled, so that they do not inevitably have to be bought but could very well also be assembled in a makerspace or similar. The overall concept is to enable assistance for people with ASD in everyday life by giving them the opportunity to use an app to identify the emotions people are expressing in certain situations. Additionally, this recognition can be explicitly trained with a set of components, which are briefly described in the following.',
          },
          {
            type: 'feature-block',
            skyline: 'COMPONENT 1: CONVERSATION CARDS',
            description: 'The conversation cards are a source of inspiration for conversations that could be led by a parent (or a professional therapist) and a person with ASD. The parent uses a conversation card to come up with a topic, which typically express strong emotions, such as the joy of Christmas will probably lead to happy emotions. The person with ASD is then quizzed via the app which emotion is currently being expressed.'
          }, 
          {
            type: 'full-width-image',
            src: '/images/projects/aemote/Cards.png',
            alt: 'Research methodology overview',
            py: 'pt-2 pb-12',
          },

          {
            type: 'feature-block',
            skyline: 'COMPONENT 2: HOLDER',
            description: 'The aim of the holder is to enable a more unconstrained conversation flow. It is placed on the center of the table and is able to hold a smartphone in different desired positions, due to its flexible mechanism. The screen of the smartphone faces towards the person with ASD. A mirror enables the camera of the smartphone to be pointing at the face of the person with whom the conversation is taking place, while the smartphone is placed in an unobtrusive fashion, not disturbing the conversation flow. On top of that, the holder is also designed as the packaging of the product.'
          }, 
          {
            type: 'full-width-image',
            src: '/images/projects/aemote/S4.jpg',
            alt: 'Research methodology overview',
            py: 'pt-2 pb-12',
          },

          {
            type: 'feature-block',
            skyline: 'COMPONENT 3: DIGITIAL APPLICATION',
            description: 'The digital application is divided into two main parts, which can be accessed via the main menu: the detection mode and the quiz mode. The detection mode simply shows the image the camera is currently capturing and displays the recognized emotion underneath, given that there is currently a face in the field of view as well as that this faces expresses an emotion at least to some degree. The application was prototyped using Unity and the emotion recognition framework Affectiva [^2], which was developed as a startup at MIT Media Lab in 2009.'
          }, 
          {
            type: 'full-width-image',
            src: '/images/projects/aemote/S5.png',
            alt: 'Research methodology overview',
            py: 'pt-2 pb-8',
          },         
        ]
      },

      {
        header: 'WHAT NOW?',
        number: '05',
        components: [
        ]
      },
      {
        components: [
          {
            type: 'paragraph',
            content: 'The current state of the application only provides some basic functionality, which could be further extended in the future. Here are some of our core ideas:',
            py: 'pt-8 pb-8',
          },
          {
            type: 'feature-block',
            skyline: 'CUSTOM DATABASE',
            description: 'The user does not have to rely on the sample images of each emotion that we provide. She can save and tag situations in which the emotions were somehow memorable and can thereby extend the database to further improve her abilities.',
            py: 'pb-8',
          },         
          {
            type: 'feature-block',
            skyline: 'DOUBLE CHECK',
            description: 'Currently, the user receives immediate feedback when answering in the quiz mode. Perhaps a double check could lead to better learning results. This could also be linked to the custom database, perhaps showing her images from the custom database which she has already correctly recognized in the past as a reference for the current situation.',
           py: 'pb-8',
          },
          {
            type: 'feature-block',
            skyline: 'DIGITAL ASSISTANT',
            description: 'Basically, the idea behind the application must not be limited to a smartphone. The assistance and training could very well also be implemented on other devices, such as wearables. If we consider advancements in deep learning, it is also very well imaginable, that in the future the assistance could not only help recognizing emotions, but also help in situations of emotional instability and so on. This basically leads to the second strategy, which was described earlier: The vision 2030 approach.',
            py: 'pb-8',
          },
          {
            type: 'paragraph',
            content: 'In conclusion, this project was extremely inspiring for us, as we had the opportunity to help real people in their everyday life, which is an extremely rewarding task. We want to thank all staff of the Paulinenpflege Winnenden, especially Tabea König and Mrs. Fischer-Beutel. We also want to thank Prof. Benedikt Groß, Prof. Julia Kühne and Dr. Eileen Mandir for supervising and enabling this project in the first place.',
            py: 'pt-0 pb-8',
          },
        ]
      },

      ]
  },
};
