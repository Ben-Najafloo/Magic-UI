"use client"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ProgressiveBlur } from "@/components/ui/progressive-blur"
import { HistoryIcon } from "lucide-react"
import { HyperText } from "./ui/hyper-text"



const History = () => {

    const Cardak = ({ text }) => {
        return (
            <div className="relative text-sm sm:text-base overflow-hidden py-2">
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
                <ScrollArea className="relative h-[450px] pb-28 overflow-hidden">
                    <div className="flex flex-col gap-2 p-4 justify-center">
                        <Cardak
                            text="My academic and professional journey has been shaped by a long-standing interest in computing, problem solving, and the practical impact of software systems on real-world processes. From my undergraduate studies in Information Technology to my current Master’s research in Computer Science, I have progressively developed a profile that combines solid theoretical foundations with hands-on experience in full-stack development and applied machine learning. This essay outlines my educational background, career progression, and the motivations that have guided my development from my bachelor years to the present day."
                        />
                        <Cardak
                            text="I began my formal education in computing at the Dade Pardazi Iran Institute, where I pursued a Bachelor’s degree in Information Technology. During this period, I built my first structured understanding of software engineering concepts, including programming fundamentals, object-oriented design, database systems, and web technologies. The curriculum emphasized practical application, which allowed me to translate theoretical concepts into functional systems.

                            My bachelor’s thesis marked my first end-to-end software project. I designed and implemented a web-based application to manage the student study plan process. The backend was developed using object-oriented PHP and MySQL, while the frontend relied on JavaScript, HTML, and CSS. This project introduced me to full-stack thinking: requirement analysis, database modeling, backend logic, and user-facing interfaces. More importantly, it confirmed my interest in web development and scalable software solutions.
                            
                            Beyond coursework, this period cultivated my problem-solving mindset and independence as a developer. I learned to debug complex issues, write maintainable code, and appreciate the importance of structure and clarity in software design. These foundations later proved critical as I transitioned to more advanced technologies and larger systems."
                        />
                        <Cardak
                            text="After completing my bachelor’s degree in 2015, I spent several years working in the computer networking domain as a wireless communication expert at RESPINA. This professional phase, spanning approximately five years, focused on networking infrastructure and wireless communication systems. While this role was technically demanding and contributed to my overall engineering maturity, it gradually clarified my long-term interest in software development rather than networking.

                            By 2020, I made a deliberate career decision to transition fully into software engineering. To support this shift, I began strengthening my web development skills and subsequently pursued a Master’s degree in Computer Science at the Università degli Studi di Milano starting in 2021. This move represented both an academic advancement and a strategic reorientation toward modern software systems, full-stack development, and applied machine learning.
                            
                            The Master’s program expanded my perspective beyond traditional application development. I engaged with advanced topics such as algorithms, data science, machine learning, distributed systems, and software architecture, which sharpened my analytical thinking and system-level reasoning. While my academic work has been important, my primary professional identity during this period has remained centered on active software development rather than purely academic research.
                            
                            A key component of my master’s education has been my thesis project, titled A Fairness Evaluation Tool for Machine Learning Models. In this project, I designed and implemented a practical system to evaluate fairness and bias in ML models. The backend was developed using Python and Flask, integrating scikit-learn, TPOT, and Fairlearn, while the frontend was implemented with React.js and Chart.js to provide interactive visualizations. The project reflects my interest in responsible AI while remaining grounded in real-world software engineering practices."
                        />
                        <Cardak
                            text="Parallel to my academic path, I began gaining professional experience as a frontend developer. My first role was a frontend developer internship at RESPINA, where I worked remotely with a distributed team. Under the guidance of senior developers, I contributed to internal web tools using HTML, CSS, Tailwind, and JavaScript. This role introduced me to agile workflows, daily stand-ups, and collaborative development practices.

                            Following the internship, I continued at RESPINA as a frontend developer. In this position, I took on greater responsibility, developing responsive user interfaces using JavaScript, jQuery, React.js, and MUI. I worked closely with designers to enhance usability and accessibility, and I integrated RESTful APIs with dynamic state management to ensure real-time data synchronization.
                            
                            These roles strengthened my understanding of user-centered design and frontend architecture. I learned how design decisions impact user experience and system performance, and how to balance visual quality with technical constraints. This period also improved my communication skills, as I collaborated with cross-functional teams across different time zones."
                        />
                        <Cardak
                            text="As my technical skills matured, I transitioned toward more full-stack and backend-oriented roles. In August 2023, I joined ZEROLATENCY in Bergamo, Italy, as a Software Developer. Here, I worked on building and maintaining an internal platform using Next.js and Node.js (Express), designing RESTful APIs for high-performance integration.

                            One of the most challenging and rewarding aspects of this role was working with real-time video and audio data for interactive applications. I contributed to features involving low-latency communication and real-time processing, including the integration of real-time translation into a live video player using WebSocket-based communication with Python and JavaScript.
                            
                            I also played a role in designing and optimizing MySQL and MongoDB datasets to ensure scalability and reliability. Working in an agile environment, I collaborated closely with frontend and backend developers, aligning system design decisions across the stack. This experience significantly strengthened my ability to reason about system-level architecture and performance."
                        />
                        <Cardak
                            text="In December 2024, I began working as a freelance software developer. This phase of my career emphasizes autonomy, end-to-end ownership, and rapid problem solving. I have designed and automated full-stack deployment pipelines using Git and GitHub webhooks, enabling instant deployment of Python (Flask) APIs to Render and Next.js applications to Vercel.

                            My freelance work also includes continued development of AI-related projects, particularly those aligned with my master’s thesis on fairness in machine learning. I focus on data preprocessing, bias detection, and ethical evaluation, applying academic research concepts to practical tools. This work reflects my ability to bridge theory and practice while managing projects independently."
                        />
                        <Cardak
                            text="Across my academic and professional experiences, I have developed a broad and coherent technical skill set. I am proficient in modern frontend frameworks such as React.js, Next.js, and TypeScript, and experienced in backend development with Node.js, Python, and PHP. I have worked extensively with relational and NoSQL databases, RESTful APIs, CI/CD pipelines, and cloud deployment platforms.

                            In addition to technical expertise, I bring strong communication skills and multilingual proficiency. I work professionally in English, communicate effectively in Italian at an intermediate level, and am a native speaker of Persian and Azerbaijani. These skills support my ability to collaborate in international and multicultural environments."
                        />
                        <Cardak
                            text="From my bachelor studies in Information Technology, my journey reflects continuous growth, adaptability, and a commitment to high-quality software engineering. I have evolved from building simple web applications to designing full-stack systems and researching ethical dimensions of artificial intelligence.

                            Looking ahead, I aim to continue working at the intersection of software engineering and responsible AI. Whether in industry or research-oriented roles, my goal is to contribute to systems that are not only technically robust but also fair, transparent, and socially responsible. This trajectory represents both my professional ambition and my personal values as a developer and computer scientist."
                        />
                    </div>
                    <ProgressiveBlur position="bottom" height="40%" />
                </ScrollArea>
            </div>
        </div>
    )
}

export default History

