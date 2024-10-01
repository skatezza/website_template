import Link from "next/link";
import Logo from "./logo";
import ThemeToggle from "./theme-toggle";
import MobileMenu from "./mobile-menu";
import { copyConfig } from "@/app/copy/copy-config";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <Popover as="header" className="relative">
      <div className="bg-white">
        <nav
          aria-label="Global"
          className="relative mx-auto flex max-w-full items-center justify-between px-6"
        >
          <div className="flex flex-1 items-center">
            <div className="flex w-full items-center justify-between md:w-auto">
              <Link href="/" className="block" aria-label="CR Batiment Pro">
                <Logo />
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <PopoverButton className="focus-ring-inset relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                </PopoverButton>
              </div>
            </div>
            <div className="hidden space-x-8 md:ml-10 md:flex">
              {copyConfig.header.navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            {/* <ThemeToggle className="text-white" /> */}
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md border border-transparent bg-rose-500 px-4 py-2 text-base font-medium text-white hover:bg-rose-600"
            >
              {copyConfig.header.ctaButton}
            </Link>
          </div>
        </nav>
      </div>

      <PopoverPanel
        focus
        transition
        className="absolute inset-x-0 top-0 z-10 origin-top transform p-2 transition data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in md:hidden"
      >
        <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
          <div className="flex items-center justify-between px-5 pt-4">
            <div>
              <Logo />
            </div>
            <div className="-mr-2">
              <PopoverButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </PopoverButton>
            </div>
          </div>
          <div className="pb-6 pt-5">
            <div className="space-y-1 px-2">
              {copyConfig.header.navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-6 px-5">
              <Link
                href="/contact"
                className="block w-full rounded-md bg-rose-500 px-4 py-3 text-center font-medium text-white shadow hover:bg-rose-600"
              >
                {copyConfig.header.ctaButton}
              </Link>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  );
}
