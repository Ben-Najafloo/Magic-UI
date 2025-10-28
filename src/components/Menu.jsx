import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { BriefcaseBusiness, CodeXml, GraduationCap, History, MonitorPause, ShieldCheck } from "lucide-react";

export function Menu() {

    const links = [
        {
            title: "History",
            icon: (
                <History className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#history",
        },

        {
            title: "Activity",
            icon: (
                <MonitorPause className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#activity",
        },
        {
            title: "Job Experience",
            icon: (
                <BriefcaseBusiness className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#jobExperience",
        },

        {
            title: "Education",
            icon: (
                <GraduationCap className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#education",
        },

        {
            title: "Skills",
            icon: (
                <CodeXml className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#skills",
        },
        {
            title: "Certificates",
            icon: (
                <ShieldCheck className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#certificates",
        },
    ];
    return (
        <div className="flex items-center justify-center h-[2rem] w-full pt-2">
            <FloatingDock
                // only for demo, remove for production
                mobileClassName="translate-y-20"
                items={links} />
        </div>
    );
}
