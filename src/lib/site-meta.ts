const DEFAULT_DEV_ORIGIN = "http://localhost:3000";

/** Public site origin for canonical URLs and OG/Twitter absolute URLs. */
export function resolveSiteUrl(): string {
  const raw = import.meta.env.VITE_SITE_URL;
  if (typeof raw === "string" && raw.trim()) {
    return raw.trim().replace(/\/$/, "");
  }
  return DEFAULT_DEV_ORIGIN;
}

export function absoluteUrl(path: string): string {
  const base = resolveSiteUrl();
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

export const siteMeta = {
  title:
    "Expert Listing | Verified Property Listings for Sale & Rent in Nigeria",
  description:
    "Find verified houses, apartments, lands, and commercial properties for sale or rent across Lagos and Nigeria. Direct access to property owners, developers, and verified agents.",
  applicationName: "Expert Listing",
  siteName: "Expert Listing",
  ogType: "website",
  locale: "en_US",
  robots: "index, follow",
  defaultPath: "/" as const,
  image: {
    path: "/assets/icons/logoIcon.png",
    width: "512",
    height: "512",
    alt: "Expert Listing — Verified Real Estate & Property Listings in Nigeria",
    type: "image/png",
  },
  keywords: [
    "real estate",
    "real estate Nigeria",
    "property for sale",
    "property for rent",
    "apartments in Lagos",
    "houses for sale Lagos",
    "shortlet Lagos",
    "proptech Nigeria",
    "verified property listings",
    "lands for sale",
    "real estate developers Nigeria",
    "commercial property",
    "Expert Listing",
  ],
} as const;

export function buildRootMeta() {
  const base = resolveSiteUrl();
  const pageUrl = absoluteUrl(siteMeta.defaultPath);
  const imageUrl = absoluteUrl(siteMeta.image.path);
  const isHttps = base.startsWith("https:");
  const kw = siteMeta.keywords.join(", ");

  const openGraph = [
    { property: "og:title", content: siteMeta.title },
    { property: "og:description", content: siteMeta.description },
    { property: "og:url", content: pageUrl },
    { property: "og:type", content: siteMeta.ogType },
    { property: "og:site_name", content: siteMeta.siteName },
    { property: "og:locale", content: siteMeta.locale },
    { property: "og:image", content: imageUrl },
    { property: "og:image:url", content: imageUrl },
    { property: "og:image:width", content: siteMeta.image.width },
    { property: "og:image:height", content: siteMeta.image.height },
    { property: "og:image:alt", content: siteMeta.image.alt },
    { property: "og:image:type", content: siteMeta.image.type },
  ];

  if (isHttps) {
    openGraph.push({
      property: "og:image:secure_url",
      content: imageUrl,
    });
  }

  const twitter = [
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: siteMeta.title },
    { name: "twitter:description", content: siteMeta.description },
    { name: "twitter:image", content: imageUrl },
    { name: "twitter:image:alt", content: siteMeta.image.alt },
  ];

  return [
    { charSet: "utf-8" },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    { title: siteMeta.title },
    { name: "description", content: siteMeta.description },
    { name: "keywords", content: kw },
    { name: "robots", content: siteMeta.robots },
    {
      name: "application-name",
      content: siteMeta.applicationName,
    },
    ...openGraph,
    ...twitter,
  ];
}

export function buildRootSeoLinks(): Array<{
  rel: string;
  href: string;
  type?: string;
  sizes?: string;
}> {
  return [
    {
      rel: "canonical",
      href: absoluteUrl(siteMeta.defaultPath),
    },
    {
      rel: "icon",
      href: siteMeta.image.path,
      type: siteMeta.image.type,
    },
    {
      rel: "manifest",
      href: "/manifest.json",
    },
  ];
}
