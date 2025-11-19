// src/hooks/useHomeData.ts
import { useEffect, useState } from 'react';
import {
  fetchHomePage,
  fetchServicesByIds,
  fetchBenefitsByIds,
  fetchFaqsByIds,
  type WpService,
  type WpBenefit,
  type WpFaq,
} from '../api/wpClient';

// ---------------- Frontend shapes used by Home.tsx ----------------

export type HeroData = {
  line1: string;
  line2: string;
  intro: string;
  trust1: string;
  trust2: string;
  trust3: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  heroImageUrl: string | null;
  heroLogoUrl: string | null;
};

export type AboutData = {
  headingLine1: string;
  headingLine2: string;
  body: string;
  point1: string;
  point2: string;
  point3: string;
  imageUrl: string | null;
  ctaLabel: string;
  ctaHref: string;
};

export type ServiceCard = {
  id: number;
  title: string;
  shortDescription: string;
  iconName: string;
};

export type BenefitItem = {
  id: number;
  title: string;
  body: string;
  iconName: string;
};

export type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

export type ContactCta = {
  heading: string;
  intro: string;
  phoneLabel: string;
  phoneDisplay: string;
  phoneHref: string;
  phoneNote: string;
  emailHeading: string;
  emailDisplay: string;
  emailHref: string;
  emailNote: string;
  availabilityHeading: string;
  availabilityLine1: string;
  availabilityLine2: string;
  btn1Label: string;
  btn1Href: string;
  btn2Label: string;
  btn2Href: string;
};

// ---------------- Helpers for relationship ordering ----------------

// Handle both "Post ID" and "Post Object" return formats safely
function extractIdsFromRelation(
  rel: number[] | { ID: number }[] | undefined
): number[] {
  if (!rel || !Array.isArray(rel) || rel.length === 0) return [];

  const first = rel[0] as any;

  // ACF "Return Format: Post ID"
  if (typeof first === 'number') {
    return rel as number[];
  }

  // ACF "Return Format: Post Object"
  return (rel as { ID: number }[]).map((item) => item.ID);
}

// Given an array of posts and an array of IDs in desired order,
// return a new array of posts sorted to match the ID order.
function orderByIds<T extends { id: number }>(items: T[], ids: number[]): T[] {
  const map = new Map<number, T>(items.map((i) => [i.id, i]));
  return ids
    .map((id) => map.get(id))
    .filter((i): i is T => Boolean(i));
}

// ---------------- The actual hook ----------------

