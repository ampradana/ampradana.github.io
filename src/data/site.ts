// ─────────────────────────────────────────────────────────────
// Single source of truth for all site content.
// Edit text here — components render it. No need to touch markup.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Andika Malraherawan Pradana',
  shortName: 'Andika',
  initials: 'AP',
  role: 'ERP Odoo Developer & Implementor',
  // One-line value proposition shown under the name.
  pitch:
    'Odoo Developer & ERP Functional Analyst (v10–v18) for FMCG & Supply Chain. I turn operational pain points into systems that actually work — from Distributor Management and field sales automation to POS and central kitchen operations.',
  location: 'South Jakarta, DKI Jakarta, Indonesia',
  available: true,
  availableText: 'Open to opportunities',
  experienceYears: '5+',
  photo: '/andika.jpg',
  cv: '/cv_andika.pdf',
};

export const social = {
  email: 'andikamalraherawanpradana@gmail.com',
  phone: '+62 822-2753-9417',
  linkedin: 'https://linkedin.com/in/andikamp',
  linkedinHandle: 'andikamp',
  github: 'https://github.com/ampradana',
  githubHandle: 'ampradana',
  website: 'ampradana.my.id',
  whatsapp:
    'https://api.whatsapp.com/send/?phone=6282227539417&text&type=phone_number&app_absent=0',
  whatsappLabel: '0822-2753-9417',
};

// ── CV-specific content (used by the ATS résumé page /cv) ──────

// Plain professional summary for the résumé header (ATS reads this first).
export const cvSummary =
  'ERP Odoo Developer and Functional Analyst with 5+ years of experience across Odoo v10–v18 (Community), focused on the FMCG and Supply Chain industry. Proven track record delivering end-to-end solutions — custom module development, REST API and middleware integration, ERP migrations, and POS systems — that streamline operations, cut manual work, and drive measurable business results.';

// Skills grouped for a clean, parseable résumé list.
export const cvSkills: { group: string; items: string[] }[] = [
  { group: 'ERP & Frameworks', items: ['Odoo Framework (v10–v18, Community)', 'OWL', 'QWeb'] },
  { group: 'Programming', items: ['Python', 'JavaScript', 'SQL', 'HTML', 'XML'] },
  { group: 'Databases & Data', items: ['PostgreSQL', 'ETL pipelines', 'Data Warehouse integration'] },
  { group: 'Integration', items: ['REST API', 'Middleware development', 'Microsoft AX', 'JSON/OAuth', 'WhatsApp Business API (Bird/Meta)', 'Webhooks'] },
  { group: 'Infrastructure & DevOps', items: ['Linux Server (Ubuntu/Debian)', 'Docker', 'Git/GitHub', 'CI/CD', 'On-premise & cloud (AWS, GCP)'] },
  { group: 'Practices', items: ['Agile & Scrum', 'Business analysis', 'UAT', 'Project management', 'Team leadership'] },
];

export const languages = [
  { name: 'Indonesian', level: 'Native' },
  { name: 'English', level: 'Professional (EPrT score: 480)' },
];

export const organizations = [
  { role: 'Vice Chairman', org: 'Himpunan Mahasiswa Teknik Komputer (HMTK), Telkom University', year: '2017' },
  { role: 'Minister of Strategic Action Studies', org: 'Badan Eksekutif Mahasiswa (BEM), Telkom University', year: '2018' },
];

export const about: string[] = [
  "Hi, I'm Andika 👋 I started my journey as an Odoo Developer, focusing on the technical side — building custom modules, integrating APIs, handling deployments, and keeping servers running smoothly. Along the way I grew into the functional side too, working closely with users, analyzing business processes, and leading ERP implementations end-to-end.",
  "I've worked with Odoo from version 10 up to 18 (Community), especially in the FMCG industry. My projects span Sales, Inventory, HRIS, CRM, Purchase, Distributor Management, Supply Chain, and recently POS systems for retail, restaurant, and event operations.",
  'What I enjoy most is bridging the gap between tech and business — making sure what we build not only works, but actually solves real problems. Always open to connect, share ideas, and talk about ERP, Odoo, or tech in general 🚀',
];

