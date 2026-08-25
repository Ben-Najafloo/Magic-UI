
import { Certificate } from "@/components/Certificate";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import History from "@/components/History";
import JobEx from "@/components/JobEx";
import { MarqueeSkills } from "@/components/MarqueeSkills";
import { MorphinSkills } from "@/components/MorphinSkills";
import Skills from "@/components/Skills";
import { University } from "@/components/University";
import WhatIDo from "@/components/WhatIDo";


export default function Home() {
  return (
    <>

      <div>
        <Hero />
        <Skills />
        <History />
        <WhatIDo />
        <JobEx />
        <MorphinSkills />
        <University />
        <MarqueeSkills />
        <Certificate />
        <Footer />
      </div>
    </>

  );
}
