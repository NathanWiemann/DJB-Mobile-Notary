// src/hooks/useHomeData.ts
import { useEffect, useState } from 'react';
import {
  fetchHomePage,
  fetchServicesByIds,
  fetchBenefitsByIds,
  fetchFaqsByIds,
} from '../api/wpClient';

type HeroData = {
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

type ServiceCard = {
  id: number;
  title: string;
  shortDescription: string;
  iconName: string;
};

type BenefitItem = {
  id: number;
  title: string;
  body: string;
  iconName: string;
};

type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

type ContactCta = {
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

export function useHomeData() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hero, setHero] = useState<HeroData | null>(null);
  const [services, setServices] = useState<ServiceCard[]>([]);
  const [benefits, setBenefits] = useState<BenefitItem[]>([]);
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [contact, setContact] = useState<ContactCta | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);

        const home = await fetchHomePage();
        const acf = home.acf || {};

        // Relationship fields from ACF (assuming they return array of IDs)
        const serviceIds: number[] = acf.featured_services || [];
        const benefitIds: number[] = acf.featured_benefits || [];
        const faqIds: number[] = acf.featured_faqs || [];

        const [servicePosts, benefitPosts, faqPosts] = await Promise.all([
          fetchServicesByIds(serviceIds),
          fetchBenefitsByIds(benefitIds),
          fetchFaqsByIds(faqIds),
        ]);

        setHero({
          line1: acf.hero_heading_line_1 || '',
          line2: acf.hero_heading_line_2 || '',
          intro: acf.hero_intro_text || acf.hero_intro || '',
          trust1: acf.hero_trust_1 || '',
          trust2: acf.hero_trust_2 || '',
          trust3: acf.hero_trust_3 || '',
          primaryCtaLabel: acf.hero_primary_cta_label || 'Schedule with Daniel',
          primaryCtaHref: acf.hero_primary_cta_link || '/contact',
          secondaryCtaLabel:
            acf.hero_secondary_cta_label || 'Call: (914) 619-8328',
          secondaryCtaHref:
            acf.hero_secondary_cta_link || 'tel:+19146198328',
          heroImageUrl: acf.hero_image?.url || null,
          heroLogoUrl: acf.hero_logo_image?.url || null,
        });

        setServices(
          servicePosts.map((s) => ({
            id: s.id,
            title: s.title.rendered,
            shortDescription: s.acf.short_description || '',
            iconName: s.acf.icon_name || 'FileCheck',
          }))
        );

        setBenefits(
          benefitPosts.map((b) => ({
            id: b.id,
            title: b.title.rendered,
            body: b.acf.body_text || '',
            iconName: b.acf.icon_name || 'Shield',
          }))
        );

        setFaqs(
          faqPosts.map((f) => ({
            id: f.id,
            question: f.title.rendered,
            answer: f.acf.answer || '',
          }))
        );

        setContact({
          heading: acf.contact_section_heading || 'Ready to Get Started?',
          intro: acf.contact_section_intro || '',
          phoneLabel: acf.contact_phone_heading || 'Call or Text',
          phoneDisplay: acf.contact_phone_display || '(914) 619-8328',
          phoneHref: acf.contact_phone_tel || 'tel:+19146198328',
          phoneNote: acf.contact_phone_note || 'Available during service hours',
          emailHeading: acf.contact_email_heading || 'Email',
          emailDisplay:
            acf.contact_email_display || 'contact@djb-mobile-notary.com',
          emailHref:
            acf.contact_email_mailto || 'mailto:Djbnotary22@gmail.com',
          emailNote: acf.contact_email_note || 'Response within 4 hours',
          availabilityHeading:
            acf.contact_availability_heading || 'Availability',
          availabilityLine1:
            acf.contact_availability_line_1 || 'Weekdays: 5-8 PM',
          availabilityLine2:
            acf.contact_availability_line_2 || 'Weekends: 9 AM-8 PM',
          btn1Label: acf.contact_cta1_label || 'Call (914) 619-8328',
          btn1Href: acf.contact_cta1_link || 'tel:+19146198328',
          btn2Label: acf.contact_cta2_label || 'Schedule Online',
          btn2Href: acf.contact_cta2_link || '/contact',
        });

        setLoading(false);
      } catch (err: any) {
        console.error(err);
        setError(err.message || 'Failed to load homepage');
        setLoading(false);
      }
    }

    load();
  }, []);

  return { loading, error, hero, services, benefits, faqs, contact };
}
