import weatherapp1 from "../assets/projectImgs/weatherapp1.jpg";
import weatherapp2 from "../assets/projectImgs/weatherapp2.jpg";
import movieapp1 from "../assets/projectImgs/movieapp1.jpg";
import ecommerce1 from "../assets/projectImgs/ecommerce1.jpg";
import personalPage1 from "../assets/projectImgs/personalPage1.jpg";
import coffeHouse from "../assets/projectImgs/coffeehouse.jpg";
import javascript from "../assets/technologies/javascript.png";
import sass from "../assets/technologies/sass.png";
import tailwindcss from "../assets/technologies/tailwindcss.png";
import html from "../assets/technologies/html.png";
import react from "../assets/technologies/react.png";
import cv from "../assets/cv.pdf";

export const LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "My name is André Bacalhau,",
  introduction:
    "I'm a junior front-end developer and enthusiast in developing creative, inovative and immersive digital solutions.",
  description:
    "By being a overall self-learning front-end developer, i created this portfolio so you could learn more about me, not only to give myself the opportunity to showcase my knowledge but also my work/skills, luckly you’ll find some interest and might be a chance for us to build something great together!",
  resumeLinkText: "Download Resume",
  resumeLink: cv,
};

export const PROJECTS = [
  {
    name: "E-Commerce App",
    description: "Clothing website with a functional cart. (with API)",
    techs: [html, javascript, react, tailwindcss],
    image: ecommerce1,
    githubLink: "https://github.com/andrefsbacalhau/ecommerce-app-1",
    vercelLink: "https://ecommerce-app-1-ashen.vercel.app/",
  },
  {
    name: "KoffeeHouse",
    description: "Coffe shop website demo (SASS prac.)",
    techs: [html, javascript, sass],
    image: coffeHouse,
    githubLink: "https://github.com/andrefsbacalhau/koffeehouse",
    vercelLink: "https://koffeehouse.vercel.app/",
  },
  {
    name: "Weather/Forecast V2",
    description: "See the weather and next days forecast (Tanstack test)",
    techs: [html, javascript, react, sass],
    image: weatherapp2,
    githubLink: "https://github.com/andrefsbacalhau/weather-app-v2",
    vercelLink: "https://weather-app-v2-mu.vercel.app/",
  },
  {
    name: "Movie App",
    description:
      "Movie landing page, with functional search options. (with API)",
    techs: [html, javascript, react, tailwindcss],
    image: movieapp1,
    githubLink: "https://github.com/andrefsbacalhau/movie-app-1",
    vercelLink: "https://movie-app-1-flame.vercel.app/",
  },
  {
    name: "Weather App (Newbie version)",
    description:
      "Check the current weather for every city worldwide! (with API)",
    techs: [html, javascript, react, tailwindcss],
    image: weatherapp1,
    githubLink: "https://github.com/andrefsbacalhau/weather-app-1",
    vercelLink: "https://weather-app-1-fawn.vercel.app/",
  },
  {
    name: "My Personal Page",
    description: "This same personal page we're at!",
    techs: [javascript, react, tailwindcss],
    image: personalPage1,
    githubLink: "https://github.com/andrefsbacalhau/personal-page-1",
  },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "Since i’ve focused more on the front-end side of the web developing, i grew fond and always kept growing with technologies like ReactJS, TailwindCSS, SASS/SCSS, besides the usual ones like HTML, CSS and JavaScript. These were used taking in consideration type of project, and chose by which ones would allow to keep it scalable, responsive and always looking forward the best performance and providing a seamless user experience.",
    "As a developer, i consider myself as someone responsible and who's dedicated to grow, learn, build a cleaner code and get better with each project, because i think there is always something that can be improved. In my developing process, i always try to balance the functional side with the aesthetically pleasing side but always regarding the user-friendlyness and it’s performance.",
  ],
};

export const STRENGTHS = {
  points: [
    "Fully motivated, dedicated and focused when working on new projects.",
    "Always self-conscious about me and others, regarding work/relationships.",
    "100% honest and transparent regarding my working conduct.",
    "Easy to collaborating with teams and others.",
    "Establishing good relationships with clients.",
    "Always pushing myself and others/my team for the best outcome.",
  ],
};

