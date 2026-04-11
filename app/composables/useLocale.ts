type Locale = 'en' | 'sk'

const translations = {
en: {
nav_work: 'Work',
nav_about: 'About',
nav_contact: 'Contact',
nav_cta: 'Start Project',

hero_kicker: 'Frontend Engineering That Drives Growth',
hero_h1_1: 'Built for speed.',
hero_h1_2: 'Designed to scale.',
hero_h1_3: 'Optimized for growth.',
hero_copy: 'Frontend engineer focused on performance, UX, and real business results.',
hero_cta_work: 'View Work',
hero_cta_contact: 'Get in touch',

value_1: 'Fast. Scalable. Built to convert.',
value_2: 'Performance-first frontend engineering.',

projects_eyebrow: 'Selected Work',
projects_h2: 'Work That Drives Real Results',
projects_intro: 'Selected projects focused on performance, UX, and scalable architecture.',

project_0_title: 'Pristupio Platform',
project_0_description: 'Scalable web platform built with performance-first architecture and modular frontend design.',
project_0_result: 'Ongoing product development with scalable architecture',
project_0_challenge: 'Designing a flexible system that supports long-term growth and rapid iteration.',
project_0_approach: 'Modular Vue architecture and structured state management.',

project_1_title: 'Checkout Revamp For Subscription SaaS',
project_1_description: 'Improved checkout flow to reduce friction and increase conversions.',
project_1_result: '+22% checkout conversion',
project_1_challenge: 'Multi-step flow caused friction.',
project_1_approach: 'Simplified UX and faster interactions.',

project_2_title: 'SEO-Led Platform Migration',
project_2_description: 'Migrated SPA to SSR with better SEO and performance.',
project_2_result: '+64% organic traffic',
project_2_challenge: 'Poor indexing and slow load times.',
project_2_approach: 'SSR and structured metadata.',

project_3_title: 'Dashboard Performance Optimization',
project_3_description: 'Optimized rendering for heavy data dashboards.',
project_3_result: '-41% time to interactive',
project_3_challenge: 'Slow initial rendering.',
project_3_approach: 'Code splitting and virtualization.',

about_eyebrow: 'How I Think',
about_h2_1: 'Frontend is not just UI.',
about_h2_accent: 'It’s a growth system.',
about_h2_2: '',
about_copy: 'I focus on performance, clarity, and scalable systems.',

about_perf_title: 'Performance',
about_perf_copy: 'Optimized for speed and Core Web Vitals.',

about_ux_title: 'UX Precision',
about_ux_copy: 'Built for clarity and fast decisions.',

about_scale_title: 'Scalability',
about_scale_copy: 'Structured to grow without chaos.',

interactive_eyebrow: 'Interactive',
interactive_h2: 'Quality Simulator',
interactive_lead: 'Frontend quality impacts performance and conversions.',
interactive_label: 'Quality level:',
interactive_conversion: 'Conversion impact:',
interactive_bar_1: 'UX',
interactive_bar_2: 'Latency',
interactive_bar_3: 'Speed',
interactive_lcp: 'LCP:',
interactive_fid: 'Delay:',

results_eyebrow: 'Results',
results_h2: 'Results That Matter',
result_1: 'Faster load times',
result_2: 'Higher conversion',
result_3: '90+ Lighthouse',
result_4: 'Better UX',

cta_eyebrow: "Let's build something fast.",
cta_h2: 'Got a product in mind?',
cta_copy: 'Let’s make it fast and scalable.',
cta_btn: 'Get in touch',

footer_built: 'Built with Nuxt 3.',

card_challenge: 'Challenge:',
card_approach: 'Approach:',

page_title: 'Juraj | Frontend Engineer',
page_description: 'Frontend engineer focused on performance and scalable web apps.',


},

sk: {
nav_work: 'Práce',
nav_about: 'O mne',
nav_contact: 'Kontakt',
nav_cta: 'Začať projekt',

hero_kicker: 'Frontend, ktorý prináša výsledky',
hero_h1_1: 'Rýchlosť na prvom mieste.',
hero_h1_2: 'Pripravené rásť.',
hero_h1_3: 'Navrhnuté pre výkon.',
hero_copy: 'Frontend inžinier zameraný na výkon a UX.',
hero_cta_work: 'Projekty',
hero_cta_contact: 'Kontakt',

value_1: 'Rýchle. Škálovateľné. Konverzné.',
value_2: 'Frontend s dôrazom na výkon.',

projects_eyebrow: 'Projekty',
projects_h2: 'Reálne výsledky',
projects_intro: 'Výkon, UX a škálovanie.',

project_0_title: 'Pristupio platforma',
project_0_description: 'Škálovateľná aplikácia s dôrazom na výkon.',
project_0_result: 'Aktívny vývoj',
project_0_challenge: 'Návrh flexibilnej architektúry.',
project_0_approach: 'Modulárny frontend a state management.',

project_1_title: 'Checkout optimalizácia',
project_1_description: 'Zlepšenie konverzií.',
project_1_result: '+22%',
project_1_challenge: 'Zložitý flow.',
project_1_approach: 'Zjednodušenie UX.',

project_2_title: 'SEO migrácia',
project_2_description: 'Prechod na SSR.',
project_2_result: '+64%',
project_2_challenge: 'Indexovanie.',
project_2_approach: 'SSR riešenie.',

project_3_title: 'Dashboard výkon',
project_3_description: 'Optimalizácia renderu.',
project_3_result: '-41%',
project_3_challenge: 'Pomalý render.',
project_3_approach: 'Optimalizácia.',

about_eyebrow: 'Ako uvažujem',
about_h2_1: 'Frontend nie je len UI.',
about_h2_accent: 'Je to systém.',
about_h2_2: '',
about_copy: 'Zameranie na výkon a škálovanie.',

about_perf_title: 'Výkon',
about_perf_copy: 'Optimalizácia rýchlosti.',

about_ux_title: 'UX',
about_ux_copy: 'Jednoduchosť.',

about_scale_title: 'Škálovanie',
about_scale_copy: 'Pripravené na rast.',

interactive_eyebrow: 'Interaktívne',
interactive_h2: 'Simulátor',
interactive_lead: 'Vplyv na výkon.',
interactive_label: 'Úroveň:',
interactive_conversion: 'Konverzia:',
interactive_bar_1: 'UX',
interactive_bar_2: 'Latencia',
interactive_bar_3: 'Rýchlosť',
interactive_lcp: 'LCP:',
interactive_fid: 'Delay:',

results_eyebrow: 'Výsledky',
results_h2: 'Výsledky',
result_1: 'Rýchlosť',
result_2: 'Konverzia',
result_3: 'Lighthouse',
result_4: 'UX',

cta_eyebrow: 'Poďme na to',
cta_h2: 'Máš projekt?',
cta_copy: 'Spravme ho rýchly.',
cta_btn: 'Kontakt',

footer_built: 'Postavené na Nuxt 3',

card_challenge: 'Výzva:',
card_approach: 'Prístup:',

page_title: 'Juraj | Frontend',
page_description: 'Frontend vývojár.',


}
} as const

type TranslationKey = keyof typeof translations.en

export const useLocale = () => {
const locale = useState<Locale>('locale', () => 'en')

const t = (key: TranslationKey): string => translations[locale.value][key]

const toggleLocale = () => {
locale.value = locale.value === 'en' ? 'sk' : 'en'
}

return { locale, t, toggleLocale }
}
