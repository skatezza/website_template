import Image from "next/image";
import { copyConfig } from "@/app/copy/copy-config";

export default function Process({ content }: { content: any }) {
  const { title, description, steps } = content;

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-10 pb-12 md:pt-16 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4" data-aos="fade-up">
              {title}
            </h2>
            <p
              className="text-xl text-gray-600 dark:text-gray-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {description}
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 items-start md:max-w-none">
            {steps.map((step: any, index: number) => (
              <div
                key={index}
                className="relative flex flex-col items-center"
                data-aos="fade-up"
              >
                {/* Line connecting items */}
                {index < steps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute h-px opacity-50 bg-gradient-to-r from-white via-rose-400 to-white dark:from-gray-900 dark:via-rose-400 dark:to-gray-900 hidden md:block"
                    style={{
                      width: "calc(100% - 48px)",
                      left: "calc(50% + 48px)",
                      top: "24px",
                    }}
                  >
                    <div className="absolute inset-0 border-t border-dashed border-white dark:border-gray-900"></div>
                  </div>
                )}
                {/* Number */}
                <div className="w-12 h-12 rounded-full bg-rose-400 dark:bg-rose-600 dark:bg-opacity-25 flex justify-center items-center text-white dark:text-rose-400 font-medium mb-8 lg:mb-12">
                  {step.number}
                </div>
                <Image
                  src={step.image.src}
                  width={290}
                  height={490}
                  className="relative aspect-square object-cover mb-2 rounded-xl"
                  alt={step.image.alt}
                />
                {/* Mobile mockup */}
                {/* <div className="inline-flex relative justify-center items-center">
                  Image inside mockup
                  <Image
                    className="absolute"
                    src={step.image.src}
                    width={290}
                    height={624}
                    style={{ maxWidth: "84.33%" }}
                    alt={step.image.alt}
                  /> */}
                {/* iPhone mockup */}

                {/* <Image
                    className="relative max-w-full mx-auto h-auto pointer-events-none"
                    src="/images/iphone-mockup.png"
                    width={344}
                    height={674}
                    alt="iPhone mockup"
                    aria-hidden="true"
                  />
                </div> */}
                <div className="text-center">
                  <h4 className="h4 mb-2">{step.title}</h4>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
