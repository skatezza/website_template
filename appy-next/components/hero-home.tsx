import VideoThumb from "@/public/images/mockup-image-01.jpg";
import ModalVideoIphone from "@/components/modal-video-iphone";

export default function HeroHome({ content }: { content: any }) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Hero content */}
          <div className="md:grid md:grid-cols-12 md:gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="md:col-span-7 lg:col-span-7 mb-8 md:mb-0 text-center md:text-left">
              <h1
                className="h1 lg:text-6xl mb-4 font-rose-hat-display font-black"
                data-aos="fade-down"
              >
                {content.title}
              </h1>
              <p
                className="text-xl text-gray-600 dark:text-gray-300"
                data-aos="fade-down"
                data-aos-delay="150"
              >
                {content.subtitle}
              </p>
              {/* CTA form */}
              <form className="mt-8" data-aos="fade-down" data-aos-delay="300">
                <div className="flex flex-col sm:flex-row justify-center max-w-sm mx-auto sm:max-w-lg md:mx-0">
                  <input
                    type="tel"
                    className="form-input w-full mb-2 sm:mb-0 sm:mr-2"
                    placeholder={content.cta.ctaPlaceholder}
                    aria-label="Phone number"
                  />
                  <a
                    className="btn text-white bg-rose-500 hover:bg-rose-400 shrink-0"
                    href={content.cta.href}
                  >
                    {content.cta.label}
                  </a>
                </div>
                {/* Success message */}
                {/* <p className="text-center md:text-left mt-2 opacity-75 text-sm">Thanks for subscribing!</p> */}
              </form>
              <ul
                className="max-w-sm sm:max-w-md mx-auto md:max-w-none text-gray-600 dark:text-gray-300 mt-8 -mb-2"
                data-aos="fade-down"
                data-aos-delay="450"
              >
                {content.steps.map((step: any, index: any) => (
                  <li key={index} className="flex items-center mb-2">
                    <svg
                      className="w-3 h-3 fill-current text-rose-400 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>{step.description}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile mockup */}
            <div
              className="md:col-span-5 lg:col-span-5 text-center md:text-right"
              data-aos="fade-up"
              data-aos-delay="450"
            >
              <img src={content.heroImage} alt="Hero image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
