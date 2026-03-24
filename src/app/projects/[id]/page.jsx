"use client"

import { useParams } from "next/navigation";
import ProjectCard from "../../../components/ProjectCard";
import projects from "../projects";

const Page = () => {
    const params = useParams();
    // 1. Ensure id is treated as a string or number consistently
    const id = params?.id;

    // 2. Find the project by a unique property, not by array index
    const project = projects.find((p) => p.id === id);

    // 3. Handle the case where the project doesn't exist (e.g., 404)
    if (!project) {
        return <p>Project not found</p>;
    }

    return (
        <section className="max-w-7xl mx-auto p-6 pt-20 space-y-8">
            <ProjectCard project={project} />
        </section>
    );
};

export default Page;