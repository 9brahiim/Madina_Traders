import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import ProductCategories from "@/components/sections/ProductCategories";
import WhyUs from "@/components/sections/WhyUs";
import Stats from "@/components/sections/Stats";
import { Features, CTA } from "@/components/sections/FeaturesAndCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <ProductCategories />
      <WhyUs />
      <Stats />
      <Features />
      <CTA />
    </>
  );
}
