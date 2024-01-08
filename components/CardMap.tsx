import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

function CardMap({ title, description, type, image, button }: any) {
  return (
    <article className="bg-white h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-3xl pb-2 shadow-lg transition-transform duration-200 TA">
      <Image
        className="max-h-40 w-full object-cover"
        alt="featured image"
        src={image}
        width={500}
        height={500}
      />
      <div className="w-full  p-4">
        <p className="font-medium text-violet-500">{type}</p>
        <p className="mb-2 text-2xl font-medium bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent">
          {title}
        </p>
        <p className="text-sm line-clamp-3 text-slate-500">{description}</p>
        <div className="justify-center mt-4 flex flex-wrap items-center">
          <Button className="rounded-full" asChild>
            <Link href="/about" className="btn-primary">
              {button}
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}

export default CardMap;
