import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function ContactDetalis() {
  return (
    <div className="lg:w-1/2 lg:mx-6">
      <h2 className="text-3xl font-semibold capitalize lg:text-4xl text-cyan-500">
        Let&apos;s talk
      </h2>
      <p className="max-w-xl mt-6 text-slate-400">
        Ask us everything and we would love to hear from you
      </p>
      <div className="mt-6 space-y-8 md:mt-8 text-slate-400">
        <p className="flex items-start -mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mx-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <a
            href="https://goo.gl/maps/FX2LPYCxahSpCQAs8"
            className="mx-2  truncate w-72"
          >
            Howrah, West Bengal, India - 711401
          </a>
        </p>
        <p className="flex items-start -mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mx-2 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <a href="tel:+919134504611" className="mx-2  truncate w-72">
            +91 9134504611
          </a>
        </p>
        <p className="flex items-start -mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mx-2 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <a
            href="mailto:business.santajitpatra@gmail.com"
            className="mx-2  truncate w-72"
          >
            business.santajitpatra@gmail.com
          </a>
        </p>
      </div>
      <div className="mt-6 md:mt-8">
        <h3 className="text-slate-400">Follow us</h3>
        <div className="flex mt-4 -mx-1.5 text-white">
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
}

export default ContactDetalis;
