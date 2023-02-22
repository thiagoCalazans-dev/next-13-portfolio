import { AboutMe } from "./AboutMe";
import { Articles } from "./Articles";
import { CarrerPath } from "./CarrerPath";
import { FeaturedPortfolios } from "./FeaturedPortfolios";
import { Skills } from "./Skills";

export interface Projects {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  return res.json();
}

export default async function Home() {
  const data: Projects[] = await getData();

  return (
    <>
      <AboutMe />
      <Skills />
      <FeaturedPortfolios data={data} />
      <CarrerPath />
      <Articles data={data} />
    </>
  );
}
