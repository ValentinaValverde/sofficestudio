export const sidebarBlockData = [
  {
    title: 'Development',
    description:
      'We craft sleek landing pages and complex SaaS systems that work beautifully and perform seamlessly.',
    link: '/development',
  },
  {
    title: 'Design',
    description:
      'Visual design that tells your story, from brand identity and web design to merch, prints, and everything in between.',
    link: '/design',
  },
];

export const developmentPageData = [
  {
    title: 'ChippAI',
    description:
      'Redesigned Chipp’s core builder into a cleaner, more intuitive space built for speed and clarity.', // or usability
    link: '/development/chipp-app-builder',
    imageUrl: '/app-builder.png',
  },
  // {
  //   title: 'ChippAI HQ',
  //   description:
  //     'Built a highlight of the Chipp platform, a home for creators to share or sell their best work.',
  //   link: '/development/chipp-hq',
  //   imageUrl: '/hq.png',
  // },
  {
    title: 'Rabbit Hole Digital',
    description:
      'Reimagined a full music analytics platform with modern UI, responsive layouts, and rebuilt core flows.',
    link: '/development/platform-redesign',
    imageUrl:
      'https://i.pinimg.com/736x/06/4c/f6/064cf60bdff38c7be9ac9c39bd3213c2.jpg',
  },
];

export const designPageData = [
  {
    title: 'Business Cards',
    link: '/development',
    imageUrl:
      'https://i.pinimg.com/1200x/30/07/b6/3007b69fdc5776e75cc7b0dec1672ec1.jpg',
    altText: '',
  },
  {
    title: 'Custom Apparel',
    link: '/development',
    imageUrl:
      'https://i.pinimg.com/736x/06/4c/f6/064cf60bdff38c7be9ac9c39bd3213c2.jpg',
    altText: '',
  },
  {
    title: 'Brand Refresh',
    link: '/development',
    imageUrl:
      'https://i.pinimg.com/736x/06/4c/f6/064cf60bdff38c7be9ac9c39bd3213c2.jpg',
    altText: '',
  },
  {
    title: 'Logo Design',
    link: '/development',
    imageUrl:
      'https://i.pinimg.com/1200x/30/07/b6/3007b69fdc5776e75cc7b0dec1672ec1.jpg',
    altText: '',
  },
];

export const developmentProjectData = [
  {
    slug: 'chipp-app-builder',
    title: 'App Builder for ChippAI',
    description:
      'This is the main interface that ChippAI users used to build their custom AI chatbots.',
    issue: 'It wasnt easy enough',
    solution: 'Redeisng the builder with responsivity and ease of use in mind',
    quote: 'Wow! Its so dang easy!',
    videoUrl: '/',
    content: [
      { imgUrl: '/', altText: 'alt text', subtitle: '' },
      { imgUrl: '/', altText: 'alt text', subtitle: '' },
      { imgUrl: '/', altText: 'alt text', subtitle: '' },
    ],
  },
  // {
  //   slug: 'chipp-hq',
  //   title: 'HQ for ChippAI',
  //   description: '',
  //   issue: '',
  //   solution: '',
  //   quote: '',
  //   videoUrl: '/',
  //   content: [
  //     { imgUrl: '/', altText: 'alt text', subtitle: '' },
  //     { imgUrl: '/', altText: 'alt text', subtitle: '' },
  //     { imgUrl: '/', altText: 'alt text', subtitle: '' },
  //   ],
  // },
  {
    slug: 'platform-redesign',
    title: 'Platform Redesign for Rabbit Hole Digital',
    description:
      'Rabbit Hole Digital was a platform for musicians to track metrics across all social media and content platforms.',
    videoUrl: '/',
    issue:
      'The platform wasn’t responsive across mobile and tablet devices, resulting in an inconsistent user experience and limited accessibility.',
    solution:
      'Redesign the platform to be fully responsive, incorporating brand colors, accessibility best practices, and a cohesive visual hierarchy across all screen sizes.',
    challenges: [
      '1. Determining the most effective ways to visualize data and deciding which formats (pie charts, bar graphs, etc.) best communicated different types of information.',
      '2. Encouraging the team to invest time in a complete refactor. As a young startup, balancing priorities and development time was a key challenge.',
      '3. Presenting and pitching the final redesign to stakeholders in a clear and compelling way.',
    ],
    wins: [
      'Successfully designed and implemented a responsive platform that reflected the brand’s identity while prioritizing user experience and accessibility. The final prototype showcased a clear improvement in usability and visual consistency across devices.',
    ],
    content: [
      { imgUrl: '/', altText: 'alt text', subtitle: '' },
      { imgUrl: '/', altText: 'alt text', subtitle: '' },
      { imgUrl: '/', altText: 'alt text', subtitle: '' },
    ],
    quote:
      'Although the final design wasn’t adopted, I really enjoyed the creative challenge. I love exploring how platforms can evolve through unique data visualizations, cohesive brand integration, and adaptable screen layouts. It was a rewarding and fun process overall!',
  },
];
