import Image from "next/image";
import HeroBg from "@/public/images/hero-bg-03.jpg";
import HeroImage from "@/public/images/about-hero.jpg";

export default function HeroAbout({ content }: { content: any }) {
  return (
    <section className="relative">
      {/* Background image */}
      <div className="absolute inset-0 h-128 pt-16 box-content -z-1">
        <Image
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          src={content.bigHeroBg}
          width={1440}
          height={577}
          priority
          alt="About"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900"
          aria-hidden="true"
        ></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center">
            <div className="relative flex justify-center items-center">
              <div
                className="relative inline-flex items-start"
                data-aos="fade-up"
              >
                <Image
                  className="opacity-50"
                  src={content.heroImage}
                  width={768}
                  height={432}
                  priority
                  alt="About hero"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900"
                  aria-hidden="true"
                ></div>
              </div>
              <div className="absolute" data-aos="fade-down">
                <h1 className="h1 lg:text-6xl font-rose-hat-display">
                  {content.title}
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  {content.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
