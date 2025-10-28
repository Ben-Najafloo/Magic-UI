"use client"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ProgressiveBlur } from "@/components/ui/progressive-blur"
import { HistoryIcon } from "lucide-react"
import { HyperText } from "./ui/hyper-text"



const History = () => {

    const Cardak = ({ text }) => {
        return (
            <div className="relative text-sm sm:text-base overflow-hidden p-0">
                {text}
            </div>
        )
    }

    return (
        <div id="history">
            <div className="relative w-full py-20 px-2 lg:px-20 lg:px-48">
                <div className="flex text-blue-500 py-3">
                    <HistoryIcon />
                    <HyperText className="text-xl ml-2">How Do I Started This Journy</HyperText>
                </div>
                <ScrollArea className="relative h-[400px] pb-28 overflow-hidden">
                    <div className="flex flex-col gap-2 p-4 justify-center">
                        <Cardak
                            text="When I completed my Bachelor’s degree in Information Technology, I began my career as a Network Engineer. After five years in that field, I realized it wasn’t the right fit for me – I found the work monotonous and lacking the creativity I was looking for. That’s when I decided to transition into Software Engineering."
                        />
                        <Cardak
                            text="At the same time, I applied for a Master’s degree in Computer Science and was accepted at the University of Milan. During my first exam period, I received an offer from my previous company to join them as a Frontend Developer intern. I accepted under the condition of working remotely so I could prioritize my studies."
                        />
                        <Cardak
                            text="After six months, they offered me a full-time role, which I accepted on a one-year contract. However, I quickly realized that the workload was taking a toll on my studies and I was falling behind in my program. When my contract ended, I made the difficult but necessary decision to not renew and refocus entirely on my academic journey."
                        />
                        <Cardak
                            text="Once I regained my academic momentum and passed several courses, I felt confident enough to seek another professional opportunity – this time in Italy. I landed a position as a Software Developer in Bergamo, where I worked in a diverse, international team on exciting projects, including live video streaming platforms for major events such as the Giro d’Italia."
                        />
                        <Cardak
                            text="Although the job was a fantastic experience technically and culturally, the demanding schedule and frequent business trips once again disrupted my studies. After a year, I made a crucial life decision: I resigned to fully dedicate myself to completing my degree."
                        />
                        <Cardak
                            text="This time, I succeeded. I systematically completed my remaining coursework and began working on my thesis – a project that perfectly combined my passion for Artificial Intelligence, Machine Learning, and software development. I built a tool to assess fairness in AI/ML systems, using both Python and JavaScript. This project was not only personally fulfilling but also well-received, earning a nomination for university funding."
                        />
                        <Cardak
                            text="Now, having graduated, I am eager to re-enter the tech industry with no obstacles holding me back. I bring a wealth of both technical and soft skills, strengthened by years of hands-on experience and the resilience I’ve gained in balancing challenging academic and professional commitments. I’m excited to begin the next chapter of my career – this time, with full focus and a long-term vision."
                        />
                    </div>
                    <ProgressiveBlur position="bottom" height="40%" />
                </ScrollArea>
            </div>
        </div>
    )
}

export default History