export const WEAKNESSES = {
  points: [
    "I might focus too much on details.",
    "Stress out with delays.",
    "When projects aren't going as supposed to, I might feel insecure.",
  ],
};

export const EXPERIENCES = [
  {
    yearRange: "2017 — Now",
    title: "Salesperson at Worten",
    location: "Lisbon, Portugal",
    description: [
      "Sales in person from health care items to IT hardware  and services (B2C).",
      "Telecomunications and home service contracts.",
      "Store operator.",
    ],
  },
  {
    yearRange: "09-11 / 2016",
    title: "Comercial at CONTACT Training Center",
    location: "Lisbon, Portugal",
    description: [
      "Participated on a oubound project in partership with NOS (service provider).",
      "Gathering new clients.",
    ],
  },
  {
    yearRange: "07-10 / 2014",
    title: "IT Technician / administrative at HighSkills",
    location: "Lisbon, Portugal",
    description: [
      "Development of a local data management software.",
      "Maintenance of local IT area.",
      "Data management and administrative assistant.",
      "Invitation for a summer job/project after internship.",
    ],
  },
  {
    yearRange: "07-10 / 2013",
    title: "IT Technician at Globaldata",
    location: "Lisbon, Portugal",
    description: [
      "IT equipement assembly and maintenance.",
      "Salesperson and communicating directly with clientes regarding business matters.",
      "Warehouse/stock operator and management.",
      "Data management and administrative assistant.",
      "Invitation for a summer job after internship.",
    ],
  },
];

export const EDUCATION = [
  {
    yearRange: "2017 - 2021",
    title:
      "Bachelor's degree at ISTEC - Instituto Superior de Tecnologias Avançadas de Lisboa",
    location: "Lisbon, Portugal",
    finalEval: "13/20 points",
  },
  {
    yearRange: "09 / 2012 - 07 / 2015",
    title: "Level 4 Course at ECL - Escola de Comércio de Lisboa",
    location: "Lisbon, Portugal",
    finalEval: "17/20 points",
  },
];

export const INTERSHIPS = [
  {
    yearRange: "01 - 06 / 2016",
    title:
      "Intern at APSOCECAT - Associació Catalana pro Persones amb Sordceguesa (Erasmus+ Scholarship)",
    location: "Barcelona, Spain",
    description: [
      "Software developer/IT technician.",
      "Advisor and team-leading with a local team of other interns",
      "Trainer functions.",
    ],
    finalEval: "18/20 points",
  },
  {
    yearRange: "01-02 / 2015",
    title: "Intern at HighSkills",
    location: "Lisbon, Portugal",
    description: [
      "Software developer/IT technician.",
      "Content creator.",
      "Design department.",
      "Data management.",
    ],
    finalEval: "20/20 points",
  },
  {
    yearRange: "06-07 / 2014",
    title: "Intern at Highskills",
    location: "Lisbon, Portugal",
    description: [
      "Software developer/IT technician.",
      "Data management.",
      "Participated in Workshops of Speech and Body language",
      "Administrative assistant.",
    ],
    finalEval: "20/20 points",
  },
  {
    yearRange: "06-07 / 2013",
    title: "Intern at Globaldata",
    location: "Lisbon, Portugal",
    description: [
      "IT equipement assembly and maintenance.",
      "Salesperson.",
      "Warehouse/stock management.",
    ],
    finalEval: "20/20 points",
  },
];

export const CONTACT_CONTENT = {
  headline: "LET'S WORK TOGETHER",
  description:
    "Hopefully you found interests in common, i'm excited to collaborate on projects that have a purpuose and meaningful impact. Contact me for a meeting or for more information. Let's create something great!",
  email: "andrefsbacalhau@gmail.com",
  phone: "(+351) 967176163",
  socialLinks: [
    {
      platform: "Instagram",
      url: "https://www.instagram.com/andrefsbacalhau",
      ariaLabel: "Follow me on Instagram",
      icon: "RiInstagramLine",
    },
    {
      platform: "GitHub",
      url: "https://github.com/andrefsbacalhau",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/andr%C3%A9-silva-b81853323/",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} André Bacalhau. All rights reserved.`,
};
