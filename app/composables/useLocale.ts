type Locale = 'en' | 'sk'

const translations = {
en: {
nav_work: 'Work',
nav_about: 'About',
nav_contact: 'Contact',
nav_cta: 'Email me',

hero_kicker: 'Frontend Engineering That Drives Growth',
hero_h1_1: 'Built for speed',
hero_h1_2: 'Designed to scale',
hero_h1_3: 'Optimized for growth',
hero_copy: 'I design and build fast, scalable web applications that improve performance and drive measurable results.',
hero_cta_work: 'View Work',
hero_cta_contact: 'Let’s Talk',

value_1: 'Fast. Scalable. Built to convert.',
value_2: 'Performance-first frontend engineering.',
value_3: 'Vue / Nuxt · TypeScript · React · Supabase · GSAP',

projects_eyebrow: 'Selected Work',
projects_h2: 'Work That Drives Real Results',
projects_intro: 'Selected projects focused on performance, UX, and scalable architecture.',


about_eyebrow: 'How I Think',
about_h2_1: 'Frontend is not just UI.',
about_h2_accent: 'Performance. Scale. Results.',
about_h2_2: 'Every detail matters.',
about_copy: 'I build frontend systems that are fast, maintainable, and designed for real-world usage — not just visual output.',

about_perf_title: 'Performance',
about_perf_copy: 'Performance is built into the architecture, not added later. Every render, request, and interaction is optimized from the start.',

about_ux_title: 'UX Precision',
about_ux_copy: 'Interfaces are designed for clarity and speed, reducing friction and helping users complete actions faster.',

about_scale_title: 'Scalability',
about_scale_copy: 'Systems are structured to grow with modular components, clear state management, and maintainable code.',

interactive_eyebrow: 'Interactive',
interactive_h2: 'Frontend impact on performance',
interactive_lead: 'A simple example of how implementation quality affects performance, responsiveness, and user experience.',
interactive_label: 'Implementation quality:',
interactive_conversion: 'Estimated impact on conversion:',
interactive_bar_1: 'UX',
interactive_bar_2: 'Latency',
interactive_bar_3: 'Speed',
interactive_lcp: 'LCP:',
interactive_fid: 'Delay:',

results_eyebrow: 'Impact',
results_h2: 'Results That Matter',
result_1: 'Faster load times',
result_2: 'Higher conversion',
result_3: 'Performance scores',
result_4: 'Better UX',

cta_eyebrow: 'Start a project',

cta_h2: 'Have a product in mind?',
cta_h2_2: 'Let’s build it right.',
cta_copy: 'Fast, scalable, and designed to deliver real results.',
cta_note: 'Available for selected projects and long-term collaboration.',
cta_btn: 'Get in touch',

footer_built: 'Built with Nuxt 3',

mobile_menu_open: 'Open menu',
mobile_menu_close: 'Close menu',

page_title: 'Juraj Paluš | Frontend Engineer',
page_description: 'Frontend engineer focused on performance and scalable web apps.',


},

sk: {
nav_work: 'Práce',
nav_about: 'O mne',
nav_contact: 'Kontakt',
nav_cta: 'Napíšte mi',

hero_kicker: 'Frontend, ktorý prináša výsledky',
hero_h1_1: 'Rýchlosť na prvom mieste',
hero_h1_2: 'Juraj Paluš',
hero_h1_3: 'Navrhnuté pre výkon',
hero_copy: 'Frontend inžinier zameraný na výkon a UX.',
hero_cta_work: 'Projekty',
hero_cta_contact: 'Ozvite sa',

value_1: 'Rýchle. Škálovateľné. Konverzné.',
value_2: 'Frontend s dôrazom na výkon.',
value_3: 'Vue / Nuxt · TypeScript · React · Supabase · GSAP',

projects_eyebrow: 'Projekty',
projects_h2: 'Reálne výsledky',
projects_intro: 'Výkon, UX a škálovanie.',

about_eyebrow: 'Ako uvažujem',

about_h2_1: 'Frontend nie je len UI.',
about_h2_accent: 'Výkon. Škálovanie. Výsledky.',
about_h2_2: 'Na detailoch záleží.',

about_copy: 'Staviam frontend systémy, ktoré sú rýchle, udržateľné a pripravené na reálne použitie, nie len vizuálne pekné.',

about_perf_title: 'Výkon',
about_perf_copy: 'Výkon je zabudovaný do architektúry, nie pridaný neskôr. Každé renderovanie, požiadavka a interakcia je optimalizovaná od začiatku.',

about_ux_title: 'UX',
about_ux_copy: 'Rozhrania sú navrhnuté pre prehľadnosť a rýchlosť, aby používateľ vedel konať bez zbytočného rozmýšľania.',
about_scale_title: 'Škálovanie',
about_scale_copy: 'Systémy sú štruktúrované tak, aby rástli s modulárnymi komponentmi, jasným state managementom a udržateľným kódom.',

interactive_eyebrow: 'Interaktívny náhľad',
interactive_h2: 'Vplyv frontendu na výkon a UX',
interactive_lead: 'Ukážka toho, ako kvalita implementácie ovplyvňuje rýchlosť, odozvu a používateľský zážitok.',
interactive_label: 'Kvalita implementácie:',
interactive_conversion: 'Odhadovaný vplyv na konverzie:',
interactive_bar_1: 'UX',
interactive_bar_2: 'Latencia',
interactive_bar_3: 'Rýchlosť',
interactive_lcp: 'LCP:',
interactive_fid: 'Odozva:',

results_eyebrow: 'Dopad',
results_h2: 'Čo moja práca zlepšuje',
result_1: 'Rýchlejšie načítanie',
result_2: 'Vyššie konverzie',
result_3: 'Vyššie skóre aplikácie',
result_4: 'Lepšie UX',

cta_eyebrow: 'Spolupráca',
cta_h2: 'Máte nápad?',
cta_h2_2: 'Poďme ho spraviť hneď.',
cta_copy: 'Rýchlo, škálovateľne a s dôrazom na výsledok.',
cta_note: 'Dostupný pre vybrané projekty a dlhodobú spoluprácu.',
cta_btn: 'Kontaktovať',

footer_built: 'Built with Nuxt 3',

mobile_menu_open: 'Otvoriť menu',
mobile_menu_close: 'Zavrieť menu',

page_title: 'Juraj Paluš | Frontend Engineer',
page_description: 'Frontend inžinier zameraný na výkon a škálovateľné webové aplikácie.',


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
