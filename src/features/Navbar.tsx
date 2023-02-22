import { useTheme } from "next-themes";
import Link from "next/link";
import { Moon, Sun } from "phosphor-react";
import { Switch } from "../components/Switch";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  function switchTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <header className="fixed w-screen  overflow-hidden z-30 bg-base-100 dark:bg-base-800 border-b dark:border-base-700 ">
      <nav className="mx-auto flex p-6 justify-between items-center  max-w-screen-xl">
        <span className="uppercase font-extrabold text-lg">DEV-TCalazans</span>
        <div className="flex items-center gap-4">
          <ul className="md:flex hidden gap-5 text-xl">
            <li className="hover:underline underline-offset-4 hover:transition-all">
              <Link href="/">About me</Link>
            </li>
            <li className="hover:underline underline-offset-4 hover:transition-all">
              <Link href="/">Portfolio</Link>
            </li>
            <li className="hover:underline underline-offset-4 hover:transition-all">
              <Link href="/">Experience</Link>
            </li>
            <li className="hover:underline underline-offset-4 hover:transition-all">
              <Link href="/">Articles</Link>
            </li>
            <li className="hover:underline underline-offset-4 hover:transition-all">
              <Link href="/">Contact</Link>
            </li>
          </ul>
          <Switch onCheckedChange={switchTheme}>
            {theme === "light" ? (
              <Moon className="text-sky-900" weight="fill" />
            ) : (
              <Sun className="text-yellow-300" weight="fill" />
            )}
          </Switch>
        </div>
      </nav>
    </header>
  );
}
