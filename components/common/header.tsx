import { useRouter } from "next/navigation";
import React from "react";

export default function Header() {
  const router = useRouter();
  return (
    <header className="sticky z-50 top-0 h-16.25 grid grid-cols-3 items-center justify-between w-auto border border-neutral-900/70 bg-black/60 px-4 backdrop-blur-md mx-48">
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
              className="transition-colors cursor-pointer hover:text-white"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => router.push("/projects")}
              className="transition-colors cursor-pointer hover:text-white"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              onClick={() => router.push("/about")}
              className="transition-colors cursor-pointer hover:text-white"
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={() => router.push("/blog")}
              className="transition-colors cursor-pointer hover:text-white"
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
              className="transition-colors cursor-pointer hover:text-white font-semibold text-blue-400"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {/* Actions */}
      <div className="flex items-center justify-end gap-4">
        
      </div>
    </header>
  );
}
