import { copyConfig } from "@/app/copy/copy-config";
import HeroHome from "@/components/hero-home";
import FeaturesBlocks from "@/components/features-blocks";
import Process from "@/components/process";
import Testimonials from "@/components/testimonials";
import CTA from "@/components/cta";

export default function Home() {
  return (
    <>
      <HeroHome content={copyConfig.home.hero} />
      <FeaturesBlocks content={copyConfig.home.featuresBlocks} />
      <Process content={copyConfig.home.process} />
      <Testimonials content={copyConfig.home.testimonials} />
      <CTA content={copyConfig.home.cta} />
    </>
  );
}
