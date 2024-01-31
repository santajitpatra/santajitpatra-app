import React, { FC } from "react";
import { getAllPostsMeta } from "@/lib/mdx";
import Link from "next/link";

interface PostMeta {
  slug: string;
  // Add other necessary properties for PostMeta
}

interface PageProps {}

const Page: FC<PageProps> = async () => {
  const posts = await getAllPostsMeta();

  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-3xl font-bold">All Posts</h1>
        <div className="flex gap-6 mt-6">
          {posts?.map((post) => (
            <Link
              key={post.slug} // Use post.slug directly for the key
              href={`/posts/${post.slug}`}
              className="p-8 rounded-md shadow-md"
            >
              <h3 className="text-xl font-semibold">{post.slug}</h3>
              <p className="mt-4 text-sm">
                {/* Display relevant content from post here */}
              </p>
              <time className="text-[12px] text-gray-400">
                {/* Display post date or time here */}
              </time>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
