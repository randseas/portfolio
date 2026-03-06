"use client";
import { useRouter } from "next/navigation";

const Progress = ({ a, b }: { a: string; b: string }) => (
  <div className="font-mono tracking-wide">
    <span className="opacity-100">{a}</span>&nbsp;
    <span className="opacity-50">/</span>&nbsp;
    <span className="opacity-50">{b}</span>
  </div>
);

const Page = ({ page }: { page: string }) => (
  <div className="font-mono tracking-wide">
    <span className="opacity-50">{"//"}</span>&nbsp;
    <span className="opacity-100">{page}</span>
  </div>
);

export default function Home() {
  const router = useRouter();
  return (
    <main className="relative bg-background overflow-hidden flex-1 flex flex-col">
      <section id="hero" className="relative flex-1 flex flex-col h-full min-h-[92vh]">
        <div className="grid grid-cols-3 grid-rows-1 bg-neutral-900/25 w-full py-2 px-48 border-y border-neutral-900/60">
          <span className="w-auto flex flex-row items-center justify-start">
            <Page page="home" />
          </span>
          <span className="w-auto flex flex-row items-center justify-center">
            <Progress a="0.1" b="0.4" />
          </span>
          <span className="w-auto flex flex-row items-center justify-end">
            <svg
              width="8"
              height="8"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-50"
            >
              <circle
                cx="6"
                cy="6"
                r="4.5"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </span>
        </div>
        <div className="flex-1 flex flex-col items-start justify-center pb-24 h-full mx-48 border-x border-dashed border-neutral-900/60">
          <span className="font-mono">
            [full stack developer]
          </span>
          <span className="text-4xl font-mono">
            randseas
          </span>
          <div className="flex flex-row items-center justify-start w-auto gap-1.5 mt-1.5">
            <button
              type="button"
              className="px-3 py-2 text-[16px] font-mono border border-violet-500 bg-violet-500 text-violet-50 hover:bg-violet-600 hover:border-violet-600 hover:text-violet-100 cursor-pointer transition-[background-color, text-color, border-color, scale] ease-in-out duration-200"
            >
              Projects
            </button>
            <button
              type="button"
              className="px-3 py-2 text-[16px] font-mono border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-teal-50 cursor-pointer transition-[background-color, text-color, border-color, scale] ease-in-out duration-200"
            >
              Contact
            </button>
          </div>
        </div>
      </section>
      <section id="hero" className="relative flex-1 flex flex-col h-full">
        <div className="grid grid-cols-3 grid-rows-1 bg-neutral-900/25 w-full py-2 px-48 border-y border-neutral-900/60">
          <span className="w-auto flex flex-row items-center justify-start">
            <Page page="home" />
          </span>
          <span className="w-auto flex flex-row items-center justify-center">
            <Progress a="0.1" b="0.4" />
          </span>
          <span className="w-auto flex flex-row items-center justify-end">
            <svg
              width="8"
              height="8"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-50"
            >
              <circle
                cx="6"
                cy="6"
                r="4.5"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </span>
        </div>
        <div className="flex-1 flex flex-col items-start justify-center pb-24 h-full mx-48 border-x border-dashed border-neutral-900/60">
          <span className="font-mono">
            [full stack developer]
          </span>
          <span className="text-4xl font-mono">
            randseas
          </span>
          <div className="flex flex-row items-center justify-start w-auto gap-1.5 mt-1.5">
            <button
              type="button"
              className="px-3 py-2 text-[16px] font-mono border border-violet-500 bg-violet-500 text-violet-50 hover:bg-violet-600 hover:border-violet-600 hover:text-violet-100 cursor-pointer transition-[background-color, text-color, border-color, scale] ease-in-out duration-200"
            >
              Projects
            </button>
            <button
              type="button"
              className="px-3 py-2 text-[16px] font-mono border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-teal-50 cursor-pointer transition-[background-color, text-color, border-color, scale] ease-in-out duration-200"
            >
              Contact
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