// `icon` = Simple Icons slug (rendered via cdn.simpleicons.org), `color` = brand hex.
export const skills = [
  { name: 'Odoo Framework', desc: 'v10–v18 Community. Sales, Inventory, CRM, POS, HRIS, Purchase', icon: 'odoo', color: '714B67' },
  { name: 'Python', desc: 'Backend logic, custom addons, REST API & middleware development', icon: 'python', color: '3776AB' },
  { name: 'SQL & PostgreSQL', desc: 'Database design, ETL pipelines, Data Warehouse integration', icon: 'postgresql', color: '4169E1' },
  { name: 'HTML / XML / QWeb', desc: 'Odoo views, report templates, custom UI modifications', icon: 'html5', color: 'E34F26' },
  { name: 'Linux Server', desc: 'Ubuntu & Debian — server setup, maintenance, deployment', icon: 'linux', color: '4B5563' },
  { name: 'Cloud (AWS & GCP)', desc: 'Web service hosting, scalable cloud deployment', icon: 'googlecloud', color: '4285F4' },
  { name: 'Docker & Git', desc: 'Containerization, version control, CI/CD workflows', icon: 'docker', color: '2496ED' },
  { name: 'JavaScript', desc: 'Odoo OWL/POS frontend, KDS dashboards, WebSocket realtime UI', icon: 'javascript', color: 'E6B800' },
  { name: 'WhatsApp Business API', desc: 'Conversational chatbot via Bird (Meta BSP) — flows, templates, webhooks', icon: 'whatsapp', color: '25D366' },
];

export const experience = [
  {
    role: 'Technical & Functional Odoo Developer SPV',
    company: 'PT Akasha Wira International, Tbk.',
    period: 'Mar 2021 – Present',
    points: [
      'Development on Odoo 11 framework — Sales, Inventory, Purchase, CRM, SFA Reporting & Middleware',
      'Manage & maintain Odoo for fieldforce and Distributor Management System',
      'Integration with Microsoft AX ERP and ETL Data Warehouse pipelines',
      'Internal Android app integration & REST API development for fieldforce',
      'Full migration: Odoo v11 → v14 → v16',
      'REST API integration for Sampoerna (Mitra AYO SRC)',
      "OMNIX — IT team leader for the Olie's Restaurant POS & ERP platform: HQ-centric multi-outlet architecture, central kitchen manufacturing, kiosk & KDS, 3 outlets live on Odoo 18",
    ],
    impact: [
      '500+ fieldforce users on platform',
      'Manual reporting ↓ 70% → real-time dashboard',
      '200+ active distributor routes managed',
      'Order processing time ↓ from ~4 hrs to <30 min',
      'Stockout incidents ↓ ~40% via automated reorder alerts',
      '3 system integrations: MS AX · Android SFA · ETL DWH',
      'OMNIX: 3 outlets live, 24,000+ POS orders per 14 days',
    ],
  },
  {
    role: 'Odoo Developer & Project Leader',
    company: 'PT Fujicon Priangan Perdana',
    period: 'Apr 2019 – 2021',
    points: [
      'Odoo customization & addon development (v10, v12, v13, v14)',
      'Lead technical & functional Odoo implementation across projects',
      'Business & system process analysis, design system architecture',
      'Agile & Scrum project management, team coordination',
      'QA, bug fixing, UAT, software testing',
      'DevOps — server setup & web service management',
    ],
    impact: [],
  },
  {
    role: 'IT Support – Outsourcing',
    company: 'Rektorat Telkom University',
    period: 'Feb – Jun 2018',
    points: [
      'Campus accreditation support & document preparation',
      'Database creation & management',
      'Internet network infrastructure setup',
    ],
    impact: [],
  },
];

