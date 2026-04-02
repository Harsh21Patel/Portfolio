import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, ExternalLink, ShieldCheck, Mail } from "lucide-react";

export const DATA = {
  name: "Harsh Patel",
  initials: "HP",
  url: "https://harshpatel21.vercel.app/",
  location: "Ahmedabad, Gujarat",
  locationLink: "https://www.google.co.in/maps/@28.0680455,96.7613483,10z?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D",
  description:
    "Full Stack Developer | Data Science & Machine Learning Enthusiast",
  summary:
    "Full Stack Developer skilled in the MERN stack (React.js, Node.js, JavaScript, MongoDB) with a strong interest in Data Science & Machine Learning. Passionate about building scalable apps, creating seamless user experiences, and applying data-driven insights to solve real-world problems.",
  avatarUrl: "/HAP.jpeg",

  Language: [
  "Java",
  "Python",
  "JavaScript",
  "C",
  "C++",
  "PHP"
],

Frameworks: [
  "Node.js",
  "React.js",
  "Next.js",
  "Express.js",
  "Tailwind CSS",
  "Bootstrap"
],

Databases: [
  "MySQL",
  "MongoDB"
],

Cloud: [
  "Google Cloud",
  "Netlify",
  "Vercel",
  "Render"
],

Tools: [
  "VS Code",
  "Postman",
  "Figma",
],

Version: [
  "GitHub",
  "Git"
],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "harsh21patel.dev@gmail.com",
    tel: "+91 8780002341",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/harsh21Patel/",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/harshpatel21/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/HarshPatel21_",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
company: "IBM SkillsBuild",
href: "https://skillsbuild.org/",
badges: ["Internship"],
location: "Remote",
title: "AI Agent Architect Intern",
logoUrl: "https://i.ytimg.com/vi/KW4xTXWVk_s/maxresdefault.jpg",
start: "July 2025",
end: "August 2025",
description:
"Developed AI agents and applied Machine Learning tools within live projects using IBM software. Collaborated with a team to design and implement AI-driven solutions, gaining hands-on experience with the AI lifecycle and deployment practices.",
},

{
company: "One-Way Akshar Technology LLP",
href: "https://www.onewayakshar.com/",
badges: ["Internship"],
location: "Remote",
title: "Web Development Intern",
logoUrl: "https://yt3.googleusercontent.com/ytc/AIdro_l9_ijjt3Hmlppbozg7ucPa1UXVd2IE9fL1lRVorM9l7K4=s900-c-k-c0x00ffffff-no-rj",
start: "July 2023",
end: "August 2023",
description:
"Built a movie ticket booking website using PHP, MySQL, HTML, CSS, and Bootstrap. Handled both front-end and back-end development, user interface design, and web hosting, enhancing project management and teamwork skills.",
},

