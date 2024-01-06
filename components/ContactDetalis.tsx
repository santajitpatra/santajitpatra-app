import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


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
          <MdLocationPin className="h-6 w-6" />

          <a
            href="https://goo.gl/maps/FX2LPYCxahSpCQAs8"
            className="mx-2  truncate w-72"
          >
            Howrah, West Bengal, India - 711401
          </a>
        </p>
        <p className="flex items-start -mx-2">
          <FaPhoneAlt className="h-6 w-6" />
          <a href="tel:+919134504611" className="mx-2  truncate w-72">
            +91 9134504611
          </a>
        </p>
        <p className="flex items-start -mx-2">
          <MdEmail className="h-6 w-6" />
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
