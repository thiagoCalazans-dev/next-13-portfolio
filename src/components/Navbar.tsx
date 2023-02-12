import Link from "next/link";

export function Navbar() {
  return (
    <header className="fixed w-screen  overflow-hidden z-30 bg-base-100 dark:bg-base-800 border-b dark:border-base-700 ">
      <nav className="mx-auto flex p-6 justify-between items-center  max-w-screen-xl">
        <span className="uppercase font-extrabold text-lg">DEV-TCalazans</span>
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
      </nav>
    </header>
  );
}
