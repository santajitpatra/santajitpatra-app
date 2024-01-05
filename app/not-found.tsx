import Image from "next/image";
import Link from "next/link";
import NotFoundImg from "/public/images/404.png";
import { Button } from "@/components/ui/button";


export default function NotFound() {
  return (
    <div>
      <div className="">
        <div className="container flex items-center px-6 py-20 mx-auto ">
          <div className="flex flex-col items-center w-full h-full">
            <Image
              className=" mb-4"
              src={NotFoundImg}
              width={300}
              height={300}
              alt=""
            />
            <h3 className="text-3xl text-center text-white font-bold mb-4">
              404 Server Error
            </h3>
            <p className="text-center text-slate-400 font-normal mb-4 ">
              Oops! Something went wrong. Please try again later.
            </p>
            <Button className="rounded-full" asChild>
              <Link href="/" className="btn-primary ">
                Back To Home
              </Link>
            </Button>
            
          </div>
        </div>
      </div>
    </div>
  );
}
