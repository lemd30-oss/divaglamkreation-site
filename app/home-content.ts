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
    title: 'The Gentle Reset',
    description: 'A free 3-day guided faith reset journal with reflection pages, prayer space, and gratitude prompts.',
    image: '/images/file_000000007a0481f59f22529a564a90af.png',
    imageAlt: 'Woman journaling with a warm drink in a calm, faith-rooted setting',
    href: links.gentleReset,
    priceLabel: 'Free · Digital PDF',
    buttonLabel: 'Download the Free Reset',
    external: true,
  },
  {
    title: '7-Day Gentle Reset Journal',
    description: 'A soft weekly companion for reflection, faith, planning, and becoming with intention.',
    image: '/images/file_00000000d7fc81f5ab22d6bd2ddeec33.png',
    imageAlt: '7-Day Gentle Reset Journal clarity reflection page',
    href: links.sevenDayReset,
    priceLabel: '$7 · Digital PDF',
    buttonLabel: 'View Journal on Gumroad',
    external: true,
    featured: true,
  },
  {
    title: 'Dragonfly Reminder Charm',
    description: 'A pink or blue rhinestone dragonfly charm with gold-tone hardware — a giftable reminder of growth, light, and gentle transformation.',
    image: '/dgk-dragonfly-pink-website.jpg',
    imageAlt: 'Pink rhinestone dragonfly reminder charm with gold-tone keyring and clasp',
    href: links.dragonflyKeychain,
    priceLabel: '$9.99 · Physical item',
    buttonLabel: 'See Colors & Details',
    external: false,
  },
  {
    title: 'Gentle Morning Reset Pack',
    description: 'Soft morning pages created to help you begin the day with faith, calm, and care.',
    image: '/images/file_00000000340c81f580fa4e9e6704ebf2.png',
    imageAlt: 'Gentle Morning Reset Pack with five printable reflection pages',
    href: links.morningReset,
    priceLabel: '$7 · Digital PDF',
    buttonLabel: 'View Reset Pack on Gumroad',
    external: true,
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
