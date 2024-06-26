import Link from "next/link";
// import { ModeToggle } from "./ModeToggle";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import SessionStatus from "./auth/SessionStatus";

const menu = [
  { title: "About", link: "/about" },
  { title: "Portfolio", link: "/portfolio" },
  { title: "Blogs", link: "/blogs" },
  { title: "Services", link: "/services" },
  { title: "Contact", link: "/contact" },
];

const Navbar = async () => {
  const session = await getServerSession(authConfig);
  return (
    <div>
      <header className="z-50 relative flex w-screen max-w-screen-xl flex-col overflow-hidden sm:px-4 lg:px-0 py-4 md:mx-auto md:flex-row md:items-center">
        <Link
          href="/"
          className="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black"
        >
          <span className="mr-2 text-4xl">
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
        </Link>
        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label
          className="absolute top-5 right-7 cursor-pointer text-white lg:hidden"
          htmlFor="navbar-open"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <nav
          aria-label="Header Navigation"
          className="flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all peer-checked:mt-8 peer-checked:max-h-56  lg:ml-24 lg:max-h-full"
        >
          <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
            {menu.map((menuItem) => (
              <li
                key={menuItem.title}
                className="xl:mr-8 md:mr-6 text-white hover:text-cyan-300"
              >
                <Link href={menuItem.link}>{menuItem.title}</Link>
              </li>
            ))}
            <li className="xl:mr-8 md:mr-6 hover:text-cyan-300">
              <SessionStatus session={session} />
            </li>

            {/* <li className="hidden md:flex">
              <ModeToggle />
            </li> */}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
