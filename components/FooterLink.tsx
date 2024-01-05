import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const currentYear = new Date().getFullYear();

const FooterLink = () => {
  return (
    <div className="text-slate-400">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center sm:flex-row sm:justify-between sm:text-left items-center">
        <div className="">
          © {currentYear} SantajitPatra | All Rights Reserved
        </div>
        <div className="flex text-white">
          <a
            href="https://www.facebook.com/Santajit-Patra-191090504774038"
            className="mx-2  transition-colors duration-300 hover:text-cyan-300"
            aria-label="FacebookF"
          >
            <FaFacebookF className="h-6 w-6" />
          </a>
          <a
            href="https://www.instagram.com/santajitpatra/"
            className="mx-2  transition-colors duration-300 hover:text-cyan-300"
            aria-label="Instagram"
          >
            <FaInstagram className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/santajit-patra-9136651b4/"
            className="mx-2  transition-colors duration-300 hover:text-cyan-300"
            aria-label="LinkedinIn"
          >
            <FaLinkedinIn className="h-6 w-6" />
          </a>
          <a
            href="https://twitter.com/SantajitPatra"
            className="mx-2  transition-colors duration-300 hover:text-cyan-300"
            aria-label="Twitter"
          >
            <FaTwitter className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/santajitpatra/"
            className="mx-2  transition-colors duration-300 hover:text-cyan-300"
            aria-label="Github"
          >
            <FaGithub className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterLink;
