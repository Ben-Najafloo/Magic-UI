"use client"
import { useState } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area"
import { ProgressiveBlur } from "@/components/ui/progressive-blur"
import { BorderBeam } from "@/components/ui/border-beam"
import { Card } from "@/components/ui/card"


const page = () => {

    const Pici = ({ children }) => {
        const [isHovered, setIsHovered] = useState(false);

        return (
            <Card
                className="relative w-[400px] h-[400px] overflow-hidden p-0"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {children}
                {isHovered && (
                    <BorderBeam
                        duration={8}
                        size={150}
                        borderWidth={4}
                        colorFrom="#ff0000"
                        colorTo="#9c40ff"
                    />
                )}
            </Card>
        );
    }
    return (
        <div>
            <div className="relative w-full ">
                <ScrollArea className="relative h-[650px] overflow-hidden">
                    <div className="flex flex-col gap-2 p-4">

                        <div
                            className="bg-card flex gap-x-5 w-full items-center justify-center "
                        >
                            <Pici>
                                <img
                                    src="p1/009.jpg"
                                    alt="image placeholder5"
                                    width={400}
                                    height={400}
                                />
                            </Pici>
                            <Pici>
                                <img
                                    src="p1/008.jpg"
                                    alt="image placeholder5"
                                    width={400}
                                    height={400}
                                />
                            </Pici>
                            <Pici>
                                <img
                                    src="p1/010.jpg"
                                    alt="image placeholder5"
                                    width={400}
                                    height={400}
                                />
                            </Pici>

                        </div>
                        <div
                            className="bg-card flex gap-x-5  w-full items-center justify-center"
                        >
                            <Pici>
                                <img
                                    src="p1/1.jpg"
                                    alt="image placeholder5"
                                    width={400}
                                    height={400}
                                />
                            </Pici>
                            <Pici>
                                <img
                                    src="p1/2.jpg"
                                    alt="image placeholder5"
                                    width={400}
                                    height={400}
                                />
                            </Pici>
                            <Pici>
                                <img
                                    src="p1/3.jpg"
                                    alt="image placeholder5"
                                    width={400}
                                    height={400}
                                />
                            </Pici>
                        </div>
                        <div
                            className="bg-card flex gap-x-5  w-full items-center justify-center"
                        >
                            <Pici>
                                <img
                                    src="p1/009.jpg"
                                    alt="image placeholder5"
                                    width={400}
                                    height={400}
                                />
                            </Pici>
                            <Pici>
                                <img
                                    src="p1/008.jpg"
                                    alt="image placeholder5"
                                    width={400}
                                    height={400}
                                />
                            </Pici>
                            <Pici>
                                <img
                                    src="p1/010.jpg"
                                    alt="image placeholder5"
                                    width={400}
                                    height={400}
                                />
                            </Pici>
                        </div>
                        <div
                            className="bg-card flex gap-x-5  w-full items-center justify-center"
                        >
                            Hello 4
                        </div>
                        <div
                            className="bg-card flex gap-x-5  w-full items-center justify-center"
                        >
                            Hello
                        </div>
                        <div
                            className="bg-card flex gap-x-5  w-full items-center justify-center"
                        >
                            Hello 2
                        </div>
                        <div
                            className="bg-card flex gap-x-5  w-full items-center justify-center"
                        >
                            Hello 3
                        </div>
                        <div
                            className="bg-card flex gap-x-5  w-full items-center justify-center"
                        >
                            Hello 4
                        </div>

                    </div>
                    <ProgressiveBlur position="bottom" height="40%" />
                </ScrollArea>
            </div>
        </div>
    )
}

export default page




