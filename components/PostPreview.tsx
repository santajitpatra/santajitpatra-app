import { PostMeta } from "@/types";
import Link from "next/link";

const PostPreview = (props: PostMeta) => {
  return (
    <>
      <Link
        key={props?.slug}
        href={`/blogs/${props.slug}`}
        className="relative p-8 rounded-2xl shadow-lg bg-white w-full h-56 flex flex-col"
        style={{ minHeight: "200px" }}
      >
        <h3 className="text-xl font-semibold text-violet-600 hover:underline mb-4">
          {props?.title}
        </h3>
        <p className="text-slate-600">{props.description}</p>
        <time className="text-[12px] text-slate-400 absolute bottom-8 left-8">
          {props?.date}
        </time>
      </Link>
    </>
  );
};

export default PostPreview;
