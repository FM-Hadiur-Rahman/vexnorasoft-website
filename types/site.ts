export type Lang = "en" | "de";

export type NavContent = {
  services: string;
  work: string;
  pricing: string;
  testimonials: string;
  contact: string;
  cta: string;
};

export type HeroContent = {
  badge: string;
  title1: string;
  title2: string;
  title3: string;
  desc: string;
  primary: string;
  secondary: string;
  chips: string[];
};

export type FeatureItem = [string, string];

export type FeatureContent = {
  eyebrow: string;
  title: string;
  live: string;
  items: FeatureItem[];
};

export type ServiceItem = {
  title: string;
  desc: string;
};

export type WorkItem = {
  name: string;
  type: string;
  summary: string;
  image?: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  subtitle: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
};

export type ContactLabels = {
  email: string;
  website: string;
  location: string;
  name: string;
  emailInput: string;
  company: string;
  service: string;
  message: string;
  submit: string;
  success: string;
  sending: string;
};

export type SiteContent = {
  nav: NavContent;
  hero: HeroContent;
  feature: FeatureContent;
  trust: [string, string][];
  services: {
    eyebrow: string;
    title: string;
    desc: string;
    items: ServiceItem[];
  };
  work: {
    eyebrow: string;
    title: string;
    desc: string;
    items: WorkItem[];
    ready: string;
  };
  pricing: {
    eyebrow: string;
    title: string;
    desc: string;
    plans: PricingPlan[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    items: TestimonialItem[];
  };
  about: {
    eyebrow: string;
    title: string;
    desc: string;
    points: string[];
  };
  banner: {
    eyebrow: string;
    title: string;
    desc: string;
    cta: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    desc: string;
    labels: ContactLabels;
    services: string[];
  };
  founder: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    description2: string;
    stats: {
      label: string;
      value: string;
    }[];
    skills: string[];
    ctaPrimary: string;
    ctaSecondary: string;
    image: string;
  };
  team: {
    badge: string;
    title: string;
    desc: string;
    ctaPrimary: string;
    ctaSecondary: string;
    members: {
      name: string;
      role: string;
      bio: string;
      image: string;
      tags: string[];
    }[];
  };
  footer: {
    left: string;
    right: string;
  };
};
