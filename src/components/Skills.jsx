"use client";

import React, { useState } from "react";
import {
    Code2,
    Cloud,
    Workflow,
    Sparkles,
    Users,
    Layers,
    Database,
    Brain
} from "lucide-react";

const tabData = [
    {
        id: "tech-dev",
        title: "Technical Development & Architecture",
        icon: Code2,
        points: [
            "Full-Stack Software Engineering: Design and build high-performance frontend interfaces and backend microservices using TypeScript, JavaScript (ES6+), and Python.",
            "Scalable Architecture Design: Actively architect, decouple, and evolve modular web architectures to support high-throughput APIs and dynamic data pipelines.",
            "Software Quality & Clean Code: Champion clean, maintainable codebases by implementing modern design patterns, strict static typing, and modular component structures."
        ]
    },
    {
        id: "frameworks-libraries",
        title: "Frameworks & Libraries",
        icon: Layers,
        points: [
            "Frontend Ecosystem: Expert in React.js, Next.js, TanStack Query, Zustand, Redux Toolkit, TailwindCSS, Chart.js, Axios, and Zod.",
            "Backend & Data Services: Proficient with FastAPI, Flask, Node.js (Express), Pydantic, Scikit-learn, Pandas, NumPy, and BeautifulSoup.",
            "Component & UI Architecture: Designing reusable, accessible (WCAG), and responsive component libraries."
        ]
    },
    {
        id: "dbms-data",
        title: "Databases & Storage Systems",
        icon: Database,
        points: [
            "Relational Databases (RDBMS): Designing, querying, and optimizing PostgreSQL and MySQL databases.",
            "NoSQL & Modern Storage: Hands-on experience with MongoDB and Redis for schema-less data structures, fast caching, and dynamic query execution.",
            "Data Lifecycle Management: Execution of database migrations, schema design optimization, and complex aggregation pipelines."
        ]
    },
    {
        id: "cloud-devops",
        title: "Cloud & Infrastructure",
        icon: Cloud,
        points: [
            "Cloud Deployment & Hosting: Experience deploying and managing web applications across AWS (EC2, S3), Vercel, and Render.",
            "Containerization & Orchestration: Packaging microservices using Docker and managing basic container workloads with Kubernetes.",
            "Performance & Monitoring: Optimizing server response times, client-side load performance, and Core Web Vitals."
        ]
    },
    {
        id: "automation-cicd",
        title: "Automation & CI/CD",
        icon: Workflow,
        points: [
            "Pipeline Engineering: Building and maintaining automated CI/CD pipelines for seamless integration and zero-downtime deployment.",
            "Integrative Testing: Incorporating automated testing routines (Jest, Postman, API testing) to enforce high quality at every build step.",
            "Developer Workflows: Streamlining continuous delivery environments using Git/GitHub actions and automated release processes."
        ]
    },
    {
        id: "ai-innovation",
        title: "Artificial Intelligence & Innovation",
        icon: Sparkles,
        points: [
            "AI System Integration: Integrating machine learning models, NLP pipelines, and LLM services directly into user-facing web platforms.",
            "Complex Data Visualization: Transforming raw algorithmic outputs and fairness metrics into clear, interactive visual dashboards using Chart.js.",
            "Data Scrapers & Search Engines: Developing automated BeautifulSoup data scrapers and advanced search engines with dynamic filtering."
        ]
    },
    {
        id: "team-collaboration",
        title: "Team & Collaboration",
        icon: Users,
        points: [
            "Cross-Functional Alignment: Partnering closely with Product Owners, UX/UI designers, and backend developers to deliver user-centered software.",
            "Agile Best Practices: Working within Scrum/Kanban frameworks utilizing Jira for sprint planning, code reviews, and technical documentation.",
            "Mentorship & Technical Growth: Sharing knowledge, reviewing code, and establishing engineering standards across team environments."
        ]
    },
    {
        id: "personal-competencies",
        title: "Personal Competencies",
        icon: Brain,
        points: [
            "Analytical & Problem-Solving Strength: Structured mindset with a high-agency approach to solving complex engineering challenges.",
            "Commitment to Software Quality: Strong dedication to clean architecture, thorough testing, accessibility, and high performance.",
            "Continuous Learning & Adaptability: Eager to learn modern technologies, rapid adaptation to new stacks, and excellent multilingual communication skills."
        ]
    }
];

export default function Skills() {
    const [activeTab, setActiveTab] = useState(tabData[0].id);

    const activeContent = tabData.find((tab) => tab.id === activeTab);

    return (
        <div className="w-full bg-background lg:px-28 mx-auto p-6 ">
            <div className="flex flex-col md:flex-row gap-6 min-h-[380px]">

                {/* Left Side: Vertical Tabs Navigation */}
                <div className="w-full md:w-1/3 flex flex-col gap-2 border-b md:border-b-0 md:border-r border-slate-800 pr-0 md:pr-4">
                    {tabData.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;

                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg transition-all duration-200 font-medium text-sm ${isActive
                                    ? "text-xl font-bold text-white"
                                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                                    }`}
                            >
                                <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? "text-white" : "text-slate-400"}`} />
                                <span>{tab.title}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Right Side: Tab Content Panel */}
                <div className="w-full md:w-2/3 p-4 flex flex-col ">
                    {activeContent && (
                        <div className="space-y-6 transition-opacity duration-300">

                            <ul className="space-y-4">
                                {activeContent.points.map((point, index) => (
                                    <li key={index} className="flex items-start gap-3 text-slate-300">
                                        <span className="h-2 w-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                                        <span className="leading-relaxed text-sm md:text-base">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}