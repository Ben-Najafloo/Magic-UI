import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"

const ShinyButton = ({ text, icon: Icon }) => {
    return (
        <div className="z-10 flex pt-4 items-center justify-center">
            <div className="group rounded border border-black/5 bg-neutral-100 text-lg text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                    {Icon && <Icon size={256} className="mr-2 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />}
                    <span>{text}</span>
                </AnimatedShinyText>
            </div>
        </div>
    )
}

export default ShinyButton

