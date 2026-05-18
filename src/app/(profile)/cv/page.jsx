import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { Lens } from "@/components/ui/lens"
import { CloudDownload } from "lucide-react"
import Link from "next/link"


const page = () => {
    return (
        <>
            <a href="/EN_Behnam-Najafloo.pdf" download="Behnam-Najafloo" className='fixed top-1/2 z-50 right-10 pointer'>
                <div className="relative flex pt-4 items-center justify-center">
                    <div className="group rounded border border-black/5 bg-neutral-100 text-lg text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                            <span>Download</span>
                            <CloudDownload size={256} className="ml-2 size-5 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                        </AnimatedShinyText>
                    </div>
                </div>
            </a>


            <div className="items-center justify-center pt-10">
                <Lens>
                    <img
                        src="/cv/01.jpg"
                        alt="image placeholder"
                        width={1000}
                        height={800}
                        className="dark:invert"
                    />
                </Lens>
                <Lens>
                    <img
                        src="/cv/02.jpg"
                        alt="image placeholder"
                        width={1000}
                        height={800}
                        className="dark:invert"
                    />
                </Lens>
                <Lens>
                    <img
                        src="/cv/03.jpg"
                        alt="image placeholder"
                        width={1000}
                        height={800}
                        className="dark:invert"
                    />
                </Lens>
            </div>
        </>
    )
}
export default page