import { copyConfig } from "@/app/copy/copy-config";
import HeroHome from "@/components/hero-home";
import FeaturesBlocks from "@/components/features-blocks";
import Process from "@/components/process";
import Testimonials from "@/components/testimonials";
import CTA from "@/components/cta";

export const metadata = copyConfig.home.metadata;

export default function Home() {
  return (
    <>
      <HeroHome content={copyConfig.home.hero} />
      <FeaturesBlocks content={copyConfig.home.featuresBlocks} />
      <Process content={copyConfig.home.process} />
      <Testimonials content={copyConfig.testimonials} />
      <CTA content={copyConfig.home.cta} />
    </>
  );
}
