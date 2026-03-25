import { img } from "framer-motion/client";
import { ImGlass } from "react-icons/im";


const projects = [
    {
        id: "1",
        ImgSrc: "/cqf.png",
        title: "CreativityQF",
        subtitle: "Research Platform for Analyzing Student Creativity",
        role: "Full Stack Developer",
        description: "Architected a full-stack ecosystem for longitudinal research. The platform captures multimedia data and diary entries, leveraging NLP-based keyword extraction to model relationships between teaching styles and creative performance.",
        liveUrl: "",
        repoUrl: "https://github.com/orgs/Creativity-QF/repositories",
        features: ["Token-based Role Auth", "Multimedia Submission Engine", "Qualitative Data Modules"],
        metrics: ["Optimized SEO/Vitals", "Scalable PostgreSQL/Neon"],
        techStack: ["Next.js", "React", "FastAPI", "PostgreSQL", "Tailwind", "Neon", "Vercel", "Bunny.net"],
        highlights: [
            {
                icon: "shield",
                title: "GDPR Compliant",
                description: "Anonymized data flows and secure storage protocols."
            },
            {
                icon: "layers",
                title: "Scalable Infrastructure",
                description: "Decoupled API with FastAPI and global CDN delivery."
            }
        ],
        footerStats: [
            { icon: "users", label: "Role-Based: Student / Professor / Admin" },
            { icon: "globe", label: "Deployment: Vercel (Edge) + Render" },
            { icon: "database", label: "Data Integrity: ACID Compliant" }
        ]
    },
    {
        id: "2",
        ImgSrc: "/nexora.png",
        title: "Nexora",
        subtitle: "Business Decision Platform for Explore the EU Funded Projects",
        role: "Full Stack Developer",
        description: "A project for business decision making sector providing a comprehensive, intuitive, and user-friendly platform to explore the EU funded projects and their related organizations like coordinators, participants. In this system I used a ML model that trained in unsupervised type to classify the topics of projects to categorizing, using a NLP model (spacy-model) to make summarization of long text when user request. Also there is a Web Scrapper for organizations information. This system provides complex relations and queries to provides statistics, charts, filtering system, and a robust search engine with ranked results.",
        liveUrl: "https://vz-fe5f601d-7fe.b-cdn.net/12eb3c82-cd41-453d-a602-fe60034cd25e/playlist.m3u8",
        repoUrl: "https://github.com/Ben-Najafloo/EU-Funded",
        features: ["AI Integration", "Web Scrapper", "Powerful Search Engine"],
        metrics: ["Optimized React/Code Splitting", "Scalable NoSQL/MongoDB"],
        techStack: ["React", "Flask", "MongoDB", "Tailwind", "Docker", "GitLab", "BeautifulSoup", "PyMongo"],
        highlights: [
            {
                icon: "shield",
                title: "GDPR Compliant",
                description: "Anonymized data flows and secure storage protocols."
            },
            {
                icon: "layers",
                title: "Scalable Infrastructure",
                description: "Decoupled API with FastAPI and global CDN delivery."
            }
        ],
        footerStats: [
            { icon: "users", label: "Role-Based: Student / Professor / Admin" },
            { icon: "globe", label: "Deployment: Vercel (Edge) + Render" },
            { icon: "database", label: "Data Integrity: ACID Compliant" }
        ]
    },
    {
        id: "3",
        ImgSrc: "/unifair.png",
        title: "UniFair",
        subtitle: "AI and Machine Learning Fairness Assessment",
        role: "Full Stack Developer",
        description: "Developed a comprehensive web-based platform designed to democratize and simplify fairness assessment in machine learning pipelines for non-expert users. The tool provides an end-to-end, code-free environment for dataset preparation, model training, and rigorous ethical auditing.",
        liveUrl: "https://vz-fe5f601d-7fe.b-cdn.net/f317c4ae-8a1d-451b-ab2a-85e4651483dd/playlist.m3u8",
        repoUrl: "https://github.com/Ben-Najafloo/FairnessInAI",
        features: [
            "Dual-Mode Pipeline: Offers a 'Manual' mode for granular control and an 'Automatic' mode powered by TPOT for genetic-based AutoML pipeline optimization",
            "Automated Preprocessing: Integrated modules for missing value imputation, categorical encoding, feature elimination, and class imbalance mitigation using Scikit-Learn",
            "Interactive Fairness Auditing: Real-time computation of group fairness metrics like Statistical Parity and Equalized Odds using the Fairlearn library",
            "Visual Analytics Dashboard: High-fidelity interactive visualizations including grouped bar charts, ROC curves, and group-wise confusion matrices for performance-fairness trade-off analysis."
        ],
        metrics: [
            "Statistical Parity Difference (SPD)",
            "Equalized Odds Difference (EOD)",
            "Disparate Impact (DI)",
            "Model Performance: Accuracy, Precision, Recall, F1-Score, and ROC AUC"
        ],
        techStack: [
            "React.js",
            "Flask",
            "Python",
            "Scikit-Learn",
            "Fairlearn",
            "TPOT (AutoML)",
            "Tailwind CSS",
            "Material UI",
            "Recharts / Chart.js",
            "Pandas/NumPy"
        ],
        highlights: [
            {
                icon: "shield",
                title: "Guided UX Design",
                description: "Implemented a structured, multi-stage workflow with context-sensitive tooltips and educational pop-ups to reduce cognitive load and bridge the technical gap for non-ML practitioners."
            },
            {
                icon: "layers",
                title: "Automated Reporting",
                description: "Engineered a client-side reporting engine using html2canvas and jspdf to export comprehensive, professional-grade PDF fairness audits for documentation and compliance."
            }
        ],
        footerStats: [
            {
                icon: "shield",
                label: "Full Stack Architecture"
            },
            {
                icon: "brainCircuit",
                label: "Responsible AI"
            },
            {
                icon: "chartSpline",
                label: "Interactive Visualization"
            }
        ]
    }
];

export default projects;