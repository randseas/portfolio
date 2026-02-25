"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  return (
    <main>
      <div className="flex flex-col items-start">
        <h1>About</h1>
        <Image
          alt="space"
          src="https://plus.nasa.gov/wp-content/uploads/2023/08/hubble-30th-westerlund2.jpg?w=1024"
          width={1024}
          height={512}
        />
        <button
          type="button"
          className="rounded-lg bg-teal-500 cursor-pointer text-white font-medium px-2.5 py-2"
          onClick={() => router.push("/")}
        >
          To Home
        </button>
      </div>
    </main>
  );
}
