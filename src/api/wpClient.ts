// src/api/wpClient.ts
const WP_API_BASE = 'https://djb-mobile-notary.com/cms/wp-json';

// -----------------------------
// Helper: Sort items by ACF order
// -----------------------------
export function sortByIdOrder<T extends { id: number }>(items: T[], ids: number[]): T[] {
  if (!Array.isArray(items) || !Array.isArray(ids)) return items || [];

  // Create a map for the desired ID ordering
  const orderMap = new Map<number, number>(
    ids.map((id, index) => [id, index])
  );

  // Sort items based on ACF ID order
  return [...items].sort((a, b) => {
    const aIndex = orderMap.get(a.id) ?? Number.MAX_SAFE_INTEGER;
    const bIndex = orderMap.get(b.id) ?? Number.MAX_SAFE_INTEGER;
    return aIndex - bIndex;
  });
}

// -----------------------------
// Type Definitions
// -----------------------------
export type WpPage = {
  id: number;
  slug: string;
  title: { rendered: string };
  acf: any;
  yoast_head_json?: any;
};

export type WpService = {
  id: number;
  title: { rendered: string };
  acf: {
    short_description: string;
    icon_name: string;
  };
};

export type WpBenefit = {
  id: number;
  title: { rendered: string };
  acf: {
    icon_name: string;
    body_text: string;
  };
};

export type WpFaq = {
  id: number;
  title: { rendered: string };
  acf: {
    answer: string;
  };
};

// -----------------------------
// Fetch Home Page
// -----------------------------
export async function fetchHomePage(): Promise<WpPage> {
  const res = await fetch(
    `${WP_API_BASE}/wp/v2/pages?slug=home&acf_format=standard`
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch home page: ${res.status}`);
  }

  const data = await res.json();

  if (!Array.isArray(data) || data.length === 0) {
    throw new Error('Home page not found');
  }

  return data[0];
}

// -----------------------------
// Fetch CPT Items
// -----------------------------
export async function fetchServicesByIds(ids: number[]): Promise<WpService[]> {
  if (!ids || ids.length === 0) return [];
  const res = await fetch(
    `${WP_API_BASE}/wp/v2/service?acf_format=standard&include=${ids.join(',')}`
  );
  if (!res.ok) throw new Error('Failed to fetch services');
  return res.json();
}

export async function fetchBenefitsByIds(ids: number[]): Promise<WpBenefit[]> {
  if (!ids || ids.length === 0) return [];
  const res = await fetch(
    `${WP_API_BASE}/wp/v2/benefit?acf_format=standard&include=${ids.join(',')}`
  );
  if (!res.ok) throw new Error('Failed to fetch benefits');
  return res.json();
}

export async function fetchFaqsByIds(ids: number[]): Promise<WpFaq[]> {
  if (!ids || ids.length === 0) return [];
  const res = await fetch(
    `${WP_API_BASE}/wp/v2/faq?acf_format=standard&include=${ids.join(',')}`
  );
  if (!res.ok) throw new Error('Failed to fetch FAQs');
  return res.json();
}
