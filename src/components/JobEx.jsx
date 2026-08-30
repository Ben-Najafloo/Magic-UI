import React from "react";
import { Timeline } from "./ui/timeline";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const exp = [
    {
        company: "Freelancer",
        logo: "freelancer.jfif",
        role: "AI Full Stack Developer,",
        duration: "",
        description:
            "Developed a full-stack web application for evaluating fairness in AI models using Flask (Python) and React Designed and implemented RESTful APIs with Flask, using Pydantic for schema validation and mod￾ular routing to structure backend services. Built a React frontend with modern tooling (Axios, TanStack Query, Zod) for state management, data validation, and efficient API integration. Implemented interactive data visualizations with Chart.js to analyze model performance and fairness metrics. Optimized frontend performance through code splitting, lazy loading, and modular component archi￾tecture.",
        tech: ["Python", "FastAPI", "React", "MongoDB", "PostgreSQL", "Restfull API", "Docker", "TypeScript"],
    },
    {
        company: "University of Milan",
        logo: "unimia.png",
        role: "SOFTWARE DEVELOPER",
        duration: "",
        description:
            "Developed a full-stack web application for evaluating fairness in AI models using some Python libraries like Pandas, NumPy, and scikit-learn. Designed and implemented RESTful APIs with FastAPI, using Pydantic for schema validation and modular routing to structure backend services. Built a React frontend with modern tooling (Axios, TanStack Query, Zod) for state management, data validation, and efficient API integration. Implemented interactive data visualizations with Chart.js to analyze model performance and fairness metrics. Optimized frontend performance through code splitting, lazy loading, and modular component architecture.",
        tech: ["Python", "FastAPI", "React", "TypeScript", "Fairness", "AI", "ML", "Fairlearn", "Chart.js", "Pandas", "NumPy", "scikit-learn"],
    },
    {
        company: "Zerolatency",
        logo: "zl.png",
        role: "SOFTWARE DEVELOPER",
        duration: "",
        description:
            "Developed and maintained scalable RESTful APIs using Python (FastAPI) and Node.js (Express), leveraging PostgreSQL for efficient data persistence and real-time video translation services. Architected high-performance applications using Next.js, strategically implementing SSR, ISR and SSG to maximize SEO and Core Web Vitals. Managed the integration of RESTful APIs and state management using Redux Toolkit, Zustand, ensuring robust and predictable UI behavior. Collaborated daily in an Agile/Scrum environment, using Jira for sprint tracking and Git for collabo￾rative version control and code reviews.",
        tech: ["Python", "FastAPI", "React", "Redux", "Node.js", "Express", "Next.js", "PostgreSQL", "Tailwind"],
    },
    {
        company: "Respina",
        logo: "Res.png",
        role: "FRONTEND DEVELOPER",
        duration: "",
        description:
            "Built and maintained UI components using React, focusing on semantic HTML and technical SEO best practices. Developed mobile-first Responsive Designs using modern CSS framework like Tailwind and Boot￾strap, ensuring seamless experiences across all devices. Participated in the team’s development workflow using Git/GitHub, contributing to codebase main￾tenance and documentation. Attended project kickoff and status meetings to understand project goals and contribute to the suc￾cessful delivery of features.",
        tech: ["JavaScript", "React", "Tailwind", "HTML", "CSS", "MUI", "Bootstrap"],
    },
    {
        company: "Respina",
        logo: "Res.png",
        role: "FRONTEND DEVELOPER - Internship",
        duration: "",
        description:
            "Implemented accessible UI components following WCAG guidelines, ensuring the application was usable for all users regardless of disability. Translated Figma/Adobe XD designs into pixel-perfect, Responsive web pages using semantic HTML and modern CSS. Learned fundamentals of responsive design and cross-browser compatibility by working on legacy dashboard components. Participated in daily stand-ups and contributed to small UI bug fixes as part of an Agile team.",
        tech: ["JavaScript", "React", "Tailwind", "HTML", "CSS", "MUI", "Bootstrap"],
    },
];


export default function JobEx() {
    const ExpCard = ({ logo, role, company, duration, description, tech }) => {
        return (
            <div className="snap-center shrink-0  px-2  flex bg-gradient-to-br from-background to-muted/40 border-border/50 hover:shadow-xl transition">
                <div className="py-5 hidden md:block">
                    <img
                        src={logo}
                        alt="image placeholder5"
                        width={150}
                        height={150}
                    />
                </div>
                <Card className="border-none shadow-none bg-transparent flex-1">
                    <CardHeader>
                        <h3 className="text-xl font-semibold">{role}</h3>
                        <p className="text-sm text-muted-foreground">
                            {company} {duration}
                        </p>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm mb-3">{description}</p>
                        <div className="flex flex-wrap gap-2">
                            {tech.map((t) => (
                                <Badge key={t} variant="secondary">
                                    {t}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }
    const data = [
        {
            title: "Dec 2024 – Jul 2025",
            content: (
                <ExpCard
                    logo={exp[0].logo}
                    role={exp[0].role}
                    company={exp[0].company}
                    duration={exp[0].duration}
                    description={exp[0].description}
                    tech={exp[0].tech}
                />
            ),
        },
        {
            title: "Aug 2023 - Mar 2025",
            content: (
                <ExpCard
                    logo={exp[1].logo}
                    role={exp[1].role}
                    company={exp[1].company}
                    duration={exp[1].duration}
                    description={exp[1].description}
                    tech={exp[1].tech}
                />
            ),
        },
        {
            title: "Dec 2020 - Apr 2023",
            content: (
                <ExpCard
                    logo={exp[2].logo}
                    role={exp[2].role}
                    company={exp[2].company}
                    duration={exp[2].duration}
                    description={exp[2].description}
                    tech={exp[2].tech}
                />
            ),
        },
        {
            title: "Jan 2015 – Dec 2020",
            content: (
                <ExpCard
                    logo={exp[3].logo}
                    role={exp[3].role}
                    company={exp[3].company}
                    duration={exp[3].duration}
                    description={exp[3].description}
                    tech={exp[3].tech}
                />
            ),
        },
    ];
    return (
        <div id="jobExperience" className="relative w-full overflow-clip">
            <Timeline data={data} />
        </div>
    );
}
