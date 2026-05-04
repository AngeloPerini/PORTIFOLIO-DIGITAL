import type { Idea, Project } from '../types/portfolio';
import { getLocalizedText } from './localize';

const palettes = [
  ['#13c8d8', '#5b7cff', '#8b5cf6'],
  ['#14b8a6', '#0ea5e9', '#7c3aed'],
  ['#22c55e', '#06b6d4', '#2563eb'],
  ['#f97316', '#ec4899', '#8b5cf6'],
  ['#38bdf8', '#6366f1', '#14b8a6'],
] as const;

const toDataUri = (svg: string): string => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;

const createPreviewPattern = (primary: string, secondary: string, tertiary: string): string => {
  const svg = `
    <svg width="1600" height="1000" viewBox="0 0 1600 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1600" y2="1000" gradientUnits="userSpaceOnUse">
          <stop stop-color="#050816" />
          <stop offset="1" stop-color="#0F172A" />
        </linearGradient>
        <radialGradient id="orbA" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1280 150) rotate(90) scale(260)">
          <stop stop-color="${primary}" stop-opacity="0.95" />
          <stop offset="1" stop-color="${primary}" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="orbB" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(320 820) rotate(90) scale(320)">
          <stop stop-color="${secondary}" stop-opacity="0.72" />
          <stop offset="1" stop-color="${secondary}" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="orbC" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(900 520) rotate(90) scale(380)">
          <stop stop-color="${tertiary}" stop-opacity="0.4" />
          <stop offset="1" stop-color="${tertiary}" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="1600" height="1000" rx="48" fill="url(#bg)" />
      <rect width="1600" height="1000" rx="48" fill="url(#orbA)" />
      <rect width="1600" height="1000" rx="48" fill="url(#orbB)" />
      <rect width="1600" height="1000" rx="48" fill="url(#orbC)" />
      <g opacity="0.22">
        <path d="M0 120 H1600" stroke="white" />
        <path d="M0 360 H1600" stroke="white" />
        <path d="M0 600 H1600" stroke="white" />
        <path d="M0 840 H1600" stroke="white" />
        <path d="M220 0 V1000" stroke="white" />
        <path d="M620 0 V1000" stroke="white" />
        <path d="M1020 0 V1000" stroke="white" />
        <path d="M1420 0 V1000" stroke="white" />
      </g>
      <rect x="72" y="72" width="1456" height="856" rx="36" fill="rgba(8,15,32,0.56)" stroke="rgba(255,255,255,0.10)" />
      <rect x="120" y="124" width="1360" height="60" rx="18" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" />
      <circle cx="164" cy="154" r="8" fill="#F87171" />
      <circle cx="192" cy="154" r="8" fill="#FBBF24" />
      <circle cx="220" cy="154" r="8" fill="#34D399" />
      <rect x="144" y="236" width="530" height="280" rx="30" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" />
      <rect x="718" y="236" width="330" height="280" rx="30" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
      <rect x="1092" y="236" width="364" height="280" rx="30" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" />
      <rect x="144" y="564" width="912" height="240" rx="30" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
      <rect x="1100" y="564" width="356" height="240" rx="30" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" />
      <path d="M206 448C252 404 318 364 388 338C462 310 544 296 620 298" stroke="${primary}" stroke-width="18" stroke-linecap="round" />
      <path d="M206 476C248 458 296 450 340 450C406 450 458 468 520 486C582 504 634 510 690 498" stroke="rgba(255,255,255,0.16)" stroke-width="16" stroke-linecap="round" />
      <rect x="772" y="302" width="228" height="28" rx="14" fill="rgba(255,255,255,0.12)" />
      <rect x="772" y="350" width="180" height="20" rx="10" fill="${secondary}" fill-opacity="0.46" />
      <rect x="772" y="390" width="120" height="20" rx="10" fill="rgba(255,255,255,0.1)" />
      <rect x="1138" y="298" width="240" height="18" rx="9" fill="rgba(255,255,255,0.12)" />
      <rect x="1138" y="338" width="280" height="120" rx="18" fill="rgba(255,255,255,0.05)" />
      <circle cx="1188" cy="398" r="38" fill="${tertiary}" fill-opacity="0.65" />
      <circle cx="1290" cy="398" r="38" fill="${primary}" fill-opacity="0.55" />
      <circle cx="1392" cy="398" r="38" fill="${secondary}" fill-opacity="0.55" />
      <rect x="206" y="626" width="768" height="20" rx="10" fill="rgba(255,255,255,0.12)" />
      <rect x="206" y="674" width="600" height="18" rx="9" fill="rgba(255,255,255,0.08)" />
      <rect x="206" y="722" width="690" height="18" rx="9" fill="rgba(255,255,255,0.08)" />
      <rect x="1144" y="622" width="268" height="26" rx="13" fill="rgba(255,255,255,0.12)" />
      <rect x="1144" y="676" width="196" height="84" rx="22" fill="${primary}" fill-opacity="0.38" />
    </svg>`;

  return toDataUri(svg);
};

const pickPalette = (seed: string): readonly [string, string, string] => {
  const hash = Array.from(seed).reduce((accumulator, character) => accumulator + character.charCodeAt(0), 0);
  return palettes[hash % palettes.length];
};

export const createAbstractPreview = (seed: string): string => {
  const [primary, secondary, tertiary] = pickPalette(seed);
  return createPreviewPattern(primary, secondary, tertiary);
};

export const getFallbackImage = (seed: string): string => createAbstractPreview(`${seed}-fallback`);

export const sortProjectsByRelevance = (projects: Project[]): Project[] =>
  [...projects].sort((left, right) => right.relevanceScore - left.relevanceScore);

export const sortIdeasByRelevance = (ideas: Idea[]): Idea[] =>
  [...ideas].sort((left, right) => right.relevanceScore - left.relevanceScore);

export const getAllTechnologies = (projects: Project[]): string[] =>
  [...new Set(projects.flatMap((project) => project.stack))].sort((left, right) => left.localeCompare(right));

export const getTopTechnologies = (projects: Project[], limit = 6): string[] =>
  [...projects.flatMap((project) => project.stack).reduce((counts, technology) => {
    counts.set(technology, (counts.get(technology) ?? 0) + 1);
    return counts;
  }, new Map<string, number>()).entries()]
    .sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0]))
    .slice(0, limit)
    .map(([technology]) => technology);

export const filterProjects = (
  projects: Project[],
  search: string,
  technology: string,
  language: string,
): Project[] => {
  const query = search.trim().toLowerCase();

  return sortProjectsByRelevance(projects).filter((project) => {
    const localizedText = [
      getLocalizedText(project.name, language),
      getLocalizedText(project.summary, language),
      getLocalizedText(project.description, language),
      getLocalizedText(project.status, language),
      ...project.stack,
      ...project.badges,
    ]
      .join(' ')
      .toLowerCase();

    const matchesTechnology = technology === 'all' || project.stack.includes(technology);
    const matchesSearch = query.length === 0 || localizedText.includes(query);

    return matchesTechnology && matchesSearch;
  });
};
