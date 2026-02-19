import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
} from "@/components/ui/terminal"

const Introduction = () => {
    return (
        <div className='p-7'>
            <Terminal>
                <TypingAnimation className='text-xl'>BEHNAM NAJAFLOO | SOFTWARE DEVELOPER</TypingAnimation>

                <AnimatedSpan className="text-green-500">
                    With years of experience building and deploying scalable web applications using JavaScript, TypeScript, and Python.
                </AnimatedSpan>
                <AnimatedSpan className="text-green-500">
                    Architecting advanced AI workflows, integrating LLMs and vector databases.
                </AnimatedSpan>
                <AnimatedSpan className="text-green-500">
                    Proficient in architecting backends using frameworks like Flask and FastAPI, Express.js, and Next.js.
                </AnimatedSpan>
                <AnimatedSpan className="text-green-500">
                    And database ORMs like Prisma, SQLAlchemy and MongoDB.
                </AnimatedSpan>
                <AnimatedSpan className="text-green-500">
                    Deep understanding of software architecture and deployment, leveraging Docker, Git, Github Actions and Jenkins for robust CI/CD and environment stability.
                </AnimatedSpan>
                <AnimatedSpan className="text-green-500">
                    Expertise in modern frontend frameworks including React.js and Next.js, combined with professional experience in dynamic state management using Redux Toolkit.
                </AnimatedSpan>
                <AnimatedSpan className="text-green-500">
                    A proactive collaborator with a disciplined approach to Agile/Scrum methodologies, ensuring the delivery of high-quality, documented, and maintainable code.
                </AnimatedSpan>
                <AnimatedSpan className="text-blue-500">
                    Completed an M.Sc. in Computer Science, Gained deep knowledge in AI and ML algorithms, which facilitates the seamless integration of advanced AI features.
                </AnimatedSpan>

                <TypingAnimation className="text-muted-foreground">
                    Fluent in English with professional proficiency , complemented by limited working proficiency in Italian , ensuring effective collaboration in international environments.
                </TypingAnimation>

            </Terminal>

        </div>
    )
}

export default Introduction