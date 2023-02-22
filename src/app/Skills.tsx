import { Slider } from "@/components/Slider";

export function Skills() {
  return (
    <section className=" gap-4 max-w-screen-xl mx-auto w-full  mb-10">
      <div className="">
        <div className="flex items-center gap-3">
          <div className="bg-base-400 dark:bg-base-100 w-4 h-0.5" />
          <span className="uppercase tracking-widest text-base-900 dark:text-base-400">
            learning path
          </span>
        </div>
        <h2 className="font-bold text-4xl uppercase">About me & skills</h2>
        <p className=" text-lg text-justify mt-10">
          I am a passionate full-stack developer proficient in Typescript, React
          and evolving in Node-JS. My love for programming led me to switch
          careers and become a DEV. In my work, I emphasize the use of React, to
          create elegant and interactive user interfaces. As proof of my skills,
          I present my portfolio where you can see some of the projects I have
          developed.
        </p>
      </div>
      <div className="lg:pt-7 flex flex-col justify-self-center w-full justify-start gap-3">
        <div>
          <label className="text-xl">React/NextJS</label>
          <Slider value={[90]} max={100} />
        </div>
        <div>
          <label className="text-xl">Typescript</label>
          <Slider value={[80]} max={100} />
        </div>
        <div>
          <label className="text-xl">NodeJS</label>
          <Slider value={[50]} max={100} />
        </div>
        <div>
          <label className="text-xl">Prisma</label>
          <Slider value={[70]} max={100} />
        </div>
        <div>
          <label className="text-xl">Tailwild/Radix UI</label>
          <Slider value={[75]} max={100} />
        </div>
      </div>
    </section>
  );
}