// Optional fields: `role` / `period` add a byline under the title,
// `featured` highlights the card as flagship work.
export type Project = {
  tag: string;
  title: string;
  role?: string;
  period?: string;
  featured?: boolean;
  desc: string;
  meta: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    tag: 'Flagship · F&B · POS & ERP',
    title: "OMNIX — Olie's Restaurant POS & ERP",
    role: 'IT Team Leader & Lead Developer',
    period: '2025 – Present · full project ownership',
    featured: true,
    desc: "OMNIX is the POS and ERP platform running the Olie's fastfood chain end-to-end, and the project I have led for the past year — owning architecture, development, infrastructure, go-live, and the IT team behind it. We replaced a paid third-party ESB with a fully custom Odoo 18 Community stack: an HQ-centric design where headquarters is the single source of truth for stock and each outlet is a warehouse fed through inter-warehouse transit, while outlet nodes run POS only and are pulled by HQ over a tunnel. On top of that sit self-order kiosks, kitchen display and monitoring screens, customer queue displays, multi-printer receipt routing, a full central-kitchen manufacturing chain (raw material → trimming → marination → breading → finished goods), GrabFood order ingestion, Xendit and BRI EDC payments, and automated daily reconciliation with alerting.",
    meta: [
      '3 outlets live — Semanggi, Alam Sutera, Margonda',
      '24,000+ POS orders processed per 14 days',
      '65 custom modules at HQ · 57 on outlet nodes',
      'Saved 100s juta IDR/year in ESB subscription fees',
      'New outlet onboarded with zero code change — data only',
      'SLA < 5 min per order · 57 uptime monitors with alerting',
    ],
    stack: ['Odoo 18 Community', 'Python', 'JavaScript / OWL', 'PostgreSQL', 'XML-RPC', 'Kiosk POS', 'KDS', 'Manufacturing', 'GrabFood API', 'Xendit · BRI EDC', 'Docker', 'Nginx / SSL'],
  },
  {
    tag: 'Personal Project · WhatsApp API',
    title: 'Tanya HKI — WhatsApp Vendor Chatbot',
    role: 'Solo Developer — blueprint to production',
    period: 'Go-Live 29 Jul 2026 · PT Hutama Karya Infrastruktur',
    featured: true,
    desc: "A self-service WhatsApp chatbot that lets vendors of PT Hutama Karya Infrastruktur track where their invoice sits in the approval flow — no phone calls, no emails, no waiting for office hours. Built as a custom Odoo module wired to the WhatsApp Business API through Bird, Meta's official solution provider, reading production invoice data live from Odoo HKI. Every request passes an NPWP identity check that opens a 24-hour session bound to a single WhatsApp number, so a vendor can only ever see their own invoices. Invoice amounts are masked to the first two digits to stay private on a visible screen, failed lookups always fall back to a call-center escalation path, and a built-in dashboard gives the HKI team daily visibility on message volume, success rate, and delivery status.",
    meta: [
      'Live since 29 Jul 2026 for vendor self-service',
      'Delivered in 15 weeks — blueprint → UAT → pilot → go-live',
      'NPWP verification with 24-hour scoped session',
      '6-stage project & 5-stage central billing tracking',
      'Amount masking + strict vendor-scoped data access',
      'Monitoring dashboard, delivery webhooks & auto-purged logs',
    ],
    stack: ['Odoo 15', 'Python', 'WhatsApp Business API', 'Bird (Meta BSP)', 'REST API', 'Webhooks', 'PostgreSQL', 'OWL Dashboard', 'Docker', 'Nginx'],
  },
  {
    tag: 'FMCG · Distributor',
    title: 'Distributor Management System — ARO',
    role: 'Technical & Functional Lead',
    period: 'PT Akasha Wira International, Tbk.',
    desc: 'End-to-end DMS for fieldforce operations at PT Akasha Wira International Tbk. Covers route planning, beat scheduling, SFA mobile reporting, CRM, inventory visibility, and bidirectional middleware integration with Microsoft AX ERP and ETL Data Warehouse. Includes an Automatic Replenishment Order engine that computes optimal purchase quantities from P13W rolling sales, stock buffer targets, and safety-stock rules — eliminating manual calculation by sales ops.',
    meta: ['500+ users', '200+ distributor routes', 'Manual reporting ↓ 70%', 'Order cycle ↓ 4 hrs → 30 min', 'Stockout ↓ ~40%'],
    stack: ['Odoo v11/v14/v16', 'Python', 'REST API', 'Microsoft AX', 'ETL / DWH', 'Android SFA'],
  },
  {
    tag: 'API Integration · FMCG',
    title: 'Sampoerna Mitra AYO SRC',
    desc: "Built a REST API middleware layer connecting Odoo DMS with Sampoerna's Mitra AYO SRC platform. Enabled real-time sync of sales orders, outlet data, stock availability, and delivery status — eliminating double-entry across both systems.",
    meta: ['10+ API endpoints', 'Real-time sync < 3s latency', 'Eliminated 100% double-entry', 'Thousands of SRC outlets'],
    stack: ['REST API', 'Python Middleware', 'Odoo v16', 'JSON/OAuth'],
  },
  {
    tag: 'Migration · DevOps',
    title: 'Odoo v11 → v14 → v16 Migration',
    desc: 'Full multi-phase migration of 20+ custom modules across three major Odoo versions. Covered data migration, ORM refactoring, view/report updates, regression testing, and zero-downtime cutover using blue-green deployment on Linux servers.',
    meta: ['20+ custom modules migrated', 'Zero data loss', 'Downtime < 4 hrs per cutover', 'UAT coverage 100%', 'Dockerized staging'],
    stack: ['Odoo v11/v14/v16', 'PostgreSQL', 'Docker', 'Linux Ubuntu', 'Git'],
  },
  {
    tag: 'Government · ERP · Infrastructure',
    title: 'Odoo RAB SPAM — Kementerian PUPR',
    desc: 'Automated Budget Estimation (RAB) calculation system for the Ministry of Public Works (PUPR) under the SPAM drinking-water infrastructure program. Regional PUPR offices across all 34 provinces generate standardized RAB documents automatically, governed by SNI unit-cost data controlled centrally. RAB recalculates automatically whenever central SNI master data updates — every regional estimate stays aligned with national standards without manual rework.',
    meta: ['Kementerian PUPR', '34 provinces nationwide', 'SNI-compliant auto recalculation', 'Standardized RAB per region', 'Central SNI update → auto propagate'],
    stack: ['Odoo', 'Python', 'XML/QWeb', 'SNI Master Data', 'Report Engine'],
  },
  {
    tag: 'Research · SDN · AI',
    title: 'SDN Load Balancing via ANN',
    desc: 'Undergraduate thesis: designed and tested an Artificial Neural Network model to automate load-balancing decisions on Software Defined Networks, benchmarked against round-robin and least-connection across simulated topologies. Published on ARPN Journals — awarded Grade A.',
    meta: ['ANN vs. traditional algorithms', 'SDN simulation environment', 'Grade A thesis', 'Published — ARPN Journals'],
    stack: ['SDN', 'ANN / ML', 'Python', 'Mininet', 'Research'],
  },
];

