(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/data/portfolio-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "about",
    ()=>about,
    "education",
    ()=>education,
    "experience",
    ()=>experience,
    "personalInfo",
    ()=>personalInfo,
    "projects",
    ()=>projects,
    "services",
    ()=>services,
    "skills",
    ()=>skills
]);
const personalInfo = {
    name: "Moeez Rehman",
    title: "Backend Engineer (Python / Laravel)",
    subtitle: "APIs, Integrations, Automations | SaaS & AI-powered Workflows",
    location: "Lahore/Faisalabad, Pakistan",
    email: "moeezrhmn@gmail.com",
    phone: "+92 322 6622545",
    github: "https://github.com/moeezrhmn",
    linkedin: "https://linkedin.com/in/moeezrhmn"
};
const about = {
    summary: `I'm a Backend Engineer specializing in Python (FastAPI, Flask) and Laravel, focused on building reliable APIs, automation workflows, and backend systems for SaaS and AI-powered products.

I'm not a generalist — I'm strongest where companies feel the most pain: systems that move data, integrate platforms, automate operations, and scale without breaking.`,
    strengths: [
        "API design & backend architecture",
        "Third-party integrations (Shopify, eBay, custom APIs, legacy systems)",
        "Automation workflows that replace hours of manual work",
        "E-commerce backend systems & operational tooling",
        "Building internal tools for order, inventory, and data processing"
    ],
    achievements: [
        "Synced 300k+ products across Shopify & eBay and automated 40+ daily orders, including UK Royal Mail label generation",
        "Built SaaS-style internal tools for order + inventory workflows",
        "Connected multiple external services into unified systems, replacing slow/fragmented manual processes",
        "Delivered automation workflows that saved teams hundreds of hours per month"
    ],
    lookingFor: "Roles or projects that involve backend engineering, automations, integrations, SaaS systems, or AI-powered workflows — remote or onsite."
};
const skills = {
    backend: [
        "Python (FastAPI, Flask, Django)",
        "PHP (Laravel)",
        "REST API Design"
    ],
    integrations: [
        "Shopify API",
        "eBay API",
        "Custom API Integrations",
        "Webhooks"
    ],
    automation: [
        "Workflow Automation",
        "Data Processing",
        "Background Workers",
        "Cron Jobs"
    ],
    databases: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "MariaDB"
    ],
    frontend: [
        "HTML/CSS/JavaScript",
        "Vue.js",
        "React",
        "Next.js"
    ],
    devops: [
        "Docker",
        "AWS (EC2)",
        "VPS",
        "Linux",
        "Git"
    ],
    tools: [
        "Slack",
        "Trello",
        "Jira",
        "English - Fluent"
    ]
};
const services = [
    {
        title: "API Development & Integration",
        description: "Custom REST API design and development, third-party integrations, and API optimization",
        details: [
            "Custom REST API design and development",
            "Third-party API integrations (Shopify, eBay, payment gateways)",
            "API optimization and performance tuning",
            "Webhook implementations"
        ]
    },
    {
        title: "Backend Systems & Architecture",
        description: "Scalable backend architecture, database design, and system optimization",
        details: [
            "Scalable backend architecture design",
            "Database design and optimization",
            "Microservices development",
            "System performance optimization"
        ]
    },
    {
        title: "Automation & Workflows",
        description: "Business process automation and data processing pipelines",
        details: [
            "Business process automation",
            "Data processing pipelines",
            "Workflow automation tools",
            "Background job processing"
        ]
    },
    {
        title: "E-commerce Solutions",
        description: "E-commerce backend development and multi-platform synchronization",
        details: [
            "E-commerce backend development",
            "Inventory management systems",
            "Order processing automation",
            "Multi-platform synchronization"
        ]
    },
    {
        title: "SaaS & AI Applications",
        description: "SaaS backend development and AI-powered workflow systems",
        details: [
            "SaaS backend development",
            "AI-powered workflow systems",
            "Real-time analytics dashboards",
            "Internal business tools"
        ]
    }
];
const experience = [
    {
        title: "Full Stack Engineer",
        company: "Codiux",
        location: "Lahore, Pakistan",
        period: "June 2025 - Present",
        description: "Developed full-stack applications with Python, React/Next.js, and PostgreSQL/MongoDB/MariaDB, including:",
        highlights: [
            "GPU investor portal with real-time analytics",
            "AI-powered sales call agent using Twilio/Vocode",
            "Scalable systems for financial operations and resource management"
        ]
    },
    {
        title: "Backend Engineer",
        company: "Maxenius Solutions",
        location: "Faisalabad, Pakistan",
        period: "March 2024 - June 2025",
        description: "Focused on large-scale API integrations and automation:",
        highlights: [
            "Developed large-scale Shopify-eBay API integrations with Laravel",
            "Automated 300k+ product syncs and 40+ daily orders",
            "Integrated UK Royal Mail for shipping labels",
            "Optimized performance through queue workers, caching, and SQL tuning"
        ]
    },
    {
        title: "Backend Engineer",
        company: "XLogic Solution",
        location: "Faisalabad, Pakistan",
        period: "May 2023 - February 2024",
        description: "Developed custom automation workflows and maintained production services:",
        highlights: [
            "Developed custom automation workflows and REST APIs",
            "Maintained multiple production Laravel and Python services"
        ]
    },
    {
        title: "PHP Developer",
        company: "BrightWithUs",
        location: "Faisalabad, Pakistan",
        period: "September 2022 - May 2023",
        description: "Built backend features for e-commerce and CMS systems:",
        highlights: [
            "Backend features for e-commerce and CMS systems",
            "Third-party API integrations",
            "Performance improvements"
        ]
    },
    {
        title: "PHP Developer",
        company: "OOP Tech",
        location: "Faisalabad, Pakistan",
        period: "September 2021 - August 2022",
        description: "Developed backend modules and optimized database queries for client projects",
        highlights: [
            "Developed backend modules",
            "Optimized database queries for client projects"
        ]
    }
];
const projects = [
    {
        title: "E-commerce Inventory Sync System",
        description: "Developed a Laravel-based application to synchronize inventory between Shopify and eBay using REST APIs and webhooks, reducing manual updates by 80%.",
        technologies: [
            "Laravel",
            "PHP",
            "MySQL",
            "AWS",
            "Shopify API",
            "eBay API",
            "Webhooks"
        ],
        impact: "80% reduction in manual updates"
    },
    {
        title: "Automated Social Media Posting System",
        description: "Created an automation tool in Laravel for social media management, integrating ImageMagick to generate branded images with real-time weather data and YouTube video merging.",
        technologies: [
            "Laravel",
            "PHP",
            "ImageMagick",
            "AccuWeather API",
            "YouTube API"
        ],
        impact: "Significantly enhanced social media engagement"
    },
    {
        title: "Web Scraping & Notification Automation",
        description: "Engineered a powerful web scraping tool using Python, MongoDB, and Playwright that monitored Discogs.com wishlists and automatically notified users of new matching items.",
        technologies: [
            "Python",
            "MongoDB",
            "Playwright",
            "Web Scraping",
            "Automation"
        ],
        impact: "Ensured timely updates and user satisfaction"
    },
    {
        title: "Plagiarism Detection Tool",
        description: "Built a Python FastAPI application using NLTK and Google Search API to detect text similarity across web sources, optimized for performance with concurrent processing.",
        technologies: [
            "Python",
            "FastAPI",
            "NLTK",
            "Google Search API",
            "PostgreSQL"
        ],
        impact: "Optimized performance with concurrent processing"
    }
];
const education = {
    degree: "Bachelor of Science in Information Technology",
    institution: "University of Agriculture Faisalabad (UAF)",
    location: "Faisalabad, Pakistan",
    period: "August 2021 - June 2025"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/work/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Work
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/portfolio-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
function Work() {
    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen pt-24 pb-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: -20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.5
                    },
                    className: "mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4",
                            children: [
                                "My Work",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-accent",
                                    children: "."
                                }, void 0, false, {
                                    fileName: "[project]/app/work/page.tsx",
                                    lineNumber: 40,
                                    columnNumber: 20
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/work/page.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-20 h-1 bg-accent"
                        }, void 0, false, {
                            fileName: "[project]/app/work/page.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/work/page.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                    variants: containerVariants,
                    initial: "hidden",
                    animate: "visible",
                    className: "mb-24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                            variants: itemVariants,
                            className: "text-3xl md:text-4xl font-bold text-foreground mb-12",
                            children: "Experience"
                        }, void 0, false, {
                            fileName: "[project]/app/work/page.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"
                                }, void 0, false, {
                                    fileName: "[project]/app/work/page.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-12",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["experience"].map((exp, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            variants: itemVariants,
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute left-0 md:left-[26px] top-6 w-5 h-5 bg-accent rounded-full border-4 border-background hidden md:block z-10"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/work/page.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "md:ml-20 bg-card border border-border rounded-xl p-6 md:p-8 hover:border-accent transition-all duration-300 group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "text-2xl font-bold text-foreground group-hover:text-accent transition-colors mb-2",
                                                                            children: exp.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/work/page.tsx",
                                                                            lineNumber: 74,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xl text-accent font-semibold mb-2",
                                                                            children: exp.company
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/work/page.tsx",
                                                                            lineNumber: 77,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/work/page.tsx",
                                                                    lineNumber: 73,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col gap-2 text-sm text-secondary",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCalendar"], {
                                                                                    className: "text-accent"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/work/page.tsx",
                                                                                    lineNumber: 83,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: exp.period
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/work/page.tsx",
                                                                                    lineNumber: 84,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/work/page.tsx",
                                                                            lineNumber: 82,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaMapMarkerAlt"], {
                                                                                    className: "text-accent"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/work/page.tsx",
                                                                                    lineNumber: 87,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: exp.location
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/work/page.tsx",
                                                                                    lineNumber: 88,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/work/page.tsx",
                                                                            lineNumber: 86,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/work/page.tsx",
                                                                    lineNumber: 81,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/work/page.tsx",
                                                            lineNumber: 72,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-secondary mb-4",
                                                            children: exp.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/work/page.tsx",
                                                            lineNumber: 93,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "space-y-2",
                                                            children: exp.highlights.map((highlight, hIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "text-secondary text-sm flex items-start gap-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-accent mt-1 text-lg",
                                                                            children: "▸"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/work/page.tsx",
                                                                            lineNumber: 98,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: highlight
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/work/page.tsx",
                                                                            lineNumber: 99,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, hIndex, true, {
                                                                    fileName: "[project]/app/work/page.tsx",
                                                                    lineNumber: 97,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/work/page.tsx",
                                                            lineNumber: 95,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/work/page.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/app/work/page.tsx",
                                            lineNumber: 62,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/work/page.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/work/page.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/work/page.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                    variants: containerVariants,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: true
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                            variants: itemVariants,
                            className: "text-3xl md:text-4xl font-bold text-foreground mb-12",
                            children: "Featured Projects"
                        }, void 0, false, {
                            fileName: "[project]/app/work/page.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$portfolio$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    variants: itemVariants,
                                    className: "bg-card border border-border rounded-xl p-8 hover:border-accent hover:shadow-[0_0_30px_rgba(0,255,65,0.5)] transition-all duration-300 group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-accent text-sm font-mono",
                                                children: [
                                                    "0",
                                                    index + 1
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/work/page.tsx",
                                                lineNumber: 129,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/work/page.tsx",
                                            lineNumber: 128,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors",
                                            children: project.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/work/page.tsx",
                                            lineNumber: 132,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-secondary mb-6 leading-relaxed",
                                            children: project.description
                                        }, void 0, false, {
                                            fileName: "[project]/app/work/page.tsx",
                                            lineNumber: 136,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-semibold text-foreground mb-3",
                                                    children: "Technologies Used:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/work/page.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-2",
                                                    children: project.technologies.map((tech, techIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-3 py-1 bg-background border border-border rounded-full text-xs text-secondary hover:border-accent hover:text-accent transition-colors",
                                                            children: tech
                                                        }, techIndex, false, {
                                                            fileName: "[project]/app/work/page.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/work/page.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/work/page.tsx",
                                            lineNumber: 141,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-2 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaExternalLinkAlt"], {
                                                    className: "text-accent mt-1 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/work/page.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-accent",
                                                            children: "Impact:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/work/page.tsx",
                                                            lineNumber: 159,
                                                            columnNumber: 21
                                                        }, this),
                                                        " ",
                                                        project.impact
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/work/page.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/work/page.tsx",
                                            lineNumber: 156,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/app/work/page.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/work/page.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/work/page.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: true
                    },
                    variants: containerVariants,
                    className: "mt-24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: itemVariants,
                        className: "bg-card border-2 border-accent rounded-xl p-8 md:p-12 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl md:text-3xl font-bold text-foreground mb-4",
                                children: "Interested in Working Together?"
                            }, void 0, false, {
                                fileName: "[project]/app/work/page.tsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-secondary text-lg mb-8 max-w-2xl mx-auto",
                                children: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
                            }, void 0, false, {
                                fileName: "[project]/app/work/page.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                href: "/contact",
                                className: "inline-block bg-accent text-background px-8 py-4 rounded-lg font-semibold hover:shadow-[0_0_30px_rgba(0,255,65,0.5)] transition-all duration-300",
                                whileHover: {
                                    scale: 1.05
                                },
                                whileTap: {
                                    scale: 0.95
                                },
                                children: "Get In Touch"
                            }, void 0, false, {
                                fileName: "[project]/app/work/page.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/work/page.tsx",
                        lineNumber: 175,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/work/page.tsx",
                    lineNumber: 168,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/work/page.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/work/page.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = Work;
var _c;
__turbopack_context__.k.register(_c, "Work");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_9ed57857._.js.map