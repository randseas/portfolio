import Link from "next/link";
import { formatDate, getBlogPosts } from "app/blog/utils";

export function BlogPosts() {
  let allBlogs = getBlogPosts();
  return (
    <div>
      {allBlogs
        .sort((a: any, b: any) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-500 !whitespace-nowrap dark:text-neutral-300 w-[100px]">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 transition-all ease-linear duration-100 border-b border-neutral-300/80 dark:border-neutral-700/80 hover:dark:border-neutral-700 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
