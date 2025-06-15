module.exports = {

"[project]/.next-internal/server/app/projects/[id]/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/data/portfolioData.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/data/portfolioData.ts
// --- INTERFACES ---
__turbopack_context__.s({
    "education": (()=>education),
    "experiences": (()=>experiences),
    "fonts": (()=>fonts),
    "profileData": (()=>profileData),
    "projects": (()=>projects),
    "services": (()=>services),
    "socialMediaLinks": (()=>socialMediaLinks),
    "technologies": (()=>technologies)
});
const profileData = {
    name: "I'm Arun Kumar,",
    helloTag: "Hi there,",
    welcomeTag: "Welcome to My Tech Haven",
    title1: "Mobile Application Developer",
    title2: "Web Developer",
    about: "I'm a passionate Flutter Developer with a background in web development and React over 3.5+ experience. I specialize in creating high-performing, cross-platform applications with a focus on clean, efficient code and seamless user experiences.",
    about2: "Active in open-source communities, I'm always learning and exploring emerging technologies. Outside of work, I enjoy music, reading, and experimenting with creative recipes.",
    profileIconUrl: "/images/profileImg.jpg",
    logoUrl: "/images/webLogo.svg",
    email: "arun.devfolio@gmail.com",
    // phone: "+123 456 7890", // Uncomment and add if you want to display phone
    // location: "City, Country", // Uncomment and add if you want to display location
    // Placeholder content for new detailed fields
    detailedIntro: "Beyond the titles and technologies, I see myself as a problem-solver at heart, driven by a curiosity to understand how things work and a desire to build solutions that make a tangible difference. My journey into tech was fueled by this very curiosity, and it continues to be the force behind my learning and growth.",
    codingJourney: "My coding adventure began with a fascination for how software could bring ideas to life. Starting with web fundamentals, I quickly found a passion for creating interactive user experiences. This led me to explore mobile development with Flutter, where I discovered the joy of building beautiful and performant cross-platform applications. Each project has been a stepping stone, teaching me not just new languages and frameworks, but also the importance of collaboration, perseverance, and user-centric design.",
    achievements: [
        "Successfully led the development and integration of 50+ micro-apps in the AU HUB mobile application.",
        "Key contributor to optimizing business workflows, resulting in measurable efficiency gains.",
        "Recognized for innovative solutions in projects like the Drishti 3D Dashboard and Sampark Lead Management.",
        "Received the 'Star Award' at AU Small Finance Bank for exceptional service and contributions to multiple key projects.",
        "Active participant and contributor to open-source projects related to Flutter and Dart."
    ],
    motivation: "My motivation stems from the challenge of solving complex problems and the satisfaction of seeing a well-crafted piece of software empower users. I'm driven by the constant evolution of technology and the endless opportunities to learn and create something new and impactful. The ability to collaborate with talented teams and contribute to meaningful projects is what keeps me energized.",
    philosophy: "I believe in writing clean, maintainable, and scalable code. For me, software development is as much an art as it is a science. A strong emphasis on user experience, coupled with robust technical architecture, is key to building successful products. Continuous learning and adapting to new paradigms are fundamental to staying relevant and effective in this dynamic field.",
    passionsOutsideCode: [
        "Exploring new genres of music and attending live concerts.",
        "Diving into captivating books, from tech biographies to fantasy novels.",
        "Experimenting with global cuisines and honing my culinary skills.",
        "Hiking and connecting with nature to recharge and find inspiration."
    ],
    openTo: [
        {
            text: "New Project Collaborations",
            icon: "Briefcase"
        },
        {
            text: "Freelance Opportunities",
            icon: "DollarSign"
        },
        {
            text: "Tech Chats & Brainstorming",
            icon: "MessageSquare"
        },
        {
            text: "Open Source Contributions",
            icon: "Github"
        }
    ],
    starAwardDetails: {
        imageUrl: "/images/starAward.jpg",
        title: "Star Award - Service Excellence",
        description: "Recognized by AU Small Finance Bank for outstanding contributions and dedication across multiple projects."
    },
    skillSet: [
        {
            name: "Flutter",
            level: 90,
            color: "bg-sky-500"
        },
        {
            name: "React",
            level: 85,
            color: "bg-cyan-500"
        },
        {
            name: "Next.js",
            level: 80,
            color: "bg-neutral-300"
        },
        {
            name: "Tailwind CSS",
            level: 95,
            color: "bg-teal-500"
        },
        {
            name: "HTML5",
            level: 98,
            color: "bg-orange-500"
        },
        {
            name: "CSS3",
            level: 95,
            color: "bg-blue-500"
        },
        {
            name: "Node.js",
            level: 70,
            color: "bg-green-500"
        },
        {
            name: "Generative AI",
            level: 65,
            color: "bg-purple-500"
        },
        {
            name: "Llama3",
            level: 60,
            color: "bg-pink-500"
        },
        {
            name: "LangGraph",
            level: 55,
            color: "bg-indigo-500"
        }
    ]
};
const services = [
    {
        title: "Web Developer",
        iconUrl: "/images/web.png"
    },
    {
        title: "Flutter Developer",
        iconUrl: "/images/mobile.png"
    },
    {
        title: "Backend Developer",
        iconUrl: "/images/backend.png"
    }
];
const technologies = [
    {
        name: "Flutter",
        iconUrl: "/images/flutter.jpg"
    },
    {
        name: "React JS",
        iconUrl: "/images/tech/react.svg"
    },
    {
        name: "TypeScript",
        iconUrl: "/images/tech/typescript.png"
    },
    {
        name: "Next",
        iconUrl: "/images/nextjs.png"
    },
    {
        name: "JavaScript",
        iconUrl: "/images/tech/js.svg"
    },
    // Uncomment if needed
    {
        name: "HTML 5",
        iconUrl: "/images/tech/html.svg"
    },
    {
        name: "CSS 3",
        iconUrl: "/images/tech/css.svg"
    },
    {
        name: "Ruby",
        iconUrl: "/images/tech/ruby.svg"
    },
    {
        name: "Ruby On Rails",
        iconUrl: "/images/tech/ror.png"
    },
    {
        name: "Redux Toolkit",
        iconUrl: "/images/tech/redux.svg"
    },
    {
        name: "Material UI",
        iconUrl: "/images/tech/MI.png"
    },
    {
        name: "Tailwind CSS",
        iconUrl: "/images/tech/tailwind.svg"
    },
    {
        name: "Node JS",
        iconUrl: "/images/tech/nodejs.svg"
    },
    {
        name: "SQL",
        iconUrl: "/images/tech/sql.png"
    },
    {
        name: "JWT",
        iconUrl: "/images/tech/jwt.png"
    },
    {
        name: "Git",
        iconUrl: "/images/tech/git.png"
    },
    {
        name: "Figma",
        iconUrl: "/images/tech/figma.png"
    },
    {
        name: "Dialog flow",
        iconUrl: "/images/tech/dialogflow.png"
    }
];
const experiences = [
    {
        title: "Flutter Developer | Front-end Developer",
        companyName: "AU Small Finance Bank",
        iconUrl: "/images/ausmall.jpg",
        iconBg: "#383E56",
        date: "Jun 2023 - Present",
        points: [
            "Developed and maintained the AU HUB mobile application using Flutter, integrating 50+ micro-apps.",
            "Optimized and automated multiple business verticals, reducing dependencies and improving workflow efficiency.",
            "Implemented GetX for state management, ensuring smooth UI interactions and improved performance.",
            "Led the development of micro-apps such as CrossSell, BC Attendance, and Branch Class Change.",
            "Designed and enhanced the Drishti 3D Dashboard for compliance monitoring, increasing data visibility for HODs & SPOCs.",
            "Developed the Sampark – Task & Lead Management web module for Relationship Managers (RMs) and Branch Officers (BOs) to track tasks and leads.",
            "Built an admin dashboard for centralized task assignments, lead management, and customer mappings.",
            "Integrated Exotel API into the Sampark app to enable direct calling, call logging, and recording for RMs, improving customer communication and audit trails.",
            "Implemented Zoom SDK integration within AU HUB for real-time video conferencing with features like call recording, playback, and Picture-in-Picture (PiP) floating window support on both Android and iOS.",
            "Deployed Sampark on internal MDM hosting for secure access and optimized UI/UX for improved user engagement.",
            "Awarded 'Star Award' for dedicated service and contributions across multiple impactful projects within the bank."
        ]
    },
    {
        title: "Freelance Web Developer",
        companyName: "Meghalaya Government | Tura Municipal Board",
        iconUrl: "/images/fincare.png",
        iconBg: "#E6DEDD",
        date: "Dec 2023 - Present",
        points: [
            "Developed the official website for the Tura Municipal Board using Flutter for a dynamic and scalable experience.",
            "Designed and implemented a structured approval workflow requiring two levels of verification for submitted forms.",
            "Integrated the SBI ePay payment gateway, enabling secure online transactions before final form submission.",
            "Optimized the web interface for seamless user experience and regulatory compliance."
        ]
    },
    {
        title: "React.js Developer",
        companyName: "Schrocken Inc.",
        iconUrl: "/images/company/schrocken.png",
        iconBg: "#383E56",
        date: "May 2022 - April 2023",
        points: [
            "Developed and maintained web applications using React.js and Material UI, enhancing user engagement.",
            "Implemented Redux for state management, improving application efficiency and scalability.",
            "Collaborated with backend and UX teams for seamless API integration and user experience design.",
            "Optimized web performance and responsiveness for cross-device compatibility."
        ]
    },
    {
        title: "Associate NodeJS Developer",
        companyName: "Celebal Technology",
        iconUrl: "/images/company/ct.jpg",
        iconBg: "#E6DEDD",
        date: "Sep 2021 - May 2022",
        points: [
            "Developed and maintained AI-powered chatbots using Node.js and Google Dialogflow.",
            "Integrated third-party APIs for enhanced chatbot functionalities and real-time data processing.",
            "Designed conversational flows for improved user interactions and engagement."
        ]
    }
];
const education = [
    {
        title: "B.Tech",
        collegeName: "Greater Noida Institute Of Technology",
        iconUrl: "/images/education/gniot.jpg",
        iconBg: "#383E56",
        date: "May 2015 - May 2019",
        branch: 'Computer Science Engineering',
        percentage: '69.2%'
    },
    {
        title: "Intermediate",
        collegeName: "Jawahar Navodaya Vidyalaya RangaReddy Hyderabad",
        iconUrl: "/images/education/JNV_Logo.jpg",
        iconBg: "#383E56",
        date: "May 2012 - May 2015",
        branch: 'Mathematics',
        percentage: '82.2%'
    },
    {
        title: "Matriculation",
        collegeName: "Jawahar Navodaya Vidyalaya Supaul Bihar",
        iconUrl: "/images/education/JNV_Logo.jpg",
        iconBg: "#383E56",
        date: "May 2010 - May 2012",
        branch: 'Mathematics',
        percentage: '84.6%'
    }
];
const projects = [
    {
        id: 'au-niyantaran',
        title: "Niyantaran",
        category: "Web",
        description: "Revamped Niyantran's front-end UI with complete redesign based on Figma prototypes. Built dynamic forms for role-based workflows, integrated draft management, and implemented responsive, user-friendly interfaces supporting complex rule configurations. Ensured seamless interaction with backend APIs for rule-driven request processing, role assignments, and real-time audit tracking.",
        shortDescription: "Redesigned Niyantran UI with rule-based dynamic workflows, role-driven forms, draft management, and responsive design.",
        introduction: "Modernized Niyantran's front-end to support flexible, rule-driven workflows while enhancing usability, responsiveness, and real-time process tracking.",
        problemStatement: "Existing static front-end lacked flexibility for dynamic roles, workflows, and draft management, creating rigid user experience and operational delays.",
        strugglesAndSolutions: "Implemented dynamic forms driven by backend rule configurations, built flexible UI components for sequential/parallel approvals, role-based filters, draft saving, and history visualization while ensuring full responsiveness and cross-browser compatibility.",
        designThinking: "Focused on clean, intuitive interfaces with Figma-based design implementation, quick access dashboards, modular request pages, and simplified user journeys to minimize errors.",
        approach: "Utilized modern front-end frameworks, component-based architecture, reusable UI modules, and API integrations to handle dynamic data, validations, role-based visibility, and real-time history logs.",
        developmentJourney: "Started with UI redesign and layout structuring, progressively built request creation forms, recommender/approver workflows, draft-save capabilities, and integrated complex backend APIs for rule-based validations.",
        conclusion: "Delivered a highly flexible, user-friendly, rule-driven front-end that supports business scalability while improving user productivity and minimizing process errors.",
        impact: "Enabled Commercial Banking teams to create, track, and process requests more efficiently with configurable workflows, transparent audit trails, and improved end-user satisfaction.",
        tags: [
            {
                name: "React",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "HTML",
                color: "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)"
            },
            {
                name: "Tailwind CSS",
                color: "linear-gradient(90deg, #06beb6 0%, #48b1f3 100%)"
            },
            {
                name: "JavaScript",
                color: "linear-gradient(90deg, #f7971e 0%, #ffd200 100%)"
            }
        ],
        imageUrl: "/images/niyan_dashboard.PNG",
        galleryImages: [
            {
                url: "/images/niyan_forInfo.PNG",
                alt: "AU Hub Zoom Login"
            },
            {
                url: "/images/niyan_login.PNG",
                alt: "AU Hub Zoom Feature 1"
            },
            {
                url: "/images/niyan_myRequest.PNG",
                alt: "AU Hub Zoom Feature 2"
            },
            {
                url: "/images/niyan_newRequest.PNG",
                alt: "AU Hub Zoom Feature 3"
            }
        ],
        sourceCodeLink: "#",
        liveLink: "#"
    },
    {
        id: 'au-hub-zoom',
        title: "AU HUB | Zoom Call Feature and Recording",
        category: "mobile",
        description: "Developed a Zoom Call feature module within the AU HUB application, enabling Business Correspondents (BCs) and employees to initiate, record, and playback Zoom video calls. The solution involved writing platform-specific code for Android and iOS using Zoom SDK integration. Key features include call recording, playback functionality, and Picture-in-Picture (PiP) mode for floating window support. Leveraging Flutter with GetX for state management, the module ensures seamless cross-platform experience. Utilized native integration for Zoom SDK, and packages like `flutter_zoom_sdk`, `flutter_pip`, and `video_player` for enhanced functionality.",
        shortDescription: "Integrated Zoom SDK into AU HUB for video calls with recording, playback, and PiP mode on iOS & Android.",
        introduction: "This project aimed to seamlessly integrate video conferencing capabilities into the existing AU HUB application, enhancing communication for BCs and employees.",
        problemStatement: "The primary challenge was to enable reliable video call functionality, including recording and easy playback, directly within the AU HUB ecosystem, which is used across diverse network conditions and devices. Ensuring a consistent user experience on both Android and iOS while managing SDK complexities was crucial.",
        strugglesAndSolutions: "Integrating the Zoom SDK required careful handling of native modules for both Android (Java/Kotlin) and iOS (Swift/Objective-C). Managing permissions, call states, and background processes for PiP mode presented significant hurdles. These were overcome by creating specific Flutter platform channels and robust error handling.",
        designThinking: "The design focused on intuitive user flows for initiating, joining, and managing calls. The PiP feature was designed to be non-intrusive, allowing users to multitask. Playback controls were kept simple and familiar.",
        approach: "A modular approach was taken, encapsulating Zoom functionalities within a dedicated Flutter service. GetX was used for reactive state management of call statuses and UI updates. Extensive testing was conducted on various devices and network scenarios.",
        developmentJourney: "The development started with a proof-of-concept for basic SDK integration. Iteratively, features like recording, PiP, and platform-specific optimizations were added. Regular feedback from a pilot user group helped refine the user experience.",
        conclusion: "The Zoom integration successfully provided a robust and user-friendly video communication tool within AU HUB, meeting the project's core objectives.",
        impact: "This feature significantly improved remote collaboration and support capabilities, reducing the need for external conferencing tools and streamlining communication workflows for thousands of users.",
        tags: [
            {
                name: "Flutter",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "GetX",
                color: "linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)"
            },
            {
                name: "Zoom SDK",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "PiP Mode",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            }
        ],
        imageUrl: "/images/sam_assignTask.png",
        galleryImages: [
            {
                url: "/images/au_hub_login.jpg",
                alt: "AU Hub Zoom Login"
            },
            {
                url: "/images/au_hub_p1.jpg",
                alt: "AU Hub Zoom Feature 1"
            },
            {
                url: "/images/au_hub_p2.jpg",
                alt: "AU Hub Zoom Feature 2"
            },
            {
                url: "/images/au_hub_p3.jpg",
                alt: "AU Hub Zoom Feature 3"
            },
            {
                url: "/images/au_hub_vedio.jpg",
                alt: "AU Hub Zoom Video Playback"
            }
        ],
        sourceCodeLink: "#",
        liveLink: "#"
    },
    {
        id: 'sampark-rm-app',
        title: "Relationship Manager App (Sampark)",
        category: "Mobile",
        description: "Sampark is a mobile application designed for Relationship Managers (RMs) and Branch Officers (BOs) to efficiently track and manage leads, customer interactions, and task assignments. Built using Flutter and GetX, the app enables seamless task updates, real-time customer engagement, and streamlined lead management. A key feature of the app is Exotel integration, allowing RMs to initiate calls directly from the app, with automatic call logging and recording for compliance and review purposes. The app operates securely within an internal MDM-hosted environment, ensuring restricted access and data privacy. Its intuitive UI and offline functionality significantly boost on-field productivity, making it a crucial tool for managing day-to-day operations.",
        shortDescription: "Flutter & GetX mobile app for RMs to manage leads & tasks, with Exotel call integration and recording.",
        introduction: "Briefly introduce the Sampark RM App project here.",
        problemStatement: "Describe the core problem Sampark RM App aimed to solve.",
        developmentJourney: "Share insights into the development process of Sampark RM App.",
        strugglesAndSolutions: "Detail any challenges faced and how they were overcome during Sampark RM App development.",
        designThinking: "Explain the design philosophy and process behind Sampark RM App.",
        approach: "Describe the technical approach and architecture for Sampark RM App.",
        conclusion: "Summarize the outcomes and learnings from the Sampark RM App project.",
        impact: "Explain the impact Sampark RM App had or is expected to have.",
        tags: [
            {
                name: "Flutter",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "GetX",
                color: "linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)"
            },
            {
                name: "Exotel",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "Call Recording",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            }
        ],
        imageUrl: "/images/samm_dashboard.jpg",
        galleryImages: [
            {
                url: "/images/samm_login.jpg",
                alt: "Sampark RM App Login"
            },
            {
                url: "/images/samm_dashboard.jpg",
                alt: "Sampark RM App Dashboard"
            },
            {
                url: "/images/sam_dashboard_drawer.jpg",
                alt: "Sampark RM App Dashboard"
            },
            {
                url: "/images/sam_pef.png",
                alt: "Sampark RM App Table View"
            },
            {
                url: "/images/sam_captureLead.jpg",
                alt: "Sampark RM App Table View"
            },
            {
                url: "/images/sam_assignTask.png",
                alt: "Sampark RM App Assign Task"
            },
            {
                url: "/images/sam_assignTask2.jpg",
                alt: "Sampark RM App Assign Task"
            },
            {
                url: "/images/sam_assignTask2.jpg",
                alt: "Sampark RM App Assign Task"
            }
        ],
        sourceCodeLink: "#",
        liveLink: "#"
    },
    {
        id: 'tura-municipal-board-website',
        title: "Tura Municipal Board Website",
        category: "web",
        description: "The Tura Municipal Board website is a government portal developed using Flutter, designed to streamline form submissions and approvals. The platform features a multi-step approval system where user-submitted forms undergo two rounds of validation before final approval. If a payment is required, users can securely complete transactions via the integrated SBI ePay gateway before printing the approved form. The website enhances administrative efficiency by automating workflows and providing a user-friendly interface for citizens and government officials.",
        shortDescription: "Flutter-based government portal for Tura Municipal Board with form submission, multi-level approval, and SBI ePay integration.",
        introduction: "Briefly introduce the Tura Municipal Board Website project here.",
        problemStatement: "Describe the core problem Tura Municipal Board Website aimed to solve.",
        developmentJourney: "Share insights into the development process of Tura Municipal Board Website.",
        strugglesAndSolutions: "Detail any challenges faced and how they were overcome during Tura Municipal Board Website development.",
        designThinking: "Explain the design philosophy and process behind Tura Municipal Board Website.",
        approach: "Describe the technical approach and architecture for Tura Municipal Board Website.",
        conclusion: "Summarize the outcomes and learnings from the Tura Municipal Board Website project.",
        impact: "Explain the impact Tura Municipal Board Website had or is expected to have.",
        tags: [
            {
                name: "Flutter",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "SBI ePay",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "Approval Workflow",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            }
        ],
        imageUrl: "/images/tura_login.PNG",
        galleryImages: [
            {
                url: "/images/tura_login.PNG",
                alt: "Tura Website Login"
            },
            {
                url: "/images/tura_reg.PNG",
                alt: "Tura Website Registration"
            },
            {
                url: "/images/tura_home.PNG",
                alt: "Tura Website Home"
            },
            {
                url: "/images/tura_tura_about.PNG",
                alt: "Tura Website About"
            },
            {
                url: "/images/tura_tura_scheme.PNG",
                alt: "Tura Website Scheme"
            }
        ],
        sourceCodeLink: "https://turamunicipalboard.com/home",
        liveLink: "https://turamunicipalboard.com/home"
    },
    {
        id: 'sampark-rm-website',
        title: "Relationship Manager Website (Sampark)",
        category: "Web",
        description: "Sampark is a web module designed for Relationship Managers (RMs) and Branch Officers (BOs) to efficiently manage tasks, leads, and customer interactions. The platform allows the Central Team (Admins) to assign tasks, oversee lead management, and streamline customer mapping. Built using Flutter, the website provides an intuitive interface for RMs to track and engage with leads, enhancing operational efficiency. The system ensures seamless communication and data synchronization while offering a private and secure deployment on internal MDM hosting.",
        shortDescription: "Flutter web module for RMs/BOs to manage tasks & leads, with admin oversight for assignments.",
        introduction: "Briefly introduce the Sampark RM Website project here.",
        problemStatement: "Describe the core problem Sampark RM Website aimed to solve.",
        developmentJourney: "Share insights into the development process of Sampark RM Website.",
        strugglesAndSolutions: "Detail any challenges faced and how they were overcome during Sampark RM Website development.",
        designThinking: "Explain the design philosophy and process behind Sampark RM Website.",
        approach: "Describe the technical approach and architecture for Sampark RM Website.",
        conclusion: "Summarize the outcomes and learnings from the Sampark RM Website project.",
        impact: "Explain the impact Sampark RM Website had or is expected to have.",
        tags: [
            {
                name: "Flutter",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "Task Management",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "Lead Management",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            }
        ],
        imageUrl: "/images/dashboard.PNG",
        galleryImages: [
            {
                url: "/images/loginImg.PNG",
                alt: "Sampark Web Login"
            },
            {
                url: "/images/dashboard.PNG",
                alt: "Sampark Web Dashboard"
            },
            {
                url: "/images/table.PNG",
                alt: "Sampark Web Table View"
            }
        ],
        sourceCodeLink: "#",
        liveLink: "#"
    },
    {
        id: 'dhirst-website',
        title: "Dhirst Website",
        category: "web",
        description: "Developed the front-end for AU Compliance Actionable Tracker as per RBI regulatory guidelines, implementing dynamic workflows, multi-role management, real-time compliance tracking, and confidential instruction processing. Built complex UI components for Makers, HODs, SPOCs, FPRs, Checkers, and Observers with role-based access and dynamic Excel-based actionable uploads. Ensured audit trails, notifications, and escalations are fully integrated into the responsive design.",
        shortDescription: "Built dynamic UI for AU Compliance Tracker with role-based workflows, Excel uploads, audit trails, and notification system.",
        introduction: "The project aimed to build a centralized digital compliance tracking system for AU Small Finance Bank in alignment with RBI/2023-24/117 circular, eliminating manual Excel-based compliance tracking and improving transparency, auditability, and governance.",
        problemStatement: "The compliance team manually tracked regulatory obligations, leading to risks of data manipulation, regulatory penalties, and inefficient management across departments and regulators.",
        strugglesAndSolutions: "Built highly dynamic forms handling multiple user roles, confidential instruction flows, Excel file parsing for bulk actionables, and real-time notifications for each role. Complex workflows for deviations, approvals, and clarifications were mapped into front-end logic integrated with backend API flows.",
        designThinking: "Designed intuitive role-specific dashboards, responsive layouts for real-time actionable status, Excel-based bulk upload flows, and dynamic search/filtering mechanisms. Ensured compliance with AU's Figma design system while making the UI highly modular and scalable.",
        approach: "Developed reusable UI modules for each role type (Maker, Checker, HOD, SPOC, FPR, Observer). Integrated dynamic forms with backend APIs for uploading instructions, assigning roles, processing deviations, tracking closures, and full audit history visualizations. Implemented real-time bell notifications and scheduled email summaries.",
        developmentJourney: "Started with login, user management, role assignment screens, followed by confidential instruction creation, Excel import flows, role-wise dashboards, actionable processing screens, deviation workflows, and integrated notification modules.",
        conclusion: "Delivered a centralized, fully digital compliance management system enabling real-time tracking, reducing compliance gaps, and ensuring regulatory adherence with audit trails.",
        impact: "Enabled AU Small Finance Bank to meet RBI compliance mandates, reduced regulatory risks, improved transparency across departments, and provided centralized compliance visibility to senior management.",
        tags: [
            {
                name: "React",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "Tailwind CSS",
                color: "linear-gradient(90deg, #06beb6 0%, #48b1f3 100%)"
            },
            {
                name: "JavaScript",
                color: "linear-gradient(90deg, #f7971e 0%, #ffd200 100%)"
            },
            {
                name: "HTML",
                color: "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)"
            }
        ],
        imageUrl: "/images/dhristi_dashboard.PNG",
        galleryImages: [
            {
                url: "/images/dhiristi_edit.PNG",
                alt: "Sampark Web Login"
            },
            {
                url: "/images/dhiristi_editHistory.PNG",
                alt: "Sampark Web Dashboard"
            },
            {
                url: "/images/dhiristi_return.PNG",
                alt: "Sampark Web Table View"
            },
            {
                url: "/images/dhristi_createnew.PNG",
                alt: "Sampark Web Table View"
            },
            {
                url: "/images/dhristi_login.PNG",
                alt: "Sampark Web Table View"
            },
            {
                url: "/images/dhristi_return_id.PNG",
                alt: "Sampark Web Table View"
            }
        ],
        sourceCodeLink: "#",
        liveLink: "#"
    },
    {
        id: 'fincareone-branch-change',
        title: "FincareOne | Branch Class Change",
        category: "mobile",
        description: "A comprehensive module within the FincareOne application that digitizes the process of requesting and approving branch and user class changes for employees. It provides a user-friendly interface for employees to submit requests with details like deputation branch and duration. Requests are routed through a two-level approval hierarchy pulled from HRMS. Reporting managers can review, approve, or reject requests through an intuitive interface with swipe gestures. Approved changes are automatically executed by a daily cron job, significantly reducing manual intervention from the IT team.",
        shortDescription: "Flutter module in FincareOne to automate Branch & User Class change requests with a two-level approval workflow based on HRMS hierarchy.",
        introduction: "This project was conceptualized to address the high volume of manual service tickets for branch and user class modifications. The objective was to build a self-service module within the FincareOne super-app, empowering employees to manage their own operational changes while providing a structured and secure approval framework for management.",
        problemStatement: "The IT Business-as-usual (BAU) team was inundated with service requests for branch and user class changes, accounting for 30-40% of their ticket volume. This manual process, which relied on approvals via email or other channels, was inefficient, prone to delays, and lacked a centralized audit trail. The bank needed an automated solution to offload this work from the IT team and place the approval authority directly with the relevant business managers.",
        developmentJourney: "The development process began by mapping out the two-level approval flow based on the HRMS structure. Following the Figma designs, we built distinct UIs for employees and managers using Flutter and GetX. Key features implemented include the request submission form with calendar controls for duration, the manager's approval dashboard with swipeable cards, and API integrations to fetch HRMS data. A significant part of the journey was setting up the daily cron job for executing approved requests and the logic for auto-reverting temporary branch changes.",
        strugglesAndSolutions: "A key challenge was integrating with the HRMS system to dynamically fetch the correct two-level reporting hierarchy for every employee. This was solved by creating a robust backend service that securely communicates with the HRMS database. Implementing the swipe-to-approve/reject functionality with confirmation dialogs required careful state management to ensure a smooth and intuitive user experience. Another challenge was ensuring the cron job was reliable and correctly handled various scenarios, like permanent vs. temporary changes, which was addressed through rigorous testing and scheduling logic.",
        designThinking: "The design, guided by the provided Figma link, focused on creating a clear and efficient user experience. For employees, the process of raising a request was simplified into a single form. For managers, the design prioritized quick decision-making through an 'at-a-glance' card view with employee details and swipe gestures for actions. The inclusion of a confirmation pop-up for rejections was a key design choice to prevent accidental decisions and capture necessary feedback, enhancing the overall usability and reliability of the workflow.",
        approach: "The solution was architected as a module within the Flutter-based FincareOne application. We implemented a role-based access system to differentiate between an employee's view and a manager's view. The business logic for the approval workflow and HRMS integration was handled by backend services. A daily cron job was scheduled on the server-side to process all approved requests in a batch, ensuring system changes are made in a controlled manner during off-peak hours. All data related to requests and approvals was stored in a dedicated database schema to maintain a clear audit trail.",
        conclusion: "The Branch and User Class Change module successfully automated a critical but repetitive administrative task. It provides a secure, auditable, and user-friendly platform that empowers employees and managers, while significantly reducing the burden on the IT team. The project demonstrated how thoughtful application design can streamline internal business processes and improve operational efficiency.",
        impact: "The module is projected to reduce IT service tickets related to branch and user class changes by 30-40%, freeing up the IT team to focus on more critical tasks. It enhances operational agility by speeding up the approval process for employee transfers and role changes. The system provides a transparent and accountable workflow, improving the experience for both employees and their managers.",
        tags: [
            {
                name: "Flutter",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "GetX",
                color: "linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)"
            },
            {
                name: "Workflow Automation",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "HRMS Integration",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            }
        ],
        imageUrl: "/images/CrossSell.jpg",
        galleryImages: [
            {
                url: "/images/CrossSell.jpg",
                alt: "Branch Class Change Module"
            }
        ],
        sourceCodeLink: "#",
        liveLink: "#"
    },
    {
        id: 'fincareone-crosssell',
        title: "FincareOne | CrossSell",
        category: "mobile",
        description: "The Cross-Sell v3.0 module is an advanced lead management system integrated within the Fincare One application. It empowers branch employees, including Branch Managers (BMs), Branch Operations Managers (BOMs), and Relationship Managers (RMs), to seamlessly manage the entire lead lifecycle. The module features role-based user flows for lead submission, assignment, and actioning. BMs/BOMs can assign leads from a central queue, while RMs can act on their assigned leads by calling customers and updating statuses. All employees can submit new leads through a dedicated form with product selection. The system is designed to enhance sales productivity, streamline lead tracking, and improve customer conversion rates through an intuitive, role-specific UI.",
        shortDescription: "A Flutter & GetX lead management module for bank employees to submit, assign, and act on sales leads, with role-based workflows for managers and executives.",
        introduction: "The FincareOne Cross-Sell project was initiated to overhaul the existing lead management process within the Fincare One super-app. The goal was to create a centralized, efficient, and user-friendly module that caters to the specific needs of different employee roles, from lead creation to conversion, ultimately boosting the bank's cross-selling capabilities.",
        problemStatement: "The previous lead management system was fragmented and lacked clear, role-based workflows. Branch Managers struggled with efficiently distributing leads to their teams, and Relationship Managers lacked a streamlined interface to act upon and track their assigned leads. There was no unified process for all employees to submit potential leads, leading to missed opportunities and inefficient tracking. The lack of a centralized system made it difficult to monitor lead status and measure conversion effectiveness across the branch network.",
        developmentJourney: "The development of Cross-Sell v3.0 was guided by detailed user stories and Figma designs. The process began with building the core UI components in Flutter, such as the dynamic lead card widgets and the new landing page. We implemented distinct user flows for BMs/BOMs and RMs, focusing on state management with GetX to handle queues like 'Yet to assign' and 'In Progress'. A key part of the journey was creating the lead submission form with client-side validation and integrating it with the existing 'Create Lead' backend API. The final phase involved linking all screens and ensuring smooth navigation as per the new design.",
        strugglesAndSolutions: "A primary challenge was implementing the role-based access control to display different UIs and functionalities for BMs, RMs, and other employees. This was solved by fetching the user's role upon login and using conditional rendering within the Flutter widgets. Another challenge was managing the state of leads across different queues ('Yet to assign', 'In Progress', 'Closed') efficiently. We leveraged GetX state management to create reactive data stores that updated the UI in real-time as leads were assigned, actioned, or created. Ensuring the form validations for lead submission were robust and user-friendly also required careful implementation of Flutter's form handling capabilities.",
        designThinking: "The design process was user-centric, driven by the detailed Figma mockups provided. The core philosophy was to simplify complex workflows into intuitive, role-specific interfaces. For Branch Managers, the design focused on providing a clear overview and quick assignment capabilities. For Relationship Managers, the focus was on enabling swift action on leads. The UI for lead submission was designed to be clean and straightforward, minimizing friction for all employees. The use of distinct tabs, clear call-to-action buttons, and structured lead cards was a direct result of design thinking aimed at improving user efficiency and satisfaction.",
        approach: "The module was developed using Flutter with GetX for state management, following a modular architecture within the main Fincare One application. We created reusable widgets for lead cards, which could be configured based on the user's role and the lead's status. The front-end logic was separated from the UI, with services dedicated to API interactions, such as creating new leads and updating their status. We adhered strictly to the provided Figma designs for UI implementation and ensured all new components were responsive and performed well on various devices.",
        conclusion: "The Cross-Sell v3.0 module successfully delivered a comprehensive lead management solution that streamlined operations for all branch employees. The project reinforced the importance of clear specifications and user-centric design in developing effective enterprise tools. Key takeaways include the power of role-based UI customization for improving user adoption and the efficiency of using a robust state management solution like GetX for handling complex, dynamic data flows in a mobile application.",
        impact: "The new module is expected to significantly improve the lead conversion rate by ensuring timely assignment and action on leads. It enhances accountability by providing clear visibility into lead statuses for all stakeholders. By empowering every employee to contribute to lead generation, the application widens the sales funnel. The streamlined workflows reduce administrative overhead for Branch Managers and allow Relationship Managers to focus more on customer interaction, ultimately driving business growth and improving overall sales performance.",
        tags: [
            {
                name: "Flutter",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "GetX",
                color: "linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)"
            },
            {
                name: "Lead Management",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "REST API",
                color: "linear-gradient(90deg, #f953c6 0%, #b91d73 100%)"
            }
        ],
        imageUrl: "/images/CrossSell.jpg",
        galleryImages: [
            {
                url: "/images/CrossSell.jpg",
                alt: "CrossSell Module"
            }
        ],
        sourceCodeLink: "#",
        liveLink: "#"
    },
    {
        id: "mosymphony-cgt",
        title: "Mosymphony-CGT",
        category: "Web Application",
        shortDescription: "A comprehensive platform for managing Cell-Gene Therapy ecosystems, enabling secure collaboration between organizations, researchers, and healthcare providers.",
        description: "Mosymphony-CGT is an advanced web platform designed to facilitate and streamline Cell-Gene Therapy research and collaboration. The system implements a robust user management system with role-based access control, secure authentication, and comprehensive organization management capabilities.",
        imageUrl: "/images/cgt.png",
        galleryImages: [
            {
                url: "/images/cgt.png",
                alt: "Cell and Gene Therapy Project"
            },
            {
                url: "/images/cgt.png",
                alt: "User Management Interface"
            },
            {
                url: "/images/cgt.png",
                alt: "Organization Management View"
            }
        ],
        tags: [
            {
                name: "React",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "Node.js",
                color: "linear-gradient(90deg, #43cea2 0%, #185a9d 100%)"
            },
            {
                name: "PostgreSQL",
                color: "linear-gradient(90deg, #1e3c72 0%, #2a5298 100%)"
            },
            {
                name: "JWT",
                color: "linear-gradient(90deg, #f7971e 0%, #ffd200 100%)"
            },
            {
                name: "REST API",
                color: "linear-gradient(90deg, #f953c6 0%, #b91d73 100%)"
            },
            {
                name: "Two-Factor Authentication",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "Role-Based Access Control",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "Organization Management",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            }
        ],
        technologiesUsed: [
            "React.js",
            "Node.js",
            "PostgreSQL",
            "JWT Authentication",
            "RESTful APIs",
            "Two-Factor Authentication",
            "Role-Based Access Control",
            "Organization Management"
        ],
        liveLink: "#",
        sourceCodeLink: "#",
        introduction: "Mosymphony-CGT is a specialized platform designed to address the unique needs of Cell-Gene Therapy research and collaboration. The system provides a secure and efficient way for organizations, researchers, and healthcare providers to collaborate while maintaining strict data security and compliance requirements.",
        problemStatement: "The Cell-Gene Therapy field faces several challenges:\n\n1. Complex collaboration requirements between multiple organizations\n2. Need for secure data sharing and access control\n3. Difficulty in managing user roles and permissions across different organizations\n4. Lack of standardized processes for ecosystem management\n5. Security concerns in handling sensitive research data",
        developmentJourney: "The development journey involved several key phases:\n\n1. Initial Planning and Architecture Design\n   - Defined system requirements and architecture\n   - Designed database schema for user and organization management\n   - Planned API structure and authentication flow\n\n2. Core Development\n   - Implemented user registration and authentication system\n   - Developed organization management features\n   - Created role-based access control system\n   - Built two-factor authentication mechanism\n\n3. Security Implementation\n   - Implemented JWT-based authentication\n   - Added two-step verification process\n   - Developed secure password management\n   - Created secure API endpoints\n\n4. Testing and Optimization\n   - Conducted security testing\n   - Performed load testing\n   - Optimized database queries\n   - Enhanced user experience",
        strugglesAndSolutions: "Key challenges and their solutions:\n\n1. Complex User Management\n   - Implemented a flexible role-based system\n   - Created separate flows for different user types\n   - Developed comprehensive permission management\n\n2. Security Concerns\n   - Implemented two-factor authentication\n   - Added OTP verification system\n   - Created secure token management\n\n3. Organization Management\n   - Developed hierarchical organization structure\n   - Created flexible collaboration models\n   - Implemented organization-specific settings\n\n4. Data Security\n   - Implemented end-to-end encryption\n   - Created secure data sharing mechanisms\n   - Developed audit logging system",
        designThinking: "The design process focused on:\n\n1. User Experience\n   - Intuitive interface for complex operations\n   - Clear navigation structure\n   - Responsive design for all devices\n\n2. Security First\n   - Multiple authentication layers\n   - Secure data transmission\n   - Role-based access control\n\n3. Scalability\n   - Modular architecture\n   - Flexible organization structure\n   - Extensible API design",
        approach: "The development approach included:\n\n1. Agile Methodology\n   - Iterative development cycles\n   - Regular stakeholder feedback\n   - Continuous improvement\n\n2. Security-First Development\n   - Regular security audits\n   - Penetration testing\n   - Compliance verification\n\n3. User-Centered Design\n   - User research and feedback\n   - Usability testing\n   - Performance optimization",
        conclusion: "Mosymphony-CGT successfully addresses the complex needs of Cell-Gene Therapy research collaboration. The platform provides a secure, scalable, and user-friendly solution for managing research ecosystems, enabling effective collaboration while maintaining strict security standards.",
        impact: "The platform has made significant impact in the Cell-Gene Therapy field:\n\n1. Improved Collaboration\n   - Streamlined communication between organizations\n   - Enhanced data sharing capabilities\n   - Reduced administrative overhead\n\n2. Enhanced Security\n   - Reduced security incidents\n   - Improved compliance with regulations\n   - Better data protection\n\n3. Increased Efficiency\n   - Faster onboarding process\n   - Reduced manual work\n   - Better resource utilization"
    },
    {
        id: 'mosymphony-qem',
        title: "Mosymphony | Quality Event Module",
        category: "Web",
        description: "Mosymphony is a cutting-edge application designed to streamline contract manufacturing processes for enterprises in the pharmaceutical industry. The platform fosters transparency and communication between Pharma sponsors and CMOs, while the quality event module tracks and records every event and quality control to ensure accountability. By providing secure communication channels, reliable data sharing, and real-time updates, Mosymphony builds trust and guarantees smooth manufacturing and distribution processes.",
        shortDescription: "Application for pharma contract manufacturing, with a module for quality event tracking and sponsor-CMO communication.",
        introduction: "Briefly introduce the Mosymphony QEM project here.",
        problemStatement: "Describe the core problem Mosymphony QEM aimed to solve.",
        developmentJourney: "Share insights into the development process of Mosymphony QEM.",
        strugglesAndSolutions: "Detail any challenges faced and how they were overcome during Mosymphony QEM development.",
        designThinking: "Explain the design philosophy and process behind Mosymphony QEM.",
        approach: "Describe the technical approach and architecture for Mosymphony QEM.",
        conclusion: "Summarize the outcomes and learnings from the Mosymphony QEM project.",
        impact: "Explain the impact Mosymphony QEM had or is expected to have.",
        tags: [
            {
                name: "JavaScript",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "React",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "Redux",
                color: "linear-gradient(90deg, #a770ef 0%, #f6d365 100%)"
            },
            {
                name: "Material UI",
                color: "linear-gradient(90deg, #2193b0 0%, #6dd5ed 100%)"
            },
            {
                name: "CSS",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            }
        ],
        imageUrl: "/images/qem.png",
        galleryImages: [
            {
                url: "/images/qem.png",
                alt: "Mosymphony QEM"
            }
        ],
        sourceCodeLink: "#",
        liveLink: "#"
    },
    {
        id: 'netflix-clone',
        title: "Netflix Clone",
        category: "Web",
        description: "The Netflix Clone project is aimed at creating a replica of the popular streaming platform, Netflix, using React and GraphQL. The project will allow users to browse and watch movies and TV shows, just like on the original platform.",
        shortDescription: "A Netflix replica built with React and GraphQL for browsing and watching movies/TV shows.",
        introduction: "Briefly introduce the Netflix Clone project here.",
        problemStatement: "Describe the core problem Netflix Clone aimed to solve.",
        developmentJourney: "Share insights into the development process of Netflix Clone.",
        strugglesAndSolutions: "Detail any challenges faced and how they were overcome during Netflix Clone development.",
        designThinking: "Explain the design philosophy and process behind Netflix Clone.",
        approach: "Describe the technical approach and architecture for Netflix Clone.",
        conclusion: "Summarize the outcomes and learnings from the Netflix Clone project.",
        impact: "Explain the impact Netflix Clone had or is expected to have.",
        tags: [
            {
                name: "ReactJS",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "GraphQL API",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "DataStax AstraDB",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "Netlify",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            }
        ],
        imageUrl: "/images/net.jpg",
        galleryImages: [
            {
                url: "/images/net.jpg",
                alt: "Netflix Clone"
            }
        ],
        sourceCodeLink: "https://github.com/arun2github/workshop-graphql-netflix",
        liveLink: "#"
    },
    {
        id: 'node-mailer-app',
        title: "Node Mailer Application",
        category: "web",
        description: "The project is aimed at building an application that enables users to send a large number of emails using Node.js and the nodemailer library. The application will allow users to compose and send personalized emails to a large number of recipients with ease.",
        shortDescription: "Application for sending bulk personalized emails using Node.js and Nodemailer.",
        introduction: "Briefly introduce the Node Mailer Application project here.",
        problemStatement: "Describe the core problem Node Mailer Application aimed to solve.",
        developmentJourney: "Share insights into the development process of Node Mailer Application.",
        strugglesAndSolutions: "Detail any challenges faced and how they were overcome during Node Mailer Application development.",
        designThinking: "Explain the design philosophy and process behind Node Mailer Application.",
        approach: "Describe the technical approach and architecture for Node Mailer Application.",
        conclusion: "Summarize the outcomes and learnings from the Node Mailer Application project.",
        impact: "Explain the impact Node Mailer Application had or is expected to have.",
        tags: [
            {
                name: "NodeJS",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "JavaScript",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "SQL",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            }
        ],
        imageUrl: "/images/nodeM.png",
        galleryImages: [
            {
                url: "/images/nodeM.png",
                alt: "Node Mailer App"
            }
        ],
        sourceCodeLink: "https://github.com/arun2github/Nodemailer/tree/master",
        liveLink: "#"
    }
];
const socialMediaLinks = [
    {
        name: 'linkedin',
        iconUrl: "/images/ln.png",
        url: "https://www.linkedin.com/in/imarunjnv/"
    },
    {
        name: 'instagram',
        iconUrl: "/images/instagram.png",
        url: 'https://www.instagram.com/infamous_fluky/'
    },
    {
        name: 'facebook',
        iconUrl: "/images/facebook.png",
        url: 'https://www.facebook.com/arun.disambiguation?mibextid=ZbWKwL'
    },
    {
        name: 'github',
        iconUrl: "/images/github.png",
        url: 'https://github.com/arun2github'
    }
];
const fonts = {
    FONT_MONTSERRAT: "Montserrat",
    FONT_POPPINS: "Poppins"
}; // --- RAW ASSET PATHS (Informational, actual paths are now in the data objects above) ---
 // You will need to move these images into your /public folder
 // and update the paths in the data objects above if they differ.
 /*
Example:
CommonStyle.PROFILE_ICON = 'assets/images/profile.jpg'; becomes profileIconUrl: "/images/profile.jpg",
CommonStyle.css = 'assets/images/tech/css.svg'; becomes iconUrl: "/images/tech/css.svg",
*/ 
}}),
"[project]/src/app/projects/[id]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "generateStaticParams": (()=>generateStaticParams)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/portfolioData.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-rsc] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-rsc] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-rsc] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-rsc] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/key-round.js [app-rsc] (ecmascript) <export default as KeyRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-rsc] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$workflow$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Workflow$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/workflow.js [app-rsc] (ecmascript) <export default as Workflow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-help.js [app-rsc] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-rsc] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-rsc] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/route.js [app-rsc] (ecmascript) <export default as Route>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-rsc] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
async function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].map((project)=>({
            id: project.id
        }));
}
const ProjectDetailPage = async ({ params })=>{
    // Await the params before using them
    const resolvedParams = await params;
    if (!resolvedParams?.id) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].find((p)=>p.id === resolvedParams.id);
    const isMobileApp = project?.category?.toLowerCase().includes('mobile');
    if (!project) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    // Helper to render sections safely
    const renderSection = (title, content)=>{
        if (!content || Array.isArray(content) && content.length === 0) return null;
        const detailedSectionConfig = {
            'Introduction': {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"],
                containerClass: "bg-opacity-30",
                titleClass: "text-blue-300",
                contentClass: "text-neutral-200"
            },
            'The Challenge (Problem Statement)': {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
                containerClass: "bg-rose-900/20 backdrop-blur-sm",
                titleClass: "text-rose-300",
                contentClass: "text-neutral-100"
            },
            'My Development Journey': {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__["Route"],
                containerClass: "bg-opacity-30",
                titleClass: "text-purple-300",
                contentClass: "text-neutral-200"
            },
            'Struggles & Solutions': {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2d$round$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyRound$3e$__["KeyRound"],
                containerClass: "bg-amber-900/20 backdrop-blur-sm",
                titleClass: "text-amber-300",
                contentClass: "text-neutral-100"
            },
            'Design Thinking & Process': {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"],
                containerClass: "bg-teal-900/20 backdrop-blur-sm",
                titleClass: "text-teal-300",
                contentClass: "text-neutral-100"
            },
            'My Approach': {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$workflow$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Workflow$3e$__["Workflow"],
                containerClass: "bg-indigo-900/20 backdrop-blur-sm",
                titleClass: "text-indigo-300",
                contentClass: "text-neutral-100"
            },
            'Conclusion': {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"],
                containerClass: "bg-opacity-30",
                titleClass: "text-green-300",
                contentClass: "text-neutral-200"
            },
            'Impact': {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"],
                containerClass: "bg-opacity-30",
                titleClass: "text-yellow-300",
                contentClass: "text-neutral-200"
            },
            'About This Project': {
                containerClass: "bg-opacity-20",
                titleClass: "text-[#7E8CE0]",
                contentClass: "text-neutral-100"
            }
        };
        const config = detailedSectionConfig[title] || {};
        const IconComponent = config.icon;
        const baseContainerClass = "mb-10 p-6 md:p-8 rounded-xl shadow-xl transition-all duration-300 ease-out";
        const specificContainerClass = config.containerClass || "bg-[#2D3748]/30";
        const containerClasses = `${baseContainerClass} ${specificContainerClass} ${IconComponent ? 'hover:shadow-2xl hover:shadow-current' : 'transform hover:scale-[1.01]'}`;
        const baseTitleClass = "text-3xl font-semibold mb-5 flex items-center";
        const specificTitleClass = config.titleClass || "text-[#A0AEC0]";
        const titleClasses = `${baseTitleClass} ${specificTitleClass} ${IconComponent ? '' : 'border-b-2 border-[#535C91] pb-3'}`;
        const contentPClass = `leading-relaxed whitespace-pre-line text-lg ${config.contentClass || 'text-neutral-100'}`;
        const contentUlClass = `list-disc list-inside leading-relaxed space-y-2 pl-1 ${config.contentClass || 'text-neutral-100'}`;
        const contentLiClass = config.contentClass || 'text-neutral-100';
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: containerClasses,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: titleClasses,
                    children: [
                        IconComponent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                            size: 30,
                            className: "mr-4 opacity-80"
                        }, void 0, false, {
                            fileName: "[project]/src/app/projects/[id]/page.tsx",
                            lineNumber: 71,
                            columnNumber: 29
                        }, this),
                        title
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/projects/[id]/page.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                Array.isArray(content) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: contentUlClass,
                    children: content.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: contentLiClass,
                            children: item
                        }, index, false, {
                            fileName: "[project]/src/app/projects/[id]/page.tsx",
                            lineNumber: 76,
                            columnNumber: 43
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/projects/[id]/page.tsx",
                    lineNumber: 75,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: contentPClass,
                    children: content
                }, void 0, false, {
                    fileName: "[project]/src/app/projects/[id]/page.tsx",
                    lineNumber: 79,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/projects/[id]/page.tsx",
            lineNumber: 69,
            columnNumber: 7
        }, this);
    };
    if (isMobileApp) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/app/projects/[id]/page.tsx",
                lineNumber: 89,
                columnNumber: 27
            }, void 0),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white py-12 md:py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/#projects",
                                className: "inline-flex items-center text-[#7E8CE0] hover:text-[#535C91] transition-colors group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        size: 20,
                                        className: "mr-2 transition-transform group-hover:-translate-x-1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/projects/[id]/page.tsx",
                                        lineNumber: 95,
                                        columnNumber: 17
                                    }, this),
                                    "Back to All Projects"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/projects/[id]/page.tsx",
                                lineNumber: 94,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/projects/[id]/page.tsx",
                            lineNumber: 93,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col lg:flex-row gap-12 items-start mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full lg:w-1/2 flex justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-[280px] h-[560px] perspective-1000",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-[#1A1D24] rounded-[3rem] border-[8px] border-[#2A2D35] shadow-2xl overflow-hidden transform-gpu hover:rotate-y-12 transition-all duration-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-[#1A1D24] rounded-b-2xl z-10"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/projects/[id]/page.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative w-full h-full",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        src: project.imageUrl,
                                                        alt: project.title,
                                                        layout: "fill",
                                                        objectFit: "contain",
                                                        className: "transition-transform duration-700 group-hover:scale-110"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/projects/[id]/page.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/projects/[id]/page.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transform transition-transform duration-300 hover:scale-110",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                src: "/images/android.png",
                                                                alt: "Get it on Google Play",
                                                                width: 24,
                                                                height: 24,
                                                                className: "opacity-70 hover:opacity-100 transition-opacity"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/projects/[id]/page.tsx",
                                                                lineNumber: 123,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/projects/[id]/page.tsx",
                                                            lineNumber: 122,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transform transition-transform duration-300 hover:scale-110",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                src: "/images/app-store.png",
                                                                alt: "Download on App Store",
                                                                width: 24,
                                                                height: 24,
                                                                className: "opacity-70 hover:opacity-100 transition-opacity"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/projects/[id]/page.tsx",
                                                                lineNumber: 132,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/projects/[id]/page.tsx",
                                                            lineNumber: 131,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/projects/[id]/page.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/projects/[id]/page.tsx",
                                            lineNumber: 105,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/projects/[id]/page.tsx",
                                        lineNumber: 104,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/projects/[id]/page.tsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full lg:w-1/2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#1A1D24]/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent",
                                                children: project.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[id]/page.tsx",
                                                lineNumber: 148,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xl text-neutral-400 mb-6 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
                                                        className: "mr-2",
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/projects/[id]/page.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 21
                                                    }, this),
                                                    project.category
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/projects/[id]/page.tsx",
                                                lineNumber: 151,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-neutral-300 text-lg leading-relaxed mb-8",
                                                children: project.shortDescription
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[id]/page.tsx",
                                                lineNumber: 155,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2 mb-8",
                                                children: project.tags.map((tag, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-4 py-2 text-sm font-medium text-white rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors duration-300",
                                                        children: tag.name
                                                    }, index, false, {
                                                        fileName: "[project]/src/app/projects/[id]/page.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[id]/page.tsx",
                                                lineNumber: 158,
                                                columnNumber: 19
                                            }, this),
                                            (project.liveLink || project.sourceCodeLink) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-4",
                                                children: [
                                                    project.liveLink && project.liveLink !== '#' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: project.liveLink,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "flex items-center px-6 py-3 bg-gradient-to-r from-[#7E8CE0] to-[#535C91] text-white rounded-xl hover:shadow-lg hover:shadow-[#7E8CE0]/30 transition-all duration-300",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                size: 18,
                                                                className: "mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/projects/[id]/page.tsx",
                                                                lineNumber: 177,
                                                                columnNumber: 27
                                                            }, this),
                                                            "View Live"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/projects/[id]/page.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 25
                                                    }, this),
                                                    project.sourceCodeLink && project.sourceCodeLink !== '#' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: project.sourceCodeLink,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "flex items-center px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all duration-300",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                                size: 18,
                                                                className: "mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/projects/[id]/page.tsx",
                                                                lineNumber: 188,
                                                                columnNumber: 27
                                                            }, this),
                                                            "View Code"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/projects/[id]/page.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/projects/[id]/page.tsx",
                                                lineNumber: 169,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/projects/[id]/page.tsx",
                                        lineNumber: 147,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/projects/[id]/page.tsx",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/projects/[id]/page.tsx",
                            lineNumber: 101,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-8",
                                    children: [
                                        renderSection('About This Project', project.description),
                                        renderSection('Introduction', project.introduction),
                                        renderSection('The Challenge (Problem Statement)', project.problemStatement),
                                        renderSection('My Development Journey', project.developmentJourney)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/projects/[id]/page.tsx",
                                    lineNumber: 200,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-8",
                                    children: [
                                        renderSection('Struggles & Solutions', project.strugglesAndSolutions),
                                        renderSection('Design Thinking & Process', project.designThinking),
                                        renderSection('My Approach', project.approach),
                                        renderSection('Conclusion', project.conclusion),
                                        renderSection('Impact', project.impact)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/projects/[id]/page.tsx",
                                    lineNumber: 206,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/projects/[id]/page.tsx",
                            lineNumber: 199,
                            columnNumber: 13
                        }, this),
                        project.galleryImages && project.galleryImages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent",
                                    children: "App Screenshots"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/projects/[id]/page.tsx",
                                    lineNumber: 218,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                                    children: project.galleryImages.map((img, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-[280px] h-[560px] mx-auto transform-gpu hover:scale-105 transition-all duration-500",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-[#1A1D24] rounded-[3rem] border-[8px] border-[#2A2D35] shadow-2xl overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    src: img.url,
                                                    alt: img.alt,
                                                    layout: "fill",
                                                    objectFit: "contain",
                                                    className: "transition-transform duration-700 group-hover:scale-110"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/projects/[id]/page.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[id]/page.tsx",
                                                lineNumber: 227,
                                                columnNumber: 23
                                            }, this)
                                        }, index, false, {
                                            fileName: "[project]/src/app/projects/[id]/page.tsx",
                                            lineNumber: 223,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/projects/[id]/page.tsx",
                                    lineNumber: 221,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/projects/[id]/page.tsx",
                            lineNumber: 217,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/projects/[id]/page.tsx",
                    lineNumber: 91,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/projects/[id]/page.tsx",
                lineNumber: 90,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/projects/[id]/page.tsx",
            lineNumber: 89,
            columnNumber: 7
        }, this);
    }
    // Web Project Layout (unchanged)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/app/projects/[id]/page.tsx",
            lineNumber: 249,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-[#1A1D24] text-white py-12 md:py-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/#projects",
                            className: "inline-flex items-center text-[#7E8CE0] hover:text-[#535C91] transition-colors group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    size: 20,
                                    className: "mr-2 transition-transform group-hover:-translate-x-1"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/projects/[id]/page.tsx",
                                    lineNumber: 255,
                                    columnNumber: 15
                                }, this),
                                "Back to All Projects"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/projects/[id]/page.tsx",
                            lineNumber: 254,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/projects/[id]/page.tsx",
                        lineNumber: 253,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "mb-12 text-center md:text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-5xl md:text-6xl font-bold mb-3 text-neutral-100 text-shadow-lg",
                                children: project.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[id]/page.tsx",
                                lineNumber: 262,
                                columnNumber: 13
                            }, this),
                            project.category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl text-neutral-400 mb-6",
                                children: project.category
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[id]/page.tsx",
                                lineNumber: 263,
                                columnNumber: 34
                            }, this),
                            project.imageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-2xl mb-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    src: project.imageUrl,
                                    alt: `${project.title} main image`,
                                    layout: "fill",
                                    objectFit: "cover"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/projects/[id]/page.tsx",
                                    lineNumber: 266,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[id]/page.tsx",
                                lineNumber: 265,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/projects/[id]/page.tsx",
                        lineNumber: 261,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-3 gap-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-2",
                                children: [
                                    renderSection('About This Project', project.description),
                                    renderSection('Introduction', project.introduction),
                                    renderSection('The Challenge (Problem Statement)', project.problemStatement),
                                    renderSection('My Development Journey', project.developmentJourney),
                                    renderSection('Struggles & Solutions', project.strugglesAndSolutions),
                                    renderSection('Design Thinking & Process', project.designThinking),
                                    renderSection('My Approach', project.approach),
                                    renderSection('Conclusion', project.conclusion),
                                    renderSection('Impact', project.impact)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/projects/[id]/page.tsx",
                                lineNumber: 274,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "lg:col-span-1 space-y-10 lg:sticky lg:top-24 h-max",
                                children: [
                                    project.technologiesUsed && project.technologiesUsed.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#2D3748]/50 p-6 rounded-lg shadow-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-semibold mb-4 text-[#7E8CE0]",
                                                children: "Technologies Used"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[id]/page.tsx",
                                                lineNumber: 290,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "flex flex-wrap gap-2",
                                                children: project.technologiesUsed.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "bg-[#535C91] text-neutral-100 px-3 py-1 rounded-full text-sm",
                                                        children: tech
                                                    }, tech, false, {
                                                        fileName: "[project]/src/app/projects/[id]/page.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[id]/page.tsx",
                                                lineNumber: 291,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/projects/[id]/page.tsx",
                                        lineNumber: 289,
                                        columnNumber: 17
                                    }, this),
                                    !project.technologiesUsed && project.tags && project.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#2D3748]/50 p-6 rounded-lg shadow-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-semibold mb-4 text-[#7E8CE0]",
                                                children: "Key Technologies/Tags"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[id]/page.tsx",
                                                lineNumber: 303,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "flex flex-wrap gap-2",
                                                children: project.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "bg-[#535C91] text-neutral-100 px-3 py-1 rounded-full text-sm",
                                                        children: tag.name
                                                    }, tag.name, false, {
                                                        fileName: "[project]/src/app/projects/[id]/page.tsx",
                                                        lineNumber: 306,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[id]/page.tsx",
                                                lineNumber: 304,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/projects/[id]/page.tsx",
                                        lineNumber: 302,
                                        columnNumber: 17
                                    }, this),
                                    (project.liveLink || project.sourceCodeLink) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#2D3748]/50 p-6 rounded-lg shadow-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-semibold mb-4 text-[#7E8CE0]",
                                                children: "Project Links"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[id]/page.tsx",
                                                lineNumber: 316,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: [
                                                    project.liveLink && project.liveLink !== '#' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: project.liveLink,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "flex items-center text-neutral-200 hover:text-[#7E8CE0] transition-colors",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                size: 18,
                                                                className: "mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/projects/[id]/page.tsx",
                                                                lineNumber: 320,
                                                                columnNumber: 25
                                                            }, this),
                                                            " View Live Project"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/projects/[id]/page.tsx",
                                                        lineNumber: 319,
                                                        columnNumber: 23
                                                    }, this),
                                                    project.sourceCodeLink && project.sourceCodeLink !== '#' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: project.sourceCodeLink,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "flex items-center text-neutral-200 hover:text-[#7E8CE0] transition-colors",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                                size: 18,
                                                                className: "mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/projects/[id]/page.tsx",
                                                                lineNumber: 325,
                                                                columnNumber: 25
                                                            }, this),
                                                            " View on GitHub"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/projects/[id]/page.tsx",
                                                        lineNumber: 324,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/projects/[id]/page.tsx",
                                                lineNumber: 317,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/projects/[id]/page.tsx",
                                        lineNumber: 315,
                                        columnNumber: 17
                                    }, this),
                                    project.galleryImages && project.galleryImages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#2D3748]/50 p-6 rounded-lg shadow-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-semibold mb-4 text-[#7E8CE0]",
                                                children: "Project Gallery"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[id]/page.tsx",
                                                lineNumber: 334,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-4",
                                                children: project.galleryImages.map((img, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative aspect-square rounded overflow-hidden shadow-md hover:opacity-80 transition-opacity",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                            src: img.url,
                                                            alt: img.alt,
                                                            layout: "fill",
                                                            objectFit: "cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/projects/[id]/page.tsx",
                                                            lineNumber: 338,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, index, false, {
                                                        fileName: "[project]/src/app/projects/[id]/page.tsx",
                                                        lineNumber: 337,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/[id]/page.tsx",
                                                lineNumber: 335,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/projects/[id]/page.tsx",
                                        lineNumber: 333,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/projects/[id]/page.tsx",
                                lineNumber: 287,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/projects/[id]/page.tsx",
                        lineNumber: 272,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/projects/[id]/page.tsx",
                lineNumber: 251,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/projects/[id]/page.tsx",
            lineNumber: 250,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/projects/[id]/page.tsx",
        lineNumber: 249,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = ProjectDetailPage;
}}),
"[project]/src/app/projects/[id]/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/projects/[id]/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_185460e5._.js.map