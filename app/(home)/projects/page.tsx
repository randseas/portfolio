"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Projects() {
  const router = useRouter();
  return (
    <main className="relative bg-background overflow-hidden">
      {/* Hero */}
      <section className="flex flex-col items-start justify-center w-full min-h-[85vh] px-48">
        <Image
          alt="space"
          src="https://picsum.photos/2560/1080"
          width={1024}
          height={512}
        />
      </section>
    </main>
  );
}
