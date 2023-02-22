"use client";
import { CaretRight } from "phosphor-react";

const techs = [
  "TypeScript",
  "React",
  "Node",
  "Supabase",
  "Styled-Compnents",
  "Radix-UI",
  "TailwildCSS",
  "FIGMA",
  "Primsa ORM",
  "SQL",
];

const descriptions = [
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, laudantium. aidufhoiaudfhoaiudfh oaiudfhoiausdfhoiauds aosdiufhoia usdfhoiausdf aouidfhoaisdufah",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, laudantium.",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, laudantium.",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, laudantium.",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, laudantium.",
];

export function CarrerPath() {
  return (
    <section className="gap-6 grid grid-cols-3 max-w-screen-xl mx-auto w-full mb-10">
      <div>
        <div className="flex items-center gap-3">
          <div className="bg-base-400 dark:bg-base-100 w-4 h-0.5" />
          <span className="uppercase tracking-widest text-base-900 dark:text-base-400">
            carrer path
          </span>
        </div>
        <h2 className="font-bold text-4xl uppercase mb-14">work experience</h2>
        <button className="leading-none w-full flex justify-between items-center p-3 bg-base-100 dark:bg-base-800 border dark:border-base-700 rounded-md uppercase tracking-widest text-brand-primary font-semibold">
          <span className="">GCASPP</span>
          <CaretRight weight="bold" />
        </button>
      </div>
      <div className="col-span-2 flex flex-col px-4">
        <strong className="text-3xl">Front-end Developer</strong>
        <span className="text-base-400">Osasco, São Paulo</span>
        <span className="text-base-400">Aug 2022 - Present</span>
        <div className="flex gap-2 flex-wrap border-b  dark:border-base-700 py-6">
          {techs.map((tech, index) => (
            <span
              className="border rounded-md bg-base-100 dark:bg-transparent transition-all hover:border-brand-primary hover:text-brand-primary dark:border-base-700 p-2 "
              key={index}
            >
              {tech}
            </span>
          ))}
        </div>
        <ul className="grid gap-3 mt-4">
          {descriptions.map((description, index) => {
            return (
              <li key={index} className="flex items-center gap-3">
                <div className="bg-base-400 dark:bg-base-100 w-4 h-0.5 shrink-0" />
                <span className="text-xl text-justify">{description}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
