import PageHero from "../..//components/Banners/PageHero.tsx";
import Marquee from "../../components/UI/Marquee";

import MetricCard from "../../components/UI/MetricCard";
import PricingCard from "../../components/UI/PricingCard";

import RevenueGrowthChart from "../../components/UI/Charts/RevenueGrowthChart";
import PricingComparisonChart from "../../components/UI/Charts/PricingComparisonChart";

import ProcessFlow from "../../components/UI/ProcessFlow";

import CTASection from "../../components/Banners/CTASection";
import ContactSection from "../../components/Sections/ContactSection";
import TestimonialSection from "../../components/Sections/TestimonialSection";

import SectionHeader from "../../components/layout/SectionHeader";

export default function PricingPage() {
  return (
    <main>
      <PageHero
        badge="Pricing"
        title="Transparent Pricing For Every Stage Of Growth"
        description="Flexible plans designed to help businesses grow with confidence."
        backgroundText="PRICING"
      />

      <Marquee
        items={[
          "No Hidden Fees",
          "ROI Focused",
          "Transparent Reporting",
          "Dedicated Support",
          "Growth Driven",
          "Performance Marketing",
        ]}
      />

      {/* Metrics */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            value={250}
            suffix="+"
            label="Projects Delivered"
          />

          <MetricCard
            value={98}
            suffix="%"
            label="Client Satisfaction"
          />

          <MetricCard
            value={10}
            suffix="+"
            label="Years Experience"
          />

          <MetricCard
            value={50}
            suffix="+"
            label="Industry Awards"
          />
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeader
          title="Pricing Plans"
          description="Choose a plan that aligns with your business goals and growth ambitions."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <PricingCard
            name="Starter"
            price="$499"
            description="Perfect for businesses establishing their digital presence."
            features={[
              "SEO Optimization",
              "Monthly Reporting",
              "Email Support",
              "Google Business Setup",
            ]}
          />

          <PricingCard
            name="Growth"
            price="$999"
            description="Ideal for businesses ready to scale and generate consistent leads."
            featured
            features={[
              "Everything in Starter",
              "PPC Campaign Management",
              "Social Media Marketing",
              "Bi-Weekly Strategy Calls",
            ]}
          />

          <PricingCard
            name="Enterprise"
            price="$1999"
            description="Advanced marketing solutions tailored to ambitious organizations."
            features={[
              "Everything in Growth",
              "Dedicated Account Manager",
              "Advanced Analytics",
              "Custom Growth Strategy",
            ]}
          />
        </div>
      </section>

      {/* Charts */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeader
          title="See The Difference"
          description="Data-driven marketing isn't an expense—it's an investment in long-term growth."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <RevenueGrowthChart />
          <PricingComparisonChart />
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeader
          title="How We Work"
          description="Our proven process is designed to maximize results while keeping you informed every step of the way."
        />

        <div className="mt-12">
          <ProcessFlow />
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* CTA */}
      <CTASection
        title="Ready to Accelerate Your Growth?"
        description="Let's build a strategy tailored to your goals and start generating measurable results."
        buttonText="Book a Consultation"
        image="https://positivustheme.vercel.app/_image?href=%2F_astro%2Fproposal-pic.DC7YnBHg.png&w=494&h=395&f=webp"
      />

      {/* Contact */}
      <ContactSection />
    </main>
  );
}