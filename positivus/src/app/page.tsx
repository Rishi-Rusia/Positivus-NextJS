import HomePageHero from "../components/Banners/HomePage-Hero";
import Brands from "../components/Banners/Brands";
import ServiceSection from "../components/Sections/ServiceSection";
import CTASection from "../components/Banners/CTASection";

export default function Home() {
  return (
    <>
      <HomePageHero />
      <Brands />
      <ServiceSection />
      <CTASection
        title="Let's make things happen"
        description="Contact us today to learn more about how our digital marketing services can help your business grow and succeed online."
        buttonText="Get your free proposal"
        image="https://positivustheme.vercel.app/_image?href=%2F_astro%2Fproposal-pic.DC7YnBHg.png&w=494&h=395&f=webp"
      />
    </>
  );
}
