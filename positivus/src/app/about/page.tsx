import CTASection from "../../components/Banners/CTASection";
import ContactSection from "../../components/Sections/ContactSection";
import TeamSection from "../../components/Sections/TeamSection";
import SectionHeader from "../../components/layout/SectionHeader";

export default function AboutPage() {
  const stats = [
    {
      value: "250+",
      label: "Projects Delivered",
    },
    {
      value: "98%",
      label: "Client Satisfaction",
    },
    {
      value: "50+",
      label: "Industry Awards",
    },
    {
      value: "10+",
      label: "Years of Experience",
    },
  ];

  return (
    <main className="space-y-24">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-5xl font-medium text-[#191A23] md:text-6xl lg:text-[64px]">
              About Us
            </h1>

            <p className="mt-8 text-xl text-[#191A23]">
              We help ambitious businesses grow through
              data-driven digital marketing, creative
              storytelling, and measurable results.
            </p>

            <p className="mt-6 text-lg text-neutral-600">
              Our mission is simple: create marketing
              strategies that don't just look good—but
              actually generate leads, revenue, and
              long-term growth.
            </p>
          </div>

          <div>
            <img
              src="https://positivustheme.vercel.app/_image?href=%2F_astro%2Fhero.Cc0GD7y9.svg&w=601&h=515&f=svg"
              alt="About Us"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          title="Our Story"
          description="How we became a trusted digital marketing partner for growing businesses."
        />

        <div className="mt-10 rounded-[45px] border border-[#191A23] bg-[#F3F3F3] p-8 shadow-[0_5px_0_0_#191A23] md:p-12">
          <p className="text-lg leading-relaxed text-[#191A23]">
            What began as a small team of passionate
            marketers has evolved into a full-service
            digital marketing agency helping brands
            achieve sustainable growth online.

            <br />
            <br />

            Over the years, we've partnered with startups,
            local businesses, and enterprise organizations,
            building strategies that combine creativity,
            technology, and performance.

            <br />
            <br />

            Today, we're proud to help businesses strengthen
            their online presence, generate qualified leads,
            and build lasting customer relationships.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[35px] border border-[#191A23] bg-[#B9FF66] p-8 shadow-[0_5px_0_0_#191A23]"
            >
              <h3 className="text-5xl font-medium text-[#191A23]">
                {stat.value}
              </h3>

              <p className="mt-2 text-lg text-[#191A23]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <TeamSection />

      <CTASection
        title="Ready to Grow Your Business?"
        description="Let's discuss how our team can help you achieve your marketing goals and build a stronger digital presence."
        buttonText="Book a Consultation"
        image="https://positivustheme.vercel.app/_image?href=%2F_astro%2Fproposal-pic.DC7YnBHg.png&w=494&h=395&f=webp"
      />

      <ContactSection />
    </main>
  );
}