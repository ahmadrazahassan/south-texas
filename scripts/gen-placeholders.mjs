// Generates labeled SVG placeholder assets in /public/images.
// Run once with: node scripts/gen-placeholders.mjs
// Swap these files for the real logo + photography (keep the same filenames,
// or update the paths in /lib/site-config.ts).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "images");
mkdirSync(outDir, { recursive: true });

const YELLOW = "#F2C84B";
const INK = "#1C1C1C";
const DARK = "#16181B";
const CARD = "#E7E7E3";

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

/** A generic labeled rectangle placeholder. */
function placeholder({ w, h, label, bg = CARD, fg = INK, sub = "" }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label)}">
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0H0V40" fill="none" stroke="${fg}" stroke-opacity="0.06" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="${w}" height="${h}" fill="${bg}"/>
  <rect width="${w}" height="${h}" fill="url(#grid)"/>
  <g fill="${fg}" font-family="Inter, system-ui, sans-serif" text-anchor="middle">
    <text x="${w / 2}" y="${h / 2 - (sub ? 10 : -6)}" font-size="${Math.max(16, Math.min(w, h) / 14)}" font-weight="700" letter-spacing="0.04em">${esc(label.toUpperCase())}</text>
    ${sub ? `<text x="${w / 2}" y="${h / 2 + 26}" font-size="${Math.max(12, Math.min(w, h) / 28)}" fill-opacity="0.6">${esc(sub)}</text>` : ""}
  </g>
</svg>`;
}

const logo = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" role="img" aria-label="South Texas Roofing logo placeholder">
  <rect width="64" height="64" rx="14" fill="${INK}"/>
  <path d="M14 34 32 18l18 16" fill="none" stroke="${YELLOW}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20 33v13h24V33" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="29" y="38" width="6" height="8" fill="${YELLOW}"/>
</svg>`;

const avatar = (n) => `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160" role="img" aria-label="Customer avatar ${n}">
  <rect width="160" height="160" fill="${["#D8C58A", "#BFA37A", "#A8B0A0"][(n - 1) % 3]}"/>
  <circle cx="80" cy="62" r="30" fill="${INK}" fill-opacity="0.55"/>
  <path d="M30 150c0-30 22-50 50-50s50 20 50 50" fill="${INK}" fill-opacity="0.55"/>
</svg>`;

const assets = {
  "logo.svg": logo,

  "hero-poster.svg": placeholder({ w: 1600, h: 1000, label: "Hero — Metal Roof", bg: DARK, fg: "#FFFFFF", sub: "replace with hero photo / video poster" }),

  "about-1.svg": placeholder({ w: 800, h: 1000, label: "Metal Roof", sub: "about — primary" }),
  "about-2.svg": placeholder({ w: 800, h: 600, label: "Technician Measuring", sub: "about — secondary" }),

  "project-1.svg": placeholder({ w: 800, h: 600, label: "Roofing Project 1", sub: "projects" }),
  "project-2.svg": placeholder({ w: 800, h: 600, label: "Roofing Project 2", sub: "projects" }),

  "process-1.svg": placeholder({ w: 800, h: 1000, label: "Free Assessment", bg: DARK, fg: "#FFFFFF", sub: "process — step 1" }),

  "material-asphalt.svg": placeholder({ w: 720, h: 960, label: "Asphalt Shingles", bg: DARK, fg: "#FFFFFF", sub: "materials" }),
  "material-metal.svg": placeholder({ w: 720, h: 960, label: "Metal Roofing", bg: DARK, fg: "#FFFFFF", sub: "materials" }),
  "material-clay.svg": placeholder({ w: 720, h: 960, label: "Clay Tiles", bg: DARK, fg: "#FFFFFF", sub: "materials" }),

  "cta-band.svg": placeholder({ w: 1600, h: 700, label: "Roof CTA Band", bg: DARK, fg: "#FFFFFF", sub: "full-bleed background" }),
  "faq-roof.svg": placeholder({ w: 1600, h: 900, label: "Roof Background", bg: DARK, fg: "#FFFFFF", sub: "faq background" }),
};

// Service slide backgrounds
const serviceNames = [
  "Roof Repair",
  "New Roof Installation",
  "Roof Replacement",
  "Storm Damage Restoration",
  "Roof Inspections",
  "Maintenance Plans",
];
serviceNames.forEach((name, i) => {
  assets[`service-${i + 1}.svg`] = placeholder({
    w: 1600,
    h: 900,
    label: name,
    bg: DARK,
    fg: "#FFFFFF",
    sub: "services slide",
  });
});

// Avatars
[1, 2, 3].forEach((n) => {
  assets[`avatar-${n}.svg`] = avatar(n);
});

for (const [name, svg] of Object.entries(assets)) {
  writeFileSync(join(outDir, name), svg, "utf8");
}

console.log(`Wrote ${Object.keys(assets).length} placeholder assets to public/images`);
