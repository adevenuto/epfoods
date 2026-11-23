// Public files live under the deploy base path (e.g. /epfoods/ on GitHub Pages).
export const asset = (file) => `${import.meta.env.BASE_URL}assets/${file}`

export const ADDRESS = {
  street: '6783 N Northwest Hwy',
  cityLine: 'Chicago, IL 60631',
  full: '6783 N Northwest Hwy, Chicago, IL 60631',
}

export const MAPS_URL = 'https://maps.google.com/?q=6783+N+Northwest+Hwy,+Chicago,+IL+60631'
export const MAPS_EMBED_URL =
  'https://maps.google.com/maps?q=6783%20N%20Northwest%20Hwy%2C%20Chicago%2C%20IL%2060631&z=15&output=embed'

export const PHONE = {
  display: '(773) 270-8382',
  href: 'tel:7732708382',
}

// Only the closing time is known so far; full hours haven't been provided.
export const HOURS = 'Closes at 8PM'

// Toast online ordering, e.g. 'https://order.toasttab.com/online/<restaurant-slug>'.
// While null, the Order page shows a placeholder slot. Once set, the Order page
// embeds it in an iframe.
export const TOAST_URL = null

// Set to asset('hero.mp4') once the client supplies the video.
export const HERO_VIDEO = null

export const NAV_LINKS = [
  { to: '/about', label: 'About Us' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
  { to: '/order', label: 'Taqueria Menu' },
]

export const DEPARTMENTS = [
  {
    title: 'Bakery',
    img: asset('bakery.webp'),
    variant: 'bakery',
    cta: 'Explore Our Bakery',
    to: '/about',
    body: 'From our signature apple pie to cookies baked fresh every day, our bakery is all about homemade goodness you can taste.',
  },
  {
    title: 'Produce',
    img: asset('produce.webp'),
    variant: 'produce',
    cta: 'Explore Our Produce',
    to: '/about',
    body: 'From organic favorites to everyday essentials, our produce department delivers freshness you can see and taste.',
  },
  {
    title: 'EP Kitchen and Deli',
    img: asset('kitchen.webp'),
    variant: 'kitchen',
    cta: 'Explore Our Deli and Kitchen',
    to: '/order',
    body: 'From our EP Fresh Kitchen and Taqueria to our full-service deli, we’re serving fresh, made-daily meals ready for your table.',
  },
]

export const AMENITIES = [
  { label: 'Produce', dot: 'var(--leaf)' },
  { label: 'Bakery', dot: 'var(--sun)' },
  { label: 'Taqueria & Kitchen', dot: 'var(--beet)' },
  { label: 'Full-service deli', dot: 'var(--leaf)' },
  { label: 'Coffee & smoothie bar', dot: 'var(--sun)' },
  { label: 'Local Chicago makers', dot: 'var(--beet)' },
]
