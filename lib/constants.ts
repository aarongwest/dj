// Business Information
export const BUSINESS_INFO = {
  name: "DJ Isaac V Entertainment",
  tagline: "Los Angeles & Orange County's Premier 5-Star DJ Service",
  phone: "(562) 254-6180",
  email: "mail@djisaacv.com",
  website: "https://www.djisaacv.com",
  address: {
    street: "11302 Orr and Day Rd.",
    city: "Norwalk",
    state: "CA",
    zip: "90650",
    country: "US",
  },
  social: {
    instagram: "https://www.instagram.com/dj_isaac_v/",
    youtube: "https://www.youtube.com/@djisaacventertainment4381",
    facebook: "https://facebook.com/djisaacv",
  },
  hours: "Available by Appointment",
  yearsExperience: 26,
  reviewCount: 127,
  rating: 5.0,
  eventsCompleted: 500,
};

// Services
export const SERVICES = [
  {
    id: "wedding-dj",
    title: "Wedding DJ Services",
    slug: "wedding-dj",
    icon: "💍",
    shortDescription: "Make your special day unforgettable with professional DJ services",
    description: "Professional wedding DJ and MC services for your special day. We provide ceremony and reception music, elegant lighting, and seamless coordination.",
    features: [
      "Ceremony & Reception Music",
      "Professional MC Services",
      "Elegant Uplighting",
      "Wireless Microphones",
      "Customized Playlist",
      "Backup Equipment",
    ],
    price: "Starting at $1,200",
    image: "/images/services/wedding.jpg",
  },
  {
    id: "quinceanera-dj",
    title: "Quincenera/ Debutante Birthday DJ Services",
    slug: "quinceanera-dj",
    icon: "👑",
    shortDescription: "Celebrate this milestone with professional entertainment",
    description: "Professional DJ services specializing in Sweet 16 and 15th birthday celebrations. We understand the traditions and provide the perfect mix of music for all generations.",
    features: [
      "Professional MC Services",
      "Timeline Formalities",
      "Digital Photo Booth & More....",
    ],
    price: "Starting at $1,000",
    image: "/images/services/quinceanera.jpg",
  },
  {
    id: "corporate-events",
    title: "Corporate Event DJ",
    slug: "corporate-events",
    icon: "🏢",
    shortDescription: "Professional entertainment for your business events",
    description: "Sophisticated DJ services for corporate events, holiday parties, and business celebrations. Professional, reliable, and appropriate for any corporate setting.",
    features: [
      "Professional Presentation",
      "Appropriate Music Selection",
      "Wireless Microphones",
      "Announcements & Coordination",
      "Flexible Setup",
      "Liability Insurance",
    ],
    price: "Starting at $800",
    image: "/images/services/corporate.jpg",
  },
  {
    id: "birthday-parties",
    title: "Birthday Party DJ",
    slug: "birthday-parties",
    icon: "🎉",
    shortDescription: "Fun and energetic entertainment for all ages",
    description: "High-energy DJ services for birthday parties of all ages. From kids' parties to milestone celebrations, we bring the fun!",
    features: [
      "Age-Appropriate Music",
      "MC Announcements",
      "Digital Photo Booth & More....",
    ],
    price: "Starting at $600",
    image: "/images/services/birthday.jpg",
  },
  {
    id: "photo-booth",
    title: "Photo Booth Rental",
    slug: "photo-booth",
    icon: "📸",
    shortDescription: "Digital photo booth with instant sharing and prints",
    description: "Revolutionary digital photo booth with instant sharing, GIF creation, and professional prints. Perfect addition to any event!",
    features: [
      "Digital & Print Options",
      "Instant Social Sharing",
      "GIF & Video Modes",
      "Custom Backdrops",
      "Props Included",
      "Unlimited Sessions",
    ],
    price: "Starting at $400",
    image: "/images/services/photobooth.jpg",
  },
  {
    id: "photography",
    title: "Event Photography",
    slug: "photography",
    icon: "📷",
    shortDescription: "Professional photography to capture your special moments",
    description: "Professional event photography services to capture every special moment. High-quality images delivered digitally within 48 hours.",
    features: [
      "Professional Photographer",
      "High-Resolution Images",
      "Digital Delivery",
      "Edited Photos",
      "Unlimited Shots",
      "Quick Turnaround",
    ],
    price: "Starting at $500",
    image: "/images/services/photography.jpg",
  },
  {
    id: "memorial-services",
    title: "Memorial & Celebration of Life Services",
    slug: "memorial-services",
    icon: "🕊️",
    shortDescription: "Life deserves to be honored with dignity, intention, and heart",
    description: "In addition to weddings, corporate events, and private celebrations, DJ Isaac V Entertainment offers Memorial and Celebration of Life services designed to respectfully honor loved ones while celebrating the moments that made them unforgettable. These services are thoughtfully curated to create a meaningful atmosphere—whether intimate and reflective or warm and uplifting—through carefully selected music, professional sound support, and seamless coordination. From entrance music and spoken tributes to closing moments of remembrance, every detail is handled with care, sensitivity, and professionalism. This is more than event support—it's about creating space for remembrance, connection, and healing.",
    features: [
      "Customized music selection reflecting your loved one's life and legacy",
      "Professional sound system for speeches, readings, and tributes",
      "Microphone support for family and guests",
      "Discreet setup, coordination, and on-site support",
      "Calm, respectful presence from start to finish",
    ],
    price: "Contact for pricing",
    image: "/images/services/memorial.jpg",
  },
];

