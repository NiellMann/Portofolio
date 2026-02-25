const BASE = "/Portofolio";

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: `${BASE}/images/ideas.svg` },
  { text: "Concepts", imgPath: `${BASE}/images/concepts.svg` },
  { text: "Designs", imgPath: `${BASE}/images/designs.svg` },
  { text: "Code", imgPath: `${BASE}/images/code.svg` },
  { text: "Ideas", imgPath: `${BASE}/images/ideas.svg` },
  { text: "Concepts", imgPath: `${BASE}/images/concepts.svg` },
  { text: "Designs", imgPath: `${BASE}/images/designs.svg` },
  { text: "Code", imgPath: `${BASE}/images/code.svg` },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 5, suffix: "+", label: "Satisfied Clients" },
  { value: 3, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: `${BASE}/images/logos/company-logo-1.png`,
  },
  {
    imgPath: `${BASE}/images/logos/company-logo-2.png`,
  },
  {
    imgPath: `${BASE}/images/logos/company-logo-3.png`,
  },
  {
    imgPath: `${BASE}/images/logos/company-logo-4.png`,
  },
  {
    imgPath: `${BASE}/images/logos/company-logo-5.png`,
  },
  {
    imgPath: `${BASE}/images/logos/company-logo-6.png`,
  },
  {
    imgPath: `${BASE}/images/logos/company-logo-7.png`,
  },
  {
    imgPath: `${BASE}/images/logos/company-logo-8.png`,
  },
  {
    imgPath: `${BASE}/images/logos/company-logo-9.png`,
  },
  {
    imgPath: `${BASE}/images/logos/company-logo-10.png`,
  },
  {
    imgPath: `${BASE}/images/logos/company-logo-11.png`,
  },
];

const abilities = [
  {
    imgPath: `${BASE}/images/seo.png`,
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: `${BASE}/images/chat.png`,
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: `${BASE}/images/time.png`,
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "Go Developer",
    imgPath: `${BASE}/images/logos/react.png`,
  },
  {
    name: "Python Developer",
    imgPath: `${BASE}/images/logos/python.svg`,
  },
  {
    name: "JavaScript Developer",
    imgPath: `${BASE}/images/logos/node.png`,
  },
  {
    name: "PostgreSQL",
    imgPath: `${BASE}/images/logos/three.png`,
  },
  {
    name: "Docker",
    imgPath: `${BASE}/images/logos/git.svg`,
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: `${BASE}/models/react_logo-transformed.glb`,
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: `${BASE}/models/python-transformed.glb`,
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: `${BASE}/models/node-transformed.glb`,
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: `${BASE}/models/three.js-transformed.glb`,
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: `${BASE}/models/git-svg-transformed.glb`,
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Daniel has been an invaluable backend developer, building scalable microservices and robust APIs. His expertise in Go and Python has significantly improved our system performance.",
    imgPath: `${BASE}/images/exp1.png`,
    logoPath: `${BASE}/images/logo1.png`,
    title: "Backend Developer",
    date: "August 2023 - Present",
    responsibilities: [
      "Developed and maintained backend services using Go and Python.",
      "Built scalable RESTful APIs and microservices architecture.",
      "Implemented CI/CD pipelines and containerized applications with Docker.",
      "Worked with PostgreSQL, MongoDB, and Redis for data management.",
    ],
  },
  {
    review: "Daniel delivered high-quality full-stack solutions for various clients. His ability to handle both frontend and backend tasks made him a valuable asset.",
    imgPath: `${BASE}/images/exp2.png`,
    logoPath: `${BASE}/images/logo2.png`,
    title: "Full Stack Developer",
    date: "January 2022 - August 2023",
    responsibilities: [
      "Built web applications using JavaScript, Python, and various frameworks.",
      "Designed and managed databases with PostgreSQL and MongoDB.",
      "Deployed applications to AWS and GCP cloud platforms.",
      "Collaborated with clients to deliver tailored solutions.",
    ],
  },
  {
    review: "Daniel demonstrated strong web development skills during his internship, quickly learning new technologies and contributing to team projects.",
    imgPath: `${BASE}/images/exp3.png`,
    logoPath: `${BASE}/images/logo3.png`,
    title: "Web Developer Intern",
    date: "November 2021 - January 2022",
    responsibilities: [
      "Assisted in building responsive web pages and features.",
      "Learned modern web development technologies.",
      "Participated in code reviews and team meetings.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: `${BASE}/images/logo1.png`,
  },
  {
    name: "logo2",
    imgPath: `${BASE}/images/logo2.png`,
  },
  {
    name: "logo3",
    imgPath: `${BASE}/images/logo3.png`,
  },
];

const testimonials = [
  {
    name: "Comparative Analysis of ICT and Digital Literacy in Libraries",
    mentions: "Jurnal Documentation & Information",
    review:
      "Published research on the comparative analysis of Information and Communication Technology (ICT) use and digital literacy in libraries, focusing on academic libraries in Jakarta.",
    imgPath: `${BASE}/images/client1.png`,
  },
  {
    name: "Knowledge Management & Digital Literacy in University Libraries",
    mentions: "Jurnal Documentation & Information",
    review:
      "Research on knowledge management and digital literacy in university libraries, exploring strategies for effective knowledge sharing and digital literacy development.",
    imgPath: `${BASE}/images/client3.png`,
  },
  {
    name: "Sistem Informasi Manajemen Koki (HKI)",
    mentions: "Hak Kekayaan Intelektual",
    review:
      "Creator of 'Sistem Informasi Manajemen Koki' - a Chef Management Information System registered with Indonesian Intellectual Property (HKI) with certificate number: 000348687.",
    imgPath: `${BASE}/images/client2.png`,
  },
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can't say enough good things about Daniel. He was able to take our complex project requirements and turn into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: `${BASE}/images/client1.png`,
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Daniel was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: `${BASE}/images/client3.png`,
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Daniel was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project.",
    imgPath: `${BASE}/images/client2.png`,
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: `${BASE}/images/insta.png`,
  },
  {
    name: "fb",
    imgPath: `${BASE}/images/fb.png`,
  },
  {
    name: "x",
    imgPath: `${BASE}/images/x.png`,
  },
  {
    name: "linkedin",
    imgPath: `${BASE}/images/linkedin.png`,
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