{
company: "BrainyBeam Technologies",
href: "https://www.brainybeam.com/",
badges: ["Internship"],
location: "Ahmedabad, India",
title: "Python/Django Intern",
logoUrl: "https://media.licdn.com/dms/image/v2/C4D0BAQGahJkPfWKn2w/company-logo_200_200/company-logo_200_200/0/1631330235832?e=2147483647&v=beta&t=-EtjPjvbYmDwAu5jHjHmKNQce4A44B7idH6H9sFPiOA",
start: "September 2022",
end: "October 2022",
description:
"Focused on learning Python and the Django framework, gaining practical experience in backend development and database management. Contributed to team projects, strengthening Python programming and web application development skills.",
},

  ],
  education: [
{
  school: "Vishwakarma Government Engineering College",
  href: "https://vgecg.ac.in/",
  degree: "Bachelor of Computer Science & Engineering (Data Science)",
  logoUrl: "https://vgecg.ac.in/vgec/vaa/images/clogo.png",
  start: "2024",
  end: "Present",
  description:"Pursuing Bachelor's in Computer Engineering with specialization in Data Science, focusing on Artificial Intelligence, Machine Learning, and Full-Stack Development. Building a strong foundation in programming, data analytics, and modern software engineering practices.",
},

{
  school: "Government Polytechnic Himmatnagar",
  href: "https://sites.google.com/view/gphcomputer/",
  degree: "Diploma in Computer Engineering",
  logoUrl: "/GPH.png",
  start: "2021",
  end: "2024",
  description:"Completed Diploma in Computer Engineering with 9.85 CGPA, ranked first in department and institute. Gained strong skills in programming, software development, networking, and databases through projects and active participation in hackathons, seminars, and workshops.",
},

{
  school: "Jainacharya Anandghansuri Vidhyalaya",
  href: "https://schools.org.in/sabar-kantha/24050712708/jainachary-anandghansuri-vidyalaya-high.html",
  degree: "Secondary School",
  logoUrl: "https://content3.jdmagicbox.com/comp/himatnagar/e7/9999p2772.2772.140301131145.x4e7/catalogue/jainacharya-anandghansuri-vidhyalaya-mahavirnagar-himatnagar-gujarati-medium-schools-0qxhqhlrhp.jpg",
  start: "2011",
  end: "2021",
  description:"Built a strong foundation in Science and Mathematics while actively engaging in academics and extracurriculars.",
},

  ],
  projects: [
    {
  title: "CoreInventory - Inventory Management System",
  href: "https://github.com/Harsh21Patel/odoo_hackathon",
  dates: "Mar 2026",
  active: true,
  description:
    "CoreInventory is a full-stack Inventory Management System built for the Odoo x Indus University Hackathon '26. It digitizes and streamlines stock operations with real-time tracking, multi-warehouse support, receipt & delivery pipelines, and a live dashboard - replacing manual registers and scattered tracking methods.",
  technologies: [
    "React.js",
    "Node.js",
    "Express",
    "MongoDB",
    "JWT",
    "Recharts",
  ],
  links: [
    {
      type: "Source",
      href: "https://github.com/Harsh21Patel/odoo_hackathon",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "/core.jpeg",
  video: "",
},
    {
  title: "WanderLust (Airbnb Clone) - Under Development",
  href: "https://github.com/Harsh21Patel/WanderLust",
  dates: "Aug 2025 - Present",
  active: true,
  description:
    "WanderLust is a simple Airbnb clone built using MongoDB, Node.js, Express, and EJS. It is a work in progress aiming to provide a platform for users to list and book properties with a smooth, user-friendly interface.",
  technologies: [
    "Node.js",
    "Express",
    "MongoDB",
    "EJS",
    "Passport.js",
  ],
  links: [
    {
      type: "Source",
      href: "https://github.com/Harsh21Patel/WanderLust", 
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "/projects/WanderLust.png", 
  video: "", 
},

{
  title: "AI Logo Generator",
  href: "https://github.com/Harsh21Patel/Logonix", 
  dates: "Mar 2025 - Mar 2025",
  active: true,
  description:
    "A full-stack AI-powered logo generator built with Next.js and React. The app integrates Google Gemini API and Hugging Face models to generate custom logos based on user prompts. Designed with a modular architecture to ensure smooth interaction between frontend, backend, and external AI services.",
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "TailwindCSS",
    "Google Gemini API",
    "Hugging Face",
    "Node.js",
  ],
  links: [
    {
      type: "Source",
      href: "https://github.com/Harsh21Patel/Logonix",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "/projects/Logonix.png", 
  video: "", 
},

    {
  title: "DDCET Rank Predictor and College Finder",
  href: "https://github.com/Harsh21Patel/DDCET",
  dates: "Feb 2025 - Feb 2025",
  active: true,
  description:
    "A web application that predicts a student's potential rank in the Diploma to Degree Common Entrance Test (DDCET) and suggests possible colleges based on the predicted rank. Built to help students explore admission opportunities by selecting category, college type, and engineering course, using historical DDCET 2024 data.",
  technologies: [
    "JavaScript",
    "HTML",
    "CSS",
    "Bootstrap",
    "Netlify",
  ],
  links: [
    {
      type: "Source",
      href: "https://github.com/Harsh21Patel/DDCET",
      icon: <Icons.github className="size-3" />,
    },
    {
      type: "Preview",
      href: "https://ddcet.netlify.app/",
      icon: <ExternalLink className="size-3" />,
    },
  ],
  image: "/projects/DDCET.png", 
  video: "", 
},
    {
  title: "Password Strength Checker",
  href: "https://github.com/Harsh21Patel/Password-Strength-Checker",
  dates: "Mar 2024 - Mar 2024",
  active: true,
  description:
    "A micro-project built with JavaScript, HTML, CSS, and Bootstrap to evaluate password robustness. It provides instant feedback, educational guidance, and suggestions for improving password security while helping users understand best practices in information security.",
  technologies: [
    "JavaScript",
    "HTML",
    "CSS",
    "Bootstrap",
  ],
  links: [
    {
      type: "Source",
      href: "https://github.com/Harsh21Patel/Password-Strength-Checker",
      icon: <Icons.github className="size-3" />,
    },
    {
          type: "Preview",
          href: "https://harsh21patel.github.io/Password-Strength-Checker/",
          icon: <ExternalLink className="size-3" />,
        },
  ],
  image: "/projects/Password.png",
  video: "", 
},
    {
  title: "Inventory Management System",
  href: "https://github.com/Harsh21Patel/Inventory-Management-System-PHP", 
  dates: "Jun 2023 - Jun 2023",
  active: true,
  description:
    "A web-based Inventory Management System built using PHP and MySQL, featuring product management, stock tracking, and reporting functionalities. Designed with a responsive interface to streamline inventory operations.",
  technologies: [
    "PHP",
    "MySQL",
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
  ],
  links: [
    {
      type: "Source",
      href: "https://github.com/Harsh21Patel/Inventory-Management-System-PHP",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "/projects/Inventory.png",
  video: "", 
},
{
  title: "Netflix Frontend Clone",
  href: "https://github.com/Harsh21Patel/MovieZone",
  dates: "Jan 2023 - Jan 2023",
  active: true,
  description:
    "A front-end clone of Netflix built to practice and showcase UI development skills. Features a responsive design with Bootstrap, movie rows by genre, hover effects for additional content details, and a modal for trailers or more information.",
  technologies: [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "jQuery",
  ],
  links: [
    {
      type: "Source",
      href: "https://github.com/Harsh21Patel/MovieZone",
      icon: <Icons.github className="size-3" />,
    },
            {
          type: "Preview",
          href: "https://harsh21patel.github.io/MovieZone/",
          icon: <ExternalLink className="size-3" />,
        },
  ],
  image: "/projects/Netflix.png",
  video: "",
},
  ],
  hackathons: [
        {
  title: "Claude Code in Action, Anthropic AI",
  dates: "Mar 2026",
  location: "Anthropic AI",
  description: "Course on using Claude Code for AI-assisted software development, including project setup, context control, GitHub integration, hooks, and SDK usage.",
  image: "./anthropic.png",
  links: [
     {
          title: "Certificate",
          icon: <ShieldCheck className="h-4 w-4"/>,
          href: "/certificates/IBM_Internship.png",
        },
  ],
},
    {
  title: "From Learner to Builder: Become an AI Agent Architect",
  dates: "Jul 2025",
  location: "IBM",
  description: "Completed IBM program focusing on AI agent development and deployment practices.",
  image: "https://i.ytimg.com/vi/KW4xTXWVk_s/maxresdefault.jpg",
  links: [
     {
          title: "Certificate",
          icon: <ShieldCheck className="h-4 w-4"/>,
          href: "/certificates/IBM_Internship.png",
        },
  ],
},

{
  title: "Google Cloud Arcade 2025: Arcade Ranger",
  dates: "Jan - June 2025",
  location: "Google Cloud",
  description: "Earned Arcade Ranger recognition for completing advanced cloud engineering and AI challenges in Google Cloud Arcade 2025.",
  image: "./GCP.png",
    links: [
     {
          title: "Mail",
          icon: <Mail className="h-4 w-4"/>,
          href: "/certificates/Arcade_Ranger.png",
        },
  ],
},

{
  title: "Google Cloud Arcade 2024: Premium Milestone",
  dates: "July - Dec 2024",
  location: "Google Cloud",
  description: "Achieved Premium Milestone in Google Cloud Arcade 2024 by successfully completing multiple cloud engineering and AI challenges.",
  image: "./GCP.png",
    links: [
     {
          title: "Mail",
          icon: <Mail className="h-4 w-4"/>,
          href: "/certificates/Arcade_Premium.png",
        },
  ],
},

{
  title: "Google Cloud Skill Badges",
  dates: "Dec 2024",
  location: "Google Cloud",
  description: "Earned multiple Google Cloud Skill Badges covering APIs, cloud storage, compute, networking, and AI fundamentals.",
  image: "./GCP.png",
links: [
  {
    title: "Build Real World AI Applications with Gemini and Imagen",
    href: "https://www.credly.com/badges/b4ea1d16-07dc-4e1f-9c61-da0c99b07e49",
    icon: <ExternalLink className="h-4 w-4" />,
  },
  {
    title: "Get Started with API Gateway",
    href: "https://www.credly.com/badges/6c96c364-48c9-492d-89fb-92b7d1b926c6",
    icon: <ExternalLink className="h-4 w-4" />,
  },
  {
    title: "Store, Process, and Manage Data on Google Cloud",
    href: "https://www.credly.com/badges/f171fb0d-6cff-4d5b-8b07-0402cee2b749",
    icon: <ExternalLink className="h-4 w-4" />,
  },
  {
    title: "The Basics of Google Cloud Compute",
    href: "https://www.credly.com/badges/b5216200-1653-499b-b65d-55189d06d1b5",
    icon: <ExternalLink className="h-4 w-4" />,
  },
  {
    title: "Networking Fundamentals on Google Cloud",
    href: "https://www.credly.com/badges/0051ad73-1305-418d-9284-efe7f3507974",
    icon: <ExternalLink className="h-4 w-4" />,
  },
  {
    title: "Use APIs to Work with Cloud Storage",
    href: "https://www.credly.com/badges/d12ab805-c6df-4f2c-847f-c5c5c3d786d8",
    icon: <ExternalLink className="h-4 w-4" />,
  },
  {
    title: "Get Started with Cloud Storage",
    href: "https://www.credly.com/badges/bf1801a6-358b-496b-ab18-2612e3455fec",
    icon: <ExternalLink className="h-4 w-4" />,
  },
],
},

{
  title: "Smart India Hackathon 2024",
  dates: "Sep 2024",
  location: "Smart India Hackathon / Gujarat Technological University",
  description: "Worked in a team to develop a crop prediction system based on soil data, leveraging data analysis and machine learning concepts.",
  image: "https://i0.wp.com/opportunitycell.com/wp-content/uploads/2022/03/SIH2.png?fit=327%2C345&ssl=1",
    links: [
         {
          title: "Certificate",
          icon: <ShieldCheck className="h-4 w-4"/>,
          href: "/certificates/SIH_2024.png",
        },
  ],
},

{
  title: "Microsoft Certified: Azure AI Fundamentals",
  dates: "Feb 2024",
  location: "Microsoft",
  description: "Certified in AI concepts and Microsoft Azure AI services, validating foundational knowledge of AI and cloud technologies.",
  image: "https://designwanted.com/wp-content/uploads/2023/10/Microsoft-_-Brands-_-Cover-image.png",
  links: [
         {
          title: "Certificate",
          icon: <ShieldCheck className="h-4 w-4"/>,
          href: "/certificates/Microsoft_AI.jpeg",
        },
  ],
},

{
  title: "Website Development Using PHP",
  dates: "Jul 2023",
  location: "One-way Akshar Technology LLP",
  description: "Developed a movie ticket booking website during internship using PHP with MySQL as the database and Bootstrap for responsive front-end design. Gained hands-on experience in PHP, MySQL, and the Bootstrap framework.",
  image: "https://yt3.googleusercontent.com/ytc/AIdro_l9_ijjt3Hmlppbozg7ucPa1UXVd2IE9fL1lRVorM9l7K4=s900-c-k-c0x00ffffff-no-rj",
  links: [
         {
          title: "Certificate",
          icon: <ShieldCheck className="h-4 w-4"/>,
          href: "/certificates/Oneway_Akshar_PHP.png",
        },
  ],
},

{
  title: "SSIP Hackathon",
  dates: "Oct 2022",
  location: "SSIP - Student Start-up and Innovation Policy",
  description: "Teamup with seniors to build a QR code–based citizen feedback system for Gujarat Police, improving real-time feedback collection.",
  image: "https://ihubgujarat.in/assets/img/nssm/SSIP_LOGo.png",
  links: [
         {
          title: "Certificate",
          icon: <ShieldCheck className="h-4 w-4"/>,
          href: "/certificates/SSIP_2022.png",
        },
  ],
},

{
  title: "Python With Django",
  dates: "Sep 2022",
  location: "BrainyBeam Technologies Pvt. Ltd.",
  description: "Built an e-commerce inventory management system during internship using Python and Django, focusing on backend development and database integration. Gained practical experience in Python programming and the Django framework.",
  image: "https://media.licdn.com/dms/image/v2/C4D0BAQGahJkPfWKn2w/company-logo_200_200/company-logo_200_200/0/1631330235832?e=2147483647&v=beta&t=-EtjPjvbYmDwAu5jHjHmKNQce4A44B7idH6H9sFPiOA",
  links: [
         {
          title: "Certificate",
          icon: <ShieldCheck className="h-4 w-4"/>,
          href: "/certificates/BrainyBeam_Python.png",
        },
  ],
},

  ],
} as const;
