import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Projects } from "./page";
import Image from "next/image";

interface ArticleProps {
    data: Projects[];
  }
  

export function Articles({data}: ArticleProps) {

    


  return (
    <section className="max-w-screen-xl mx-auto w-full items-center mb-10">
      <div className="">
        <div className="flex items-center  gap-3">
          <div className="bg-base-400 dark:bg-base-100 w-4 h-0.5" />
          <span className="uppercase tracking-widest text-base-900 dark:text-base-400">
            my articles
          </span>
        </div>
        <h2 className="font-bold text-4xl uppercase">personal blog</h2>
      </div>
      <div className="mt-6 grid grid-cols-4 h-96 ">
        <div className="border dark:border-base-600 rounded-md overflow-hidden ">
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
      </div>
    </section>
  );
}