export function useHomeData() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [hero, setHero] = useState<HeroData | null>(null);
  const [about, setAbout] = useState<AboutData | null>(null);
  const [services, setServices] = useState<ServiceCard[]>([]);
  const [benefits, setBenefits] = useState<BenefitItem[]>([]);
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [contact, setContact] = useState<ContactCta | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        // 1) Fetch the Home page with ACF + Yoast, etc.
        const page = await fetchHomePage();
        const acf = page.acf || {};

        // 2) Extract relationship IDs from ACF
        const serviceIds: number[] = extractIdsFromRelation(acf.featured_services);
        const benefitIds: number[] = extractIdsFromRelation(acf.featured_benefits);
        const faqIds: number[] = extractIdsFromRelation(acf.featured_faqs);

        // 3) Fetch related CPT content in parallel
        const [servicePosts, benefitPosts, faqPosts] = await Promise.all([
          fetchServicesByIds(serviceIds),
          fetchBenefitsByIds(benefitIds),
          fetchFaqsByIds(faqIds),
        ]);

        // 4) Re-order the posts to match the ACF relationship order
        const orderedServicePosts: WpService[] = orderByIds<WpService>(
          servicePosts,
          serviceIds
        );
        const orderedBenefitPosts: WpBenefit[] = orderByIds<WpBenefit>(
          benefitPosts,
          benefitIds
        );
        const orderedFaqPosts: WpFaq[] = orderByIds<WpFaq>(
          faqPosts,
          faqIds
        );

        // 5) Map hero data
        const heroData: HeroData = {
          line1: acf.hero_heading_line_1 || 'Professional',
          line2: acf.hero_heading_line_2 || 'Mobile Notary',
          intro:
            acf.hero_intro_text ||
            acf.hero_intro ||
            "Hi, I'm Daniel J. Bolanos. I provide reliable mobile notary services throughout Berks County, PA.",
          trust1: acf.hero_trust_1 || 'Licensed & Bonded',
          trust2: acf.hero_trust_2 || 'Evenings & Weekends',
          trust3: acf.hero_trust_3 || 'Personal Service',
          primaryCtaLabel:
            acf.hero_primary_cta_label || 'Schedule with Daniel',
          primaryCtaHref: acf.hero_primary_cta_link || '/contact',
          secondaryCtaLabel:
            acf.hero_secondary_cta_label || 'Call: (914) 619-8328',
          secondaryCtaHref:
            acf.hero_secondary_cta_link || 'tel:+19146198328',
          heroImageUrl: acf.hero_image?.url || null,
          heroLogoUrl: acf.hero_logo_image?.url || null,
        };

        // 6) About section
        const aboutData: AboutData = {
          headingLine1: acf.about_heading_line_1 || 'Meet Daniel J. Bolanos',
          headingLine2: acf.about_heading_line_2 || 'Your Personal Notary',
          body: acf.about_body || '',
          point1:
            acf.about_point_1 ||
            "Direct communication – you'll always work with me personally.",
          point2:
            acf.about_point_2 ||
            'Flexible scheduling to fit your busy life.',
          point3:
            acf.about_point_3 ||
            'Patient, thorough service for every signing.',
          imageUrl: acf.about_image?.url || null,
          ctaLabel: acf.about_cta_label || 'Learn More About Daniel',
          ctaHref: acf.about_cta_link || '/about',
        };

        // 7) Services (ordered)
        const servicesData: ServiceCard[] = orderedServicePosts.map((s) => ({
          id: s.id,
          title: s.title.rendered,
          shortDescription: s.acf.short_description || '',
          iconName: s.acf.icon_name || 'FileCheck',
        }));

        // 8) Benefits (ordered)
        const benefitsData: BenefitItem[] = orderedBenefitPosts.map((b) => ({
          id: b.id,
          title: b.title.rendered,
          body: b.acf.body_text || '',
          iconName: b.acf.icon_name || 'Shield',
        }));

        // 9) FAQs (ordered)
        const faqsData: FaqItem[] = orderedFaqPosts.map((f) => ({
          id: f.id,
          question: f.title.rendered,
          answer: f.acf.answer || '',
        }));

        // 10) Contact CTA
        const contactData: ContactCta = {
          heading:
            acf.contact_section_heading || 'Ready to Get Started?',
          intro: acf.contact_section_intro || '',
          phoneLabel: acf.contact_phone_heading || 'Call or Text',
          phoneDisplay:
            acf.contact_phone_display || '(914) 619-8328',
          phoneHref: acf.contact_phone_tel || 'tel:+19146198328',
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
            acf.contact_availability_line_1 || 'Weekdays: 5–8 PM',
          availabilityLine2:
            acf.contact_availability_line_2 || 'Weekends: 9 AM–8 PM',
          btn1Label:
            acf.contact_cta1_label || 'Call (914) 619-8328',
          btn1Href:
            acf.contact_cta1_link || 'tel:+19146198328',
          btn2Label: acf.contact_cta2_label || 'Schedule Online',
          btn2Href: acf.contact_cta2_link || '/contact',
        };

        if (!cancelled) {
          setHero(heroData);
          setAbout(aboutData);
          setServices(servicesData);
          setBenefits(benefitsData);
          setFaqs(faqsData);
          setContact(contactData);
          setLoading(false);
        }
      } catch (err: any) {
        console.error(err);
        if (!cancelled) {
          setError(err.message || 'Failed to load homepage');
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  return {
    loading,
    error,
    hero,
    about,
    services,
    benefits,
    faqs,
    contact,
  };
}
