import Footer from "app/components/footer";
import { Navbar } from "app/components/nav";
import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-6">
        <section>
          <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
            My Blog
          </h1>
          <BlogPosts />
        </section>
      </main>
      <Footer />
    </>
  );
}
