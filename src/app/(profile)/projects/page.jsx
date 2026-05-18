"use client"
import { useState } from 'react';
import { BorderBeam } from "@/components/ui/border-beam"
import { Card } from "@/components/ui/card"
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern"
import { cn } from "@/lib/utils"
import Link from 'next/link';
import projects from './projects';
import Image from 'next/image';

const Page = () => {
    const Pici = ({ description, title, link, ImgSrc, subtitle }) => {
        const [isHovered, setIsHovered] = useState(false);

        return (
            <Card
                className="relative lg:w-100 my-2 overflow-hidden p-0"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >

                <div className="p-6 bg-gray-200 bg-opacity-50 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex gap-x-2 mb-4">
                        <Image src={ImgSrc} alt="logo" width={50} height={50} className="rounded-full" />
                        <h5 className="mt-1 text-3xl tracking-tight text-gray-900 dark:text-white ">{title}</h5>
                    </div>
                    <h5 className="mb-1 text-xl tracking-tight text-gray-700 dark:text-gray-300 h-24">{subtitle}</h5>
                    <p className="mb-3 font-normal text-gray-600 dark:text-gray-400">{description}</p>
                    <Link href={link} className="inline-flex items-center text-primary hover:underline">
                        Read More
                    </Link>
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
        <div id="activity" className="mt-20 bg-background lg:px-20 relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border">
            <InteractiveGridPattern
                className={cn(
                    "`mask-[radial-gradient(500px_circle_at_center,white,transparent)]`",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
                )}
            />
            <div className='text-left mb-11 w-full lg:px-20 gap-y-2'>
                <span className="text-2xl">Projects</span>
                <p>A curated collection of digital experiences; Turning ideas into functional code.</p>
            </div>
            <div className='lg:flex justify-between px-2 gap-x-3'>
                {projects.map((project) => (
                    <Pici
                        key={project.id}
                        link={`/projects/${project.id}`}
                        ImgSrc={project.ImgSrc}
                        title={project.title}
                        description={project.description.slice(0, 200) + " ..."}
                        subtitle={project.subtitle} />
                ))}
            </div>
        </div>
    )
}

export default Page
