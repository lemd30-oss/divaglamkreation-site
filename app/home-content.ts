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
  stepLabel?: string;
  imageFit?: 'contain';
  secondaryAction?: { href: string; buttonLabel: string };
};

export const links = {
  gumroadShop: 'https://lemdo8.gumroad.com/',
  gumroadSubscribe: 'https://divaglamkreation.myflodesk.com',
  gentleReset: 'https://divaglamkreation.myflodesk.com',
  graceNotesDigital: 'https://lemdo8.gumroad.com/l/dgk-7-day-reset-journal',
  theGentleResetBook: 'https://www.amazon.com/dp/B0HBN6X699',
  reflectionsHardcover: 'https://www.amazon.com/dp/B0HK1G42HF',
  morningReset: 'https://lemdo8.gumroad.com/l/Divaglamkreation',
  contactEmail: 'mailto:divaglamkreation@gmail.com',
  dragonflyKeychain: '/dragonfly-keychain',
  facebook: 'https://www.facebook.com/share/1G9VQrJnaZ/',
} as const;

export const images = {
  glowlist: '/images/file_000000006878822f9afa6bda9bae9f6d.png',
  hero: '/images/hero-mug-candle-journal.jpg',
} as const;

export const products: Product[] = [
  {
    title: 'The 3-Day Pause',
    description: 'Free. Three days of short prompts to slow down and begin again.',
    image: '/images/file_000000007a0481f59f22529a564a90af.png',
    imageAlt: 'Open The 3-Day Pause journal beside a pinecone and neutral stationery',
    href: links.gentleReset,
    priceLabel: 'Free · Digital journal',
    buttonLabel: 'Begin The 3-Day Pause',
    external: true,
    stepLabel: 'Step 1 · Free',
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
    stepLabel: 'Anytime',
  },
  {
    title: 'Grace Notes: The Gentle Reset — Digital Edition',
    description: 'Seven guided days to keep the rhythm going. Instant download.',
    image: '/images/products/gentle-reset-digital-mockup.png',
    imageAlt: 'Grace Notes: The Gentle Reset 7-day guided journal shown on a tablet, a digital PDF download',
    href: links.graceNotesDigital,
    priceLabel: '$9 · Digital PDF',
    buttonLabel: 'Get the Digital Journal · $9',
    external: true,
    featured: true,
    stepLabel: 'Step 2 · Go deeper',
    imageFit: 'contain',
  },
  {
    title: 'Reflections',
    description: 'A 144-page hardcover journal with 63 prompts for rest, reset, and renewal, with the Glow Owl beside you through each season.',
    image: '/images/reflections-hardcover-cover.jpg',
    imageAlt: 'Reflections hardcover journal cover with the Glow Owl, Rest · Reset · Renewal',
    href: links.reflectionsHardcover,
    priceLabel: 'Hardcover',
    buttonLabel: 'Choose the Hardcover',
    external: true,
    imageFit: 'contain',
  },
  {
    title: 'Dragonfly Reminder Charm',
    description: 'A giftable symbol of growth, light, and transformation for keys, handbags, planners, or journal pouches.',
    image: 'https://raw.githubusercontent.com/lemd30-oss/divaglamkreation-site/main/dgk-dragonfly-pink-website.jpg',
    imageAlt: 'Pink rhinestone dragonfly reminder charm with gold-tone keyring and clasp',
    href: links.dragonflyKeychain,
    priceLabel: '$9.99 · gift',
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
