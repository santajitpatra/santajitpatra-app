import Link from "next/link";
import { Button } from "./ui/button";

const PortfolioCTA = () => {
  return (
    <div className="xl:-mb-[5.4rem] md:-mb-[4.7rem]  sm:-mb-40  -mb-[6.9rem]  bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-no-repeat bg-cover bg-center relative overflow-hidden w-full">
      <div className="relative py-10 sm:py-16 lg:py-24 BGCTA-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl bg-gradient-to-r from-cyan-600 to-cyan-400 bg-clip-text text-transparent">
              Let&#39;s connect and talk
            </h2>
            <div className="max-w-3xl items-center mx-auto px-2 mt-4 sm:flex sm:justify-center">
              <p className="mt-4 text-slate-500 text-lg">
                Interested in learning more about my services or discussing your
                project needs? Don&#39;t hesitate to contact me today. I&#39;m
                always available to answer any questions you may have and
                provide you with the support you need. Let&#39;s connect and
                work together to bring your vision to life.
              </p>
            </div>
            <div className="my-8 flex flex-col items-center justify-center sm:flex-row sm:space-x-4 sm:px-0 lg:mt-12">
              <Button className="rounded-full" asChild>
                <Link href="/contact" className="btn-primary">
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCTA;
