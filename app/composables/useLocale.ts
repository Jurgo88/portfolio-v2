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
