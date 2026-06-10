import Marquee from "../../components/UI/Marquee";
import SectionHeader from "../../components/layout/SectionHeader";
import TestimonialSection from "../../components/Sections/TestimonialSection";
import ContactSection from "../../components/Sections/ContactSection";
import CTASection from "../../components/Banners/CTASection";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$499",
      description:
        "Perfect for small businesses looking to establish a strong online presence.",
      features: [
        "SEO Optimization",
        "Google Business Setup",
        "Monthly Reporting",
        "Email Support",
      ],
      featured: false,
    },
    {
      name: "Growth",
      price: "$999",
      description:
        "Designed for growing businesses ready to scale their marketing efforts.",
      features: [
        "Everything in Starter",
        "PPC Campaign Management",
        "Social Media Marketing",
        "Bi-Weekly Strategy Calls",
      ],
      featured: true,
    },
    {
      name: "Enterprise",
      price: "$1999",
      description:
        "Comprehensive digital marketing solutions for ambitious organizations.",
      features: [
        "Everything in Growth",
        "Dedicated Account Manager",
        "Advanced Analytics",
        "Custom Growth Strategy",
      ],
      featured: false,
    },
  ];

  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 select-none text-[220px] font-bold text-[#191A23]/5 lg:block">
          PRICING
        </div>

        <div className="relative text-center">
          <div className="mb-6 inline-block rounded-xl bg-[#B9FF66] px-4 py-2 text-lg font-medium text-[#191A23]">
            Pricing
          </div>

          <h1 className="mx-auto max-w-4xl text-5xl font-medium leading-tight text-[#191A23] md:text-6xl lg:text-[72px]">
            Transparent Pricing For Every Stage Of Growth
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-[#191A23] md:text-xl">
            Choose the plan that best fits your business goals and let us help
            you generate measurable results.
          </p>
        </div>
      </section>

      {/* MARQUEE */}
      <Marquee
        items={[
          "No Hidden Fees",
          "Flexible Contracts",
          "Dedicated Support",
          "Transparent Reporting",
          "ROI Focused",
          "Growth Driven",
        ]}
      />

      {/* PRICING */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeader
          title="Our Plans"
          description="Flexible solutions tailored to businesses of all sizes."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[45px] border border-[#191A23] p-8 shadow-[0_5px_0_0_#191A23] transition-all duration-300 hover:-translate-y-1 ${
                plan.featured
                  ? "bg-[#B9FF66]"
                  : "bg-[#F3F3F3]"
              }`}
            >
              {plan.featured && (
                <div className="mb-6 inline-block rounded-full bg-[#191A23] px-4 py-2 text-sm font-medium text-white">
                  Most Popular
                </div>
              )}

              <h3 className="text-3xl font-medium text-[#191A23]">
                {plan.name}
              </h3>

              <div className="mt-4 text-6xl font-medium text-[#191A23]">
                {plan.price}
                <span className="text-xl font-normal">
                  /month
                </span>
              </div>

              <p className="mt-6 text-[#191A23]">
                {plan.description}
              </p>

              <div className="my-8 h-px bg-[#191A23]" />

              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#191A23] text-sm text-white">
                      ✓
                    </span>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-10 w-full cursor-pointer rounded-[14px] bg-[#191A23] px-8 py-5 text-lg text-white transition-all duration-300 hover:-translate-y-1">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeader
          title="What's Included"
          description="Every plan comes with our commitment to growth, transparency, and measurable results."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Monthly Reporting",
            "Performance Tracking",
            "Dedicated Support",
            "Growth Strategy",
          ].map((feature) => (
            <div
              key={feature}
              className="rounded-[35px] border border-[#191A23] bg-[#F3F3F3] p-8 shadow-[0_5px_0_0_#191A23]"
            >
              <h3 className="text-xl font-medium text-[#191A23]">
                {feature}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* <TestimonialSection /> */}

      <CTASection
        title="Not Sure Which Plan Is Right For You?"
        description="Let's talk about your goals and find the perfect solution for your business."
        buttonText="Schedule a Free Consultation"
        image="https://positivustheme.vercel.app/_image?href=%2F_astro%2Fproposal-pic.DC7YnBHg.png&w=494&h=395&f=webp"
      />

      <ContactSection />
    </main>
  );
}