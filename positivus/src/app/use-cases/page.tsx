import PageHero from "../../components/Banners/PageHero";
import Marquee from "../../components/UI/Marquee";

// import RevenueGrowthChart from "../../components/UI/Charts/RevenueGrowthChart";
// import LeadsChart from "../../components/UI/Charts/LeadsChart";

import CaseStudySection from "../../components/Sections/CaseStudySection";
import TestimonialSection from "../../components/Sections/TestimonialSection";
import ContactSection from "../../components/Sections/ContactSection";

import CTASection from "../../components/Banners/CTASection";

import SectionHeader from "../../components/layout/SectionHeader";

export default function UseCasesPage() {
  const useCases = [
    {
      title: "Generate More Leads",
      description:
        "Attract high-intent prospects through SEO, paid advertising, and conversion-focused landing pages.",
    },
    {
      title: "Increase Website Traffic",
      description:
        "Improve visibility through organic search, content marketing, and technical optimization.",
    },
    {
      title: "Boost Online Sales",
      description:
        "Turn visitors into customers with conversion optimization and performance marketing.",
    },
    {
      title: "Build Brand Awareness",
      description:
        "Reach new audiences through social media campaigns and strategic content distribution.",
    },
    {
      title: "Improve Customer Retention",
      description:
        "Keep customers engaged through email automation and lifecycle marketing.",
    },
    {
      title: "Measure Marketing ROI",
      description:
        "Track performance with transparent reporting and advanced analytics.",
    },
  ];

  return (
    <main>
      <PageHero
        badge="Use Cases"
        title="Solutions Built Around Your Business Goals"
        description="Discover how our digital marketing services help businesses attract customers, increase revenue, and achieve sustainable growth."
        backgroundText="USE CASES"
      />

      <Marquee
        items={[
          "Generate Leads",
          "Increase Traffic",
          "Boost Sales",
          "Build Awareness",
          "Improve Retention",
          "Measure ROI",
        ]}
      />

      {/* Use Cases */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeader
          title="Common Business Challenges We Solve"
          description="Every business is different, but the goals are often the same."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((item) => (
            <div
              key={item.title}
              className="rounded-[45px] border border-[#191A23] bg-[#F3F3F3] p-8 shadow-[0_5px_0_0_#191A23] transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-2xl font-medium text-[#191A23]">
                {item.title}
              </h3>

              <p className="mt-4 text-[#191A23]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeader
          title="Industries We Work With"
          description="Our strategies adapt to the unique needs of every industry."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            "E-Commerce",
            "Healthcare",
            "SaaS",
            "Real Estate",
            "Education",
            "Finance",
            "Professional Services",
            "Local Businesses",
          ].map((industry) => (
            <div
              key={industry}
              className="rounded-[35px] border border-[#191A23] bg-[#B9FF66] p-6 text-center shadow-[0_5px_0_0_#191A23]"
            >
              <span className="font-medium text-[#191A23]">
                {industry}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Results */}
      {/* <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeader
          title="Typical Results"
          description="Examples of the growth businesses can achieve through effective digital marketing."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <RevenueGrowthChart />
          <LeadsChart />
        </div>
      </section> */}

      <CaseStudySection />

      <TestimonialSection />

      <CTASection
        title="Let's Solve Your Biggest Growth Challenge"
        description="Tell us your goals, and we'll build a strategy tailored to your business."
        buttonText="Book a Consultation"
        image="https://positivustheme.vercel.app/_image?href=%2F_astro%2Fproposal-pic.DC7YnBHg.png&w=494&h=395&f=webp"
      />

      <ContactSection />
    </main>
  );
}