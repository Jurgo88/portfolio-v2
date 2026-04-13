export interface ExperienceItem {
  role: { en: string; sk: string }
  company: { en: string; sk: string }
  period: { en: string; sk: string }
  description: { en: string; sk: string }
  tags: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: { en: 'IT Application Developer', sk: 'IT Application Developer' },
    company: { en: 'Kanadevia Inova', sk: 'Kanadevia Inova' },
    period: { en: '2025 – Present', sk: '2025 – dnes' },
    description: {
      en: 'Developing and implementing new functionalities for an internal application supporting business process management. Administering and supporting the application including configuration and user support. Working with the database to query, update, and maintain data, and managing user access via Active Directory.',
      sk: 'Vývoj a implementácia nových funkcií internej aplikácie pre správu obchodných procesov. Administrácia a podpora aplikácie vrátane konfigurácie a podpory používateľov. Práca s databázou a správa prístupov cez Active Directory.',
    },
    tags: ['PHP', 'SQL', 'PhpStorm', 'SQL Server', 'Active Directory'],
  },
  {
    role: { en: 'Fullstack Developer', sk: 'Fullstack Developer' },
    company: { en: 'NDS – National Motorway Company', sk: 'NDS – Národná diaľničná spoločnosť' },
    period: { en: '2023 – 2024', sk: '2023 – 2024' },
    description: {
      en: 'Developed an information system for highway workers to record events and provide solutions. Built server-side logic with PHP Laravel including routing and REST APIs. Created client-side views using Vue.js as the frontend layer.',
      sk: 'Vývoj informačného systému pre pracovníkov diaľnic na evidenciu udalostí a riešení. Serverová logika v PHP Laravel vrátane routingu a REST API. Tvorba klientskych pohľadov vo Vue.js.',
    },
    tags: ['PHP', 'Laravel', 'Vue.js', 'REST API', 'BootstrapVue'],
  },
  {
    role: { en: 'IT Analyst', sk: 'IT Analytik' },
    company: { en: 'VÚB Banka – Intesa Sanpaolo', sk: 'VÚB Banka – Intesa Sanpaolo' },
    period: { en: '2022 – 2023', sk: '2022 – 2023' },
    description: {
      en: 'Developed diagrams to describe and lay out logical operational steps. Troubleshot incidents reported by end-users, scheduled system changes, and identified permanent solutions. Analyzed, detected, and corrected technical problems and deficiencies.',
      sk: 'Tvorba diagramov pre popis a návrh logických operačných krokov. Riešenie incidentov nahlásených koncovými používateľmi, plánovanie systémových zmien a hľadanie trvalých riešení. Analýza a oprava technických problémov.',
    },
    tags: ['BPMN', 'Visio', 'UML', 'SQL'],
  },
  {
    role: { en: 'Frontend Developer', sk: 'Frontend Developer' },
    company: { en: 'Foundation', sk: 'Foundation' },
    period: { en: '2018 – 2021', sk: '2018 – 2021' },
    description: {
      en: 'Implemented responsive designs and ensured cross-browser compatibility to enhance user experience. Collaborated with the design team to translate UX/UI designs into interactive web pages.',
      sk: 'Implementácia responzívnych dizajnov a zabezpečenie kompatibility naprieč prehliadačmi. Spolupráca s dizajnérskym tímom pri prevode UX/UI návrhov do interaktívnych webových stránok.',
    },
    tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'JSP', 'Stripes', 'Git'],
  },
  {
    role: { en: 'Software Engineer', sk: 'Software Engineer' },
    company: { en: 'Accenture', sk: 'Accenture' },
    period: { en: '2017 – 2018', sk: '2017 – 2018' },
    description: {
      en: 'Worked on a commercial project for an insurance company and a CMS for an international company. Responsible for application design, website content, and infrastructure maintenance.',
      sk: 'Práca na komerčnom projekte pre poisťovňu a CMS pre medzinárodnú spoločnosť. Návrh aplikácie, tvorba obsahu webu a údržba infraštruktúry.',
    },
    tags: ['Sitecore', 'AngularJS', 'C#', '.NET', 'Azure', 'Bootstrap'],
  },
  {
    role: { en: '.NET Developer Junior', sk: '.NET Developer Junior' },
    company: { en: 'Ensentia', sk: 'Ensentia' },
    period: { en: '2016 – 2017', sk: '2016 – 2017' },
    description: {
      en: 'Specialized in frontend development using the .NET MVC framework. Designed and implemented user-friendly views for internal projects including a mail tracking system.',
      sk: 'Špecializácia na frontend vývoj v .NET MVC frameworku. Návrh a implementácia používateľsky prívetivých pohľadov pre interné projekty vrátane systému sledovania pošty.',
    },
    tags: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'C#', '.NET', 'ASP.NET MVC', 'T-SQL'],
  },
]
