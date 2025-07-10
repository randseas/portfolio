"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  return (
    <aside className="flex flex-row items-center justify-center w-full mb-[80px] tracking-tight">
      <div className="fixed mx-auto top-4 border border-zinc-200/30 dark:border-zinc-800/30 backdrop-blur-lg z-[9999] w-fit px-[9px] py-2 rounded-[28px]">
        <nav
          className="relative grid grid-cols-3 grid-rows-1 w-full px-0 pb-0 md:overflow-auto md:relative"
          id="nav"
        >
          <div
            onClick={() => router.push("/")}
            className="flex gap-2.5 flex-row hover:cursor-pointer active:scale-[0.96] transition-all ease-linear duration-100 items-center justify-center text-center w-fit"
          >
            <img src="" className="border border-zinc-700 bg-zinc-800 rounded-full size-10" />
            <h1 className="text-lg font-medium tracking-tight">randseas</h1>
          </div>
          <div className="flex flex-row items-center justify-center text-center whitespace-nowrap gap-[5px] w-full">
            <Link
              href="/"
              className={`
                ${isActive("/") && "border-zinc-800/80 bg-zinc-900/90"}
                transition-all hover:cursor-pointer active:scale-[0.98] ease-linear duration-100 border border-zinc-800/70 rounded-l-2xl rounded-r-lg px-3 py-1.5 hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative`}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className={`
                ${isActive("/blog") && "border-zinc-800/80 bg-zinc-900/90"}
                transition-all hover:cursor-pointer active:scale-[0.98] ease-linear duration-100 border border-zinc-800/70 rounded-lg px-3 py-1.5 hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative`}
            >
              Blog
            </Link>
            <Link
              href="/projects"
              className={`
                ${isActive("/projects") && "border-zinc-800/80 bg-zinc-900/90"}
                transition-all hover:cursor-pointer active:scale-[0.98] ease-linear duration-100 border border-zinc-800/70 rounded-l-lg rounded-r-2xl px-3 py-1.5 hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative`}
            >
              Projects
            </Link>
          </div>
          <div className="flex flex-row items-center justify-end text-center w-full"></div>
        </nav>
      </div>
    </aside>
  );
}
