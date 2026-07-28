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
  themeColor: "#105b48",
  backgroundColor: "#e7f3ec",
  ogType: "website",
  locale: "en_US",
  robots: "index, follow",
  defaultPath: "/" as const,
  image: {
    path: "/assets/logoIcon.png",
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
  icons: {
    favicon: "/favicon.ico",
    favicon16: "/favicon-16x16.png",
    favicon32: "/favicon-32x32.png",
    appleTouch: "/apple-touch-icon.png",
    android192: "/android-chrome-192x192.png",
    android512: "/android-chrome-512x512.png",
  },
  manifestPath: "/manifest.json",
} as const;

export function buildRootMeta() {
  const base = resolveSiteUrl();
  const pageUrl = absoluteUrl(siteMeta.defaultPath);
  const imageUrl = absoluteUrl(siteMeta.image.path);
  const isHttps = base.startsWith("https:");
  const kw = siteMeta.keywords.join(", ");
  const domain = new URL(base).hostname;

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
    { name: "twitter:domain", content: domain },
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
      name: "theme-color",
      content: siteMeta.themeColor,
    },
    {
      name: "color-scheme",
      content: "light dark",
    },
    {
      name: "application-name",
      content: siteMeta.applicationName,
    },
    {
      name: "apple-mobile-web-app-title",
      content: siteMeta.applicationName,
    },
    {
      name: "apple-mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "msapplication-TileColor",
      content: siteMeta.themeColor,
    },
    {
      name: "msapplication-TileImage",
      content: absoluteUrl(siteMeta.icons.android192),
    },
    {
      name: "format-detection",
      content: "telephone=no, email=no, address=no",
    },
    {
      name: "referrer",
      content: "strict-origin-when-cross-origin",
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
      href: siteMeta.icons.favicon,
      type: "image/x-icon",
      sizes: "any",
    },
    {
      rel: "shortcut icon",
      href: siteMeta.icons.favicon,
      type: "image/x-icon",
      sizes: "any",
    },
    {
      rel: "icon",
      href: siteMeta.icons.favicon16,
      type: "image/png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      href: siteMeta.icons.favicon32,
      type: "image/png",
      sizes: "32x32",
    },
    {
      rel: "apple-touch-icon",
      href: siteMeta.icons.appleTouch,
      sizes: "180x180",
    },
    {
      rel: "manifest",
      href: siteMeta.manifestPath,
    },
  ];
}
