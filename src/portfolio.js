const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'KT.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Taiwo Kehinde',
  role: 'Software Engineer',
  description:
    'I am a highly skilled Software Engineer with over 5 years of experience specializing in both Frontend and Backend Development. With a strong background in building scalable and high-performance applications, I have successfully led and contributed to projects across Fintech, Edtech, and E-commerce industries. My expertise spans modern frameworks and technologies, enabling me to develop intuitive user interfaces and robust backend systems. Passionate about innovation and problem-solving, I thrive in dynamic environments, delivering solutions that enhance user experience and drive business growth.',
  resume: 'https://drive.google.com/file/d/1hLHiQxVJ48DP8wtyRpEOXno1lv_4tokn/view?usp=sharing',
  social: {
    linkedin: 'https://linkedin.com/in/geekcodex/',
    github: 'https://github.com/kayzethegeek',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Tattoo Admin',
    description: 'I led the development team in building a robust system that enables artists to manage their shops online efficiently. I architected the backend framework, ensuring scalability and performance, while also developing key features such as real-time messaging and dynamic form templates for client bookings and shop management. Additionally, I contributed to the frontend, integrating crucial API endpoints to enhance user experience. Through effective leadership and hands-on development, I played a pivotal role in delivering a seamless and intuitive platform tailored to the needs of tattoo professionals.',
    stack: ['Nestjs', 'TypeScript', 'React/Nextjs', 'Prisma ORM','Docker', 'MongoDB'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://tattooadmin.io',
  },
  {
    name: 'Ibile Meds',
    description:
      'I was responsible for translating Figma designs into pixel-perfect, responsive user interfaces, ensuring a seamless shopping experience. I worked closely with the backend team to integrate APIs, enabling smooth product browsing, secure checkout, and real-time order tracking. My focus on performance optimization and user experience helped create an intuitive and visually appealing platform that enhances customer engagement and drives sales.',
    stack: ['Tailwindcss', 'TypeScript', 'React/Nextjs','GraphQL', 'Apollo Client'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://ibilemeds.com',
  },
  {
    name: 'Fibre city',
    description:
      'I was responsible for developing both the frontend and backend of the platform that facilitates the sale and installation of affordable internet data. I built core features that enable customers to search for service availability in their location and customize their internet plans based on their preferences. Additionally, I integrated the system with an external service to fetch real-time network coverage data, ensuring accurate service checks. To enhance business insights, I also integrated a CMS that provides comprehensive analytics on collected user data, allowing for better decision-making and service optimization. My contributions helped streamline the user experience while improving operational efficiency',
    stack: ['SASS', 'TypeScript', 'React/Nextjs','Nodejs',],
    // sourceCode: 'https://github.com',
    livePreview: 'https://www.fibercity.co.nz/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Nextjs',
  'Redux',
  'SASS',
  'Material UI',
  'Node.js',
  'express.js',
  'Nest.js',
  'SQL (PostgreSQL)',
  'NoSQL (MongoDB)',
  'Prisma ORM',
  'TypeORM',
  'Docker',
  'Git',
  'CI/CD',
  'Jest',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'taiwotruth@gmail.com',
}

export { header, about, projects, skills, contact }
