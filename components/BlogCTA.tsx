import { Images } from "@/constants";

export default function BlogCTA() {
  return (
    <>
      <div className="py-20">
        <div className="container mx-auto flex flex-col items-center">
          <img
            src={Images.profile}
            alt="Your Name"
            className="rounded-full w-32 h-32 mb-4"
          />
          <h2 className="text-4xl text-white font-bold mb-2">Santajit Patra</h2>
          <p className="text-sm text-slate-400 mb-2">Followers: 357</p>
          <p className="max-w-2xl text-lg text-center text-slate-400">
            I am a full-stack developer thrives on building web solutions, adept
            in various languages & frameworks. Passionate about user experience
            and teamwork, stays ahead with digital marketing expertise.
          </p>
          <div className="w-16 mt-10 border-t border-gray-600" />
        </div>
      </div>
    </>
  );
}
