import Markdown from "markdown-to-jsx";
import { getPostContent, getPostMetadata } from "@/lib/mdx";

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {

  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <>
      <section className="pb-24 min-h-screen -mb-40 md:-mb-24">
        <div className="text-center pt-10">
          <h1 className="text-2xl text-slate-200 ">{post.data.title}</h1>
          <p className="text-slate-400 mt-2">{post.data.date}</p>
        </div>
        <div className="container py-20 prose lg:prose-xl text-slate-400 bg-gradient-to-r from-cyan-700 to-cyan-400 bg-clip-text prose-headings:text-transparent prose-a:text-cyan-500 prose-a:underline prose-strong:text-slate-400 prose-code:text-slate-400 prose-p:text-slate-400">
          <Markdown>{post.content}</Markdown>
        </div>
      </section>
    </>
  );
};

export default PostPage;
