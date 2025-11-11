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
    imageUrl: '/app_builder.png',
  },
  {
    title: 'Rabbit Hole Digital',
    description:
      'Reimagined a full music analytics platform with modern UI, responsive layouts, and rebuilt core flows.',
    link: '/development/platform-redesign',
    imageUrl: '/rabbit_hole.png',
  },
];

export const designPageData = [
  {
    title: 'ChippCon',
    description:
      'Created custom merch designs for ChippCon, including logo variations, hoodies, hats, and tote bags inspired by ChippAI’s mascot.',
    link: '/design/chippcon',
    imageUrl: 'design/chippcon.png',
    altText: 'ChippCon Banner Image',
  },
  {
    title: 'PackPalAI',
    description:
      'Designed the logo and website for PackPal AI, an app that helps moving companies generate instant quotes using AI image recognition.',
    link: '/design/packpal',
    imageUrl: 'design/packpal.png',
    altText: 'PackPal AI Banner Image',
  },
  {
    title: 'Malova Designs',
    description:
      'Designed branded apparel, logo, and website for Malova Designs, a small business promoting mental health awareness through clothing.',
    link: '/design/malova',
    imageUrl: '/design/malova_designs.png',
    altText: 'Malova Designs Banner Image',
  },
  {
    title: 'Miscellaneous Branding & Print Design',
    description:
      'A mix of personal work and small-business designs focused on logos, print, and brand visuals.',
    link: '/design/misc',
    imageUrl: '/design/misc.png',
    altText: 'Miscellaneous Branding & Print Design Banner Image',
  },
];

export const developmentProjectData = [
  {
    slug: 'chipp-app-builder',
    title: 'App Builder for ChippAI',
    description:
      'ChippAI is a no-code/low-code platform that lets teams build custom AI chat apps and agents based on company knowledge, documents, and workflows. It enables businesses to embed AI chat experiences, monetize AI apps, and manage privacy and sharing in one place.',
    mainVideoUrl: '/videos/chipp_app_builder_overview.mp4',
    // oldProjectVideo: '/',
    newProjectVideo: '/videos/new_app_builder.mp4',
    oldProjectImage: '/old_chipp_builder.png',
    // newProjectImage: '/',
    issue:
      'The existing App Builder was overly complex and lacked a clear organizational structure. Users constantly asked where to find specific features or settings, revealing major gaps in layout clarity and navigation.',
    projectLink: 'https://app.chipp.ai/applications',
    solution:
      'Led a full redesign of the App Builder, reworking its informational architecture, instituting a cohesive visual system aligned with brand identity, and implementing responsive states and interactive guidance to help new users launch their AI agents faster.',
    challenges: [
      '1. Mapping out and reconciling the many divergent builder flows (agent creation, document ingestion, deployment/sharing) into a unified, master flow while preserving flexibility for power users.',
      '2. Convincing stakeholders (product, engineering, sales) to devote time and development resources to a large-scale redesign of our most strategic surface — balancing feature delivery vs. UX debt reduction.',
      '3. Ensuring the redesign both improved the “time to live” (user launches an app) and supported retention and monetization metrics, so we could clearly quantify its impact and sell the effort internally.',
    ],
    wins: [
      'Successfully shipped the redesigned App Builder as our flagship product surface, with early feedback indicating improved usability, increased clarity of workflows, and stronger brand alignment.',
      'Post-launch we observed measurable uplift in customer-reported satisfaction, stronger retention of builder users, and multiple customers personally thanking me at in-person events for the improved experience.',
    ],
    quote:
      'Leading the redesign of the App Builder was a fantastic challenge — it positioned me at the center of ChippAI’s ambitions, helped me build deep product & UX fluency, and let me directly see how design engineering can drive retention, usability and brand strength.',
  },
  {
    slug: 'platform-redesign',
    title: 'Platform Redesign for Rabbit Hole Digital',
    description:
      'Rabbit Hole Digital was a platform for musicians to track metrics across all social media and content platforms.',
    mainVideoUrl: '/',
    oldProjectVideo: '/videos/old_rabbit_hole_digital.mp4',
    newProjectVideo: '/videos/new_rabbit_hole_digital.mp4',
    oldProjectImage: '/',
    newProjectImage: '/',
    issue:
      'The platform wasn’t responsive across mobile and tablet devices, resulting in an inconsistent user experience and limited accessibility.',
    projectLink: 'https://rabbitholedigital.netlify.app/',
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
    quote:
      'Although the final design wasn’t adopted, I really enjoyed the creative challenge. I love exploring how platforms can evolve through unique data visualizations, cohesive brand integration, and adaptable screen layouts. It was a rewarding and fun process overall!',
  },
];
