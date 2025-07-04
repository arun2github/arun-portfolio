module.exports = {

"[project]/src/data/portfolioData.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    detailedIntro: "I'm not just another developer—I'm a strategic technology partner who transforms business challenges into scalable digital solutions. With a unique blend of mobile expertise, AI innovation, and cross-platform mastery, I've consistently delivered solutions that don't just meet requirements but exceed expectations. My approach combines technical excellence with deep business understanding, ensuring every line of code drives measurable ROI for my clients.",
    codingJourney: "My journey began with a simple question: 'How can technology solve real business problems?' This curiosity led me from web fundamentals to becoming a Flutter expert, and now to pioneering AI agent solutions. I've evolved from writing code to architecting systems that scale, from building features to designing user experiences that convert. Each project has taught me that the best technology is invisible—it just works, seamlessly and efficiently, while delivering exceptional business value.",
    achievements: [
        "Architected and deployed 20+ micro-apps serving 10,000+ users daily, resulting in 40% improved operational efficiency for banking operations.",
        "Pioneered AI agent integration in mobile applications, reducing customer service response time by 60% and improving user satisfaction scores.",
        "Led cross-functional teams to deliver the Drishti 3D Dashboard, providing real-time compliance monitoring that reduced audit time by 70%.",
        "Developed Sampark Lead Management System that increased conversion rates by 35% and reduced lead processing time by 50%.",
        "Received prestigious 'Star Award' for exceptional contributions across multiple high-impact projects, recognized for innovative problem-solving and technical leadership."
    ],
    motivation: "I'm driven by the intersection of technology and human potential. Every project is an opportunity to not just build software, but to create systems that empower people and transform businesses. My motivation comes from seeing the 'aha' moments when complex problems become elegant solutions, and when users discover new ways to work more efficiently. I believe that great technology should be both powerful and accessible—solving real problems while delighting users.",
    philosophy: "My development philosophy centers on three core principles: Business Impact First, User Experience Always, and Scalable Architecture. I don't just write code—I build systems that grow with your business. Every solution starts with understanding your unique challenges, then leverages the right technology stack to create sustainable, maintainable, and profitable digital products. Success isn't measured in lines of code, but in business outcomes and user satisfaction.",
    passionsOutsideCode: [
        "Discovering sonic landscapes across genres while crafting melodies on various instruments.",
        "Attending tech events and AI conferences to stay at the forefront of innovation.",
        "Experimenting with global cuisines and honing my culinary skills."
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
        id: 'linkedin-agent',
        title: 'LinkedIn AI Agent',
        category: 'AI',
        description: 'This AI agent logs into a LinkedIn account, browses the feed, identifies posts relevant to specific topics using NLP, and then autonomously posts pre-defined, relevant content as comments or posts.',
        shortDescription: '🤖 Built an intelligent LinkedIn automation agent that uses NLP to identify relevant content and engage with 500+ posts daily, increasing social media presence and lead generation by 300% for professional networking.',
        introduction: 'The LinkedIn AI Agent is designed to automate social media engagement for professionals, saving time and increasing visibility on the platform.',
        problemStatement: 'Manually browsing LinkedIn and engaging with relevant content is time-consuming. This agent automates the process, ensuring consistent activity.',
        developmentJourney: 'The agent was built using a modular architecture, with separate components for authentication, feed scraping, content analysis (NLP), and posting. This allowed for iterative development and testing.',
        strugglesAndSolutions: 'A major challenge was bypassing LinkedIn\'s bot detection. This was solved by mimicking human-like browsing behavior, such as randomizing delays and scrolling patterns.',
        designThinking: 'The focus was on creating a reliable and unobtrusive agent. The agent\'s posting schedule and content are configurable to avoid spammy behavior.',
        approach: 'The agent uses a combination of web scraping libraries to interact with LinkedIn, a fine-tuned NLP model to identify relevant posts, and a state machine to manage its workflow.',
        conclusion: 'The LinkedIn AI Agent is an effective tool for automating LinkedIn engagement, providing a consistent presence on the platform with minimal manual intervention.',
        impact: 'The agent helps users increase their visibility and engagement on LinkedIn, leading to more connections and opportunities.',
        tags: [
            {
                name: "AI",
                color: "linear-gradient(90deg, #8E2DE2 0%, #4A00E0 100%)"
            },
            {
                name: "LangChain",
                color: "linear-gradient(90deg, #fc466b 0%, #3f5efb 100%)"
            },
            {
                name: "NLP",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "Automation",
                color: "linear-gradient(90deg, #ff9966 0%, #ff5e62 100%)"
            }
        ],
        imageUrl: '/images/project/linkedin_agent.png',
        galleryImages: [
            {
                url: '/images/project/linkedin_agent.png',
                alt: 'LinkedIn Agent Dashboard'
            }
        ],
        sourceCodeLink: '#',
        liveLink: '#'
    },
    {
        id: 'email-agent',
        title: 'Intelligent Email Agent for Banking',
        category: 'AI',
        description: 'Developed for a small finance bank, this email agent uses Llama3 and LangChain to analyze incoming emails. It identifies the user\'s intent, automatically creates a CRM ticket, notifies the assigned employee, and can even draft a reply by calling internal APIs to fetch necessary information.',
        shortDescription: '📧 Revolutionized customer support for a finance bank with an AI-powered email agent that processes 1000+ emails daily, automatically creates CRM tickets, and drafts responses - reducing response time by 85% and improving customer satisfaction by 60%.',
        introduction: 'This project was initiated to streamline customer support operations at a small finance bank by automating the initial stages of email-based queries.',
        problemStatement: 'The manual process of reading emails, identifying customer needs, creating CRM tickets, and routing them to the correct department was slow and prone to human error, leading to delayed responses.',
        developmentJourney: 'The development involved fine-tuning the Llama3 model for banking-specific intents, building a robust LangChain pipeline for processing emails, and integrating with the bank\'s existing CRM and internal APIs.',
        strugglesAndSolutions: 'Ensuring high accuracy in intent recognition for a wide variety of customer emails was challenging. This was addressed by augmenting the training data with synthetic examples and implementing a confidence-based fallback to a human agent.',
        designThinking: 'The system was designed to be a "human-in-the-loop" agent. While it automates most of the workflow, it provides clear dashboards for human agents to monitor its activity and intervene when necessary.',
        approach: 'The core of the agent is a LangChain pipeline that orchestrates multiple steps: email pre-processing, intent classification using Llama3, entity extraction for key information, API calls to the CRM, and generating a draft response.',
        conclusion: 'The Intelligent Email Agent significantly reduced the manual effort required for handling customer emails, leading to faster response times and improved customer satisfaction.',
        impact: 'The agent automated over 60% of incoming email workflows, allowing customer service representatives to focus on more complex and high-value interactions.',
        tags: [
            {
                name: "Llama3",
                color: "linear-gradient(90deg, #d53369 0%, #daae51 100%)"
            },
            {
                name: "LangChain",
                color: "linear-gradient(90deg, #fc466b 0%, #3f5efb 100%)"
            },
            {
                name: "AI",
                color: "linear-gradient(90deg, #8E2DE2 0%, #4A00E0 100%)"
            },
            {
                name: "CRM",
                color: "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)"
            },
            {
                name: "API Integration",
                color: "linear-gradient(90deg, #f7971e 0%, #ffd200 100%)"
            }
        ],
        imageUrl: '/images/project/email_agent.png',
        galleryImages: [
            {
                url: '/images/project/email_agent.png',
                alt: 'Email Agent Workflow'
            }
        ],
        sourceCodeLink: '#',
        liveLink: '#'
    },
    {
        id: 'au-niyantaran',
        title: "Niyantaran",
        category: "Web",
        description: "Revamped Niyantran's front-end UI with complete redesign based on Figma prototypes. Built dynamic forms for role-based workflows, integrated draft management, and implemented responsive, user-friendly interfaces supporting complex rule configurations. Ensured seamless interaction with backend APIs for rule-driven request processing, role assignments, and real-time audit tracking.",
        shortDescription: "🎨 Completely redesigned Niyantran's front-end with dynamic role-based workflows, real-time audit tracking, and responsive design - enabling 200+ Commercial Banking teams to process requests 3x faster with 90% fewer errors.",
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
        imageUrl: '/images/niyan_dashboard.PNG',
        galleryImages: [
            {
                url: '/images/niyan_forInfo.PNG',
                alt: 'AU Hub Zoom Login'
            },
            {
                url: '/images/niyan_login.PNG',
                alt: 'AU Hub Zoom Feature 1'
            },
            {
                url: '/images/niyan_myRequest.PNG',
                alt: 'AU Hub Zoom Feature 2'
            },
            {
                url: '/images/niyan_newRequest.PNG',
                alt: 'AU Hub Zoom Feature 3'
            }
        ],
        sourceCodeLink: "#",
        liveLink: "#"
    },
    {
        id: 'au-hub-zoom',
        title: "AU HUB | Zoom Call Feature and Recording",
        category: "Mobile",
        description: "Developed a Zoom Call feature module within the AU HUB application, enabling Business Correspondents (BCs) and employees to initiate, record, and playback Zoom video calls. The solution involved writing platform-specific code for Android and iOS using Zoom SDK integration. Key features include call recording, playback functionality, and Picture-in-Picture (PiP) mode for floating window support. Leveraging Flutter with GetX for state management, the module ensures seamless cross-platform experience. Utilized native integration for Zoom SDK, and packages like `flutter_zoom_sdk`, `flutter_pip`, and `video_player` for enhanced functionality.",
        shortDescription: "🚀 Transformed AU HUB into a complete communication hub with seamless Zoom integration, enabling 10,000+ employees to conduct professional video calls, record meetings, and multitask with PiP mode - boosting productivity by 40%.",
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
        imageUrl: '/images/sam_assignTask.png',
        galleryImages: [
            {
                url: '/images/au_hub_login.jpg',
                alt: 'AU Hub Zoom Login'
            },
            {
                url: '/images/au_hub_p1.jpg',
                alt: 'AU Hub Zoom Feature 1'
            },
            {
                url: '/images/au_hub_p2.jpg',
                alt: 'AU Hub Zoom Feature 2'
            },
            {
                url: '/images/au_hub_p3.jpg',
                alt: 'AU Hub Zoom Feature 3'
            },
            {
                url: '/images/au_hub_vedio.jpg',
                alt: 'AU Hub Zoom Video Playback'
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
        shortDescription: "📱 Empowered 500+ Relationship Managers with a powerful mobile solution that streamlines lead management, automates call logging, and boosts field productivity by 60% - turning every customer interaction into a revenue opportunity.",
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
        imageUrl: '/images/samm_dashboard.jpg',
        galleryImages: [
            {
                url: '/images/samm_login.jpg',
                alt: 'Sampark RM App Login'
            },
            {
                url: '/images/samm_dashboard.jpg',
                alt: 'Sampark RM App Dashboard'
            },
            {
                url: '/images/sam_dashboard_drawer.jpg',
                alt: 'Sampark RM App Dashboard'
            },
            {
                url: '/images/sam_pef.png',
                alt: 'Sampark RM App Table View'
            },
            {
                url: '/images/sam_captureLead.jpg',
                alt: 'Sampark RM App Table View'
            },
            {
                url: '/images/sam_assignTask.png',
                alt: 'Sampark RM App Assign Task'
            },
            {
                url: '/images/sam_assignTask2.jpg',
                alt: 'Sampark RM App Assign Task'
            },
            {
                url: '/images/sam_assignTask2.jpg',
                alt: 'Sampark RM App Assign Task'
            }
        ],
        sourceCodeLink: "#",
        liveLink: "#"
    },
    {
        id: 'tura-municipal-board-website',
        title: "Tura Municipal Board Website",
        category: "Web",
        description: "The Tura Municipal Board website is a government portal developed using Flutter, designed to streamline form submissions and approvals. The platform features a multi-step approval system where user-submitted forms undergo two rounds of validation before final approval. If a payment is required, users can securely complete transactions via the integrated SBI ePay gateway before printing the approved form. The website enhances administrative efficiency by automating workflows and providing a user-friendly interface for citizens and government officials.",
        shortDescription: "🏛️ Built a comprehensive government portal for Tura Municipal Board with multi-level approval workflows, secure SBI ePay integration, and automated form processing - serving 50,000+ citizens with 95% faster service delivery.",
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
        imageUrl: '/images/tura_login.PNG',
        galleryImages: [
            {
                url: '/images/tura_login.PNG',
                alt: 'Tura Website Login'
            },
            {
                url: '/images/tura_reg.PNG',
                alt: 'Tura Website Registration'
            },
            {
                url: '/images/tura_home.PNG',
                alt: 'Tura Website Home'
            },
            {
                url: '/images/tura_tura_about.PNG',
                alt: 'Tura Website About'
            },
            {
                url: '/images/tura_tura_scheme.PNG',
                alt: 'Tura Website Scheme'
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
        shortDescription: "💼 Developed a centralized web platform for 300+ RMs and BOs to manage tasks, leads, and customer interactions with real-time data synchronization - improving operational efficiency by 45% and customer response time by 70%.",
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
        imageUrl: '/images/dashboard.PNG',
        galleryImages: [
            {
                url: '/images/loginImg.PNG',
                alt: 'Sampark Web Login'
            },
            {
                url: '/images/dashboard.PNG',
                alt: 'Sampark Web Dashboard'
            },
            {
                url: '/images/table.PNG',
                alt: 'Sampark Web Table View'
            }
        ],
        sourceCodeLink: "#",
        liveLink: "#"
    },
    {
        id: 'dhirst-website',
        title: "Dhirst Website",
        category: "Web",
        description: "Developed the front-end for AU Compliance Actionable Tracker as per RBI regulatory guidelines, implementing dynamic workflows, multi-role management, real-time compliance tracking, and confidential instruction processing. Built complex UI components for Makers, HODs, SPOCs, FPRs, Checkers, and Observers with role-based access and dynamic Excel-based actionable uploads. Ensured audit trails, notifications, and escalations are fully integrated into the responsive design.",
        shortDescription: "📋 Engineered a comprehensive compliance tracking system for AU Small Finance Bank with role-based workflows, Excel integration, and real-time notifications - ensuring 100% RBI compliance while reducing audit time by 60%.",
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
        imageUrl: '/images/dhristi_dashboard.PNG',
        galleryImages: [
            {
                url: '/images/dhiristi_edit.PNG',
                alt: 'Sampark Web Login'
            },
            {
                url: '/images/dhiristi_editHistory.PNG',
                alt: 'Sampark Web Dashboard'
            },
            {
                url: '/images/dhiristi_return.PNG',
                alt: 'Sampark Web Table View'
            },
            {
                url: '/images/dhristi_createnew.PNG',
                alt: 'Sampark Web Table View'
            },
            {
                url: '/images/dhristi_login.PNG',
                alt: 'Sampark Web Table View'
            },
            {
                url: '/images/dhristi_return_id.PNG',
                alt: 'Sampark Web Table View'
            }
        ],
        sourceCodeLink: "#",
        liveLink: "#"
    },
    {
        id: 'fincareone-branch-change',
        title: "FincareOne | Branch Class Change",
        category: "Mobile",
        description: "A comprehensive module within the FincareOne application that digitizes the process of requesting and approving branch and user class changes for employees. It provides a user-friendly interface for employees to submit requests with details like deputation branch and duration. Requests are routed through a two-level approval hierarchy pulled from HRMS. Reporting managers can review, approve, or reject requests through an intuitive interface with swipe gestures. Approved changes are automatically executed by a daily cron job, significantly reducing manual intervention from the IT team.",
        shortDescription: "⚡ Automated 30-40% of IT service tickets with a self-service module that empowers employees to manage branch transfers while providing managers with intuitive swipe-to-approve workflows - reducing approval time by 80%.",
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
        imageUrl: '/images/CrossSell.jpg',
        galleryImages: [
            {
                url: '/images/CrossSell.jpg',
                alt: 'Branch Class Change Module'
            }
        ],
        sourceCodeLink: "#",
        liveLink: "#"
    },
    {
        id: 'fincareone-crosssell',
        title: "FincareOne | CrossSell",
        category: "Mobile",
        description: "The Cross-Sell v3.0 module is an advanced lead management system integrated within the Fincare One application. It empowers branch employees, including Branch Managers (BMs), Branch Operations Managers (BOMs), and Relationship Managers (RMs), to seamlessly manage the entire lead lifecycle. The module features role-based user flows for lead submission, assignment, and actioning. BMs/BOMs can assign leads from a central queue, while RMs can act on their assigned leads by calling customers and updating statuses. All employees can submit new leads through a dedicated form with product selection. The system is designed to enhance sales productivity, streamline lead tracking, and improve customer conversion rates through an intuitive, role-specific UI.",
        shortDescription: "🎯 Revolutionized lead management for 200+ bank branches with role-based workflows that streamline lead submission, assignment, and conversion - driving 25% increase in cross-selling success rates.",
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
        imageUrl: '/images/CrossSell.jpg',
        galleryImages: [
            {
                url: '/images/CrossSell.jpg',
                alt: 'CrossSell Module'
            }
        ],
        sourceCodeLink: "#",
        liveLink: "#"
    },
    {
        id: "mosymphony-cgt",
        title: "Mosymphony-CGT",
        category: "Web",
        shortDescription: "🔬 Built a comprehensive Cell-Gene Therapy collaboration platform with secure role-based access, two-factor authentication, and organization management - enabling 100+ research organizations to collaborate securely while maintaining 99.9% data integrity.",
        description: "Mosymphony-CGT is an advanced web platform designed to facilitate and streamline Cell-Gene Therapy research and collaboration. The system implements a robust user management system with role-based access control, secure authentication, and comprehensive organization management capabilities.",
        imageUrl: '/images/cgt.png',
        galleryImages: [
            {
                url: '/images/cgt.png',
                alt: 'Cell and Gene Therapy Project'
            },
            {
                url: '/images/cgt.png',
                alt: 'User Management Interface'
            },
            {
                url: '/images/cgt.png',
                alt: 'Organization Management View'
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
        shortDescription: "💊 Developed a pharmaceutical contract manufacturing platform with quality event tracking and sponsor-CMO communication - streamlining processes for 50+ pharma companies and reducing quality incidents by 75%.",
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
        imageUrl: '/images/qem.png',
        galleryImages: [
            {
                url: '/images/qem.png',
                alt: 'Mosymphony QEM'
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
        shortDescription: "🎬 Created a Netflix replica with React and GraphQL featuring movie browsing, streaming capabilities, and responsive design - demonstrating full-stack development skills with modern technologies and user experience best practices.",
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
        imageUrl: '/images/net.jpg',
        galleryImages: [
            {
                url: '/images/net.jpg',
                alt: 'Netflix Clone'
            }
        ],
        sourceCodeLink: "https://github.com/arun2github/workshop-graphql-netflix",
        liveLink: "#"
    },
    {
        id: 'node-mailer-app',
        title: "Node Mailer Application",
        category: "Web",
        description: "The project is aimed at building an application that enables users to send a large number of emails using Node.js and the nodemailer library. The application will allow users to compose and send personalized emails to a large number of recipients with ease.",
        shortDescription: "📧 Engineered a bulk email automation system using Node.js and Nodemailer that processes 10,000+ personalized emails daily with 99.9% delivery success rate - revolutionizing email marketing campaigns for businesses.",
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
        imageUrl: '/images/nodeM.png',
        galleryImages: [
            {
                url: '/images/nodeM.png',
                alt: 'Node Mailer App'
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
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/app/about-details/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rocket.js [app-ssr] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-ssr] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/coffee.js [app-ssr] (ecmascript) <export default as Coffee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$disc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Disc$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/disc.js [app-ssr] (ecmascript) <export default as Disc>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mountain$2d$snow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MountainSnow$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mountain-snow.js [app-ssr] (ecmascript) <export default as MountainSnow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/git-branch.js [app-ssr] (ecmascript) <export default as GitBranch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/portfolioData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const Section = ({ title, icon, children, className, delay = 0.2 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        className: `mb-10 p-6 md:p-8 bg-neutral-800/60 rounded-2xl shadow-2xl backdrop-blur-lg border border-neutral-700/70 overflow-hidden ${className}`,
        initial: {
            opacity: 0,
            y: 40
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.7,
            delay,
            ease: [
                0.25,
                1,
                0.5,
                1
            ]
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center mb-6",
                children: [
                    icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[#A0AEC0] mr-4 p-2 bg-neutral-700/50 rounded-lg",
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/src/app/about-details/page.tsx",
                        lineNumber: 18,
                        columnNumber: 16
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8A9BCA] to-[#A8BBEC]",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/app/about-details/page.tsx",
                        lineNumber: 19,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/about-details/page.tsx",
                lineNumber: 17,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-neutral-200/90 leading-relaxed text-lg md:text-xl space-y-5 prose prose-invert prose-lg max-w-none prose-p:text-neutral-200/90 prose-headings:text-[#A0AEC0]",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/about-details/page.tsx",
                lineNumber: 23,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/about-details/page.tsx",
        lineNumber: 11,
        columnNumber: 3
    }, this);
const passionIcons = {
    music: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$disc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Disc$3e$__["Disc"], {
        size: 22,
        className: "text-purple-300"
    }, void 0, false, {
        fileName: "[project]/src/app/about-details/page.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this),
    reading: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
        size: 22,
        className: "text-blue-300"
    }, void 0, false, {
        fileName: "[project]/src/app/about-details/page.tsx",
        lineNumber: 31,
        columnNumber: 12
    }, this),
    culinary: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
        size: 22,
        className: "text-orange-300"
    }, void 0, false, {
        fileName: "[project]/src/app/about-details/page.tsx",
        lineNumber: 32,
        columnNumber: 13
    }, this),
    hiking: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mountain$2d$snow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MountainSnow$3e$__["MountainSnow"], {
        size: 22,
        className: "text-teal-300"
    }, void 0, false, {
        fileName: "[project]/src/app/about-details/page.tsx",
        lineNumber: 33,
        columnNumber: 11
    }, this),
    default: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
        size: 22,
        className: "text-yellow-300"
    }, void 0, false, {
        fileName: "[project]/src/app/about-details/page.tsx",
        lineNumber: 34,
        columnNumber: 12
    }, this)
};
const AboutDetailsPage = ()=>{
    const profile = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profileData"];
    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
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
                type: 'spring',
                stiffness: 100
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-tl from-[#10131A] via-[#1A1D24] to-[#10131A] text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8 antialiased relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0 pointer-events-none opacity-30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"], {
                        size: 500,
                        className: "absolute -top-40 -left-40 text-neutral-700/30 transform rotate-[20deg]"
                    }, void 0, false, {
                        fileName: "[project]/src/app/about-details/page.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                        size: 400,
                        className: "absolute -bottom-60 -right-40 text-neutral-700/30 transform rotate-[-30deg]"
                    }, void 0, false, {
                        fileName: "[project]/src/app/about-details/page.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/about-details/page.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "max-w-5xl mx-auto relative z-10",
                variants: containerVariants,
                initial: "hidden",
                animate: "visible",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: itemVariants,
                        className: "mb-10 md:mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/#about",
                                scroll: false,
                                "data-nav-link": true,
                                className: "inline-flex items-center text-lg text-[#A0AEC0] hover:text-[#7E8CE0] transition-colors duration-300 group mb-8 group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        size: 24,
                                        className: "mr-2.5 transition-transform duration-300 group-hover:-translate-x-1.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/about-details/page.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    "Return to Main Page"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/about-details/page.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "flex flex-col md:flex-row items-center text-center md:text-left bg-neutral-800/50 backdrop-blur-xl p-8 md:p-10 rounded-2xl shadow-2xl border border-[#535C91]/50 overflow-hidden relative",
                                initial: {
                                    opacity: 0,
                                    scale: 0.95
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                transition: {
                                    duration: 0.5,
                                    delay: 0.1,
                                    ease: "circOut"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-10 -left-10 w-32 h-32 bg-[#535C91]/20 rounded-full filter blur-2xl opacity-70"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/about-details/page.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -bottom-10 -right-10 w-32 h-32 bg-[#7E8CE0]/20 rounded-full filter blur-2xl opacity-70"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/about-details/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    profile.profileIconUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "relative mb-6 md:mb-0 md:mr-8 flex-shrink-0",
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        transition: {
                                            type: "spring",
                                            stiffness: 300
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: profile.profileIconUrl,
                                                alt: profile.name || 'Profile',
                                                width: 160,
                                                height: 160,
                                                className: "rounded-full shadow-2xl border-4 border-[#6874B7] object-cover",
                                                priority: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/about-details/page.tsx",
                                                lineNumber: 89,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 rounded-full border-2 border-transparent group-hover:border-[#A0AEC0]/50 transition-all duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/about-details/page.tsx",
                                                lineNumber: 97,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/about-details/page.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-grow z-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                                                className: "text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#A8BBEC] via-[#CAD5F0] to-[#A8BBEC] mb-3 leading-tight tracking-tight",
                                                initial: {
                                                    opacity: 0,
                                                    y: 15
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                transition: {
                                                    delay: 0.3,
                                                    duration: 0.5
                                                },
                                                children: profile.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/about-details/page.tsx",
                                                lineNumber: 101,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                                className: "text-2xl md:text-3xl text-neutral-300/80 font-light tracking-wide",
                                                initial: {
                                                    opacity: 0,
                                                    y: 10
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                transition: {
                                                    delay: 0.4,
                                                    duration: 0.5
                                                },
                                                children: [
                                                    profile.title1,
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#7E8CE0]",
                                                        children: "&"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/about-details/page.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 34
                                                    }, this),
                                                    " ",
                                                    profile.title2
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/about-details/page.tsx",
                                                lineNumber: 109,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/about-details/page.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/about-details/page.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/about-details/page.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "md:grid md:grid-cols-2 md:gap-10",
                        children: [
                            profile.detailedIntro && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                title: "Why Choose Me",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                    size: 30
                                }, void 0, false, {
                                    fileName: "[project]/src/app/about-details/page.tsx",
                                    lineNumber: 126,
                                    columnNumber: 50
                                }, void 0),
                                delay: 0.1 * 1,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "whitespace-pre-line first-letter:text-4xl first-letter:font-bold first-letter:text-[#A0AEC0] first-letter:mr-2 first-letter:float-left",
                                    children: profile.detailedIntro
                                }, void 0, false, {
                                    fileName: "[project]/src/app/about-details/page.tsx",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/about-details/page.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this),
                            profile.codingJourney && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                title: "My Evolution & Expertise",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                                    size: 30
                                }, void 0, false, {
                                    fileName: "[project]/src/app/about-details/page.tsx",
                                    lineNumber: 132,
                                    columnNumber: 61
                                }, void 0),
                                delay: 0.1 * 1.5,
                                children: [
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "whitespace-pre-line",
                                        children: profile.codingJourney
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/about-details/page.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/about-details/page.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/about-details/page.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    profile.starAwardDetails && profile.starAwardDetails.imageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                        title: "Special Recognition",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                            size: 30,
                            className: "text-yellow-300"
                        }, void 0, false, {
                            fileName: "[project]/src/app/about-details/page.tsx",
                            lineNumber: 139,
                            columnNumber: 54
                        }, void 0),
                        delay: 0.1 * 3,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center text-center p-4 md:p-6 bg-neutral-700/50 rounded-xl shadow-inner",
                            children: [
                                profile.starAwardDetails.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-2xl md:text-3xl font-semibold text-yellow-200 mb-4 md:mb-6",
                                    children: profile.starAwardDetails.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/about-details/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "relative w-full max-w-xl lg:max-w-2xl h-auto mb-5 rounded-lg overflow-hidden shadow-2xl border-2 border-yellow-500/60 hover:shadow-yellow-400/20 transition-all duration-300",
                                    whileHover: {
                                        scale: 1.03,
                                        borderColor: 'rgba(250,204,21,0.8)'
                                    },
                                    transition: {
                                        type: "spring",
                                        stiffness: 200
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: profile.starAwardDetails.imageUrl,
                                        alt: profile.starAwardDetails.title || 'Star Award Image',
                                        width: 700,
                                        height: 450,
                                        layout: "responsive",
                                        objectFit: "contain",
                                        className: "bg-neutral-900/30"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/about-details/page.tsx",
                                        lineNumber: 151,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/about-details/page.tsx",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, this),
                                profile.starAwardDetails.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-neutral-300/80 text-md md:text-lg leading-relaxed whitespace-pre-line",
                                    children: profile.starAwardDetails.description
                                }, void 0, false, {
                                    fileName: "[project]/src/app/about-details/page.tsx",
                                    lineNumber: 162,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/about-details/page.tsx",
                            lineNumber: 140,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/about-details/page.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this),
                    profile.achievements && profile.achievements.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                        title: "Proven Results & Impact",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                            size: 30
                        }, void 0, false, {
                            fileName: "[project]/src/app/about-details/page.tsx",
                            lineNumber: 171,
                            columnNumber: 58
                        }, void 0),
                        delay: 0.1 * 4,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "list-none space-y-4",
                            children: profile.achievements.map((ach, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].li, {
                                    className: "flex items-start p-3.5 bg-neutral-700/40 rounded-lg hover:bg-neutral-700/60 transition-colors duration-200 shadow-md hover:shadow-lg",
                                    initial: {
                                        opacity: 0,
                                        x: -25,
                                        scale: 0.95
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        x: 0,
                                        scale: 1
                                    },
                                    viewport: {
                                        once: true,
                                        amount: 0.3
                                    },
                                    transition: {
                                        delay: i * 0.12,
                                        duration: 0.5,
                                        ease: [
                                            0.25,
                                            1,
                                            0.5,
                                            1
                                        ]
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"], {
                                            size: 22,
                                            className: "text-[#7E8CE0] mr-4 mt-1 flex-shrink-0 transform rotate-[-45deg]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about-details/page.tsx",
                                            lineNumber: 182,
                                            columnNumber: 19
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-neutral-100 text-lg",
                                            children: ach
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about-details/page.tsx",
                                            lineNumber: 183,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/app/about-details/page.tsx",
                                    lineNumber: 174,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/about-details/page.tsx",
                            lineNumber: 172,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/about-details/page.tsx",
                        lineNumber: 171,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "md:grid md:grid-cols-2 md:gap-10",
                        children: [
                            profile.motivation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                title: "What Drives My Success",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                    size: 30,
                                    className: "text-red-300"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/about-details/page.tsx",
                                    lineNumber: 196,
                                    columnNumber: 59
                                }, void 0),
                                delay: 0.1 * 5,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "whitespace-pre-line italic text-neutral-300/70",
                                    children: profile.motivation
                                }, void 0, false, {
                                    fileName: "[project]/src/app/about-details/page.tsx",
                                    lineNumber: 197,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/about-details/page.tsx",
                                lineNumber: 196,
                                columnNumber: 13
                            }, this),
                            profile.philosophy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                title: "My Development Philosophy",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                    size: 30,
                                    className: "text-green-300"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/about-details/page.tsx",
                                    lineNumber: 202,
                                    columnNumber: 62
                                }, void 0),
                                delay: 0.1 * 5.5,
                                children: [
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                        className: "border-l-4 border-[#7E8CE0] pl-6 py-2 my-4 bg-neutral-700/30 rounded-r-md",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "whitespace-pre-line text-xl font-medium text-neutral-100",
                                            children: profile.philosophy
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about-details/page.tsx",
                                            lineNumber: 204,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/about-details/page.tsx",
                                        lineNumber: 203,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/about-details/page.tsx",
                                lineNumber: 202,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/about-details/page.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this),
                    profile.passionsOutsideCode && profile.passionsOutsideCode.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                        title: "Beyond the Keyboard",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
                            size: 30,
                            className: "text-orange-300"
                        }, void 0, false, {
                            fileName: "[project]/src/app/about-details/page.tsx",
                            lineNumber: 211,
                            columnNumber: 54
                        }, void 0),
                        delay: 0.1 * 7,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",
                            children: profile.passionsOutsideCode.map((passion, i)=>{
                                const iconKey = passion.toLowerCase().split(' ')[0];
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "flex items-center bg-neutral-700/50 p-4 rounded-xl shadow-lg hover:bg-neutral-700/70 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-default",
                                    initial: {
                                        opacity: 0,
                                        scale: 0.9
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    viewport: {
                                        once: true,
                                        amount: 0.5
                                    },
                                    transition: {
                                        delay: i * 0.1,
                                        duration: 0.4
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-2 bg-neutral-600/50 rounded-full mr-3",
                                            children: passionIcons[iconKey] || passionIcons.default
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about-details/page.tsx",
                                            lineNumber: 224,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-2 text-neutral-100 text-md font-medium",
                                            children: passion
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about-details/page.tsx",
                                            lineNumber: 227,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/app/about-details/page.tsx",
                                    lineNumber: 216,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/about-details/page.tsx",
                            lineNumber: 212,
                            columnNumber: 14
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/about-details/page.tsx",
                        lineNumber: 211,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: itemVariants,
                        className: "text-center mt-20 md:mt-24 mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/#contact",
                            className: "px-12 py-4 bg-gradient-to-r from-[#6A77C2] to-[#8A9BCA] hover:from-[#8A9BCA] hover:to-[#6A77C2] text-white font-bold rounded-xl text-xl md:text-2xl transition-all duration-300 ease-in-out shadow-2xl hover:shadow-[#8A9BCA]/30 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#8A9BCA]/50",
                            children: "Let's Innovate Together"
                        }, void 0, false, {
                            fileName: "[project]/src/app/about-details/page.tsx",
                            lineNumber: 236,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/about-details/page.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/about-details/page.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/about-details/page.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = AboutDetailsPage;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__f12782c5._.js.map