import { OrbitingCircles } from "./ui/orbiting-circles"
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

export function OrbitingSkills() {
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
            <OrbitingCircles iconSize={40}>
                <Icons.mongo />
                <Icons.react />
                <Icons.js />
                <Icons.python />
                <Icons.next />
                <Icons.mysql />
            </OrbitingCircles>
            <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
                <Icons.mongo />
                <Icons.react />
                <Icons.js />
                <Icons.python />
                <Icons.next />
            </OrbitingCircles>
        </div>
    )
}

const Icons = {
    python: () => (
        <FaPython size={35} />
    ),
    react: () => (
        <FaReact size={35} />
    ),
    js: () => (
        <IoLogoJavascript size={35} />
    ),
    next: () => (
        <RiNextjsFill size={35} />
    ),
    mongo: () => (
        <SiMongodb size={35} />
    ),
    mysql: () => (
        <GrMysql size={35} />
    ),
}
