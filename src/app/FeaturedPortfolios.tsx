import { AspectRatio } from "@/components/AspectRatio";
import Image from "next/image";
import Link from "next/link";
import { Projects } from "./page";

interface FeaturedPortfoliosProps {
  data: Projects[];
}

export function FeaturedPortfolios({ data }: FeaturedPortfoliosProps) {
  return (
    <section className="gap-4 max-w-screen-xl mx-auto w-full mb-10">
      <div className="flex items-center gap-3">
        <div className="bg-base-400 dark:bg-base-100 w-4 h-0.5" />
        <span className="uppercase tracking-widest text-base-900 dark:text-base-400">
          featured portfolio
        </span>
      </div>
      <h2 className="font-bold text-4xl uppercase">my projects</h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3 mt-4  w-full overflow-hidden">
        {data.slice(1, 4).map((project) => {
          return (
            <Link
              href={`/portfolio/${project.id}`}
              key={project.id}
              className="flex flex-col gap-1 relative  cursor-pointer group"
            >
              <div className="w-full">
                <AspectRatio ratio={16 / 9}>
                  <Image
                    priority
                    fill
                    src={project.thumbnailUrl}
                    alt=""
                    className="overflow-hidden  object-cover group-hover:opacity-70"
                  />
                </AspectRatio>
              </div>
              <div className="w-full px-4 absolute z-10 top-[50%]   left-[50%] translate-y-[-50%] translate-x-[-50%] transition-all opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center">
                <strong className="text-2xl font-bold text-justify">
                  {project.title}
                </strong>
                <span className="text-xl  underline font-semibold">
                  learn more
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
