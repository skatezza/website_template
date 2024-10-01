import Link from "next/link";
import { copyConfig } from "@/app/copy/copy-config";
import { getSocialIcon } from "./footer-address";

export default function Footer() {
  const { footer } = copyConfig;

  return (
    <footer className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-16 border-t border-gray-200 dark:border-gray-800 -mt-px">
          {/* Footer illustration */}
          <div className="pointer-events-none -z-1" aria-hidden="true">
            <svg
              className="absolute bottom-0 left-0 transform -translate-x-1/2 ml-24 dark:opacity-40"
              width="800"
              height="264"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="400"
                cy="400"
                r="400"
                fill="url(#footerglow_paint0_radial)"
                fillOpacity=".4"
              />
              <defs>
                <radialGradient
                  id="footerglow_paint0_radial"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="rotate(90 0 400) scale(315.089)"
                >
                  <stop stopColor="#3ABAB4" />
                  <stop offset="1" stopColor="#3ABAB4" stopOpacity=".01" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
            {/* 1st block */}
            <div className="md:col-span-2 lg:col-span-3">
              {/* Logo */}
              <Link
                className="inline-block"
                href="/"
                aria-label={footer.logo.alt}
              >
                <img
                  src={footer.logo.src}
                  alt={footer.logo.alt}
                  className="w-8 h-8"
                />
              </Link>
            </div>

            {/* 2nd, 3rd, 4th and 5th blocks */}
            <div className="md:col-span-10 lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-8">
              {footer.blocks.map((block, index) => (
                <div key={index} className="text-sm">
                  <h6 className="font-medium uppercase mb-2">{block.title}</h6>
                  <ul>
                    {block.links.map((link, linkIndex) => (
                      <li key={linkIndex} className="mb-1">
                        <a
                          className="text-gray-600 dark:text-gray-300 hover:underline transition duration-150 ease-in-out"
                          href={link.href}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">
            {/* Social links */}
            <ul className="flex mb-4 md:order-2 md:ml-4 md:mb-0">
              {footer.socialLinks.map((link, index) => (
                <li key={index} className={index > 0 ? "ml-4" : ""}>
                  <a
                    className="flex justify-center items-center text-white bg-rose-500 dark:text-rose-500 dark:bg-gray-800 hover:underline hover:bg-rose-600 rounded-full transition duration-150 ease-in-out"
                    href={link.href}
                    aria-label={link.ariaLabel}
                  >
                    {getSocialIcon(link.platform)}
                  </a>
                </li>
              ))}
            </ul>

            {/* Middle links */}
            <div className="text-sm md:order-1 text-gray-700 mb-2 md:mb-0">
              {footer.bottomLinks.map((link, index) => (
                <span key={index}>
                  <a
                    className="text-gray-600 dark:text-gray-300 hover:underline transition duration-150 ease-in-out"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                  {index < footer.bottomLinks.length - 1 && " · "}
                </span>
              ))}
            </div>

            {/* Copyrights note */}
            <div className="text-gray-600 dark:text-gray-300 text-sm mr-4">
              {footer.copyright}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
