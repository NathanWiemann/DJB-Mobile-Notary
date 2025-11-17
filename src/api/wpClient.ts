// src/api/wpClient.ts
const WP_API_BASE = 'https://djb-mobile-notary.com/cms/wp-json';

type WpPage = {
  id: number;
  slug: string;
  title: { rendered: string };
  acf: any; // we'll narrow this later
};

type WpService = {
  id: number;
  title: { rendered: string };
  acf: {
    short_description: string;
    icon_name: string;
    is_featured?: boolean;
  };
};

type WpBenefit = {
  id: number;
  title: { rendered: string };
  acf: {
    icon_name: string;
    body_text: string;
  };
};

type WpFaq = {
  id: number;
  title: { rendered: string };
  acf: {
    answer: string;
  };
};

// Fetch the Home page with all ACF fields
export async function fetchHomePage(): Promise<WpPage> {
  const res = await fetch(
    `${WP_API_BASE}/wp/v2/pages?slug=home&acf_format=standard`
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch home page: ${res.status}`);
  }

  const json = await res.json();
  if (!Array.isArray(json) || json.length === 0) {
    throw new Error('Home page not found');
  }

  return json[0];
}

// Fetch multiple Service posts by ID
export async function fetchServicesByIds(ids: number[]): Promise<WpService[]> {
  if (!ids || ids.length === 0) return [];
  const res = await fetch(
    `${WP_API_BASE}/wp/v2/service?acf_format=standard&include=${ids.join(',')}`
  );
  if (!res.ok) throw new Error('Failed to fetch services');
  return res.json();
}

// Same idea for Benefits
export async function fetchBenefitsByIds(ids: number[]): Promise<WpBenefit[]> {
  if (!ids || ids.length === 0) return [];
  const res = await fetch(
    `${WP_API_BASE}/wp/v2/benefit?acf_format=standard&include=${ids.join(',')}`
  );
  if (!res.ok) throw new Error('Failed to fetch benefits');
  return res.json();
}

// And FAQs
export async function fetchFaqsByIds(ids: number[]): Promise<WpFaq[]> {
  if (!ids || ids.length === 0) return [];
  const res = await fetch(
    `${WP_API_BASE}/wp/v2/faq?acf_format=standard&include=${ids.join(',')}`
  );
  if (!res.ok) throw new Error('Failed to fetch FAQs');
  return res.json();
}
