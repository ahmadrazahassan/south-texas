/**
 * SOUTH TEXAS ROOFING — single source of truth.
 *
 * Every piece of copy, every nav link, and every image/video path used across
 * the site lives here. Swap the placeholder assets in /public/images for the
 * real logo and photography by editing only the `images` map below.
 */

import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck,
  BadgeDollarSign,
  Layers,
  Timer,
  Home,
  ClipboardCheck,
  FileText,
  Hammer,
  Search,
  ShieldPlus,
  Wrench,
  HardHat,
  CloudLightning,
  CalendarCheck,
  Factory,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Business / NAP data                                                       */
/* -------------------------------------------------------------------------- */

export const business = {
  name: "South Texas Roofing",
  legalName: "South Texas Roofing",
  tagline: "Roofing Built to Protect What Matters Most",
  description:
    "Family-owned, faith-based roofing contractor serving the Rio Grande Valley, San Antonio, and Austin with quality craftsmanship, honest service, and long-term home protection.",
  mission:
    "Family-owned, faith-based roofing serving the Rio Grande Valley, San Antonio, and Austin.",
  yearsExperience: 15,
  url: "https://southtexasroofing.com",
  email: "info@southtexasroofing.com",
  phone: "(956) 309-1307",
  phoneHref: "tel:+19563091307",
  hours: "Open 24 Hours",
  rating: 5.0,
  reviewCount: 99,
  address: {
    street: "2606 Business Hwy 83 E",
    city: "Weslaco",
    state: "TX",
    zip: "78596",
    full: "2606 Business Hwy 83 E, Weslaco, TX 78596",
  },
  serviceAreas: ["Rio Grande Valley", "San Antonio", "Austin", "Surrounding areas"],
  geo: { latitude: 26.1595, longitude: -97.9908 },
  social: {
    facebook: "https://facebook.com/southtexasroofing",
    instagram: "https://instagram.com/southtexasroofing",
    linkedin: "https://linkedin.com/company/southtexasroofing",
  },
} as const;

/* -------------------------------------------------------------------------- */
/*  Image / video assets — swap these paths for real assets                   */
/* -------------------------------------------------------------------------- */

export const images = {
  logo: "/images/logo.svg",
  hero: {
    video: "/images/hero-roof.mp4", // optional looping background; falls back to image
    poster: "/images/Hero_section_main_image.png",
  },
  about: {
    primary: "/images/Metal-roof-after-hero-section.png", // metal roof
    secondary: "/images/Measuring-after-hero-section.png", // technician measuring
  },
  avatars: [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/65.jpg",
    "https://randomuser.me/api/portraits/men/75.jpg",
  ],
  projects: {
    one: "/images/project-1-img.png",
    two: "/images/Project-2.jpg",
    three: "/images/Project-3-if-needed.jpg",
  },
  services: [
    "/images/service-1.svg",
    "/images/service-2.svg",
    "/images/service-3.svg",
    "/images/service-4.svg",
    "/images/service-5.svg",
    "/images/service-6.svg",
  ],
  process: {
    step1: "/images/process-1.svg",
  },
  materials: {
    asphalt: "/images/material-asphalt.svg",
    metal: "/images/material-metal.svg",
    clay: "/images/material-clay.svg",
  },
  ctaBand: "/images/Gemini_Generated_Image_r0b6uhr0b6uhr0b6.png",
  faqRoof: "/images/Gemini_Generated_Image_r0b6uhr0b6uhr0b6.png",
  finalCta: "/images/Gemini_Generated_Image_r0b6uhr0b6uhr0b6.png",
} as const;

/* -------------------------------------------------------------------------- */
/*  Navigation                                                                */
/* -------------------------------------------------------------------------- */

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/#projects" },
  { label: "Reviews", href: "/#reviews" },
] as const;

