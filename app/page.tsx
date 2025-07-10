import { BlogPosts } from "app/components/posts";
import { Navbar } from "./components/nav";
import Footer from "./components/footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-6">
        <section className="max-w-xl mx-auto">
          <h1 className="mb-5 text-2xl font-semibold tracking-tighter">
            About Me
          </h1>
          <p className="mb-4">
            {`I'm Randseas. A passionate Full-Stack Web Developer with deep experience in building secure, scalable, and modern web applications. My core stack includes React, Next.js, Node.js, Express, and TailwindCSS. All supported by TypeScript for maintainability and clarity.`}
          </p>
          <p className="mb-4">
            {`I specialize in building full-featured platforms from scratch, with a strong emphasis on performance, security, and clean architecture. Whether it's developing custom authentication systems, building REST APIs with Express and MongoDB, or optimizing frontend UX with modern UI libraries, I bring a balance of speed and structure to every project.`}
          </p>
          <p className="mb-4">
            {`Beyond the stack, I care deeply about code readability, developer experience, and delivering production-grade applications that scale. Also, I have experience building decentralized systems, backend security protocols, and data integrity flows.`}
          </p>
          <p className="mb-4">
            {`Based in Istanbul, Turkey, I'm always looking to improve my skills, explore lower-level systems like Linux and Assembly, and contribute to projects that push the limits of what's possible on the web.`}
          </p>
          <h1 className="mt-6 text-2xl font-semibold tracking-tighter">
            Blog Posts
          </h1>
          <div className="mt-5">
            <BlogPosts />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
