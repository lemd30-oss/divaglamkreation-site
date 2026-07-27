export type Product = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  priceLabel: string;
  buttonLabel: string;
  external: boolean;
  featured?: boolean;
};

export const links = {
  gumroadShop: 'https://lemdo8.gumroad.com/',
  gumroadSubscribe: 'https://lemdo8.gumroad.com/subscribe',
  gentleReset: 'https://lemdo8.gumroad.com/l/dgk-gentle-pause',
  sevenDayReset: 'https://lemdo8.gumroad.com/l/dgk-7-day-reset-journal',
  theGentleResetBook: 'https://www.amazon.com/dp/B0HBN6X699',
  morningReset: 'https://lemdo8.gumroad.com/l/Divaglamkreation',
  contactEmail: 'mailto:divaglamkreation@gmail.com',
  dragonflyKeychain: '/dragonfly-keychain',
  facebook: 'https://www.facebook.com/share/1G9VQrJnaZ/',
} as const;

export const images = {
  resetChallenge: '/images/file_000000006878822f9afa6bda9bae9f6d.png',
  hero: '/images/file_00000000bbfc822fb379f73bd8a3c064.png',
} as const;

export const products: Product[] = [
  {
    title: 'The Gentle Reset — 3-Day Mini Journal',
    description: 'A free three-day faith-centered reset with reflection, prayer, and gratitude prompts for a softer return to yourself.',
    image: '/images/file_000000007a0481f59f22529a564a90af.png',
    imageAlt: 'Open Gentle Reset journal beside a pinecone and neutral stationery',
    href: links.gentleReset,
    priceLabel: 'Free · Digital journal',
    buttonLabel: 'Begin the Free Reset',
    external: true,
  },
  {
    title: '7-Day Gentle Reset Journal',
    description: 'A guided seven-day companion for faith, reflection, planning, and moving forward with calm intention.',
    image: '/images/file_00000000d7fc81f5ab22d6bd2ddeec33.png',
    imageAlt: 'Seven-Day Gentle Reset digital journal cover',
    href: links.sevenDayReset,
    priceLabel: '$7 · Digital journal',
    buttonLabel: 'Start the 7-Day Reset',
    external: true,
    featured: true,
  },
  {
    title: 'Gentle Morning Reset Pack',
    description: 'Soft printable pages created to help you begin the day with faith, calm, clarity, and care.',
    image: '/images/file_00000000340c81f580fa4e9e6704ebf2.png',
    imageAlt: 'Gentle Morning Reset Pack with five printable reflection pages',
    href: links.morningReset,
    priceLabel: '$7 · Digital PDF',
    buttonLabel: 'Explore the Morning Reset',
    external: true,
  },
  {
    title: 'The Gentle Reset — Paperback Journal',
    description: 'A printed seven-day journal for prayer, reflection, gratitude, and gentle renewal—made to revisit whenever you need a pause.',
    image: '/images/the-gentle-reset-book-cover.svg',
    imageAlt: 'The Gentle Reset paperback journal displayed on a cream background',
    href: links.theGentleResetBook,
    priceLabel: '$9.99 · Paperback journal',
    buttonLabel: 'View the Paperback',
    external: true,
    featured: true,
  },
  {
    title: 'Dragonfly Reminder Charm',
    description: 'A giftable symbol of growth, light, and transformation for keys, handbags, planners, or journal pouches.',
    image: 'https://raw.githubusercontent.com/lemd30-oss/divaglamkreation-site/main/dgk-dragonfly-pink-website.jpg',
    imageAlt: 'Pink rhinestone dragonfly reminder charm with gold-tone keyring and clasp',
    href: links.dragonflyKeychain,
    priceLabel: '$9.99 · Physical gift',
    buttonLabel: 'Choose Your Charm',
    external: false,
  },
];

export const blogPosts = [
  {
    title: 'How to Begin a Gentle Reset Routine',
    description: 'A soft place to begin when life feels full and you need a quieter rhythm.',
    href: '/blog/gentle-reset',
  },
  {
    title: "Why You Don't Need to Earn Rest",
    description: 'A faith-rooted reminder that rest is not a reward for finishing everything.',
    href: '/blog/why-you-dont-need-to-earn-rest',
  },
] as const;