export const footerNav = {
  main: [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/#projects" },
    { label: "Reviews", href: "/#reviews" },
  ],
  company: [
    { label: "Materials", href: "/#materials" },
    { label: "Service Areas", href: "/#footer" },
    { label: "Contact", href: "/#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Warranty Info", href: "#" },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/*  Hero "Request Services" form options                                      */
/* -------------------------------------------------------------------------- */

export const serviceTypeOptions = [
  "Roof Repair",
  "New Roof Installation",
  "Roof Replacement",
  "Storm Damage Restoration",
  "Roof Inspection",
  "Maintenance Plan",
] as const;

export const locationOptions = [
  "Rio Grande Valley",
  "San Antonio",
  "Austin",
  "Other",
] as const;

/* -------------------------------------------------------------------------- */
/*  About section                                                             */
/* -------------------------------------------------------------------------- */

export const about = {
  eyebrow: "About Us",
  heading:
    "Delivering roofing you can rely on through quality craftsmanship, honest service, and a commitment to long-term home protection.",
  subtext:
    "Your home deserves a roof that's built to last — crafted with care, precision, and years of South Texas experience.",
} as const;

/* -------------------------------------------------------------------------- */
/*  Projects + stat                                                           */
/* -------------------------------------------------------------------------- */

export const projects = {
  eyebrow: "Projects",
  heading: "Our Roofing Projects",
  stat: {
    target: 1200,
    suffix: "+",
    copy:
      "Roofs repaired, installed, and upgraded — each crafted with quality materials and trusted workmanship.",
  },
  feature: {
    title: "Secure Roofing Solutions",
    copy:
      "Under the protection of a sturdy roof, built with meticulous care and precision, your home becomes a place of comfort and peace.",
  },
} as const;

/* -------------------------------------------------------------------------- */
/*  Why homeowners trust us                                                   */
/* -------------------------------------------------------------------------- */

export const whyUs: {
  eyebrow: string;
  heading: string;
  subtext: string;
  items: { title: string; copy: string; icon: LucideIcon; image: string }[];
} = {
  eyebrow: "Why Us",
  heading: "Homeowners Trust Our Services",
  subtext:
    "Four reasons South Texas families keep their roofs in our hands — scroll through.",
  items: [
    {
      title: "Licensed & Fully Insured",
      copy: "Certified, licensed professionals who meet every industry standard — so your roof and your investment are protected from day one.",
      icon: ShieldCheck,
      image: "/images/Measuring-after-hero-section.png",
    },
    {
      title: "Transparent Pricing",
      copy: "No hidden fees and no surprises. You get an honest, upfront estimate and a clear scope before any work begins.",
      icon: BadgeDollarSign,
      image: "/images/project-1-img.png",
    },
    {
      title: "High-Quality Materials",
      copy: "We install only premium shingles, tiles, and metal roofing — built to withstand South Texas heat, wind, and hail.",
      icon: Layers,
      image: "/images/Metal-roof-after-hero-section.png",
    },
    {
      title: "Fast & Efficient Work",
      copy: "Projects completed on schedule by an experienced crew, with a clean, careful job site from start to finish.",
      icon: Timer,
      image: "/images/Project-2.jpg",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  Services slider                                                           */
/* -------------------------------------------------------------------------- */

export const services: {
  slug: string;
  title: string;
  copy: string;
  image: string;
  icon: LucideIcon;
  intro: string;
  highlights: string[];
}[] = [
  {
    slug: "roof-repair",
    title: "Roof Repair",
    copy: "From minor leaks to major storm damage, we restore your roof efficiently.",
    image: "/images/Measuring-after-hero-section.png",
    icon: Wrench,
    intro:
      "A small leak today can become a costly structural problem tomorrow. Our repair crews find the root cause, not just the symptom, and restore your roof's integrity quickly and cleanly — so your home stays dry and protected.",
    highlights: [
      "Same-week service for active leaks across the Rio Grande Valley",
      "Shingle, tile, and metal repairs handled by certified technicians",
      "Honest assessment — we recommend repair only when it's the right call",
      "Workmanship backed by a clear, written warranty",
    ],
  },
  {
    slug: "new-roof-installation",
    title: "New Roof Installation",
    copy: "New roofing built with industry-leading materials for long-term performance.",
    image: "/images/Metal-roof-after-hero-section.png",
    icon: HardHat,
    intro:
      "Building new or upgrading? We install complete roofing systems engineered for the South Texas climate — from premium underlayment and ventilation to the finished surface — for decades of dependable protection.",
    highlights: [
      "Asphalt shingle, standing-seam metal, and clay tile systems",
      "Proper ventilation and underlayment for heat and moisture control",
      "Manufacturer-backed material warranties on every install",
      "Clean, on-schedule installation by an experienced crew",
    ],
  },
  {
    slug: "roof-replacement",
    title: "Roof Replacement",
    copy: "Full tear-off and replacement with top-tier roofing systems.",
    image: "/images/project-1-img.png",
    icon: Hammer,
    intro:
      "When a roof reaches the end of its life, a full replacement protects your home better than patchwork ever could. We handle the complete tear-off, deck inspection, and rebuild with top-tier materials and zero shortcuts.",
    highlights: [
      "Complete tear-off with decking inspection and repair",
      "Upgraded materials matched to your home and budget",
      "Thorough cleanup and magnetic nail sweep after every job",
      "Long-term system and workmanship warranties",
    ],
  },
  {
    slug: "storm-damage-restoration",
    title: "Storm Damage Restoration",
    copy: "Emergency assessment and restoration after Texas storms and hail.",
    image: "/images/Project-2.jpg",
    icon: CloudLightning,
    intro:
      "After a storm, every hour matters. We respond fast to secure your home, document the damage thoroughly, and restore your roof — and we work directly with your insurance company to make the claim as smooth as possible.",
    highlights: [
      "24-hour emergency response and temporary tarping",
      "Detailed hail and wind damage documentation",
      "Direct insurance-claim assistance from start to finish",
      "Full restoration to pre-storm condition or better",
    ],
  },
  {
    slug: "roof-inspections",
    title: "Roof Inspections",
    copy: "Thorough inspections to catch issues before they become costly.",
    image: "/images/Project-3-if-needed.jpg",
    icon: Search,
    intro:
      "Knowing the real condition of your roof saves money and stress. Our detailed inspections catch small issues before they become expensive — perfect for routine maintenance, insurance, or a home purchase.",
    highlights: [
      "Comprehensive top-to-bottom roof and flashing evaluation",
      "Clear photo report with honest findings and priorities",
      "Pre-purchase and pre-storm-season inspections available",
      "No-pressure recommendations — repair only what's needed",
    ],
  },
  {
    slug: "maintenance-plans",
    title: "Maintenance Plans",
    copy: "Preventive care to extend your roof's lifespan and warranty.",
    image: "/images/Hero_section_main_image.png",
    icon: CalendarCheck,
    intro:
      "The most affordable roof is the one you take care of. Our maintenance plans add years to your roof's life with scheduled check-ups, minor fixes, and priority service — keeping small problems from ever growing.",
    highlights: [
      "Scheduled seasonal inspections and tune-ups",
      "Priority scheduling for plan members",
      "Minor repairs and debris clearing included",
      "Helps protect and preserve your material warranty",
    ],
  },
];

export const servicesMeta = {
  eyebrow: "Services",
  heading: "Comprehensive Roofing Services",
  subtext:
    "Hover or tap a service to explore how we protect South Texas homes — from quick repairs to full replacements.",
} as const;

/* -------------------------------------------------------------------------- */
/*  Process                                                                   */
/* -------------------------------------------------------------------------- */

export const process = {
  eyebrow: "Process",
  heading: "How Our Roofing Process Works",
  steps: [
    {
      step: "Step 1",
      title: "Free Assessment",
      copy: "We inspect your roof and share recommendations.",
      icon: Search,
    },
    {
      step: "Step 2",
      title: "Transparent Estimate",
      copy: "Clear project scope, options, and pricing.",
      icon: FileText,
    },
    {
      step: "Step 3",
      title: "Project Execution",
      copy: "Professional installation by our certified crew.",
      icon: Hammer,
    },
    {
      step: "Step 4",
      title: "Final Inspection",
      copy: "We ensure everything meets our standard before sign-off.",
      icon: ClipboardCheck,
    },
    {
      step: "Step 5",
      title: "Warranty Protection",
      copy: "Your roof is covered for long-term performance.",
      icon: ShieldPlus,
    },
  ] as { step: string; title: string; copy: string; icon: LucideIcon }[],
} as const;

export const processHomeIcon = Home;

/* -------------------------------------------------------------------------- */
/*  Materials                                                                 */
/* -------------------------------------------------------------------------- */

export const materials: {
  eyebrow: string;
  heading: string;
  subtext: string;
  items: { title: string; copy: string; image: string; icon: LucideIcon; tag: string }[];
} = {
  eyebrow: "Materials",
  heading: "Materials Built to Last",
  subtext:
    "We help you choose the right roofing system for your home, your budget, and the South Texas climate.",
  items: [
    {
      title: "Asphalt Shingles",
      copy: "A versatile and cost-effective option trusted by most homeowners.",
      image: "/images/project-1-img.png",
      icon: Layers,
      tag: "Most Popular",
    },
    {
      title: "Metal Roofing",
      copy: "Lightweight, long-lasting, and highly resistant to extreme weather.",
      image: "/images/Metal-roof-after-hero-section.png",
      icon: Factory,
      tag: "Most Durable",
    },
    {
      title: "Clay Tiles",
      copy: "Timeless and elegant, known for natural insulation and durability.",
      image: "/images/Hero_section_main_image.png",
      icon: Home,
      tag: "Best Insulation",
    },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/*  CTA bands                                                                 */
/* -------------------------------------------------------------------------- */

export const midCta = {
  heading: "Ready to strengthen and protect your home?",
  subtext: "Get a free roof inspection and a clear estimate tailored to your needs.",
  cta: "Book a Free Inspection",
} as const;

export const finalCta = {
  heading: "High-quality roofing, delivered with precision",
  subtext: "Talk to our specialists and get a clear project plan within 24 hours.",
  cta: "Speak With an Expert",
} as const;

/* -------------------------------------------------------------------------- */
/*  Testimonials                                                              */
/* -------------------------------------------------------------------------- */

export const testimonials = {
  eyebrow: "Reviews",
  heading: "What South Texas Homeowners Say",
  items: [
    {
      quote:
        "They did a great job on the roof — done quick and professionally.",
      name: "Francisco Gonzalez",
      role: "Homeowner",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      quote:
        "Their prices were so reasonable and the quality and workmanship was top notch. Paul Ramirez was especially helpful. Highly recommend.",
      name: "ImTheClay",
      role: "Local Guide",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      quote:
        "Jesse reached out right away, gave a fast quote, and worked with me on the insurance claim.",
      name: "Samuel Padilla",
      role: "Homeowner",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      quote:
        "Responsiveness, punctuality, quality, professionalism, value — all rated positive. Great roof repair.",
      name: "Nick Salinas",
      role: "Homeowner",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    },
    {
      quote:
        "Positive on every count — responsiveness, punctuality, quality, professionalism, and value.",
      name: "Yair Gazitt",
      role: "Local Guide",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/*  FAQ                                                                       */
/* -------------------------------------------------------------------------- */

export const faq = {
  eyebrow: "FAQ",
  heading: "Roofing Questions, Answered Clearly",
  cta: "Ask a Question",
  items: [
    {
      q: "How do I know if my roof needs repair or replacement?",
      a: "We start with a free assessment. If the damage is localized and the roof is structurally sound, a repair is usually enough. When wear is widespread or the roof is near the end of its lifespan, a replacement protects your home better long term — and we'll always give you an honest recommendation either way.",
    },
    {
      q: "Do you provide emergency roofing services?",
      a: "Yes. We're open 24 hours for storm damage and active leaks. Call us and we'll dispatch a crew to secure your roof and prevent further damage as quickly as possible.",
    },
    {
      q: "How long does a typical roofing project take?",
      a: "Most residential roofs are completed in one to three days depending on size, materials, and weather. We'll give you a clear timeline in your estimate before any work begins.",
    },
    {
      q: "Can you help with insurance claims?",
      a: "Absolutely. We work directly with your insurance company, document the damage thoroughly, and guide you through the claim so the process is as smooth and stress-free as possible.",
    },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/*  Hero copy                                                                 */
/* -------------------------------------------------------------------------- */

export const hero = {
  h1: "Roofing Built to Protect What Matters Most",
  cta: "Get a Free Estimate",
  formTitle: "Request Services",
  formCta: "Submit Request",
  marqueeWord: "ROOFING",
} as const;
