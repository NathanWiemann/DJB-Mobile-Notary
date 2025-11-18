// src/api/wpClient.ts
const WP_API_BASE = 'https://djb-mobile-notary.com/cms/wp-json';

type WpPage = {
  id: number;
  slug: string;
  title: { rendered: string };
  acf: any; // can be narrowed later per page if you want
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

// -------------------------------------------------------------
// Helper: keep ACF relationship order (featured_services, etc.)
// -------------------------------------------------------------
function sortByIdOrder<T extends { id: number }>(items: T[], ids: number[]): T[] {
  const orderMap = new Map<number, number>(
    ids.map((id, index) => [id, index])
  );

  return [...items].sort((a, b) => {
    const aIndex = orderMap.get(a.id) ?? Number.MAX_SAFE_INTEGER;
    const bIndex = orderMap.get(b.id) ?? Number.MAX_SAFE_INTEGER;
    return aIndex - bIndex;
  });
}

// -------------------------------------------------------------
// Fetch the Home page with all ACF fields
// -------------------------------------------------------------
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

  // json[0] is the page with slug "home"
  return json[0] as WpPage;
}

// -------------------------------------------------------------
// Fetch multiple Service posts by ID
// -------------------------------------------------------------
export async function fetchServicesByIds(ids: number[]): Promise<WpService[]> {
  if (!ids || ids.length === 0) return [];

  const res = await fetch(
    `${WP_API_BASE}/wp/v2/service?acf_format=standard&include=${ids.join(',')}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch services');
  }

  const data: WpService[] = await res.json();
  // Ensure the order matches the ACF relationship field order
  return sortByIdOrder<WpService>(data, ids);
}

// -------------------------------------------------------------
// Fetch multiple Benefit posts by ID
// -------------------------------------------------------------
export async function fetchBenefitsByIds(ids: number[]): Promise<WpBenefit[]> {
  if (!ids || ids.length === 0) return [];

  const res = await fetch(
    `${WP_API_BASE}/wp/v2/benefit?acf_format=standard&include=${ids.join(',')}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch benefits');
  }

  const data: WpBenefit[] = await res.json();
  return sortByIdOrder<WpBenefit>(data, ids);
}

// -------------------------------------------------------------
// Fetch multiple FAQ posts by ID
// -------------------------------------------------------------
export async function fetchFaqsByIds(ids: number[]): Promise<WpFaq[]> {
  if (!ids || ids.length === 0) return [];

  const res = await fetch(
    `${WP_API_BASE}/wp/v2/faq?acf_format=standard&include=${ids.join(',')}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch FAQs');
  }

  const data: WpFaq[] = await res.json();
  return sortByIdOrder<WpFaq>(data, ids);
}
