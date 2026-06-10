import CTASection from "../../components/Banners/CTASection";
import Marquee from "../../components/UI/Marquee";
import Timeline from "../../components/UI/TimeLine";
import StatsCounter from "../../components/UI/StatsCounter";

import TeamSection from "../../components/Sections/TeamSection";
import ContactSection from "../../components/Sections/ContactSection";
import SectionHeader from "../../components/layout/SectionHeader";

const timelineItems = [
  {
    year: "2017",
    title: "Agency Founded",
    description:
      "Positivus began with a simple mission: help businesses grow through transparent, results-driven digital marketing.",
  },
  {
    year: "2019",
    title: "50+ Clients Served",
    description:
      "Our growing reputation allowed us to work with businesses across multiple industries and markets.",
  },
  {
    year: "2022",
    title: "Global Expansion",
    description:
      "We expanded our services internationally, helping brands reach audiences around the world.",
  },
  {
    year: "2025",
    title: "250+ Projects Delivered",
    description:
      "Today, we continue to build long-term partnerships while delivering measurable business growth.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-6 py-6 lg:px-8 lg:py-8">
        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 select-none text-[220px] font-bold text-[#191A23]/5 lg:block">
          ABOUT
        </div>

        <div className="relative grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-block rounded-xl bg-[#B9FF66] px-4 py-2 text-lg font-medium text-[#191A23]">
              About Us
            </div>

            <h1 className="text-5xl font-medium leading-tight text-[#191A23] md:text-6xl lg:text-[72px]">
              Empowering Businesses Through Digital Growth
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#191A23] md:text-xl">
              We're a team of strategists, marketers, designers, and problem
              solvers helping ambitious businesses increase visibility, generate
              qualified leads, and achieve sustainable growth.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="https://positivustheme.vercel.app/_image?href=%2F_astro%2Fhero.Cc0GD7y9.svg&w=601&h=515&f=svg"
              alt="About Positivus"
              className="w-full max-w-[600px]"
            />
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <Marquee
        items={[
          "SEO",
          "PPC",
          "Content Marketing",
          "Brand Strategy",
          "Lead Generation",
          "Analytics",
          "Social Media",
          "Growth Marketing",
        ]}
      />

      {/* STORY */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeader
          title="Our Story"
          description="From a small team of passionate marketers to a trusted growth partner for businesses worldwide."
        />

        <div className="mt-12 rounded-[45px] border border-[#191A23] bg-[#F3F3F3] p-8 shadow-[0_5px_0_0_#191A23] md:p-12">
          <p className="text-lg leading-relaxed text-[#191A23]">
            Positivus was founded on the belief that marketing should be both
            creative and measurable. Too many businesses were investing heavily
            in digital marketing without understanding what was actually driving
            results.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-[#191A23]">
            We set out to change that by combining data-driven strategies with
            compelling creative execution. Over the years, we've partnered with
            startups, local businesses, and enterprise organizations to build
            campaigns that generate real business impact.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-[#191A23]">
            Today, our mission remains the same: help businesses grow with
            confidence through transparent communication, measurable outcomes,
            and long-term partnerships.
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeader
          title="Our Journey"
          description="A few milestones that shaped who we are today."
        />

        <div className="mt-12">
          <Timeline items={timelineItems} />
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeader
          title="By The Numbers"
          description="A snapshot of the impact we've made for businesses over the years."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatsCounter
            value={250}
            suffix="+"
            label="Projects Delivered"
          />

          <StatsCounter
            value={98}
            suffix="%"
            label="Client Satisfaction"
          />

          <StatsCounter
            value={50}
            suffix="+"
            label="Industry Awards"
          />

          <StatsCounter
            value={10}
            suffix="+"
            label="Years Experience"
          />
        </div>
      </section>

      {/* TEAM */}
      <TeamSection />

      {/* CTA */}
      <CTASection
        title="Ready to Grow Your Business?"
        description="Let's discuss how our team can help you achieve your marketing goals and build a stronger digital presence."
        buttonText="Book a Consultation"
        image="https://positivustheme.vercel.app/_image?href=%2F_astro%2Fproposal-pic.DC7YnBHg.png&w=494&h=395&f=webp"
      />

      {/* CONTACT */}
      <ContactSection />
    </main>
  );
}