import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Clock,
  MapPin,
  Star,
  FileCheck,
  Award,
  ArrowRight,
  Phone,
  Mail,
  CheckCircle,
} from 'lucide-react';

const WP_API_BASE = 'https://djb-mobile-notary.com/cms/wp-json';

// Helper to normalize relationship values (IDs or objects)
function extractIds(items: any): number[] {
  if (!items) return [];
  if (!Array.isArray(items)) return [];
  return items
    .map((item) => {
      if (typeof item === 'number') return item;
      if (item && typeof item === 'object') {
        return item.id || item.ID || null;
      }
      return null;
    })
    .filter((id) => typeof id === 'number');
}

const iconMap: Record<string, React.ComponentType<any>> = {
  FileCheck,
  Award,
  MapPin,
  Shield,
  Clock,
  Star,
};

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [hero, setHero] = useState<any>(null);
  const [about, setAbout] = useState<any>(null);
  const [services, setServices] = useState<any[]>([]);
  const [servicesHeading, setServicesHeading] = useState<string>('');
  const [servicesIntro, setServicesIntro] = useState<string>('');
  const [benefits, setBenefits] = useState<any[]>([]);
  const [whyHeading, setWhyHeading] = useState<{ line1: string; name: string }>({
    line1: '',
    name: '',
  });
  const [whyIntro, setWhyIntro] = useState<string>('');
  const [faqs, setFaqs] = useState<any[]>([]);
  const [faqMeta, setFaqMeta] = useState<{
    heading: string;
    intro: string;
    ctaLabel: string;
    ctaLink: string;
  }>({ heading: '', intro: '', ctaLabel: '', ctaLink: '/faq' });
  const [contact, setContact] = useState<any>(null);

  useEffect(() => {
    async function loadHome() {
      try {
        setLoading(true);
        setError(null);

        // 1) Fetch Home page with ACF
        const pageRes = await fetch(
          `${WP_API_BASE}/wp/v2/pages?slug=home&acf_format=standard`
        );
        if (!pageRes.ok) {
          throw new Error(`Failed to fetch home page: ${pageRes.status}`);
        }
        const pageJson = await pageRes.json();
        const page = Array.isArray(pageJson) && pageJson.length > 0 ? pageJson[0] : null;
        if (!page) {
          throw new Error('Home page not found');
        }

        const acf = page.acf || {};

        // 2) Extract relationship IDs
        const serviceIds = extractIds(acf.featured_services);
        const benefitIds = extractIds(acf.featured_benefits);
        const faqIds = extractIds(acf.featured_faqs);

        // 3) Fetch CPT content for services/benefits/faqs in parallel
        const [servicesRes, benefitsRes, faqsRes] = await Promise.all([
          serviceIds.length
            ? fetch(
                `${WP_API_BASE}/wp/v2/service?acf_format=standard&include=${serviceIds.join(
                  ','
                )}`
              )
            : Promise.resolve(null),
          benefitIds.length
            ? fetch(
                `${WP_API_BASE}/wp/v2/benefit?acf_format=standard&include=${benefitIds.join(
                  ','
                )}`
              )
            : Promise.resolve(null),
          faqIds.length
            ? fetch(
                `${WP_API_BASE}/wp/v2/faq?acf_format=standard&include=${faqIds.join(',')}`
              )
            : Promise.resolve(null),
        ]);

        const servicePosts = servicesRes ? await servicesRes.json() : [];
        const benefitPosts = benefitsRes ? await benefitsRes.json() : [];
        const faqPosts = faqsRes ? await faqsRes.json() : [];

        // 4) Map hero data
        setHero({
          line1: acf.hero_heading_line_1 || 'Professional',
          line2: acf.hero_heading_line_2 || 'Mobile Notary',
          intro:
            acf.hero_intro_text ||
            "Hi, I'm Daniel J. Bolanos. I provide licensed, bonded, and insured mobile notary services with the personal care and attention your important documents deserve.",
          trust1: acf.hero_trust_1 || 'Licensed & Bonded',
          trust2: acf.hero_trust_2 || 'Evenings & Weekends',
          trust3: acf.hero_trust_3 || 'Personal Service',
          primaryCtaLabel: acf.hero_primary_cta_label || 'Schedule with Daniel',
          primaryCtaHref: acf.hero_primary_cta_link || '/contact',
          secondaryCtaLabel:
            acf.hero_secondary_cta_label || 'Call: (914) 619-8328',
          secondaryCtaHref:
            acf.hero_secondary_cta_link || 'tel:+19146198328',
          heroImageUrl: acf.hero_image?.url || '/daniel-bolanos-notary-profile-photo-bridge copy.webp',
          heroLogoUrl:
            acf.hero_logo_image?.url || '/djb-mobile-notary-logo.png',
        });

        // 5) About preview data
        setAbout({
          headingLine1: acf.about_heading_line_1 || 'Meet Daniel J. Bolanos',
          headingLine2: acf.about_heading_line_2 || 'Your Personal Notary',
          body:
            acf.about_body ||
            "I believe that notarization is more than just stamping documents - it's about providing peace of mind during important moments in your life. With years of experience and a commitment to personal service, I'm here to make your notarization needs as smooth and stress-free as possible.",
          bullet1:
            acf.about_bullet_1 ||
            "Direct communication - you'll always work with me personally",
          bullet2:
            acf.about_bullet_2 ||
            'Flexible scheduling to accommodate your busy life',
          bullet3:
            acf.about_bullet_3 ||
            'Patient, thorough service with attention to detail',
          imageUrl:
            acf.about_image?.url ||
            '/daniel-bolanos-mobile-notary-outdoor-photo.png',
          ctaLabel: acf.about_cta_label || 'Learn More About Daniel',
          ctaLink: acf.about_cta_link || '/about',
        });

        // 6) Services data
        setServicesHeading(acf.services_heading || 'Services I Provide');
        setServicesIntro(
          acf.services_intro ||
            'From real estate closings to personal documents, I handle all your notarization needs with professionalism and care.'
        );
        setServices(
          Array.isArray(servicePosts)
            ? servicePosts.map((s: any) => ({
                id: s.id,
                title: s.title?.rendered || '',
                shortDescription: s.acf?.short_description || '',
                iconName: s.acf?.icon_name || 'FileCheck',
              }))
            : []
        );

        // 7) Why Choose section
        setWhyHeading({
          line1: acf.why_heading_line_1 || 'Why Choose',
          name: acf.why_heading_name || 'Daniel J. Bolanos?',
        });
        setWhyIntro(
          acf.why_intro ||
            "When you work with me, you're not just getting a notary - you're getting a dedicated professional who understands that your documents represent important moments in your life. I take the time to ensure everything is done correctly, answer your questions, and provide the peace of mind you deserve."
        );
        setBenefits(
          Array.isArray(benefitPosts)
            ? benefitPosts.map((b: any) => ({
                id: b.id,
                title: b.title?.rendered || '',
                body: b.acf?.body_text || '',
                iconName: b.acf?.icon_name || 'Shield',
              }))
            : []
        );

        // 8) FAQ section
        setFaqMeta({
          heading: acf.faq_heading || 'Not Sure Where to Start?',
          intro:
            acf.faq_intro ||
            'Here are answers to the most common questions I receive from new clients.',
          ctaLabel: acf.faq_cta_label || 'View All FAQs',
          ctaLink: acf.faq_cta_link || '/faq',
        });
        setFaqs(
          Array.isArray(faqPosts)
            ? faqPosts.map((f: any) => ({
                id: f.id,
                question: f.title?.rendered || '',
                answer: f.acf?.answer || '',
              }))
            : []
        );

        // 9) Contact CTA bits
        setContact({
          heading:
            acf.contact_section_heading || 'Ready to Get Started?',
          intro:
            acf.contact_section_intro ||
            "Contact me today to schedule your notarization appointment. I'm here to make the process as smooth and convenient as possible for you.",
          phoneHeading: acf.contact_phone_heading || 'Call or Text',
          phoneDisplay:
            acf.contact_phone_display || '(914) 619-8328',
          phoneHref:
            acf.contact_phone_tel || 'tel:+19146198328',
          phoneNote:
            acf.contact_phone_note || 'Available during service hours',
          emailHeading: acf.contact_email_heading || 'Email',
          emailDisplay:
            acf.contact_email_display ||
            'contact@djb-mobile-notary.com',
          emailHref:
            acf.contact_email_mailto ||
            'mailto:Djbnotary22@gmail.com',
          emailNote:
            acf.contact_email_note || 'Response within 4 hours',
          availabilityHeading:
            acf.contact_availability_heading || 'Availability',
          availabilityLine1:
            acf.contact_availability_line_1 || 'Weekdays: 5-8 PM',
          availabilityLine2:
            acf.contact_availability_line_2 ||
            'Weekends: 9 AM-8 PM',
          cta1Label:
            acf.contact_cta1_label || 'Call (914) 619-8328',
          cta1Link:
            acf.contact_cta1_link || 'tel:+19146198328',
          cta2Label:
            acf.contact_cta2_label || 'Schedule Online',
          cta2Link: acf.contact_cta2_link || '/contact',
        });

        setLoading(false);
      } catch (err: any) {
        console.error(err);
        setError(err.message || 'Failed to load homepage');
        setLoading(false);
      }
    }

    loadHome();
  }, []);

  if (loading) {
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          Loading homepage...
        </div>
      </section>
    );
  }

  if (error || !hero || !about || !contact) {
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-red-600">
          There was an error loading the homepage content.
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-teal-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {hero.line1}
                <span className="text-teal-800 block">{hero.line2}</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mt-6 leading-relaxed">
                {hero.intro}
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8">
                <div className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700 font-medium">
                    {hero.trust1}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-6 w-6 text-teal-600" />
                  <span className="text-gray-700 font-medium">
                    {hero.trust2}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-6 w-6 text-amber-500" />
                  <span className="text-gray-700 font-medium">
                    {hero.trust3}
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Link
                  to={hero.primaryCtaHref}
                  className="bg-teal-800 hover:bg-teal-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg text-center"
                  aria-label={hero.primaryCtaLabel}
                >
                  {hero.primaryCtaLabel}
                </Link>
                <a
                  href={hero.secondaryCtaHref}
                  className="bg-amber-500 hover:bg-amber-600 text-teal-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105"
                  aria-label={hero.secondaryCtaLabel}
                >
                  {hero.secondaryCtaLabel}
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src={hero.heroImageUrl}
                alt="Daniel J. Bolanos - Professional Mobile Notary"
                className="w-full h-auto object-cover rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
              />

              {/* Logo Badge - No shadow */}
              {hero.heroLogoUrl && (
                <div className="absolute -top-10 -right-10">
                  <img
                    src={hero.heroLogoUrl}
                    alt="Daniel J. Bolanos Mobile Notary Logo"
                    className="h-32 w-32"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About Daniel Section - Flipped layout with taller portrait image, centered viewport */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={about.imageUrl}
                alt="Daniel J. Bolanos providing professional notary services"
                className="w-full max-w-md mx-auto h-auto object-cover rounded-2xl shadow-xl"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {about.headingLine1}
                <span className="text-teal-800 block">
                  {about.headingLine2}
                </span>
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {about.body}
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-800 rounded-full mt-2"></div>
                  <p className="text-gray-700">{about.bullet1}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-800 rounded-full mt-2"></div>
                  <p className="text-gray-700">{about.bullet2}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-800 rounded-full mt-2"></div>
                  <p className="text-gray-700">{about.bullet3}</p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  to={about.ctaLink}
                  className="bg-teal-800 hover:bg-teal-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105"
                  aria-label={about.ctaLabel}
                >
                  {about.ctaLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {servicesHeading}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {servicesIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service) => {
              const Icon =
                iconMap[service.iconName] || FileCheck;

              return (
                <div
                  key={service.id}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Icon className="h-12 w-12 text-teal-800 mb-6" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.shortDescription}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="bg-teal-800 hover:bg-teal-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 inline-flex items-center space-x-2"
              aria-label="View all services"
            >
              <span>View All Services</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Personal Service Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {whyHeading.line1}
                <span className="text-teal-800 block">
                  {whyHeading.name}
                </span>
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {whyIntro}
              </p>

              <div className="space-y-6">
                {benefits.map((benefit) => {
                  const Icon =
                    iconMap[benefit.iconName] || Shield;
                  return (
                    <div
                      key={benefit.id}
                      className="flex items-start space-x-4"
                    >
                      <Icon className="h-8 w-8 text-teal-800 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600">
                          {benefit.body}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <img
                src="/daniel-bolanos-traveling-notary-photo-rome.png"
                alt="Daniel J. Bolanos - Professional Mobile Notary"
                className="w-full max-w-md mx-auto h-auto object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview (unchanged) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What My Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take my word for it. Here's what my clients have to say about the personal, 
              professional service they've received.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "Daniel made our home closing so much easier! He came to our house in the evening after work 
                and patiently explained every document. His personal attention made all the difference."
              </p>
              <div>
                <h4 className="font-bold text-gray-900">Sarah Johnson</h4>
                <p className="text-gray-600 text-sm">Real Estate Closing</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "When my father needed documents notarized while in the hospital, Daniel was incredibly 
                compassionate and professional. Truly grateful for his service."
              </p>
              <div>
                <h4 className="font-bold text-gray-900">Michael Rodriguez</h4>
                <p className="text-gray-600 text-sm">Healthcare Documents</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/testimonials"
              className="bg-teal-800 hover:bg-teal-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 inline-flex items-center space-x-2"
              aria-label="Read more reviews"
            >
              <span>Read More Reviews</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section (now from WordPress) */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {faqMeta.heading}
            </h2>
            <p className="text-xl text-gray-600">
              {faqMeta.intro}
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((item) => (
              <div
                key={item.id}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {item.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to={faqMeta.ctaLink}
              className="bg-teal-800 hover:bg-teal-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
              aria-label="View all frequently asked questions"
            >
              <span>{faqMeta.ctaLabel}</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information (from WordPress) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {contact.heading}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {contact.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-teal-800" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {contact.phoneHeading}
              </h3>
              <a
                href={contact.phoneHref}
                className="text-teal-800 font-semibold text-xl"
              >
                {contact.phoneDisplay}
              </a>
              <p className="text-gray-600 text-sm mt-2">
                {contact.phoneNote}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-teal-800" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {contact.emailHeading}
              </h3>
              <a
                href={contact.emailHref}
                className="text-teal-800 font-semibold"
              >
                {contact.emailDisplay}
              </a>
              <p className="text-gray-600 text-sm mt-2">
                {contact.emailNote}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-teal-800" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {contact.availabilityHeading}
              </h3>
              <p className="text-gray-700">
                {contact.availabilityLine1}
              </p>
              <p className="text-gray-700">
                {contact.availabilityLine2}
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={contact.cta1Link}
                className="bg-amber-500 hover:bg-amber-600 text-teal-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                {contact.cta1Label}
              </a>
              <Link
                to={contact.cta2Link}
                className="bg-teal-800 hover:bg-teal-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                {contact.cta2Label}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
