import { PostMeta } from "@/types";
import Image from "next/image";
import Link from "next/link";

const PostPreview = (props: PostMeta) => {
  return (
    <>
      <Link
        key={props?.slug}
        href={`/blogs/${props.slug}`}
        className="relative rounded-xl w-full flex flex-col"
        style={{ minHeight: "200px" }}
      >
        <Image
          src={props?.thumbnail || "/slide/slide1.jpg"}
          alt={props.title}
          width={200}
          height={200}
          className="rounded-2xl w-auto h-50 mb-4"
        />
        <h3 className="text-3xl font-semibold bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent hover:underline line-clamp-2">
          {props?.title}
        </h3>
        <p className="text-slate-400 mb-8 line-clamp-3">{props.description}</p>
        <time className="text-[12px] text-slate-400 absolute bottom-4">
          {props?.date}
        </time>
      </Link>
    </>
  );
};

export default PostPreview;
