import { cn } from "@/lib/utils"
import { Marquee } from "./ui/marquee"
import { CodeXml } from "lucide-react"
import { HyperText } from "./ui/hyper-text"

import { FaReact, FaGithub, FaNodeJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiPhp, SiJavascript, SiMysql, SiMongodb, SiDocker, SiLaravel, SiExpress, SiHtml5, SiJest, SiTailwindcss, SiJenkins, SiJira, SiWordpress } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { TbApi } from "react-icons/tb";


const reviews = [
    {
        id: 1,
        title: "PHP",
        icon: SiPhp,
        part: "Backend",
        description: "A popular general-purpose scripting language that is especially suited to web development. Fast, flexible and pragmatic, PHP powers everything from your blog to the most popular websites in the world."
    },
    {
        id: 2,
        title: "Laravel",
        icon: SiLaravel,
        part: "Backend",
        description: "A free, open-source PHP web framework, created by Taylor Otwell, and intended for the development of web applications following the model–view–controller architectural pattern."
    },
    {
        id: 3,
        title: "MySQL",
        icon: SiMysql,
        part: "Backend",
        description: "An open-source relational database management system (RDBMS) very popular for its speed, reliability, and ease of use. It is widely used for powering web applications and other software."
    },
    {
        id: 4,
        title: "API",
        icon: TbApi,
        part: "Backend",
        description: "An Application Programming Interface (API) is a set of rules and specifications that allows different software applications to communicate and interact with each other."
    },

    {
        id: 5,
        title: "NodeJS",
        icon: FaNodeJs,
        part: "Backend",
        description: "An open-source, back-end JavaScript runtime environment that executes JavaScript code outside a web browser. It allows developers to build fast and scalable server-side applications."
    },
    {
        id: 6,
        title: "MongoDB",
        icon: SiMongodb,
        part: "Backend",
        description: "A popular open-source, document-oriented NoSQL database. It's known for its flexibility, scalability, and high performance, making it suitable for applications that require dynamic schemas and large volumes of data."
    },
    {
        id: 7,
        title: "ExpressJS",
        icon: SiExpress,
        part: "Backend",
        description: "A fast, minimal, and flexible Node.js web application framework that provides a robust set of features for building web applications and APIs."
    },
    {
        id: 8,
        title: "Next.JS",
        icon: RiNextjsFill,
        part: "Backend",
        description: "A fast, minimal, and flexible Node.js web application framework that provides a robust set of features for building web applications and APIs."
    },
    {
        id: 9,
        title: "Jest",
        icon: SiJest,
        part: "Frontend",
        description: "A JavaScript testing framework designed to ensure code reliability. It's known for its ease of use, clear and concise syntax, and ability to write tests quickly."
    },
    {
        id: 10,
        title: "JavaScript",
        icon: SiJavascript,
        part: "Frontend",
        description: "A high-level, interpreted programming language that is primarily used to build interactive and dynamic web pages. It's essential for front-end development and increasingly used on the server-side."
    },
    {
        id: 11,
        title: "ReactJS",
        icon: FaReact,
        part: "Frontend",
        description: "A JavaScript library for building user interfaces, developed by Facebook. It's known for its component-based architecture, virtual DOM, and efficient rendering, making it popular for creating complex and interactive UIs."
    },

    {
        id: 12,
        title: "HTML5",
        icon: SiHtml5,
        part: "Frontend",
        description: "The latest version of the HyperText Markup Language, used to structure and present content on the web. It includes new elements and features that enhance the capabilities of web pages."
    },
    {
        id: 13,
        title: "CSS3",
        icon: DiCss3,
        part: "Frontend",
        description: "The latest version of Cascading Style Sheets, used to style the presentation of HTML elements on web pages. It includes new selectors, properties, and units that provide greater control over layout and design."
    },
    {
        id: 14,
        title: "TailwindCSS",
        icon: SiTailwindcss,
        part: "Frontend",
        description: "A utility-first CSS framework that provides a collection of pre-built CSS classes for common styling needs. This allows for rapid development and consistent styling across projects."
    },
    {
        id: 15,
        title: "Git",
        icon: FaGithub,
        part: "CI/CD",
        description: "A distributed version control system that tracks changes to computer files and enables multiple developers to collaborate effectively on projects."
    },
    {
        id: 16,
        title: "Docker",
        icon: SiDocker,
        part: "CI/CD",
        description: "An open-source platform for building, shipping, and running applications in containers. Containers allow applications to run consistently across different environments, simplifying deployment and scaling."
    },
    {
        id: 17,
        title: "Jenkins",
        icon: SiJenkins,
        part: "CI/CD",
        description: "An open-source automation server that helps automate parts of the software development process, such as building, testing, and deploying software. It's widely used for continuous integration and continuous delivery (CI/CD)."
    },
    {
        id: 18,
        title: "Jira",
        icon: SiJira,
        part: "CI/CD",
        description: "A proprietary issue tracking and project management software developed by Atlassian. It helps teams plan, track, and release software, and provides a central platform for collaboration and communication."
    },
    {
        id: 19,
        title: "WordPress",
        icon: SiWordpress,
        part: "CI/CD",
        description: "A popular open-source content management system (CMS) used to create websites and blogs. It's known for its user-friendly interface, extensive plugin ecosystem, and flexibility."
    }
]

const firstRow = reviews.slice(0, 10)
const secondRow = reviews.slice(10, 19)

const ReviewCard = ({
    icon: Icon,
    title,
    part,
    description,
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-72 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                {Icon && <Icon className='rounded-full text-blue-500' size={30} />}
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {title}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">@{part}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{description}</blockquote>
        </figure>
    )
}

export function MarqueeSkills() {
    return (
        <div id="skills" className="relative flex w-full flex-col py-24 items-center justify-center overflow-hidden">
            <div className="flex text-blue-500 py-3">
                <CodeXml />
                <HyperText className="text-xl ml-2">
                    Technical proficiencies used in my experience
                </HyperText>
            </div>

            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.id} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.id} {...review} />
                ))}
            </Marquee>

            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
        </div>
    )
}
