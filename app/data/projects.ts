interface L10n {
  en: string
  sk: string
}

interface DecisionL10n {
  title: L10n
  detail: L10n
}

export interface ProjectDetail {
  slug: string
  title: string
  description: L10n
  result: L10n
  image: string
  hero: {
    title: string
    summary: L10n
  }
  problem: L10n
  approach: L10n
  architecture: { en: string[]; sk: string[] }
  decisions: DecisionL10n[]
  outcome: L10n
  stack: string[]
  improvements?: { en: string[]; sk: string[] }
}

export const projects: ProjectDetail[] = [
  {
    slug: "pristupio",
    title: "Pristupio Platform",
    description: {
      en: "Scalable SaaS platform built with modular Vue architecture, Pinia state management, and Supabase backend.",
      sk: "Škálovateľná SaaS platforma s modulárnou Vue architektúrou, Pinia state managementom a Supabase backendom.",
    },
    result: {
      en: "Scalable architecture enabling rapid feature iteration",
      sk: "Škálovateľná architektúra umožňujúca rýchle pridávanie funkcií",
    },
    image: "/previews/pristupio.webp",
    hero: {
      title: "Pristupio Platform",
      summary: {
        en: "A scalable SaaS platform built for long-term product growth — designed with Vue 3, Pinia, and Supabase from the ground up.",
        sk: "Škálovateľná SaaS platforma vytvorená pre dlhodobý rast produktu — navrhnutá s Vue 3, Pinia a Supabase od základu.",
      },
    },
    problem: {
      en: `The product needed a foundation that could scale with new features without accumulating technical debt. Early architectural choices in state management, data fetching, and component design would determine how fast the team could ship six months later. Getting it wrong early meant expensive refactors under deadline pressure.`,
      sk: `Produkt potreboval základ, ktorý by zvládal škálovanie s novými funkciami bez hromadenia technického dlhu. Skoré rozhodnutia v oblasti state managementu, fetchovania dát a návrhu komponentov by určili, ako rýchlo bude tím schopný dodávať o šesť mesiacov neskôr. Zlé rozhodnutia na začiatku by znamenali drahé refaktory pod tlakom termínov.`,
    },
    approach: {
      en: `Rather than building fast and refactoring later, I prioritised architecture first. Each product domain — auth, content, billing — was isolated into its own composable and Pinia store. UI components were designed to be context-unaware: purely presentational, driven by props. This separation kept individual pieces testable and replaceable.`,
      sk: `Namiesto rýchleho vývoja s neskorším refaktoringom som najprv navrhol systémovú architektúru. Každá produktová doména — autentifikácia, obsah, fakturácia — bola izolovaná do vlastného composable a Pinia storu. UI komponenty boli navrhnuté ako kontextovo nezávislé: čisto prezentačné, riadené propmi. Toto oddelenie zachovalo jednotlivé časti testovateľné a nahraditeľné.`,
    },
    architecture: {
      en: [
        "Frontend: Vue 3 with Composition API and TypeScript",
        "State: Pinia with typed store modules per domain",
        "Backend: Supabase (PostgreSQL, Auth, Realtime)",
        "API layer: Composables abstracting all Supabase queries",
        "Routing: Nuxt 3 with middleware-based auth guards",
      ],
      sk: [
        "Frontend: Vue 3 s Composition API a TypeScript",
        "State: Pinia s typovanými store modulmi na doménu",
        "Backend: Supabase (PostgreSQL, Auth, Realtime)",
        "API vrstva: Composables abstrahujúce všetky Supabase dotazy",
        "Routing: Nuxt 3 s middleware-based auth guardmi",
      ],
    },
    decisions: [
      {
        title: { en: "Pinia over Vuex", sk: "Pinia namiesto Vuexu" },
        detail: {
          en: "Pinia's modular design and TypeScript-first API eliminated boilerplate and made stores testable in isolation. Vuex would have added complexity with no real benefit for this scale.",
          sk: "Modulárny dizajn Pinie a TypeScript-first API odstránili boilerplate a umožnili testovanie storov v izolácii. Vuex by pridal zložitosť bez skutočného prínosu pri tejto veľkosti projektu.",
        },
      },
      {
        title: {
          en: "Supabase over a custom backend",
          sk: "Supabase namiesto vlastného backendu",
        },
        detail: {
          en: "For an early-stage product, building a custom API server significantly increased development time. Supabase provided auth, real-time subscriptions, and a relational database out of the box — freeing capacity for product work.",
          sk: "Pre produkt v ranej fáze by budovanie vlastného API servera výrazne zvýšilo čas vývoja. Supabase poskytol autentifikáciu, real-time subscriptions a relačnú databázu bez zbytočného nastavenia — čím uvoľnil kapacitu na produktovú prácu.",
        },
      },
      {
        title: {
          en: "Composables as the backend boundary",
          sk: "Composables ako hranica backendu",
        },
        detail: {
          en: "All Supabase queries live inside composables, not components. Swapping or extending the backend later means touching one layer, not dozens of files scattered across the codebase.",
          sk: "Všetky Supabase dotazy žijú v composables, nie v komponentoch. Výmena alebo rozšírenie backendu neskôr znamená úpravu jednej vrstvy, nie desiatok súborov roztrúsených po celom zdrojovom kóde.",
        },
      },
      {
        title: {
          en: "No premature optimisation",
          sk: "Žiadna predčasná optimalizácia",
        },
        detail: {
          en: "Skipped virtualisation and lazy stores until there was evidence the app needed them. Keeping complexity low in the early stage made onboarding faster and debugging simpler.",
          sk: "Virtualizáciu a lazy store by som preskočil, kým nebol dôkaz, že ich aplikácia potrebuje. Nízka zložitosť v ranej fáze urýchlila onboarding a zjednodušila debugovanie.",
        },
      },
    ],
    outcome: {
      en: `The platform shipped on schedule with a clean, navigable codebase. New features take significantly less time because the architecture anticipates change. No major refactors were required after initial release - a direct result of upfront design decisions.`,
      sk: `Platforma bola odovzdaná v termíne s prehľadným zdrojovým kódom. Nové funkcie trvajú výrazne menej času, pretože architektúra anticipuje zmeny. Po prvom vydaní neboli potrebné žiadne väčšie refaktory - priamy výsledok dizajnových rozhodnutí na začiatku.`,
    },
    stack: ["Vue 3", "Nuxt 3", "TypeScript", "Pinia", "Supabase", "SCSS"],
    improvements: {
      en: [
        "Add Playwright end-to-end tests for critical user flows",
        "Introduce a feature flag system for safer incremental deploys",
        "Extract the component library into a standalone package for reuse across products",
      ],
      sk: [
        "Pridať Playwright end-to-end testy pre kritické používateľské toky",
        "Zaviesť systém feature flagov pre bezpečnejšie postupné nasadenia",
        "Extrahovať knižnicu komponentov do samostatného balíka pre opätovné použitie",
      ],
    },
  },

  {
    slug: "e-passport",
    title: "ePassport System",

    description: {
      en: "Mobile-first web application that replaced fragmented PDF workflows with a structured system, including authentication and admin management.",
      sk: "Mobile-first webová aplikácia, ktorá nahradila neprehľadné PDF procesy štruktúrovaným systémom vrátane autentifikácie a administrácie.",
    },

    result: {
      en: "Centralized system with structured data, user roles, and simplified management",
      sk: "Centralizovaný systém so štruktúrovanými dátami, používateľskými rolami a jednoduchšou správou",
    },

    image: "/previews/project-epassport.svg",

    hero: {
      title: "ePassport System",
      summary: {
        en: "A mobile-first system for collecting and managing volunteer data, replacing manual PDF workflows with a structured platform including authentication and admin features.",
        sk: "Mobile-first systém na zber a správu dát o dobrovoľníkoch, ktorý nahradil manuálne PDF procesy štruktúrovanou platformou vrátane autentifikácie a administrácie.",
      },
    },

    problem: {
      en: `Volunteer data was previously collected through multiple PDF and Word documents, resulting in inconsistent structure, manual processing, and poor data management. There was no centralized system, no user roles, and no way to efficiently manage or validate submissions.`,
      sk: `Dáta o dobrovoľníkoch sa zbierali cez rôzne PDF a Word dokumenty, čo viedlo k nekonzistentnej štruktúre, manuálnemu spracovaniu a slabej správe dát. Chýbal centralizovaný systém, používateľské roly aj efektívna správa a validácia údajov.`,
    },

    approach: {
      en: `Instead of building a native mobile app, I chose a mobile-first web application to reduce complexity and ensure accessibility. The focus was on creating a structured form flow, implementing authentication, and building an admin interface for managing submitted data.`,
      sk: `Namiesto vývoja natívnej mobilnej aplikácie som zvolil mobile-first webové riešenie, ktoré znižuje komplexnosť a zároveň zabezpečuje dostupnosť. Dôraz bol na štruktúrovaný formulárový tok, implementáciu autentifikácie a vytvorenie administračného rozhrania na správu dát.`,
    },

    architecture: {
      en: [
        "Frontend: Vue application with Vuetify UI framework",
        "State: centralized handling of form and user data",
        "Backend: Supabase (PostgreSQL, authentication)",
        "Auth: user registration and login system",
        "Admin: interface for managing submitted data",
        "Design: UI based on Figma design system",
        "Deployment: Netlify with CI/CD pipeline for automated builds",
      ],
      sk: [
        "Frontend: Vue aplikácia s Vuetify UI frameworkom",
        "State: centralizovaná správa formulárov a používateľských dát",
        "Backend: Supabase (PostgreSQL, autentifikácia)",
        "Auth: registrácia a prihlasovanie používateľov",
        "Admin: rozhranie na správu odoslaných dát",
        "Dizajn: UI podľa návrhu vo Figme",
        "Deployment: Netlify s CI/CD pipeline pre automatické buildy",
      ],
    },

    decisions: [
      {
        title: {
          en: "Mobile-first instead of native app",
          sk: "Mobile-first namiesto natívnej appky",
        },
        detail: {
          en: "A web-based solution reduced development time while maintaining full mobile usability, eliminating the need for app store distribution.",
          sk: "Webové riešenie znížilo čas vývoja a zároveň zachovalo plnohodnotnú použiteľnosť na mobile bez potreby distribúcie cez app store.",
        },
      },
      {
        title: {
          en: "Supabase as backend solution",
          sk: "Supabase ako backend riešenie",
        },
        detail: {
          en: "Supabase provided authentication and database capabilities out of the box, allowing focus on product features instead of backend infrastructure.",
          sk: "Supabase poskytol autentifikáciu aj databázu bez potreby budovania backendu, čo umožnilo sústrediť sa na samotný produkt.",
        },
      },
      {
        title: {
          en: "Vuetify for UI consistency",
          sk: "Vuetify pre konzistentné UI",
        },
        detail: {
          en: "Using Vuetify ensured consistent UI components and faster development aligned with the provided Figma design.",
          sk: "Použitie Vuetify zabezpečilo konzistentné UI komponenty a rýchlejší vývoj v súlade s návrhom vo Figme.",
        },
      },
      {
        title: {
          en: "Structured form flow",
          sk: "Štruktúrovaný formulárový tok",
        },
        detail: {
          en: "Breaking the form into steps improved usability and reduced friction during data entry.",
          sk: "Rozdelenie formulára do krokov zlepšilo použiteľnosť a znížilo trenie pri vypĺňaní.",
        },
      },
    ],

    outcome: {
      en: `Replaced manual workflows with a centralized system including authentication and admin tools. Data collection became structured, easier to manage, and significantly more reliable.`,
      sk: `Nahradenie manuálnych procesov centralizovaným systémom s autentifikáciou a administráciou. Zber dát sa stal štruktúrovaným, jednoduchším na správu a výrazne spoľahlivejším.`,
    },

    stack: ["Vue", "Vuetify", "Supabase", "JavaScript", "SCSS"],

    improvements: {
      en: [
        "Add role-based access control for more granular permissions",
        "Introduce server-side validation for higher data integrity",
        "Improve analytics for tracking user behavior and form completion",
      ],
      sk: [
        "Pridať role-based access control pre detailnejšie oprávnenia",
        "Zaviesť server-side validáciu pre vyššiu integritu dát",
        "Zlepšiť analytiku pre sledovanie správania používateľov",
      ],
    },
  },

  {
    slug: "photographer-portfolio",
    title: "Photographer Portfolio",

    description: {
      en: "Minimalist portfolio website focused on presenting visual content with clarity, performance, and smooth user experience.",
      sk: "Minimalistická portfólio stránka zameraná na prezentáciu vizuálneho obsahu s dôrazom na prehľadnosť, výkon a používateľský zážitok.",
    },

    result: {
      en: "Fast-loading website with clear visual hierarchy and distraction-free user experience",
      sk: "Rýchla webová stránka s jasnou vizuálnou hierarchiou a nerušeným používateľským zážitkom",
    },

    image: "/previews/project-photographer.svg",

    hero: {
      title: "Photographer Portfolio",
      summary: {
        en: "A minimalist portfolio website built to highlight photography work — focusing on performance, layout clarity, and seamless user experience.",
        sk: "Minimalistická portfólio stránka navrhnutá na prezentáciu fotografií — s dôrazom na výkon, prehľadnosť layoutu a plynulý používateľský zážitok.",
      },
    },

    problem: {
      en: `The goal was to present high-quality visual content without distracting UI elements. The challenge was to maintain a balance between aesthetics and performance while ensuring the site works smoothly across all devices.`,
      sk: `Cieľom bolo prezentovať kvalitný vizuálny obsah bez rušivých prvkov UI. Výzvou bolo nájsť rovnováhu medzi estetikou a výkonom a zároveň zabezpečiť plynulé fungovanie na všetkých zariadeniach.`,
    },

    approach: {
      en: `I focused on implementing the provided design with precision while ensuring optimal performance and responsiveness. The layout was built to keep attention on content, with minimal interface elements and smooth navigation.`,
      sk: `Zameral som sa na presnú implementáciu dodaného dizajnu pri zachovaní optimálneho výkonu a responzivity. Layout bol navrhnutý tak, aby sústredil pozornosť na obsah s minimom rušivých prvkov a plynulou navigáciou.`,
    },

    architecture: {
      en: [
        "Frontend: responsive web layout focused on visual content",
        "Layout: grid-based structure for image presentation",
        "Images: optimized for performance and fast loading",
        "UX: minimal interface with focus on content",
        "Navigation: simple and intuitive user flow",
        "Deployment: Netlify with CI/CD pipeline",
      ],
      sk: [
        "Frontend: responzívny web s dôrazom na vizuálny obsah",
        "Layout: gridová štruktúra pre prezentáciu fotografií",
        "Obrázky: optimalizované pre výkon a rýchle načítanie",
        "UX: minimalistické rozhranie zamerané na obsah",
        "Navigácia: jednoduchý a intuitívny používateľský tok",
        "Deployment: Netlify s CI/CD pipeline",
      ],
    },

    decisions: [
      {
        title: {
          en: "Minimal UI over feature-heavy design",
          sk: "Minimalistické UI namiesto komplexného dizajnu",
        },
        detail: {
          en: "Reducing interface elements ensured that the focus remained on the photography rather than the UI.",
          sk: "Minimalizácia prvkov rozhrania zabezpečila, že pozornosť zostáva na fotografiách, nie na UI.",
        },
      },
      {
        title: {
          en: "Performance-first image handling",
          sk: "Dôraz na výkon pri práci s obrázkami",
        },
        detail: {
          en: "Optimized images to maintain fast load times without compromising visual quality.",
          sk: "Optimalizácia obrázkov pre zachovanie rýchlosti načítania bez straty kvality.",
        },
      },
      {
        title: {
          en: "Responsive layout from the start",
          sk: "Responzívny layout od začiatku",
        },
        detail: {
          en: "Ensured consistent experience across mobile, tablet, and desktop devices.",
          sk: "Zabezpečenie konzistentného zážitku na mobile, tablete aj desktope.",
        },
      },
    ],

    outcome: {
      en: `Delivered a clean and performant portfolio that highlights visual content while maintaining usability and speed across devices.`,
      sk: `Výsledkom je čisté a výkonné portfólio, ktoré efektívne prezentuje obsah pri zachovaní použiteľnosti a rýchlosti na všetkých zariadeniach.`,
    },

    stack: ["HTML", "CSS", "JavaScript"],

    improvements: {
      en: [
        "Add lazy loading for further performance improvements",
        "Introduce subtle animations to enhance user experience",
        "Improve SEO structure for better discoverability",
      ],
      sk: [
        "Pridať lazy loading pre ďalšie zlepšenie výkonu",
        "Doplniť jemné animácie pre lepší UX",
        "Zlepšiť SEO štruktúru pre lepšiu dohľadateľnosť",
      ],
    },
  },

  {
    slug: "checkout-revamp",
    title: "Checkout Revamp",
    description: {
      en: "Rebuilt a multi-step checkout flow for a subscription SaaS to reduce drop-off and increase conversions.",
      sk: "Prepracovanie viacstupňového checkout procesu pre SaaS produkt s predplatným — zníženie opustenia a zvýšenie konverzií.",
    },
    result: {
      en: "+22% checkout conversion rate",
      sk: "+22% miera konverzie checkoutu",
    },
    image: "/previews/project-checkout.svg",
    hero: {
      title: "Checkout Revamp",
      summary: {
        en: "A full rebuild of the checkout experience for a subscription SaaS product, focused on eliminating friction at every step of the funnel.",
        sk: "Kompletné prepracovanie checkout skúsenosti pre SaaS produkt s predplatným — zamerané na elimináciu trenia v každom kroku lievika.",
      },
    },
    problem: {
      en: `The existing checkout had a 4-step flow with redundant fields, unclear error states, and no visible progress indicator. Analytics showed a 68% abandonment rate at step 2. Users were dropping off due to cognitive load and confusion — not lack of intent.`,
      sk: `Existujúci checkout mal 4-krokový tok s redundantnými poľami, nejasným stavom chýb a bez viditeľného indikátora progresu. Analytika ukázala 68% mieru opustenia v kroku 2. Používatelia odchádzali kvôli kognitívnej záťaži a zmäteniu — nie pre nedostatok záujmu.`,
    },
    approach: {
      en: `Analysed the funnel data to pinpoint exactly where users stopped. Redesigned the flow by collapsing 4 steps into 2 using progressive disclosure. Reduced required fields to the minimum, added inline validation on blur, and ensured the CTA was always visible on mobile.`,
      sk: `Analyzoval som dáta z lievika, aby som presne zistil, kde používatelia prestávajú. Prepracoval som tok zlúčením 4 krokov do 2 pomocou progresívneho odkrývania. Zredukoval som povinné polia na minimum, pridal inline validáciu pri strate fokusu a zabezpečil, aby CTA bolo vždy viditeľné na mobile.`,
    },
    architecture: {
      en: [
        "Frontend: Vue 3 SPA embedded within an existing product shell",
        "Form state: Reactive composable with field-level validation logic",
        "Payment: Stripe Elements integration",
        "Analytics: Custom event tracking on each step transition and error state",
      ],
      sk: [
        "Frontend: Vue 3 SPA zabudovaný do existujúceho produktového shellu",
        "Stav formulára: Reaktívny composable s validačnou logikou na úrovni poľa",
        "Platba: Stripe Elements integrácia",
        "Analytika: Vlastné sledovanie udalostí na každom prechode krokov a stave chyby",
      ],
    },
    decisions: [
      {
        title: {
          en: "Progressive disclosure over a full form",
          sk: "Progresívne odkrývanie namiesto plného formulára",
        },
        detail: {
          en: "Showing all fields at once increased perceived complexity. Splitting into two logical stages — identity, then payment — matched the user's mental model and reduced cognitive load at the critical drop-off point.",
          sk: "Zobrazenie všetkých polí naraz zvyšovalo vnímanú zložitosť. Rozdelenie do dvoch logických fáz — identita, potom platba — zodpovedalo mentálnemu modelu používateľa a znížilo kognitívnu záťaž na kritickom bode opustenia.",
        },
      },
      {
        title: {
          en: "Inline validation over submit-time errors",
          sk: "Inline validácia namiesto chýb pri odoslaní",
        },
        detail: {
          en: "Errors shown only on submit forced users to re-scan the entire form. Real-time validation on blur gave immediate feedback, cutting error-related abandonment significantly.",
          sk: "Chyby zobrazené až pri odoslaní nútili používateľov znova prečítať celý formulár. Validácia v reálnom čase pri strate fokusu poskytovala okamžitú spätnú väzbu, čo výrazne znížilo opustenie spôsobené chybami.",
        },
      },
      {
        title: {
          en: "Sticky CTA on mobile",
          sk: "Sticky CTA na mobile",
        },
        detail: {
          en: "The original submit button was below the fold on small screens. Pinning it to the bottom ensured it was always accessible without requiring the user to scroll.",
          sk: "Pôvodné tlačidlo odoslania bolo na malých obrazovkách pod viditeľnou oblasťou. Jeho pripnutie na spodok zaručilo, že bolo vždy dostupné bez nutnosti scrollovania.",
        },
      },
    ],
    outcome: {
      en: `Checkout conversion increased by 22% within 30 days of launch. Step-2 abandonment dropped from 68% to 41%. Average time-to-complete decreased by 35 seconds. No regression in payment failure rate.`,
      sk: `Miera konverzie checkoutu vzrástla o 22% do 30 dní od spustenia. Opustenie v kroku 2 kleslo zo 68% na 41%. Priemerný čas dokončenia sa znížil o 35 sekúnd. Žiadna regresia v miere zlyhaní platby.`,
    },
    stack: ["Vue 3", "TypeScript", "Stripe Elements", "SCSS"],
    improvements: {
      en: [
        "A/B test single-page vs. two-step layout to validate the assumption at scale",
        "Add address autocomplete to further reduce manual input",
      ],
      sk: [
        "A/B testovať jednostránkové vs. dvojkrokové rozloženie na overenie hypotézy v reálnom meradle",
        "Pridať autocomplete adresy pre ďalšie zníženie manuálneho zadávania",
      ],
    },
  },

  {
    slug: "seo-migration",
    title: "SEO-Led Platform Migration",
    description: {
      en: "Migrated a client-rendered Vue SPA to server-side rendering to fix crawlability, improve Core Web Vitals, and recover organic traffic.",
      sk: "Migrácia klientom renderovaného Vue SPA na server-side rendering — oprava indexovateľnosti, zlepšenie Core Web Vitals a obnova organickej návštevnosti.",
    },
    result: {
      en: "+64% organic search traffic in 90 days",
      sk: "+64% organická návštevnosť za 90 dní",
    },
    image: "/previews/project-seo.svg",
    hero: {
      title: "SEO-Led Platform Migration",
      summary: {
        en: "Migrated a Vue SPA to Nuxt 3 with full SSR — fixing indexability, cutting LCP from 4.2s to 1.4s, and recovering organic search traffic.",
        sk: "Migrácia Vue SPA na Nuxt 3 s plným SSR — oprava indexovateľnosti, zníženie LCP zo 4,2s na 1,4s a obnova organickej návštevnosti.",
      },
    },
    problem: {
      en: `The platform was a client-rendered Vue SPA. Google could not reliably index the content, resulting in near-zero organic traffic despite strong content quality. LCP exceeded 4s on mobile due to large JS bundles blocking first render. The SEO issue was entirely architectural — no amount of content work would fix it without changing how the page rendered.`,
      sk: `Platforma bola klientom renderované Vue SPA. Google nedokázal spoľahlivo indexovať obsah, čo malo za následok takmer nulovú organickú návštevnosť napriek kvalitným obsahom. LCP prekročil 4s na mobile kvôli veľkým JS balíčkom blokujúcim prvý render. SEO problém bol čisto architektonický — žiadna obsahová práca by ho nevyriešila bez zmeny spôsobu renderovania stránky.`,
    },
    approach: {
      en: `Evaluated SSR, SSG, and ISR for each page type before choosing. Selected full SSR for dynamic product pages and static generation for marketing content. Migrated incrementally — routing and layouts first, then page by page — to ship early and catch integration issues before they compounded.`,
      sk: `Pred rozhodnutím som vyhodnotil SSR, SSG a ISR pre každý typ stránky. Zvolil som plné SSR pre dynamické produktové stránky a statickú generáciu pre marketingový obsah. Migroval som postupne — routing a layouty najprv, potom stránku po stránke — aby sme mohli začať doručovať skoro a zachytiť integračné problémy skôr, ako sa nahromadia.`,
    },
    architecture: {
      en: [
        "Framework: Nuxt 3 replacing a raw Vue CLI app",
        "Rendering: SSR for dynamic pages, SSG for static marketing content",
        "Meta: useHead and useSeoMeta composables per page",
        "Sitemap: Auto-generated via nuxt-simple-sitemap",
        "Images: Optimised with @nuxt/image",
      ],
      sk: [
        "Framework: Nuxt 3 nahrádzajúci Vue CLI aplikáciu",
        "Rendering: SSR pre dynamické stránky, SSG pre statický marketingový obsah",
        "Meta: useHead a useSeoMeta composables na každej stránke",
        "Sitemap: Automaticky generovaná cez nuxt-simple-sitemap",
        "Obrázky: Optimalizované cez @nuxt/image",
      ],
    },
    decisions: [
      {
        title: {
          en: "SSR over pre-rendering",
          sk: "SSR namiesto pre-renderingu",
        },
        detail: {
          en: "Content was user-specific and updated frequently. Pre-rendering would have required cache invalidation logic that added complexity and risk. SSR served fresh content on every request with acceptable TTFB at this scale.",
          sk: "Obsah bol používateľsky špecifický a často aktualizovaný. Pre-rendering by vyžadoval logiku invalidácie cache, ktorá pridávala zložitosť a riziko. SSR doručoval čerstvý obsah pri každej požiadavke s akceptovateľným TTFB pri tejto veľkosti.",
        },
      },
      {
        title: { en: "Incremental migration", sk: "Postupná migrácia" },
        detail: {
          en: "Rewriting the entire app in a single sprint introduced too much risk. Migrating route by route allowed early shipment and isolated integration issues before they compounded into a larger problem.",
          sk: "Prepísanie celej aplikácie v jednom šprinte prinieslo príliš veľké riziko. Migrácia po routách umožnila skoré odovzdanie a izolovanie integračných problémov skôr, ako sa zväčšili do väčšieho problému.",
        },
      },
      {
        title: {
          en: "Structured data on every key page",
          sk: "Štruktúrované dáta na každej kľúčovej stránke",
        },
        detail: {
          en: "Added JSON-LD schema markup for product, article, and breadcrumb types. This directly improved rich snippet eligibility and click-through rates in search results.",
          sk: "Pridali sme JSON-LD schema markup pre typy product, article a breadcrumb. To priamo zlepšilo oprávnenosť na rich snippety a mieru preklikov vo výsledkoch vyhľadávania.",
        },
      },
    ],
    outcome: {
      en: `Organic traffic increased 64% in 90 days post-launch. LCP dropped from 4.2s to 1.4s on mobile. The site achieved 91+ Lighthouse scores across all four categories. First page rankings appeared within 6 weeks.`,
      sk: `Organická návštevnosť vzrástla o 64% za 90 dní od spustenia. LCP kleslo zo 4,2s na 1,4s na mobile. Stránka dosiahla 91+ Lighthouse skóre vo všetkých štyroch kategóriách. Prvé stránky výsledkov sa objavili do 6 týždňov.`,
    },
    stack: [
      "Nuxt 3",
      "Vue 3",
      "TypeScript",
      "@nuxt/image",
      "nuxt-simple-sitemap",
    ],
    improvements: {
      en: [
        "Implement partial hydration for marketing pages to reduce JS payload further",
        "Add server-side A/B testing at the edge layer",
      ],
      sk: [
        "Implementovať partial hydration pre marketingové stránky na ďalšie zníženie JS payloadu",
        "Pridať server-side A/B testovanie na edge vrstve",
      ],
    },
  },

  {
    slug: "dashboard-optimization",
    title: "Dashboard Performance Optimization",
    description: {
      en: "Resolved severe rendering bottlenecks in an analytics dashboard that was freezing on load and blocking user interactions.",
      sk: "Vyriešenie závažných renderovacích úzkych miest v analytickom dashboarde, ktorý zamŕzal pri načítaní a blokoval interakcie používateľov.",
    },
    result: {
      en: "-41% time to interactive, interactions under 200ms",
      sk: "-41% time to interactive, interakcie pod 200ms",
    },
    image: "/previews/project-performance.svg",
    hero: {
      title: "Dashboard Performance Optimization",
      summary: {
        en: "Eliminated main-thread blocking in a data-heavy analytics dashboard rendering thousands of rows and real-time updates.",
        sk: "Eliminácia blokovania hlavného vlákna v dátovo náročnom analytickom dashboarde renderujúcom tisíce riadkov a real-time aktualizácie.",
      },
    },
    problem: {
      en: `The dashboard rendered 5,000+ rows in a single unvirtualised component tree. Initial load blocked the main thread for over 3 seconds. Sorting or filtering triggered full re-renders, making the interface feel broken. Users had started reporting the dashboard as unusable on lower-end hardware.`,
      sk: `Dashboard renderoval 5 000+ riadkov v jednom nevirtualizovanom strome komponentov. Počiatočné načítanie blokovalo hlavné vlákno viac ako 3 sekundy. Triedenie alebo filtrovanie spúšťalo plný re-render, čo robilo rozhranie nefunkčným. Používatelia začali hlásiť dashboard ako nepoužiteľný na menej výkonnom hardvéri.`,
    },
    approach: {
      en: `Profiled the component tree with Vue DevTools and Chrome Performance panel before touching any code. Identified three root causes: unvirtualised list rendering, unnecessary computed re-evaluations on unrelated state changes, and synchronous data transforms running on the main thread. Fixed in order of impact.`,
      sk: `Pred zmenou akéhokoľvek kódu som profiloval strom komponentov pomocou Vue DevTools a Chrome Performance panelu. Identifikoval som tri príčiny: nevirtualizované renderovanie zoznamov, zbytočné prehodnocovanie computed vlastností pri nesúvisiacich zmenách stavu a synchronné dátové transformácie bežiace na hlavnom vlákne. Opravil som ich v poradí podľa dopadu.`,
    },
    architecture: {
      en: [
        "Frontend: Vue 3 with targeted, measured performance changes",
        "List rendering: Virtual scrolling via vue-virtual-scroller",
        "Data processing: Web Worker handling sort and filter transforms",
        "State: Computed properties with explicit, narrow dependency tracking",
        "Code splitting: Chart components loaded with defineAsyncComponent",
      ],
      sk: [
        "Frontend: Vue 3 s cielenou, nameranú optimalizáciou",
        "Renderovanie zoznamov: Virtuálny scrolling cez vue-virtual-scroller",
        "Spracovanie dát: Web Worker pre operácie triedenia a filtrovania",
        "Stav: Computed vlastnosti s explicitným, úzkym sledovaním závislostí",
        "Code splitting: Chart komponenty načítané cez defineAsyncComponent",
      ],
    },
    decisions: [
      {
        title: {
          en: "Virtual scrolling only where it measured",
          sk: "Virtuálny scrolling len tam, kde to nameráme",
        },
        detail: {
          en: "Not every list needed virtualisation. Applied it only to tables exceeding 500 rows after profiling. Avoided adding abstraction complexity where the performance gain was negligible.",
          sk: "Nie každý zoznam potreboval virtualizáciu. Aplikoval som ju len na tabuľky s viac ako 500 riadkami po profilovaní. Vyhol som sa pridávaniu abstrakčnej zložitosti tam, kde bol výkonnostný zisk zanedbateľný.",
        },
      },
      {
        title: {
          en: "Web Worker for data transforms",
          sk: "Web Worker pre dátové transformácie",
        },
        detail: {
          en: "Moving filter and sort logic off the main thread eliminated UI jank during heavy operations. Workers communicated via structured clone — no shared-state race conditions.",
          sk: "Presunutie logiky filtrovania a triedenia z hlavného vlákna eliminovalo trhanie UI počas náročných operácií. Workery komunikovali cez structured clone — žiadne race conditions so zdieľaným stavom.",
        },
      },
      {
        title: {
          en: "Code-split chart components",
          sk: "Code-split chart komponenty",
        },
        detail: {
          en: "Chart libraries accounted for a large share of the initial bundle. Lazy loading them reduced bundle size by 34% and directly improved TTI.",
          sk: "Knižnice grafov tvorili veľkú časť počiatočného balíka. Ich lazy načítanie znížilo veľkosť balíka o 34% a priamo zlepšilo TTI.",
        },
      },
      {
        title: {
          en: "Profile first, optimise second",
          sk: "Najprv profilovanie, potom optimalizácia",
        },
        detail: {
          en: "Every change was preceded by a measurement. This prevented wasted effort on already-fast components and kept the diff small, reviewable, and easy to revert.",
          sk: "Každá zmena bola predchádzaná meraním. To zabránilo mrhaniu úsilím na už rýchle komponenty a udržalo diff malý, prehľadný a ľahko zvratiteľný.",
        },
      },
    ],
    outcome: {
      en: `Time to Interactive dropped 41%. Main thread blocking during interactions went from 3s+ to under 200ms. User-reported freezing complaints stopped after the first deployment. Dashboard now handles 10,000+ rows without degradation.`,
      sk: `Time to Interactive klesol o 41%. Blokovanie hlavného vlákna počas interakcií kleslo z 3s+ na menej ako 200ms. Sťažnosti používateľov na zamŕzanie prestali po prvom nasadení. Dashboard teraz zvláda 10 000+ riadkov bez degradácie.`,
    },
    stack: [
      "Vue 3",
      "TypeScript",
      "vue-virtual-scroller",
      "Web Workers",
      "Chart.js",
    ],
    improvements: {
      en: [
        "Move real-time data to a WebSocket connection for lower latency updates",
        "Add server-side pagination to reduce initial data payload on slow connections",
      ],
      sk: [
        "Presunúť real-time dáta na WebSocket spojenie pre nižšiu latenciu aktualizácií",
        "Pridať server-side stránkovanie pre zníženie počiatočného dátového payloadu na pomalých pripojeniach",
      ],
    },
  },
];

export const getProjectBySlug = (slug: string): ProjectDetail | undefined =>
  projects.find(p => p.slug === slug)
