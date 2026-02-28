"use client";
import { ChevronRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import TypewriterComponent from "typewriter-effect";
import Header from "@/components/common/header";

export default function Home() {
  const router = useRouter();
  return (
    <main className="relative bg-background overflow-hidden">
      {/* Hero */}
      <section className="flex flex-col items-start justify-center w-full min-h-[85vh] px-48">
        <div className="flex flex-col items-start space-y-4">
          <h1 className="flex flex-col items-start text-start justify-start text-5xl leading-13 font-medium tracking-[-0.032em]">
            <span>I'm randseas,</span>
            <span>full stack developer,</span>
            <span className="flex relative items-center gap-3 h-14">
              <TypewriterComponent
                options={{
                  strings: [
                    `I build <span class="px-3 py-1 text-4xl bg-teal-500/20 text-teal-100">scalable</span> apps.`,
                    `I build <span class="px-3 py-1 text-4xl bg-blue-500/20 text-blue-100">modern</span> interfaces.`,
                    `I build <span class="px-3 py-1 text-4xl bg-red-500/20 text-red-100">performant</span> backends.`,
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </span>
          </h1>
          <div className="flex flex-row items-center gap-2">
            <button
              type="button"
              className="flex flex-row items-center tracking-[-0.015em] text-[17px] shadow-sm shadow-teal-700/30 hover:shadow-md active:shadow-md bg-teal-500 hover:bg-teal-600 active:bg-teal-700 active:scale-[0.98] transition-[scale,background-color] ease-in-out duration-200 cursor-pointer text-teal-50 font-medium px-3.5 py-2"
              onClick={() => router.push("/about")}
            >
              About me
            </button>
            <button
              type="button"
              className="flex flex-row items-center tracking-[-0.015em] text-[17px] shadow-sm shadow-blue-700/10 hover:shadow-md active:shadow-md bg-blue-500/20 hover:bg-blue-600/20 active:bg-blue-700/20 active:scale-[0.98] transition-[scale,background-color] ease-in-out duration-200 cursor-pointer text-blue-200 font-medium pl-3.5 pr-3 py-2"
              onClick={() => router.push("/projects")}
            >
              <span>View projects&nbsp;</span>
              <ChevronRightIcon size={20} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
