export type Product = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  priceLabel: string;
  buttonLabel: string;
  external: boolean;
  comingSoon?: boolean;
  featured?: boolean;
  stepLabel?: string;
  imageFit?: 'contain';
  secondaryAction?: { href: string; buttonLabel: string };
};

export const links = {
  gumroadShop: 'https://lemdo8.gumroad.com/',
  gumroadSubscribe: 'https://divaglamkreation.myflodesk.com',
  gentleReset: 'https://lemdo8.gumroad.com/l/dgk-gentle-pause',
  graceNotesDigital: 'https://lemdo8.gumroad.com/l/dgk-7-day-reset-journal',
  theGentleResetBook: 'https://a.co/d/02fnmfkg',
  reflectionsHardcover: 'https://www.lulu.com/shop/divaglam-kreation/reflections-rest-reset-renewal/hardcover/product-2mgzme5.html',
  morningReset: 'https://lemdo8.gumroad.com/l/Divaglamkreation',
  contactEmail: 'mailto:divaglamkreation@gmail.com',
  dragonflyKeychain: '/dragonfly-keychain',
  facebook: 'https://www.facebook.com/share/1G9VQrJnaZ/',
  instagram: 'https://www.instagram.com/divaglamkreation/',
  pinterest: 'https://www.pinterest.com/Lemd3012/',
} as const;

export const images = {
  glowlist: '/images/file_000000006878822f9afa6bda9bae9f6d.png',
  hero: '/images/hero-mug-candle-journal.jpg',
} as const;

export const products: Product[] = [
  {
    title: 'The 3-Day Pause',
    description: 'Free. Three days of faith-rooted reflection prompts to pause, pray, and begin again.',
    image: '/images/file_000000007a0481f59f22529a564a90af.png',
    imageAlt: 'Open 3-Day Mini Reset Journal beside a pinecone and neutral stationery',
    href: links.gentleReset,
    priceLabel: 'Free · Digital journal',
    buttonLabel: 'Get The 3-Day Pause — Free',
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
    title: 'The Gentle Reset',
    description: 'Seven guided days to keep the rhythm going as an instant digital PDF download for quiet reflection, prayer, and renewal. Rooted in the same gentle reminder that began with my owl story: you mattered before anyone was looking. Choose the digital edition to begin journaling right away, or the printed edition if you prefer writing by hand in a physical book.',
    image: '/images/the-gentle-reset-book-cover.svg',
    imageAlt: 'The Gentle Reset 7-day guided journal cover',
    href: links.graceNotesDigital,
    priceLabel: '$7 · Digital PDF',
    buttonLabel: 'Get the Digital Journal · $7',
    external: true,
    featured: true,
    stepLabel: 'Step 2 · Go deeper',
    imageFit: 'contain',
    secondaryAction: { href: links.theGentleResetBook, buttonLabel: 'Buy Printed Journal on Amazon · $9.99' },
  },
  {
    title: 'Reflections',
    description: 'A 144-page hardcover journal with 63 prompts for rest, reset, and renewal, with the Glow Owl beside you through each season.',
    image: '/images/reflections-hardcover-cover.jpg',
    imageAlt: 'Reflections hardcover journal cover with the Glow Owl, Rest · Reset · Renewal',
    href: links.reflectionsHardcover,
    priceLabel: '$42 · Hardcover',
    buttonLabel: 'Get the Hardcover · $42',
    external: true,
    imageFit: 'contain',
  },
  {
    title: 'Dragonfly Reminder Charm',
    description: 'A giftable symbol of growth, light, and transformation for keys, handbags, planners, or journal pouches.',
    image: '/images/dgk-dragonfly-pink-website.jpg',
    imageAlt: 'Pink rhinestone dragonfly reminder charm with gold-tone keyring and clasp',
    href: links.dragonflyKeychain,
    priceLabel: '$9.99 · gift',
    buttonLabel: 'Choose Your Charm',
    external: false,
  },
];

export const blogPosts = [
  {
    title: 'I Built This Website Myself — And It Took Me Two Years',
    description: 'A personal Behind the Glow story about learning by doing, building slowly, and growing alongside DivaglamKreation.',
    href: '/blog/i-built-my-website-myself',
  },
  {
    title: "When You've Lost Your Rhythm: A Gentle Sunday Reset",
    description: 'A faith-rooted pause for women who feel tired and want to find their rhythm again, gently.',
    href: '/blog/gentle-reset',
  },
  {
    title: "Why You Don't Need to Earn Rest",
    description: 'A faith-rooted reminder that rest is not a reward for finishing everything.',
    href: '/blog/why-you-dont-need-to-earn-rest',
  },
] as const;
