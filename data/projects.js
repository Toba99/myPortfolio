export const projects = [
  {
    slug: "koplio",
    title: "Koplio Limited",
    shortTitle: "Koplio",
    category: ["Fintech", "Identity", "Product Delivery"],
    tags: ["Identity", "KYC / AML", "APIs"],
    summary:
      "Koplio helps startups and SMEs design, build and scale digital platforms. My work sits inside digital identity verification and onboarding, where speed for customers has to sit next to KYC and AML obligations without either one winning at the expense of the other.",
    cardSummary: "Identity verification and onboarding, end to end.",
    accent: "#0C0C0C",
    surface: "#E8E8E6",
    featured: true,
    size: "large",
    website: "https://www.kopl.io/",
    image: "/projects/koplio.jpg",
    type: "Live product",
    roleLabel: "Software Engineer",
    period: "Oct 2026 - Present",
    responsibilities: [
      "Leading product development for identity verification, document checks and transaction monitoring.",
      "Owning roadmap and backlog prioritisation with engineering, UX, compliance and legal in the same loop.",
      "Integrating third-party identity, business verification and credit reference systems into one clear onboarding flow.",
    ],
    narrative: [
      "Identity products live in a narrow gap. Customers want to get through onboarding quickly. Compliance teams need verification that holds up under scrutiny. If either side is ignored, the product fails in a different way: one path creates drop-off, the other creates risk.",
      "At Koplio I work as a Software Engineer across that gap. The work is not only writing features. It is shaping what gets built next, keeping document verification, identity validation and transaction monitoring as one product surface, and making sure third-party services strengthen the journey instead of fragmenting it.",
      "A large part of the role is translation. Workshops, sprint reviews and demos turn stakeholder feedback into a backlog that engineering can actually ship. That loop is how we improved onboarding time by around 20% and raised customer satisfaction by a similar margin, while reducing operational risk and fraud exposure.",
    ],
    delivered: [
      "Document verification, identity validation and transaction monitoring flows",
      "Third-party identity, business verification and credit reference integrations",
      "Roadmap ownership with cross-functional delivery across engineering, UX, compliance and legal",
      "~20% faster onboarding and ~20% higher customer satisfaction",
    ],
    closing:
      "What matters most on this kind of product is treating compliance and experience as the same problem. When those stay aligned, onboarding can be both fast and trustworthy.",
    technologies: [
      "TypeScript",
      "Node.js",
      "REST APIs",
      "Identity verification",
      "KYC / AML",
      "Agile delivery",
    ],
  },
  {
    slug: "piggyvest",
    title: "PiggyVest Business",
    shortTitle: "PiggyVest",
    category: ["Fintech", "Full Stack", "Product Ownership"],
    tags: ["Fintech", "KYC / AML", "Product"],
    summary:
      "PiggyVest Business helps companies manage money with clearer savings, payments and growth tools. Inside that product I work as a Full Stack Developer and Product Owner on digital identity, onboarding and AML compliance, the layer that decides whether a business can start using the platform with confidence.",
    cardSummary: "Identity, onboarding and AML for trusted business money.",
    accent: "#4F7CFF",
    surface: "#E8EEFF",
    featured: true,
    size: "large",
    website: "https://piggyvestbusiness.com/",
    image: "/projects/piggyvest.jpg",
    type: "Live product",
    roleLabel: "Full Stack Developer / Product Owner",
    period: "Sept 2024 - Present",
    responsibilities: [
      "Designing and shipping digital identity, onboarding and AML compliance features.",
      "Writing technical specifications and shaping API contracts with engineering.",
      "Partnering with legal and compliance so regulation becomes product behaviour, not a late blocker.",
    ],
    narrative: [
      "Business onboarding in fintech is rarely a simple form. It is a sequence of checks, documents and risk decisions that have to feel quick to the user while still satisfying KYC and AML expectations. When that sequence breaks, people wait, support tickets rise and trust drops.",
      "My role sits across product and engineering. I write the specs, help define the API contracts, and stay close enough to the implementation to keep releases honest. AI coding tools help with repetitive work and reviews, but the judgement still has to come from knowing what the regulation is asking for and what the customer can tolerate.",
      "Working with legal and compliance early changed the shape of the backlog. Instead of treating regulation as something that arrives after a feature is built, we treated it as an input to the design. That is a quieter change than a new screen, but it is the reason onboarding got around 20% faster while downstream KYC failures went down.",
    ],
    delivered: [
      "Identity, onboarding and AML compliance features in production",
      "Technical specifications and API contracts shared across the team",
      "Closer product loops with engineering, legal and compliance",
      "~20% faster onboarding with fewer downstream KYC failures",
    ],
    closing:
      "The work I care about here is making regulated flows feel intentional. Specs, APIs and compliance are not separate tracks. They are the product.",
    technologies: [
      "TypeScript",
      "Node.js",
      "APIs",
      "KYC / AML",
      "AI coding tools",
      "Agile / Scrum",
    ],
  },
  {
    slug: "carrotcredit",
    title: "CarrotCredit",
    shortTitle: "CarrotCredit",
    category: ["Fintech", "Frontend"],
    tags: ["Fintech", "React", "Admin", "Accessibility"],
    summary:
      "Carrot helps businesses extend credit to their customers, collateralised by digital assets such as stocks, cash and crypto. As a part-time Frontend Engineer I shipped product UI and rebuilt the admin dashboard operators use to monitor portfolios, risk and collections.",
    cardSummary: "Frontend for credit product UI and a rebuilt admin dashboard.",
    accent: "#F27A2C",
    surface: "#FFF1E6",
    featured: true,
    size: "large",
    website: "https://www.carrotcredit.com/",
    image: "/projects/carrotcredit.jpg",
    type: "Live product",
    roleLabel: "Frontend Engineer",
    period: "Mar 2025 - June 2026",
    responsibilities: [
      "Building user-facing frontend features from stakeholder requirements.",
      "Rebuilding the Carrot Credit admin dashboard for portfolio, disbursement and collections reporting.",
      "Keeping WCAG AA accessibility and test coverage as release requirements, not optional polish.",
      "Working closely with stakeholders so interface decisions stayed grounded in how people actually used the product.",
    ],
    narrative: [
      "Credit products ask for a lot of clarity. People need to understand what they are applying for, what assets are involved and what happens next. Ambiguous interfaces create support load and slow the business down, especially when partners and operators are also part of the journey.",
      "I joined part-time as a frontend engineer, which meant the process had to be tight. Stories needed to be clear. Feedback needed a place to land. Accessibility and tests had to be part of the definition of done, because there was no spare capacity to clean things up later.",
      "A large part of the work was a full rebuild of the admin dashboard. Operators needed one place to watch principal, disbursements, partner share, loan counts and collections without hopping between brittle screens. The new Report surfaces, from portfolio overview through disbursement and credit operations, were built around that day-to-day monitoring job.",
      "Day to day that looked like designing and shipping frontend on the MERN stack, turning requirements into clear product UI, and tightening what we learned into the next release. AI assistants helped with the repetitive parts of implementation and review. The valuable part was still making the interface honest enough to ship.",
    ],
    figures: [
      {
        src: "/projects/carrot.png",
        alt: "Carrot Credit Admin Dashboard v2 disbursement report",
        caption:
          "Admin Dashboard v2: the rebuild I spent most of my frontend time on. Disbursement reporting with partner summary, principal share and monthly trends. Live figures are blurred here.",
      },
    ],
    delivered: [
      "Full rebuild of the Carrot Credit admin dashboard for reporting and operations",
      "User-facing credit product UI on the frontend",
      "WCAG AA accessibility and solid test coverage on shipped work",
      "Clearer interfaces shaped with stakeholder and user feedback",
    ],
    closing:
      "Frontend work only holds up when the interface is clear. An admin surface operators trust and product UI people can follow beat a longer list of half-finished screens.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "WCAG AA"],
  },
  {
    slug: "group-therapy",
    title: "Group Therapy",
    shortTitle: "Group Therapy",
    category: ["Event Technology", "Product Development", "Full-stack Engineering"],
    tags: ["Event Tech", "Ticketing", "Product Build"],
    summary:
      "Group Therapy is an electronic music and nightlife community celebrating African electronic culture. The website is a digital home for that culture, where people can discover upcoming raves, buy tickets, explore artists and relive past events through music, photography and stories.",
    cardSummary: "A digital home for African electronic nightlife.",
    accent: "#E23B3B",
    surface: "#1A1A1A",
    featured: true,
    size: "large",
    website: "https://www.grouptherapy.live/",
    image: "/projects/group-therapy.jpg",
    type: "Live project",
    roleLabel: "Product & full-stack engineering",
    period: "2025 - 2026",
    responsibilities: [
      "Structuring event discovery, ticketing, artist profiles and publishing into clear product flows.",
      "Building and refining the platform so the culture feels present without making the experience hard to use.",
      "Improving admin workflows, performance and infrastructure cost so the team can run events without fighting the tools.",
    ],
    narrative: [
      "Group Therapy had already built an identity around Afro-house, Amapiano and nightlife. What it still needed was somewhere for that energy to live between the events themselves. A place where the community could see what was coming next, get tickets, follow artists and come back to the nights that mattered.",
      "My work sat across product and engineering. The job was not only to ship pages. It was to keep discovery, ticketing, artists and editorial content connected as one experience, while giving the team admin and publishing tools that did not get in the way. Rave culture is spontaneous. The product still has to be clear when someone wants a ticket at peak demand.",
      "That balance shaped most of the decisions. Ticketing and discovery stayed close together. Admin workflows were treated as part of the product, not an afterthought. Performance and infrastructure cost were watched carefully, because a live event platform that looks good but becomes expensive or fragile is not really finished.",
      "Under the surface the system splits cleanly. Visitors use a public React site. Staff work in a separate Studio CMS. Both talk to a shared backend and data layer, with local development on Express, Prisma and Postgres, and production on Supabase for auth, storage and the database. Ticketing, email and YouTube sit as external services around the admin tools.",
      "The site now serves two connected purposes. For ravers, it is a way to find the next night out, buy tickets and relive past events. For the Group Therapy team, it is a platform to showcase events, celebrate artists and keep a lasting presence for a community that does not stop when the lights come on.",
    ],
    figures: [
      {
        src: "/projects/group-therapy-architecture.png",
        alt: "Group Therapy architecture diagram",
        caption:
          "System architecture: public site and Studio CMS on Vercel, local Express/Prisma/Postgres, production Supabase, plus YouTube, Web3Forms and Tix.africa.",
      },
    ],
    delivered: [
      "Event discovery, ticketing and artist experiences on grouptherapy.live",
      "Admin Studio CMS for publishing and running events",
      "Architecture across public web, admin, API and Supabase production",
      "Integrations for tickets, email and YouTube content",
    ],
    closing:
      "What I am proud of is a product that feels true to the culture without making people work hard to use it. Discovery, tickets and memory all belong in the same place.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "Vercel",
      "Tix.africa",
    ],
    collaborators: [
      { role: "Product & Engineering", people: ["Toba Martins"] },
      {
        role: "Design",
        people: [{ name: "Molly Chidi", href: "https://mollychidi.vercel.app/" }],
      },
    ],
  },
  {
    slug: "salad-ink",
    title: "Salad.ink",
    shortTitle: "Salad.ink",
    category: ["AI", "SaaS", "Technical Programme Management"],
    tags: ["AI", "Workspace", "TPM"],
    summary:
      "Salad is a multi-model AI collaboration workspace. It gives teams one place to think with their AI models, keep reusable context, connect apps and make decisions without bouncing between chats and tools.",
    cardSummary: "An AI workspace for thinking together.",
    accent: "#2F9E5B",
    surface: "#E8F7EE",
    featured: true,
    size: "large",
    website: "https://salad.ink/",
    image: "/projects/salad-ink.jpg",
    type: "Live product",
    roleLabel: "Technical Project Manager",
    period: "2025 - 2026",
    responsibilities: [
      "Driving delivery across product, design and engineering for the Salad workspace.",
      "Keeping roadmap, dependencies and release cadence clear as multi-model features landed.",
      "Aligning teams around shared context, model integrations and tools that belong in one product shell.",
    ],
    narrative: [
      "Most AI tools still behave like separate rooms. You open a chat, lose the thread, switch models, forget which document mattered, and start again. Teams do not only need better answers. They need a place where context survives the conversation.",
      "Salad starts from that problem. The workspace is built so people, models and project knowledge can sit together. Briefs, mentions, meetings and decisions are treated as collaborative objects, not as afterthoughts glued onto a prompt box.",
      "That same idea shows up in the product surfaces themselves. Alongside chat and projects, Salad includes tools like Images, where people can describe what they need, pick a model and work from templates without leaving the workspace.",
      "As Technical Project Manager I kept that work moving. The job was to connect product intent with engineering delivery, manage dependencies across model integrations and workspace surfaces, and make sure the team shipped a coherent product instead of a pile of disconnected AI features.",
    ],
    figures: [
      {
        src: "/projects/salad-ink-images.jpg",
        alt: "Salad Images workspace for generating images with AI models",
        caption:
          "Salad Images: describe what you want, choose a model, start from templates, and keep the work inside the same workspace as chats and projects.",
      },
    ],
    delivered: [
      "Programme ownership across Salad workspace delivery",
      "Clearer roadmap, dependency and release cadence for multi-model work",
      "Alignment across product, design and engineering on shared-context features",
      "A live product at salad.ink for teams working with multiple AI models",
    ],
    closing:
      "The useful version of AI collaboration is quiet. Shared context first, models second, novelty last. My job was to keep the team pointed at that.",
    technologies: ["AI APIs", "TypeScript", "React", "SaaS product patterns", "Programme delivery"],
    collaborators: [{ role: "Technical Program Manager", people: ["Toba Martins"] }],
  },
  {
    slug: "odunayo-eweniyi",
    title: "Odunayo Eweniyi",
    shortTitle: "Odunayo.xyz",
    category: ["Personal Brand", "Web Design", "Front-end"],
    tags: ["Editorial", "Next.js", "Personal site"],
    summary:
      "A personal website for Odunayo Eweniyi, Co-founder and COO of PiggyVest and Co-founder and General Partner at FirstCheck Africa. The site gathers her work as a founder, investor and operator into one calm, readable place.",
    cardSummary: "A personal site for a founder and investor.",
    accent: "#B4472E",
    surface: "#F6F1EA",
    featured: true,
    size: "large",
    website: "https://www.odunayoeweniyi.xyz/",
    image: "/projects/odunayo-eweniyi.jpg",
    type: "Live project",
    roleLabel: "Design & front-end engineering",
    period: "2025",
    responsibilities: [
      "Structuring introduction, selected impact, press, speaking and contact into a short narrative page.",
      "Setting the editorial typography, spacing and visual tone of the site.",
      "Building a fast, accessible Next.js front end that stays quiet so the writing can lead.",
    ],
    narrative: [
      "A founder with Odunayo's range already exists across company pages, press interviews and speaking engagements. What was missing was a personal site that felt like her, not like a company brochure and not like a dump of every link she has ever had.",
      "The design direction was restraint. A warm neutral ground, a strong serif for the name, and enough space for the work to breathe. The story moves from introduction to selected impact to destinations like press and speaking, instead of asking visitors to dig through a deep menu.",
      "On the engineering side the site is a Next.js App Router build on Vercel, tuned for reading. Content starts from seed data, with optional Supabase for dynamic content and media, static assets in the public folder, and contact form submissions through Web3Forms into email. An optional admin CMS path supports draft, preview and publish when content needs to move beyond the seed file.",
      "The goal was a page that loads quickly, feels considered, and gives press, partners and community one place to understand her work.",
    ],
    figures: [
      {
        src: "/projects/odunayo-eweniyi-architecture.png",
        alt: "Odunayo Eweniyi website architecture diagram",
        caption:
          "Architecture: visitors hit a Next.js app on Vercel, content from seed data with optional Supabase, contact through Web3Forms, and an optional admin CMS for draft, preview and publish.",
      },
    ],
    delivered: [
      "Editorial personal site live at odunayoeweniyi.xyz",
      "Narrative structure across home, work, press, speaking and contact",
      "Next.js App Router architecture on Vercel with seed content and optional Supabase",
      "Contact flow through Web3Forms into owner email",
    ],
    closing:
      "The best version of this site is the quiet one. If the writing feels clear and the person feels present, the design did its job.",
    technologies: [
      "Next.js",
      "React",
      "Vercel",
      "Supabase",
      "Web3Forms",
      "Tailwind CSS",
      "Editorial design",
    ],
    collaborators: [
      { role: "Engineering", people: ["Toba Martins"] },
      {
        role: "Design partner",
        people: [{ name: "Molly Chidi", href: "https://mollychidi.vercel.app/" }],
      },
    ],
  },
  {
    slug: "besacare",
    title: "BesaCare",
    shortTitle: "BesaCare",
    category: ["Healthcare", "Full Stack", "Cloud"],
    tags: ["Healthcare", "Rails", "AWS"],
    summary:
      "BesaCare builds healthcare software for diagnostics, clinics, pharmacies and screening programmes. As a Software Engineer I led a team of three on Rails, React and GraphQL applications while hardening AWS architecture, CI/CD and the product marketing site.",
    cardSummary: "Healthcare delivery on Rails, React and AWS.",
    accent: "#7B5CFF",
    surface: "#F0EBFF",
    featured: true,
    size: "large",
    website: "https://besacare.com/",
    image: "/projects/besacare.jpg",
    type: "Live product",
    roleLabel: "Software Engineer",
    period: "May 2021 - Feb 2022",
    responsibilities: [
      "Leading three engineers across architecture, implementation, code reviews and sprint planning.",
      "Delivering Ruby on Rails, React and GraphQL applications for healthcare workflows.",
      "Improving AWS architecture and CI/CD so releases could move faster without creating incidents.",
    ],
    narrative: [
      "Healthcare software has little room for careless shipping. Clinics, labs and screening programmes depend on tools that stay available and understandable. That pressure shaped how we worked: clear architecture, shared reviews and deployment practices that made releases boring in the best way.",
      "I led a small team of three while staying hands-on across frontend and backend. Day to day that meant building Rails, React and GraphQL features, reviewing work closely, planning sprints and being available for tier-2 support when engineers or end users hit friction.",
      "We also invested in the path to production. AWS architecture and automated CI/CD raised release frequency and reduced deployment incidents. Alongside the product work I shipped a responsive marketing site so the company had a clearer public face for acquisition.",
    ],
    delivered: [
      "Rails, React and GraphQL healthcare application delivery with a team of three",
      "Shared architecture and review practices across the engineering team",
      "AWS architecture and CI/CD improvements that raised release frequency",
      "Responsive healthcare marketing site and tier-2 technical support",
    ],
    closing:
      "Small healthcare teams move faster when the basics are shared: architecture, reviews and a release path people trust.",
    technologies: ["Ruby on Rails", "React", "GraphQL", "Apollo", "AWS", "CI/CD"],
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}
