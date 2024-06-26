import Link from "next/link";
import Image from "next/image";
import { Images } from "@/constants";


const FooterMenu = () => {
  return (
    <div className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
      <div className="max-w-sm">
        <div className="mb-6 flex h-12 items-center space-x-2">
          <span className="mr-0 text-4xl text-primary-dark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-react-native"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#00abfb"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6.357 9c-2.637 .68 -4.357 1.845 -4.357 3.175c0 2.107 4.405 3.825 9.85 3.825c.74 0 1.26 -.039 1.95 -.097" />
              <path d="M9.837 15.9c-.413 -.596 -.806 -1.133 -1.18 -1.8c-2.751 -4.9 -3.488 -9.77 -1.63 -10.873c1.15 -.697 3.047 .253 4.974 2.254" />
              <path d="M6.429 15.387c-.702 2.688 -.56 4.716 .56 5.395c1.783 1.08 5.387 -1.958 8.043 -6.804c.36 -.67 .683 -1.329 .968 -1.978" />
              <path d="M12 18.52c1.928 2 3.817 2.95 4.978 2.253c1.85 -1.102 1.121 -5.972 -1.633 -10.873c-.384 -.677 -.777 -1.204 -1.18 -1.8" />
              <path d="M17.66 15c2.612 -.687 4.34 -1.85 4.34 -3.176c0 -2.11 -4.408 -3.824 -9.845 -3.824c-.747 0 -1.266 .029 -1.955 .087" />
              <path d="M8 12c.285 -.66 .607 -1.308 .968 -1.978c2.647 -4.844 6.253 -7.89 8.046 -6.801c1.11 .679 1.262 2.706 .56 5.393" />
              <path d="M12.26 12.015h-.01c-.01 .13 -.12 .24 -.26 .24a0.263 .263 0 0 1 -.25 -.26c0 -.14 .11 -.25 .24 -.25h-.01c.13 -.01 .25 .11 .25 .24" />
            </svg>
          </span>
          <h2 className="text-3xl font-bold text-white">
            Santajit<span className="text-cyan-500">Patra</span>
          </h2>
        </div>
        <div className="text-slate-400">
          Expert web development and digital marketing solutions for business
          success.
        </div>
      </div>
      <div className="">
        <h3 className="mt-4 mb-2 font-medium text-lg xl:mb-4 text-white">
          GET STARTED
        </h3>
        <nav aria-label="Footer Navigation" className="">
          <ul className="space-y-3">
            <li>
              <Link
                className="text-slate-400 hover:text-cyan-300"
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link className="text-slate-400 hover:text-cyan-300" href="/blogs">
                Blogs
              </Link>
            </li>
            <li>
              <Link
                className="text-slate-400 hover:text-cyan-300"
                href="services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="text-slate-400 hover:text-cyan-300"
                href="contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <h3 className="mt-4 mb-2 font-medium text-lg xl:mb-4 text-white">
          LEGAL
        </h3>
        <nav>
          <ul className="space-y-3">
            <li>
              <Link
                className="text-slate-400 hover:text-cyan-300"
                href="terms-and-conditions"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                className="text-slate-400 hover:text-cyan-300"
                href="privacy-policy"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                className="text-slate-400 hover:text-cyan-300"
                href="disclaimer"
              >
                Disclaimer
              </Link>
            </li>
            <li>
              <Link
                className="text-slate-400 hover:text-cyan-300"
                href="sitemap.xml"
              >
                sitemap
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="">
        <h3 className="mt-4 mb-2 pb-2 font-medium xl:mb-4 text-white">
          PRODUCTS
        </h3>
        <div className="flex flex-col">
          <div className="">
            <div className="space-y-3">
              <a
                href="https://appstoreconnect.apple.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={Images.appstore}
                  className="w-48 pb-5 rounded-lg"
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
              </a>
              <a
                href="https://play.google.com/store/apps"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={Images.playstore}
                  className="w-48 pb-5 rounded-lg"
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMenu;
