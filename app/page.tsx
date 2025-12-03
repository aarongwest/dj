import { BUSINESS_INFO, SERVICES, STATS, WHY_CHOOSE_US, TESTIMONIALS, FAQ_ITEMS, PRICING_TIERS } from "@/lib/constants";
import { formatPhoneForTel } from "@/lib/utils";
import { Phone, Mail, MapPin, Star, Check, ExternalLink } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { generateFAQSchema, generateReviewSchema } from "@/lib/schema";
import Image from "next/image";

export default function Home() {
  const faqSchema = generateFAQSchema(FAQ_ITEMS);
  const reviewSchema = generateReviewSchema();

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Review Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      {/* Navigation */}
      <nav className="sticky top-0 w-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center">
              <Image src="/dj-isaac-v.png" alt="DJ Isaac V" width={98} height={98} className="rounded invert dark:invert-0" />
            </a>
            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition">Services</a>
              <a href="#about" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition">About</a>
              <a href="#reviews" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition">Reviews</a>
              <a href="#pricing" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition">Pricing</a>
              <a href="#contact" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition">Contact</a>
            </div>
            <div className="flex items-center gap-3">
              <a 
                href="https://www.youtube.com/@djisaacventertainment4381" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden sm:flex items-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="http://instagram.com/dj_isaac_v/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden sm:flex items-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <ThemeToggle />
              <a href={`tel:${formatPhoneForTel(BUSINESS_INFO.phone)}`} className="hidden sm:flex items-center text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition">
                <Phone className="w-4 h-4 mr-1.5" />
                {BUSINESS_INFO.phone}
              </a>
              <a href="#contact" className="bg-transparent text-zinc-900 dark:text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition border-2 border-zinc-200 dark:border-zinc-800">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="mb-6">
                <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                  <span className="w-2 h-2 rounded-full bg-accent-lime"></span>
                  <span className="font-medium">DJ Isaac V</span>
                </div>
                <Image 
                  src="/isaacv_profile.jpg" 
                  alt="DJ Isaac V" 
                  width={80} 
                  height={80} 
                  className="rounded-lg grayscale"
                />
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight bg-gradient-to-r from-accent-orange via-accent-lime to-accent-pink bg-clip-text text-transparent animate-gradient">
                {BUSINESS_INFO.tagline}
              </h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                {BUSINESS_INFO.yearsExperience} years of experience | {BUSINESS_INFO.reviewCount}+ five-star reviews | Professional DJ, photo booth & photography services
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#contact" className="inline-flex items-center justify-center bg-transparent text-zinc-900 dark:text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition border-2 border-accent-pink">
                  Get Your Free Quote
                </a>
                <a href={`tel:${formatPhoneForTel(BUSINESS_INFO.phone)}`} className="inline-flex items-center justify-center bg-transparent text-zinc-900 dark:text-white px-6 py-3 rounded-lg text-sm font-medium border-2 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition">
                  <Phone className="w-4 h-4 mr-2" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            <div className="flex flex-col">
              {/* Google Reviews Cards */}
              <div className="space-y-3 mt-[88px]">
                {/* Review Card 1 */}
                <div className="bg-white dark:bg-zinc-900 rounded-lg p-3 border border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-amber-500 dark:text-accent-yellow fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-zinc-900 dark:text-white">5.0</span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 italic">"DJ Isaac was amazing! He kept the dance floor packed all night long. Professional setup and great energy!"</p>
                </div>

                {/* Review Card 2 */}
                <div className="bg-white dark:bg-zinc-900 rounded-lg p-3 border border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-amber-500 dark:text-accent-yellow fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-zinc-900 dark:text-white">5.0</span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 italic">"Professional, responsive, and played exactly what we wanted. Made our wedding absolutely perfect!"</p>
                </div>

                {/* Review Card 3 */}
                <div className="bg-white dark:bg-zinc-900 rounded-lg p-3 border border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-amber-500 dark:text-accent-yellow fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-zinc-900 dark:text-white">5.0</span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 italic">"Best DJ experience ever! Highly recommend for any event. Worth every penny!"</p>
                </div>
              </div>

              {/* See All Reviews Link */}
              <a 
                href="https://maps.app.goo.gl/DcQWg74aNYnZnBoi8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 block text-center text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white font-medium transition"
              >
                See all Google reviews →
              </a>

              {/* Event Type Pills */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs font-medium bg-transparent border border-dashed border-accent-pink text-accent-pink rounded">Weddings</span>
                <span className="px-3 py-1 text-xs font-medium bg-transparent border border-dashed border-purple-700 dark:border-accent-lime text-purple-700 dark:text-accent-lime rounded">Sweet 16</span>
                <span className="px-3 py-1 text-xs font-medium bg-transparent border border-dashed border-accent-orange text-accent-orange rounded">Anniversaries</span>
                <span className="px-3 py-1 text-xs font-medium bg-transparent border border-dashed border-accent-pink text-accent-pink rounded">Corporate Events</span>
                <span className="px-3 py-1 text-xs font-medium bg-transparent border border-dashed border-purple-700 dark:border-accent-lime text-purple-700 dark:text-accent-lime rounded">Birthday Parties</span>
                <span className="px-3 py-1 text-xs font-medium bg-transparent border border-dashed border-accent-orange text-accent-orange rounded">Graduations</span>
                <span className="px-3 py-1 text-xs font-medium bg-transparent border border-dashed border-accent-pink text-accent-pink rounded">School Dances</span>
                <span className="px-3 py-1 text-xs font-medium bg-transparent border border-dashed border-purple-700 dark:border-accent-lime text-purple-700 dark:text-accent-lime rounded">Private Parties</span>
                <span className="px-3 py-1 text-xs font-medium bg-transparent border border-dashed border-accent-orange text-accent-orange rounded">Holiday Events</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-zinc-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Our Services</h2>
            <p className="text-zinc-600 dark:text-zinc-400">Professional entertainment for every occasion</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white dark:bg-zinc-900 rounded-lg border-2 border-zinc-200 dark:border-zinc-800 p-6 transition">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">{service.shortDescription}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-zinc-700 dark:text-zinc-300">
                      <Check className="w-4 h-4 text-zinc-600 dark:text-zinc-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="block text-center bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-700 transition border border-zinc-200 dark:border-zinc-700">
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="border-y border-zinc-200 dark:border-zinc-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-center justify-center gap-6">
            <Image 
              src="/isaacv_profile.jpg" 
              alt="DJ Isaac V" 
              width={120} 
              height={120} 
              className="rounded-lg grayscale"
            />
            <div className="text-center">
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Why Choose DJ Isaac V?</h2>
              <p className="text-zinc-600 dark:text-zinc-400">Experience, professionalism, and guaranteed satisfaction</p>
            </div>
          </div>
          
          <div className="mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              {WHY_CHOOSE_US.map((item, index) => (
                <div key={index}>
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Video Section */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 text-center">See DJ Isaac V in Action</h3>
            <a 
              href="https://posts.gle/Rqzw4KrnWYXTa87S6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-white dark:bg-zinc-900 rounded-lg border-2 border-zinc-200 dark:border-zinc-800 p-8 text-center hover:border-purple-700 dark:hover:border-accent-lime transition group"
            >
              <div className="mb-4">
                <svg className="w-16 h-16 mx-auto text-zinc-400 dark:text-zinc-600 group-hover:text-purple-700 dark:group-hover:text-accent-lime transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Watch DJ Isaac V's Latest Performance</h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">Click to view the video on Google</p>
              <span className="inline-flex items-center text-sm font-medium text-purple-700 dark:text-accent-lime group-hover:underline">
                Watch Video
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">What Our Clients Say</h2>
            <p className="text-zinc-600 dark:text-zinc-400">{BUSINESS_INFO.reviewCount}+ five-star reviews</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="bg-white dark:bg-zinc-900 rounded-lg border-2 border-zinc-200 dark:border-zinc-800 p-6 transition">
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 dark:text-accent-yellow fill-current" />
                  ))}
                </div>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="border-t border-zinc-100 dark:border-zinc-800 pt-4">
                  <p className="text-sm font-semibold text-zinc-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-500">{testimonial.event} • {testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-y border-zinc-200 dark:border-zinc-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Pricing Packages</h2>
            <p className="text-zinc-600 dark:text-zinc-400">Flexible packages to fit your budget</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PRICING_TIERS.map((tier, index) => (
              <div key={index} className={`rounded-lg border-2 p-6 ${tier.popular ? 'border-accent-pink bg-zinc-50 dark:bg-zinc-900' : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950'} transition`}>
                {tier.popular && (
                  <div className="mb-4">
                    <span className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-3 py-1 rounded-full text-xs font-semibold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">{tier.name}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">{tier.description}</p>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-zinc-700 dark:text-zinc-300">
                      <Check className="w-4 h-4 text-zinc-600 dark:text-zinc-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`block text-center px-4 py-2 rounded-lg text-sm font-medium transition ${tier.popular ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100' : 'bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700'}`}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Frequently Asked Questions</h2>
            <p className="text-zinc-600 dark:text-zinc-400">Everything you need to know</p>
          </div>
          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-zinc-900 rounded-lg border-2 border-zinc-200 dark:border-zinc-800 p-6 transition">
                <h3 className="text-base font-semibold text-zinc-900 dark:text-white mb-2">{faq.question}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="bg-white dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Ready to Book Your Event?</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">Get your free quote today and let's make your event unforgettable!</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <a href={`tel:${formatPhoneForTel(BUSINESS_INFO.phone)}`} className="inline-flex items-center justify-center bg-transparent text-zinc-900 dark:text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition border-2 border-purple-700 dark:border-accent-lime">
              <Phone className="w-4 h-4 mr-2" />
              {BUSINESS_INFO.phone}
            </a>
            <a href={`mailto:${BUSINESS_INFO.email}`} className="inline-flex items-center justify-center bg-transparent text-zinc-900 dark:text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition border-2 border-accent-pink">
              <Mail className="w-4 h-4 mr-2" />
              Email Us
            </a>
          </div>
          <div className="flex items-center justify-center text-sm text-zinc-600 dark:text-zinc-400">
            <MapPin className="w-4 h-4 mr-1.5" />
            <span>Serving Los Angeles, Orange County & Surrounding Areas</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <Image src="/dj-isaac-v.png" alt="DJ Isaac V" width={400} height={400} className="rounded-lg invert dark:invert-0" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">DJ Isaac V Entertainment</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">{BUSINESS_INFO.tagline}</p>
              <div className="flex gap-4">
                <a href={BUSINESS_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition">
                  Instagram
                </a>
                <a href={BUSINESS_INFO.social.youtube} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition">
                  YouTube
                </a>
                <a href={BUSINESS_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition">
                  Facebook
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-zinc-900 dark:text-white mb-3">Services</h4>
              <ul className="space-y-2">
                {SERVICES.map((service) => (
                  <li key={service.id}>
                    <a href="#services" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition">{service.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-zinc-900 dark:text-white mb-3">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-zinc-600 dark:text-zinc-400">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href={`tel:${formatPhoneForTel(BUSINESS_INFO.phone)}`} className="hover:text-zinc-900 dark:hover:text-white transition">
                    {BUSINESS_INFO.phone}
                  </a>
                </li>
                <li className="flex items-center text-sm text-zinc-600 dark:text-zinc-400">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-zinc-900 dark:hover:text-white transition">
                    {BUSINESS_INFO.email}
                  </a>
                </li>
                <li className="flex items-start text-sm text-zinc-600 dark:text-zinc-400">
                  <MapPin className="w-4 h-4 mr-2 mt-0.5" />
                  <span>Los Angeles & Orange County, CA</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8 text-center">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
            <p className="mt-1 text-xs text-zinc-500">Professional DJ Services | Weddings | Sweet 16 | Corporate Events | Photo Booth Rental</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
