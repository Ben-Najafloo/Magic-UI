"use client"
import { useState } from 'react';
import { BorderBeam } from "@/components/ui/border-beam"
import { Card } from "@/components/ui/card"
import { ArrowRight, BrainCircuit, CodeXml, DatabaseZap } from 'lucide-react';
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern"
import { cn } from "@/lib/utils"
import Link from 'next/link';
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"

const WhatIDo = () => {
    const Pici = ({ icon: Icon, description, title }) => {
        const [isHovered, setIsHovered] = useState(false);

        return (
            <Card
                className="relative lg:w-100 my-2 overflow-hidden p-0"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >

                <div className="p-6 bg-gray-200 bg-opacity-50 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex gap-x-2 mb-4">
                        {Icon && <Icon className="w-7 h-7 mb-2" />}
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </div>
                    <p className="mb-3 font-normal text-gray-600 dark:text-gray-400">{description}</p>

                </div>

                {isHovered && (
                    <BorderBeam
                        duration={8}
                        size={150}
                        borderWidth={2}
                        colorFrom="#ff0000"
                        colorTo="#9c40ff"
                    />
                )}
            </Card>
        );
    }
    return (
        <div id="activity" className="bg-background lg:px-20 relative flex lg:h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border">
            <InteractiveGridPattern
                className={cn(
                    "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
                )}
            />
            <div className='text-left mb-11 w-full lg:px-20 gap-y-2 flex justify-between'>
                <div>
                    <span className="text-2xl">Projects</span>
                    <p>A curated collection of digital experiences; Turning ideas into functional code.</p>
                </div>
                <div>
                    <Link href="/projects" className='text-lg pointer'>
                        <div className="relative flex pt-4 items-center justify-center">
                            <div className="group rounded border border-black/5 bg-neutral-100 text-lg text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                                    <span>Explore recent projects</span>
                                    <ArrowRight size={256} className="ml-2 size-5 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                                </AnimatedShinyText>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            <div className='lg:flex justify-between px-2 gap-x-3'>
                <Pici icon={DatabaseZap} title="Database management" description="I design, implement, and optimize robust database systems, ensuring data integrity, security, and high performance. My work involves SQL, schema design, stored procedures, and efficient query tuning for business applications." />
                <Pici icon={CodeXml} title="Software Development" description="I develop, and deploy fast, responsive, and secure websites and full-stack applications. This involves expert use of front-end technologies like React and back-end frameworks to deliver complete digital solutions." />
                <Pici icon={BrainCircuit} title="AI DEVELOPMENT" description="Designing, engineering, and deploying robust, intelligent, and scalable artificial intelligence and machine learning solutions for predictive modeling, automation, and data-driven decision-making across various platforms and industries." />

            </div>
        </div>
    )
}

export default WhatIDo
