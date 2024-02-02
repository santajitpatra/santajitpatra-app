import { PostMeta } from "@/types";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export const rootDirectory = path.join(process.cwd(), "content", "blogs");


export const getPostMetadata = (): PostMeta[] => {
  const files = fs.readdirSync(rootDirectory);
  const markdownPosts = files.filter((file) => file.endsWith(".mdx"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(
      `${rootDirectory}/${fileName}`,
      "utf8"
    );
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
      slug: fileName.replace(".mdx", ""),
    };
  });

  return posts;
};


export const getPostContent = (slug: string) => {
  const file = `${rootDirectory}/${slug}.mdx`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};



