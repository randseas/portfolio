"use client";
import { useRouter } from "next/navigation";
import Header from "@/components/common/header";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Header />
      <main className="grow bg-background">
        {/* Hero */}
        <section className="flex flex-col items-start justify-start w-full grow px-48 py-58">
          <div className="flex flex-col items-start space-y-4">
            <div className="flex flex-row items-center space-x-1.5 border border-neutral-800/60 bg-neutral-900/40 rounded-xl px-2.5 py-1">
              <span className="rounded-full w-2 h-2 bg-green-500"></span>
              <span className="text-[15px] font-normal text-neutral-100">Open for work</span>
            </div>
            <h1 className="flex flex-col items-start text-start justify-start text-5xl leading-13 font-medium tracking-[-0.032em]">
              <span>I'm randseas,</span>
              <span>full stack developer,</span>
              <span>
                I build{" "}
                <span className="px-3 py-1 text-4xl border border-neutral-800/60 bg-neutral-900/40 text-neutral-100 rounded-xl">
                  scalable
                </span>{" "}
                apps.
              </span>
            </h1>
            <button
              type="button"
              className="rounded-[11px] tracking-[-0.015em] text-[17px] shadow-sm shadow-teal-700/30 hover:shadow-md active:shadow-md bg-teal-500 hover:bg-teal-600 active:bg-teal-700 border border-teal-400/50 hover:border-teal-500/50 active:border-teal-600/50 active:scale-[0.98] transition-[scale,background-color] ease-in-out duration-200 cursor-pointer text-white font-medium px-3.5 py-2"
              onClick={() => router.push("/about")}
            >
              About me
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
