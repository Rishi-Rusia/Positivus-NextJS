import PageHero from "../../components/Banners/PageHero";
import Marquee from "../../components/UI/Marquee";

import RevenueGrowthChart from "../../components/UI/Charts/RevenueGrowthChart";
import LeadsChart from "../../components/UI/Charts/LeadsChart";

import ServiceSection from "../../components/Sections/ServiceSection";
import CaseStudySection from "../../components/Sections/CaseStudySection";
import TestimonialSection from "../../components/Sections/TestimonialSection";
import ContactSection from "../../components/Sections/ContactSection";

import CTASection from "../../components/Banners/CTASection";

import SectionHeader from "../../components/layout/SectionHeader";
import ServiceAccordion from "@/src/components/Sections/ServiceAccordion";

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        badge="Services"
        title="Marketing Solutions That Drive Real Business Growth"
        description="From SEO and paid advertising to content creation and analytics, we provide the tools, expertise, and strategies needed to help your business thrive online."
        backgroundText="SERVICES"
      />

      <Marquee
        items={[
          "SEO",
          "PPC",
          "Analytics",
          "Social Media",
          "Content Marketing",
          "Email Marketing",
          "Brand Strategy",
          "Lead Generation",
        ]}
      />

      {/* Services Grid */}
      <ServiceSection />

      {/* Results Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeader
          title="The Results We Deliver"
          description="Every strategy we create is focused on measurable growth and long-term success."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <RevenueGrowthChart />
          <LeadsChart />
        </div>
      </section>

      {/* Process */}
      <ServiceAccordion />

      {/* Case Studies */} 
      <CaseStudySection />

      {/* Rishi */} 

      {/* CTA */}
      <CTASection
        title="Let's Build Your Growth Strategy"
        description="Whether you're looking to increase traffic, generate leads, or improve conversions, our team is ready to help."
        buttonText="Book a Consultation"
        image="https://positivustheme.vercel.app/_image?href=%2F_astro%2Fproposal-pic.DC7YnBHg.png&w=494&h=395&f=webp"
      />

      {/* Testimonials */}
      <TestimonialSection />

      {/* Contact */}
      <ContactSection />
    </main>
  );
}