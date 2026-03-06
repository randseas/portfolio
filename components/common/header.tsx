import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <header className="sticky z-50 top-0 h-16.25 grid grid-cols-3 items-center justify-between w-auto border-x border-dashed border-neutral-900/70 bg-black/60 backdrop-blur-md mx-48">
      <div className="flex w-fit items-center justify-start border-r border-dashed border-neutral-900/70 h-full">
        <a
          onClick={() => router.push("/")}
          className="flex border-y border-dashed border-neutral-900/70"
        >
          <span className="text-[21px] h-full p-0.5 transition-[background-color, text-color] ease-in-out duration-200 cursor-pointer hover:bg-violet-500/15 hover:text-violet-400 font-mono font-medium tracking-[-0.025em]">
            {"{randseas}"}
          </span>
        </a>
      </div>
      <nav className="grow h-full">
        <ul className="flex h-full items-center justify-center font-medium text-neutral-300">
          <li className="relative flex flex-row items-center justify-center group h-full border-x border-dashed border-neutral-900/70">
            <a
              onClick={() => router.push("/")}
              className="w-full px-4 py-2 hover:bg-neutral-500/15 hover:text-neutral-100 text-neutral-300 transition-colors cursor-pointer border-y border-dashed border-neutral-900/70"
            >
              Home
            </a>
          </li>
          <li className="relative flex flex-row items-center justify-center group h-full">
            <a
              onClick={() => router.push("/")}
              className="w-full px-4 py-2 hover:bg-neutral-500/15 hover:text-neutral-100 text-neutral-300 transition-colors cursor-pointer border-y border-dashed border-neutral-900/70"
            >
              Projects
            </a>
          </li>
          <li className="relative flex flex-row items-center justify-center group h-full border-x border-dashed border-neutral-900/70">
            <a
              onClick={() => router.push("/")}
              className="w-full px-4 py-2 hover:bg-neutral-500/15 hover:text-neutral-100 text-neutral-300 transition-colors cursor-pointer border-y border-dashed border-neutral-900/70"
            >
              About
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center justify-end gap-4"></div>
    </header>
  );
}
