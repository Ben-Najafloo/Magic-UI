import Link from 'next/link'
import { ModeToggle } from './ModeToggle'
import { Computer } from 'lucide-react'
import ShinyButton from './ShinyButton'
import { Menu } from './Menu'

const Header = () => {
    return (
        <div className="fixed top-0 z-50 w-full border-b-2 bg-white dark:bg-black flex justify-between lg:px-32 px-4">

            <Link href="/" className='text-lg'><ShinyButton text="Behnam" icon={Computer} /></Link>
            <div className='flex gap-x-6 py-4 text-sm'>
                <Menu />

                <ModeToggle className="ml-11" />
            </div>
        </div>
    )
}

export default Header
