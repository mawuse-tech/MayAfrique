import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaArrowUp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative rounded-b-[2rem] border-t border-neutral-300 bg-white px-6 py-8 text-black sm:px-10 md:px-14 lg:px-20">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        {/* Copyright */}
        <p className="text-sm tracking-wide">
          ©2026 May Afrique. All rights reserved.
        </p>

        {/* Social links */}
        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/bridal_by_mayafrique?igsh=OXJlM2xrMG90MHI1
"
            aria-label="May Afrique on Instagram"
            className="transition-opacity hover:opacity-50"
          >
            <FaInstagram size={17} />
          </a>

          <a
            href="https://www.facebook.com/MayAfrique"
            aria-label="May Afrique on Facebook"
            className="transition-opacity hover:opacity-50"
          >
            <FaFacebookF size={16} />
          </a>

          <a
            href="https://www.instagram.com/mayafrique?igsh=ZWNvcXd3MGh1MW40&utm_source=qr
"
            aria-label="May Afrique on Instagram"
            className="transition-opacity hover:opacity-50"
          >
            <FaInstagram size={17} />
          </a>

          <a
            href="https://www.instagram.com/mayafrique_fashion_academy?igsh=MTZ5YWM3ZTU0OWlicA==
"
            aria-label="May Afrique on Instagram"
            className="transition-opacity hover:opacity-50"
          >
            <FaInstagram size={17} />
          </a>
        </div>
      </div>

      {/* Back to top */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className="absolute -top-12 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-400 bg-white text-neutral-600 transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white sm:right-10 md:right-14 lg:right-20"
      >
        <FaArrowUp size={14} />
      </button>
    </footer>
  );
};

export default Footer;