// Real organizations worked with / for. Rendered as a clean logo-style wall.
export const clients = [
  { name: 'Akasha Wira International', sector: 'FMCG · Beverages' },
  { name: 'Hutama Karya Infrastruktur', sector: 'Infrastructure · BUMN' },
  { name: "Olie's Restaurant", sector: 'F&B · 3 outlets live' },
  { name: 'Sampoerna', sector: 'Mitra AYO SRC' },
  { name: 'Kementerian PUPR', sector: 'Government · SPAM' },
  { name: 'Fujicon Priangan', sector: 'ERP Consulting' },
  { name: 'Telkom University', sector: 'Education' },
];

export const education = {
  degree: 'Bachelor of Computer Engineering (B.E)',
  school: 'Telkom University',
  thesis:
    'Load Balancing Analysis on Software Defined Networks (SDN) using Artificial Neural Network (ANN) Methods — Grade: A',
  thesisLink: 'https://arpnjournals.org/andikamp-journals',
  thesisLinkLabel: 'arpnjournals.org/andikamp-journals',
};

export const certifications = [
  { icon: '🏆', name: '1st Place Scientific Writing', org: 'MTQ Telkom University' },
  { icon: '📜', name: 'Odoo Technical Training', org: 'Akhmad Daniel Sembiring — Udemy' },
  { icon: '📜', name: 'InformIT Training Course', org: 'Informit Training Center' },
];
