
import { AppWindowIcon, CodeIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Badge } from "./ui/badge"
import { SparklesText } from "./ui/sparkles-text"
import { HyperText } from "./ui/hyper-text"

export function University() {
    return (
        <div id="education" className="flex w-full lg:px-20 px-3 py-20 flex-col gap-6">
            {/* <SparklesText>Education</SparklesText> */}
            <div className="flex text-blue-500 py-3">
                <HyperText className="text-xl">
                    Education
                </HyperText>
            </div>
            <Tabs defaultValue="unimi">
                <TabsList className="w-full">
                    <TabsTrigger value="unimi">Master's degree, Computer Science</TabsTrigger>
                    <TabsTrigger value="dpi">Bachelor's degree, Information Technology</TabsTrigger>
                </TabsList>
                <TabsContent value="unimi">
                    <Card>
                        <div className="lg:flex px-2 lg:px-6">
                            <div>
                                <img
                                    src="unimia.png"
                                    alt="image placeholder5"
                                    width={150}
                                    height={150}
                                />
                            </div>
                            <div className="w-full">
                                <CardHeader>
                                    <CardTitle>Università degli Studi di Milano</CardTitle>
                                    <CardDescription>
                                        Sep 2021 - Jul 2025
                                    </CardDescription>
                                </CardHeader>
                            </div>
                        </div>
                        <CardContent className="lg:px-7">
                            My master’s thesis, focusing on “Assessing Fairness in Machine Learning,” reflects my commitment to developing ethical and responsible AI solutions. This rigorous academic experience has instilled in me a strong analytical mindset, problem-solving abilities, and a capacity for continuous learning – skills directly transferable to the fast-paced world of software development.
                        </CardContent>
                        <div className="flex flex-wrap gap-2 px-2 lg:px-6">
                            <Badge variant="secondary">
                                AI
                            </Badge>
                            <Badge variant="secondary">
                                OOP with Java
                            </Badge>
                            <Badge variant="secondary">
                                ML
                            </Badge>
                            <Badge variant="secondary">
                                NLP
                            </Badge>
                            <Badge variant="secondary">
                                GIS
                            </Badge>
                            <Badge variant="secondary">
                                BIS
                            </Badge>
                            <Badge variant="secondary">
                                Information Management
                            </Badge>
                            <Badge variant="secondary">
                                NoSQL DBMS
                            </Badge>
                        </div>

                    </Card>
                </TabsContent>
                <TabsContent value="dpi">
                    <Card>
                        <div className="lg:flex px-2 lg:px-6">
                            <div>
                                <img
                                    src="dpi.png"
                                    alt="image placeholder5"
                                    width={150}
                                    height={150}
                                />
                            </div>
                            <div className="w-full">
                                <CardHeader>
                                    <CardTitle>Dade Pardazi Iran</CardTitle>
                                    <CardDescription>
                                        2013 - 2015
                                    </CardDescription>
                                </CardHeader>
                            </div>
                        </div>
                        <CardContent className="lg:px-7">
                            Culminating in a bachelore of IT from the University of DPI (Dade Pardazi Iran), has provided me with a strong theoretical foundation in Information Technology espcially in Web Based Programming.
                        </CardContent>
                        <div className="flex flex-wrap gap-2 px-2 lg:px-6">
                            <Badge variant="secondary">
                                Web Based Programming
                            </Badge>
                            <Badge variant="secondary">
                                DBMS
                            </Badge>
                            <Badge variant="secondary">
                                Computer Network
                            </Badge>
                            <Badge variant="secondary">
                                Data Structures and Algorithms
                            </Badge>
                            <Badge variant="secondary">
                                Discrete Math
                            </Badge>
                            <Badge variant="secondary">
                                Linear Algebra
                            </Badge>
                            <Badge variant="secondary">
                                Probability
                            </Badge>
                            <Badge variant="secondary">
                                Statistics
                            </Badge>
                        </div>

                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
