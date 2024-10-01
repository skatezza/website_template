interface FeatureBlocksProps {
  content: {
    title: string;
    features: Array<{
      title: string;
      description: string;
      icon: React.ReactNode;
      href: string;
      color: {
        from: string;
        to: string;
        darkTo: string;
      };
    }>;
  };
}

export default function FeaturesBlocks({ content }: FeatureBlocksProps) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-rose-hat-display">{content.title}</h2>
          </div>

          {/* Items */}
          <div
            className="max-w-xs mx-auto sm:max-w-none md:max-w-xl lg:max-w-none grid sm:grid-cols-2 gap-4 lg:gap-6 lg:grid-cols-4"
            data-aos-id-featbl
          >
            {content.features.map((feature, index) => (
              <a
                key={index}
                className={`flex flex-col p-5 group text-white bg-gradient-to-tr from-${feature.color.from} to-${feature.color.to} dark:to-${feature.color.darkTo} shadow-2xl`}
                href={feature.href}
                data-aos="fade-down"
                data-aos-anchor="[data-aos-id-featbl]"
                data-aos-delay={index * 100}
              >
                {feature.icon}
                <div className="font-rose-hat-display text-xl font-black tracking-tighter mb-1">
                  {feature.title}
                </div>
                <div className="grow opacity-80 mb-4">
                  {feature.description}
                </div>
                <svg
                  className="w-6 h-6 self-end transform -translate-x-2 group-hover:translate-x-0 transition duration-150 ease-in-out"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-current"
                    d="M13 11V5.057L22.72 12 13 18.943V13H2v-2h11zm2 4.057L19.28 12 15 8.943v6.114z"
                  />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