// Service Areas
export const SERVICE_AREAS = [
  {
    name: "Los Angeles",
    slug: "los-angeles",
    description: "Serving all of Los Angeles County including Downtown LA, Hollywood, West LA, and surrounding areas.",
    cities: ["Los Angeles", "Hollywood", "West Hollywood", "Pasadena", "Glendale", "Burbank"],
  },
  {
    name: "Orange County",
    slug: "orange-county",
    description: "Professional DJ services throughout Orange County including Anaheim, Irvine, Newport Beach, and more.",
    cities: ["Anaheim", "Irvine", "Newport Beach", "Huntington Beach", "Santa Ana", "Costa Mesa"],
  },
  {
    name: "Beverly Hills",
    slug: "beverly-hills",
    description: "Luxury event DJ services in Beverly Hills and surrounding upscale communities.",
    cities: ["Beverly Hills", "West Hollywood", "Bel Air", "Brentwood"],
  },
  {
    name: "Newport Beach",
    slug: "newport-beach",
    description: "Elegant DJ services for Newport Beach weddings and events.",
    cities: ["Newport Beach", "Corona del Mar", "Balboa Island"],
  },
  {
    name: "Santa Monica",
    slug: "santa-monica",
    description: "Beach-side event entertainment in Santa Monica and the Westside.",
    cities: ["Santa Monica", "Venice", "Marina del Rey", "Playa del Rey"],
  },
  {
    name: "Long Beach",
    slug: "long-beach",
    description: "Professional DJ services in Long Beach and surrounding communities.",
    cities: ["Long Beach", "Signal Hill", "Lakewood", "Cerritos"],
  },
  {
    name: "Irvine",
    slug: "irvine",
    description: "Corporate and private event DJ services in Irvine.",
    cities: ["Irvine", "Tustin", "Lake Forest", "Mission Viejo"],
  },
  {
    name: "Anaheim",
    slug: "anaheim",
    description: "Event entertainment near Disneyland and throughout Anaheim.",
    cities: ["Anaheim", "Fullerton", "Placentia", "Orange"],
  },
];

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Rodriguez",
    event: "Wedding",
    rating: 5,
    date: "August 2024",
    text: "DJ Isaac was amazing! He kept the dance floor packed all night and played exactly what we wanted. Our guests are still talking about how great the music was. Highly recommend!",
    platform: "Thumbtack",
  },
  {
    id: 2,
    name: "Jessica F.",
    event: "Graduation Party",
    rating: 5,
    date: "July 2024",
    text: "From the very beginning, he was responsive, answered all of my questions and his price was fair. He showed up early to set up. He was very professional, eager to please, fun and had a great playlist.",
    platform: "Thumbtack",
  },
  {
    id: 3,
    name: "Joseph L.",
    event: "Wedding",
    rating: 5,
    date: "May 2024",
    text: "I can't begin to explain how great DJ Isaac V was for our wedding. He was very thoughtful in his planning and collaboration with us prior to our wedding. Highly recommended!",
    platform: "Thumbtack",
  },
  {
    id: 4,
    name: "Helen Valles Caraveo",
    event: "Block Party",
    rating: 5,
    date: "November 2024",
    text: "Amazing! Wow, absolutely the best experience with a DJ ever! Professional and played all the best music with a variety of genres. Great lighting and set up. Thank you DJ Isaac!",
    platform: "Google",
  },
  {
    id: 5,
    name: "Elda",
    event: "Wedding",
    rating: 5,
    date: "September 2024",
    text: "It was really nice working with DJ Isaac, he did an amazing job at my wedding. He is very professional and had everyone dancing on the dance floor. His Photo Booth is awesome!",
    platform: "Bark",
  },
  {
    id: 6,
    name: "Grant H.",
    event: "Wedding Reception",
    rating: 5,
    date: "June 2024",
    text: "DJ Isaac made our wedding reception! He was easy to work with and helped set the vibe of the night! When we wanted the reception to extend another hour, he happily continued.",
    platform: "Thumbtack",
  },
];

