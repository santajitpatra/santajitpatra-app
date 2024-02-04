import { PostMeta } from "@/types";
import Image from "next/image";
import Link from "next/link";

const PostPreview = (props: PostMeta) => {
  return (
    <>
      <Link
        key={props?.slug}
        href={`/blogs/${props.slug}`}
        className="flex flex-col justify-between"
        style={{ minHeight: "200px" }}
      >
        <div>
          <Image
            src={props?.thumbnail || "/slide/slide1.jpg"}
            alt={props.title}
            width={300}
            height={200}
            className="rounded-2xl w-auto h-50 mb-4"
          />
          <h3 className="mb-4 text-3xl font-semibold bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent hover:underline line-clamp-3">
            {props?.title}
          </h3>
        </div>
        <div>
          <p className="text-lg font-medium text-slate-400">
            {props?.author || "Santajit Patra"}
          </p>
          <time className="text-xs text-slate-200">{props?.date}</time>
        </div>
      </Link>
    </>
  );
};

export default PostPreview;
