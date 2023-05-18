import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ai,
  python,
  flutter,
  networking,
  java,
  machine,
  firebase,
  linux
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },

 
 
 
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Android  Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  // {
  //   name: "ai",
  //   icon: ai,
  // },
  // {
  //   name: "flutter",
  //   icon: flutter,
  // },
  // {
  //   name: "networking",
  //   icon: networking,
  // },
  // {
  //   name: "java",
  //   icon: java,
    
  // },
  // {
  //   name: "machine",
  //   icon: machine,
  // },
  // {
  //   name: "linux",
  //   icon: linux,
  // },
  // {
  //   name: "firebase",
  //   icon: firebase,
  // },
  // {
  //   name: "python",
  //   icon: python,
  // },

  

];

const experiences = [
  {
    title: "12th graduate",
    company_name: "CCRC",
    icon: starbucks,
    iconBg: "#383E56",
    date: " 2017 -  2019",
    points: [
      "Completed 12th with high grade from ccrc college with partipication in extra events",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Bachelor",
    company_name: "PCPS",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2019 - 2023",
    points: [
      "Completed bachelor in Bsc computer science and software engineering",
      "Learn different programming language alognside with networking"
    
    ],
  },
  {
    title: "Developer",
    company_name: "Projects",
    icon: shopify,
    iconBg: "#383E56",
    date: " 2020 -  2023",
    points: [
      "Learn different programming language for web like react, html, css, node and nextJs.",
      "Created different project in Java, Python, C# for deskptop alogside with database.",
      "Created different fullstack mobile application using flutter, dart, mongodb and firebase as database.",
      "Learned knowledge about machine learning and created AI project face scanner",
      
    ],
  },
  {
    title: "Project manger",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - Present",
    points: [
      "Created differnt documentation and report for project's.",
      "Learned moderate knowledge about networking, ethical hacking and app testing",
      "Got knowledge about app testing and bug bounty",
      "Has experience to manage group and maintain the leadership with co-ordination",
    ],
  },
];

const testimonials = [
  {
    testimonial:
    "I haven't work with any clinet yet so recently completed my studies.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I haven't work with any clinet yet so recently completed my studies.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
    "I haven't work with any clinet yet so recently completed my studies.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Sharing App",
    description:
      "Mobile app where user can book the ride make pyment and register vehicle. Driver can post the ride and accept ride.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Dart",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/icchigoo/Car_sharing_app",
  },
  {
    name: "Food app",
    description:
      "Application where user can browser throgh latest food and order them and make payment. Admin can post the food and mange them.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "esewa",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "hthttps://github.com/icchigoo/Canteen-Resturant_app",
  },
  {
    name: "Spectracl",
    description:
      "A music website to stream music. Admin can post the music and user can reate comment and listem to them.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/icchigoo/Spectral__",
  },
  {
    name: "Ride sharing app",
    description:
      "A ride shrring app made for nepal with esewa and khalti payment. This app is still under construction with some final touches remainin.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "Map, esewa",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/icchigoo/Ride-Sharing-commuteNepal-",
  },
  {
    name: "Waste Management",
    description:
      "A app to manage waste management with map created in react native. There are two section user and orginazation",
    tags: [
      {
        name: "React-native",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "Map",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/icchigoo/Waste-management-app",
  },

  {
    name: "Fitness app",
    description:
      "A app to manage user fitness and it has different calculator and also the details about exercise.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "blog",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/icchigoo/Fitness_gym_app",
  },

  {
    name: "Fitness app",
    description:
      "Student app to mangement student assignmnet and course work with advance attendence.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "blog",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/icchigoo/Student",
  },
  {
    name: "Heart game",
    description:
      "A game created in java with api for desktop and has advance authentication",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Mysql",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/icchigoo/Heartgame",
  },
  {
    name: "Mini game",
    description:
      "A game created in java. It is a mini game which has all the basic funcation to create a game",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Mysql",
        color: "green-text-gradient",
      },
      {
        name: "Game tiles",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/icchigoo/Minigames",
  },

  // {
  //   name: "Ecommerce website",
  //   description:
  //     "Its a backend website of ecommerce which is tested and is connected in mongoDb",
  //   tags: [
  //     {
  //       name: "nodeJs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "MongoDb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "api",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/icchigoo/Ecommerce",
  // },
  // {
  //   name: "Shop app",
  //   description:
  //     "It has admin and user section where user can browser through section and buy producat and make payment.",
  //   tags: [
  //     {
  //       name: "Flutter",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "MongoDb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "firebase",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/icchigoo/Shop_app",
  // },
  // {
  //   name: "Portfolio v1",
  //   description:
  //     "Portfolio created for myself with advance animation and fuction.",
  //   tags: [
  //     {
  //       name: "React,html,css",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Santiy",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "nodeJs",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/icchigoo/Protfolio_website",
  // },
  // {
  //   name: "Netflix",
  //   description:
  //     "Netflix redesign with some advance improvemnets.",
  //   tags: [
  //     {
  //       name: "React,html,css",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Sacss",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "nodeJs",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/icchigoo/Netflix",
  // },
  // {
  //   name: "Netflix",
  //   description:
  //     "Travel advisor to help the tourist find nearist resturant and places.",
  //   tags: [
  //     {
  //       name: "React,html,css",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Api",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "nodeJs",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/icchigoo/travel_advicer",
  // },
  // {
  //   name: "Hotel management",
  //   description:
  //     "Hotel mangement app with three section user, receptionsit and admin",
  //   tags: [
  //     {
  //       name: "Java",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Mysql",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Api",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/icchigoo/Hotel-Managemnet-System",
  // },
];

export { services, technologies, experiences, testimonials, projects };
