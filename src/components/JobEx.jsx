import React from "react";
import { Timeline } from "./ui/timeline";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const exp = [
    {
        company: "Freelance",
        logo: "Bt.png",
        role: "SOFTWARE DEVELOPER",
        duration: "",
        description:
            "Designed and developed a fairness assessment tool in AI/ML as part of my Master’s thesis, focusing on data preprocessing, bias detection, and ethical AI practices. Contributed to the development of Nexora, an EU-funded projects platform, implementing backend services and frontend features to support scalable collaboration. Delivered multiple web solutions for clients, including custom CMS applications, ensuring responsive design, usability, and maintainability.",
        tech: ["Python", "PyTorch", "Fairness", "AI"],
    },
    {
        company: "Zerolatency",
        logo: "zl.png",
        role: "SOFTWARE DEVELOPER",
        duration: "",
        description:
            "Developed and maintained modern, responsive web application features using React and libraries like Material UI and Chakra UI. Conducted thorough testing and debugging with BrowserStack, Jest, and Redux devtools. Collaborate with designers, backend developers, and product managers in an agile environment.",
        tech: ["Go", "React", "GCP"],
    },
    {
        company: "Respina",
        logo: "Res.png",
        role: "FRONTEND DEVELOPER",
        duration: "",
        description:
            "Translated UI/UX designs into functional and responsive web pages using HTML, CSS, and JavaScript. Focused on user experience and interface design for internal dashboards and client portals, ensuring cross-browser compatibility. Developed an eye for detail in implementing visual elements and interaction patterns, contributing to intuitive user interfaces.",
        tech: ["Flask", "React", "Tailwind"],
    },
    {
        company: "Respina",
        logo: "Res.png",
        role: "WIRELESS COMMUNICATION TECHNICIAN",
        duration: "",
        description:
            "Worked as a Wireless communication expert.",
        tech: ["Python", "Pandas", "ML"],
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
            title: "Oct 2024 – Present",
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
            title: "Aug 2023 - Oct 2024",
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
            title: "Dec 2021 - Apr 2023",
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
            title: "2015 – 2020",
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