// FAQ
export const FAQ_ITEMS = [
  {
    question: "What areas do you serve?",
    answer: "We serve Los Angeles County, Orange County, San Bernardino, Riverside, and Ventura Counties. We're based in Los Angeles and regularly service events throughout Southern California.",
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking 6-12 months in advance for weddings, especially for peak season (May-October). For other events, 2-3 months notice is ideal, but we can often accommodate last-minute bookings.",
  },
  {
    question: "Do you provide services for weddings?",
    answer: "Yes! Wedding DJ services are our specialty. We provide ceremony and reception music, MC services, elegant lighting, wireless microphones, and complete coordination for your special day.",
  },
  {
    question: "What's included in your DJ packages?",
    answer: "All packages include professional DJ/MC services, premium sound system, wireless microphones, basic lighting, music consultation, and customized playlist. We also offer add-ons like uplighting, photo booth, and photography.",
  },
  {
    question: "Do you offer photo booth rental?",
    answer: "Yes! We offer a revolutionary digital photo booth with instant sharing, GIF creation, custom backdrops, props, and unlimited sessions. It's a perfect addition to any event!",
  },
  {
    question: "Do you play Latin music?",
    answer: "Yes! We play all genres including Latin music, making us perfect for Sweet 16, 15th birthday celebrations, Latin weddings, and multicultural events.",
  },
  {
    question: "Do you have backup equipment?",
    answer: "Absolutely! We always bring backup equipment to every event including spare speakers, microphones, and laptop. Your event will go on without interruption.",
  },
  {
    question: "What music genres do you play?",
    answer: "We play all genres! From Top 40, Hip-Hop, R&B, Latin, Country, Rock, 80s, 90s, EDM, to Oldies. We customize the playlist based on your preferences and read the crowd to keep everyone dancing.",
  },
  {
    question: "Do you provide lighting?",
    answer: "Yes! Basic dance floor lighting is included with all packages. We also offer elegant uplighting packages to transform your venue with customizable colors.",
  },
  {
    question: "What's your cancellation policy?",
    answer: "We require a deposit to secure your date. If you need to cancel, deposits are non-refundable but can be applied to a future date within one year. Please contact us to discuss your specific situation.",
  },
];

// Why Choose Us
export const WHY_CHOOSE_US = [
  {
    icon: "🎵",
    title: "26 Years Experience",
    description: "Over two decades of professional DJ experience serving Southern California",
  },
  {
    icon: "⭐",
    title: "127+ Five-Star Reviews",
    description: "Consistently rated 5 stars across Google, Thumbtack, and Bark",
  },
  {
    icon: "🎧",
    title: "Professional Equipment",
    description: "Premium sound systems, lighting, and backup equipment at every event",
  },
  {
    icon: "🎼",
    title: "Customized Playlists",
    description: "Personalized music selection tailored to your event and preferences",
  },
  {
    icon: "🌎",
    title: "Multicultural Events",
    description: "Professional MC services for diverse and multicultural events",
  },
  {
    icon: "✅",
    title: "Licensed & Insured",
    description: "Fully licensed and insured for your peace of mind",
  },
  {
    icon: "💡",
    title: "Elegant Lighting",
    description: "Transform your venue with professional uplighting and dance floor effects",
  },
  {
    icon: "💯",
    title: "100% Satisfaction Guarantee",
    description: "We're not happy unless you're thrilled with our service",
  },
];

// Pricing Tiers
export const PRICING_TIERS = [
  {
    name: "Essential",
    price: "$600",
    description: "Perfect for smaller events and parties",
    features: [
      "4 Hours of DJ Service",
      "Professional Sound System",
      "Basic Dance Floor Lighting",
      "Music Consultation",
      "Customized Playlist",
      "Wireless Microphone",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "$1,200",
    description: "Our most popular package for weddings",
    features: [
      "6 Hours of DJ Service",
      "Premium Sound System",
      "Elegant Uplighting (8 lights)",
      "Dance Floor Lighting",
      "Professional MC Services",
      "Ceremony Sound (if needed)",
      "2 Wireless Microphones",
      "Music Consultation",
      "Customized Playlist",
      "Backup Equipment",
    ],
    popular: true,
  },
  {
    name: "Ultimate",
    price: "$2,000",
    description: "Complete entertainment package",
    features: [
      "8 Hours of DJ Service",
      "Premium Sound System",
      "Elegant Uplighting (12 lights)",
      "Dance Floor Lighting",
      "Professional MC Services",
      "Ceremony Sound",
      "Digital Photo Booth (4 hours)",
      "Event Photography (4 hours)",
      "3 Wireless Microphones",
      "Music Consultation",
      "Customized Playlist",
      "Backup Equipment",
      "Online Planning Portal",
    ],
    popular: false,
  },
];

// Navigation Links
export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Locations", href: "/locations" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Reviews", href: "/reviews" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

// Stats
export const STATS = [
  { label: "Years Experience", value: "26+", icon: "🎵" },
  { label: "Five-Star Reviews", value: "127+", icon: "⭐" },
  { label: "Events Completed", value: "500+", icon: "🎉" },
  { label: "Satisfaction Rate", value: "100%", icon: "💯" },
];
