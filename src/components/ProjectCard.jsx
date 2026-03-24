import React from 'react';
import { Database, ShieldCheck, Cpu, Globe, Users, Layers, ExternalLink, Github, Zap, BrainCircuit, ChartSpline } from 'lucide-react';
import Link from 'next/link';
import { MdKeyboardBackspace } from 'react-icons/md';
import Image from 'next/image';


const IconMap = {
    shield: ShieldCheck,
    layers: Layers,
    database: Database,
    cpu: Cpu,
    users: Users,
    globe: Globe,
    brainCircuit: BrainCircuit,
    chartSpline: ChartSpline

};

const Page = ({ project }) => {
    return (
        <div className="max-w-6xl mx-auto p-6 space-y-8 border-b border-zinc-100 dark:border-zinc-900 last:border-0">
            {/* Header */}
            <Link href="/projects">
                <MdKeyboardBackspace className='text-2xl mb-3' />

            </Link>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex gap-x-2">
                    <div>
                        <Image src={project.ImgSrc} alt="logo" width={70} height={70} className="rounded-full" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">{project.title}</h2>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400 mt-1">{project.subtitle}</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    {project.liveUrl && (
                        <a href={project.liveUrl} className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium hover:opacity-90 transition-all text-sm">
                            <ExternalLink size={16} /> Live Demo
                        </a>
                    )}
                    {project.repoUrl && (
                        <a href={project.repoUrl} className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all text-sm font-medium">
                            <Github size={16} /> Source
                        </a>
                    )}
                </div>
            </div>

            {/* Bento Content */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-7 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-blue-600">
                        <Cpu size={20} /> Project Overview
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                        Working as <span className="text-zinc-900 dark:text-zinc-100 font-medium underline underline-offset-4">{project.role}</span>, {project.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2 text-sm">
                            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Capabilities</span>
                            {project.features.map(f => (
                                <div key={f} className="flex items-center gap-2">
                                    <div className="h-1 w-1 rounded-full bg-blue-500" /> {f}
                                </div>
                            ))}
                        </div>
                        <div className="space-y-2 text-sm">
                            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Impact</span>
                            {project.metrics.map(m => (
                                <div key={m} className="flex items-center gap-2 italic">
                                    <Zap size={14} className="text-yellow-500" /> {m}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="md:col-span-5 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">Architecture Stack</h3>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.techStack.map(tech => (
                            <span key={tech} className="px-2.5 py-1 rounded-md text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="space-y-5">
                        {project.highlights.map((h, i) => {
                            const Icon = IconMap[h.icon];
                            return (
                                <div key={i} className="flex items-start gap-3">
                                    <Icon className="text-zinc-400 mt-1" size={18} />
                                    <div>
                                        <h4 className="text-sm font-semibold">{h.title}</h4>
                                        <p className="text-xs text-zinc-500">{h.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="md:col-span-12 p-4 rounded-xl border border-dashed border-zinc-300 dark:border-zinc-800 flex flex-wrap justify-around items-center gap-6 opacity-70 grayscale hover:grayscale-0 transition-all">
                    {project.footerStats.map((stat, i) => {
                        const Icon = IconMap[stat.icon];
                        return (
                            <div key={i} className="flex items-center gap-2 text-xs font-medium uppercase tracking-tight">
                                <Icon size={14} /> <span>{stat.label}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Page;