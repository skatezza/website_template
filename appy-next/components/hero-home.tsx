import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function HeroHome({ content }: { content: any }) {
  return (
    <div className="relative overflow-hidden bg-blue-600 dark:bg-blue-600">
      <main>
        <div className=" pt-10 sm:pt-16 lg:overflow-hidden lg:pb-14 lg:pt-8">
          <div className="mx-auto max-w-max lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-6 sm:max-w-2xl sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                <div className="lg:py-24">
                  <div className="hidden sm:mb-5 sm:flex sm:justify-center lg:justify-start">
                    <a
                      href={content.ctaButtonLink}
                      className="flex items-center rounded-full bg-gray-200 p-1 pr-2  text-gray-900 hover:text-gray-700 sm:text-base lg:text-sm xl:text-base"
                    >
                      <span className="rounded-full bg-blue-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                        {content.ctaButtonText1}
                      </span>
                      <span className="ml-4 text-sm">
                        {content.ctaButtonText2}
                      </span>
                      <ChevronRightIcon
                        aria-hidden="true"
                        className="ml-2 h-5 w-5 text-gray-500"
                      />
                    </a>
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-6xl lg:mt-6 xl:text-5xl">
                    <span className="block">{content.title}</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-100 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    {content.subtitle}
                  </p>
                  <div className="mt-10 sm:mt-12">
                    <form action="#" className="sm:mx-auto sm:max-w-xl lg:mx-0">
                      <div className="sm:flex">
                        <div className="min-w-0 flex-1">
                          <label htmlFor="email" className="sr-only">
                            Email address
                          </label>
                          <input
                            id="email"
                            type="email"
                            placeholder={content.cta.ctaPlaceholder}
                            className="block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                          />
                        </div>
                        <div className="mt-3 sm:ml-3 sm:mt-0">
                          <button
                            type="submit"
                            className="block w-full rounded-md bg-rose-500 px-4 py-3 font-medium text-white shadow hover:bg-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                          >
                            {content.cta.label}
                          </button>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-gray-100 sm:mt-4">
                        {content.cta.ctaDescription}
                      </p>
                    </form>
                  </div>
                </div>
              </div>
              <div className="-mb-16 mt-12 sm:-mb-48 lg:relative lg:m-0">
                <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0">
                  {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                  <img
                    alt=""
                    src={content.heroImage}
                    className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
    </div>
  );
}
