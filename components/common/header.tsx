import { useRouter } from "next/navigation";
import React from "react";

export default function Header() {
  const router = useRouter();
  return (
    <header className="sticky top-0 h-17 grid grid-cols-3 items-center justify-between w-full border-b border-white/10 bg-black/60 backdrop-blur-md px-48">
      {/* Logo */}
      <div className="flex items-center justify-start">
        <a onClick={() => router.push("/")}>
          <span className="text-[21px] font-medium tracking-[-0.025em]">randseas</span>
        </a>
      </div>
      {/* Navigation */}
      <nav className="grow">
        <ul className="flex items-center justify-center gap-6 font-medium text-neutral-300">
          <li>
            <a
              onClick={() => router.push("/")}
              className="transition-colors hover:text-white"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => router.push("/projects")}
              className="transition-colors hover:text-white"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              onClick={() => router.push("/about")}
              className="transition-colors hover:text-white"
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={() => router.push("/blog")}
              className="transition-colors hover:text-white"
            >
              Blog
              <span className="text-neutral-400 text-sm px-1 rounded-lg py-1 bg-neutral-900/60 border border-neutral-800/60">
                soon
              </span>
            </a>
          </li>
          <li>
            <a
              onClick={() => router.push("/contact")}
              className="transition-colors hover:text-white font-semibold text-blue-400"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {/* Actions */}
      <div className="flex items-center justify-end gap-4">
        <button
          type="button"
          className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-700 active:scale-95"
        >
          Action Button
        </button>
      </div>
    </header>
  );
}
