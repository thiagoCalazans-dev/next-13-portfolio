import Image from "next/image";
import hero from "@/../public/hero.jpg";
import { HeroImageBackground } from "@/components/HeroImageBackground";
import { SocialLinks } from "@/features/SocialLinksFooter";

export function AboutMe() {
  return (
    <section className="grid gap-4 lg:grid-cols-2 max-w-screen-xl mx-auto w-full h-full items-center mb-[-1.75rem]">
      <div className="">
        <div className="flex items-center  gap-3">
          <div className="bg-base-400 dark:bg-base-100 w-4 h-0.5" />
          <span className="uppercase tracking-widest text-base-900 dark:text-base-400">
            my name is
          </span>
        </div>
        <h2 className="font-bold text-4xl uppercase">thiago calazans</h2>
        <p className="text-lg text-justify mt-10">
          I am a passionate full-stack developer proficient in Typescript, React
          and evolving in Node-JS. My love for programming led me to switch
          careers and become a DEV. In my work, I emphasize the use of React, to
          create elegant and interactive user interfaces. As proof of my skills,
          I present my portfolio where you can see some of the projects I have
          developed.
        </p>
        <SocialLinks />
      </div>
      <div className="hidden justify-self-center lg:block lg:relative">
        <Image
          priority
          width={350}
          height={400}
          src={hero}
          alt=""
          className="absolute overflow-hidden z-10 rounded-2xl w-[21rem] h-[25rem] object-fill"
        />
        <HeroImageBackground />
      </div>
    </section>
  );
}
