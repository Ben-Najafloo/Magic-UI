"use client";

import React, { useState } from "react";
import {
    Code2,
    Cloud,
    Workflow,
    BrainCircuit,
    Users
} from "lucide-react";
import { ambientOcclusion } from "three/src/nodes/core/PropertyNode.js";

const tabData = [
    {
        id: "tech-dev",
        title: "Technical development & architecture",
        icon: Code2,
        points: [
            "Full-Stack Software Engineering: Design and build high-performance frontend interfaces and backend microservices using TypeScript, JavaScript (ES6+), and Python.",
            "Scalable Architecture Design: Actively architect, decouple, and evolve modular web architectures to support high-throughput APIs and dynamic data pipelines.",
            "Software Quality & Clean Code: Champion clean, maintainable codebases by implementing modern design patterns, strict static typing, and modular component structures."
        ],
    },
    {
        id: "cloud-infra",
        title: "Cloud, DevOps & Infrastructure",
        icon: Cloud,
        points: [
            "Cloud Infrastructure & Deployment: Deploy, host, and manage scalable cloud applications leveraging AWS services, Vercel, Docker containers, and modern serverless architectures.",
            "CI/CD & Release Automation: Build and maintain automated build, test, and deployment pipelines to ensure rapid, zero-downtime releases and reliable integration environments.",
            "System Optimization: Optimize client- and server-side performance, core web vitals, and database query efficiency across PostgreSQL and MongoDB ecosystems.",
        ],
    },
    {
        id: "data-visualization",
        title: "Data Visualization, AI & Innovation",
        icon: Workflow,
        points: [
            "AI System Integration: Integrate machine learning models, NLP pipelines, and LLM interfaces directly into intuitive, user-facing web applications.",
            "Complex Data Visualization: Develop dynamic, high-density dashboard components using Chart.js to render multidimensional analytical metrics and real-time data cleanly.",
            "Interactive Tooling: Construct advanced search, filtering, and automated qualitative data engines to simplify complex data structures for end-users.",
        ],
    },
    {
        id: "ai-innovation",
        title: "Teamwork & Agile Engineering",
        icon: BrainCircuit,
        points: [
            "Cross-Functional Collaboration: Partner effectively with UI/UX designers, product owners, and cross-functional teams to translate strategic goals into robust technical requirements.",
            "Agile Engineering Culture: Drive agile development practices (Scrum/Kanban) using Jira and Git, actively participating in sprint planning, code reviews, and pair programming.",
            "Technical Mentorship: Guide junior engineers, document global standards, and foster an environment focused on continuous technical learning and quality engineering.",

        ],
    },
];

export default function Skills() {
    const [activeTab, setActiveTab] = useState(tabData[0].id);

    const activeContent = tabData.find((tab) => tab.id === activeTab);

    return (
        <div className="w-full bg-background lg:px-20 mx-auto p-6 ">
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