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
  title: "WonCut Admin Panel | Sports Prediction Platform",
  description: "Make predictions on sports events and win prizes",
  applicationName: "WonCut Admin Panel | Sports Prediction Platform",
  siteName: "WonCut Admin Panel | Sports Prediction Platform",
  ogType: "website",
  locale: "en_US",
  robots: "index, follow",
  defaultPath: "/" as const,
  image: {
    path: "/assets/icons/logoIconSmaallNew.png",
    width: "512",
    height: "512",
    alt: "WonCut Admin Panel — sports predictions and prizes",
    type: "image/svg+xml",
  },
  keywords: [
    "bet",
    "betting",
    "sports betting",
    "predict",
    "prediction",
    "sports predictions",
    "picks",
    "odds",
    "sportsbook",
    "fantasy sports",
    "soccer",
    "football",
    "virtual games",
    "gaming",
    "sports",
    "luck",
    "skill",
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
