"use client";

import { useState } from "react";
import SectionHeader from "../layout/SectionHeader";
import ProcessAccordion from "../Banners/ProcessAccordian";

const processes = [
  {
    number: "01",
    title: "Search Engine Optimization",
    content:
      "We improve your visibility on search engines through technical SEO, on-page optimization, keyword research, and content strategies designed to drive consistent organic traffic.",
  },
  {
    number: "02",
    title: "Pay-Per-Click Advertising",
    content:
      "Reach high-intent customers instantly with targeted advertising campaigns across Google, Bing, and social platforms. Every campaign is optimized for maximum return on investment.",
  },
  {
    number: "03",
    title: "Social Media Marketing",
    content:
      "Build stronger relationships with your audience through strategic content, community engagement, and paid social campaigns that increase awareness and conversions.",
  },
  {
    number: "04",
    title: "Email Marketing",
    content:
      "Turn prospects into loyal customers with personalized email campaigns, automated workflows, and data-driven messaging that nurtures every stage of the customer journey.",
  },
  {
    number: "05",
    title: "Content Creation",
    content:
      "From blog articles and landing pages to videos and social content, we create engaging assets that educate, inspire, and convert your audience.",
  },
  {
    number: "06",
    title: "Analytics & Performance Tracking",
    content:
      "We continuously monitor campaign performance, track meaningful KPIs, and provide actionable insights that help your business make smarter marketing decisions.",
  },
];

export default function WorkingProcessSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <SectionHeader
        title="Our Working Process"
        description="Step-by-Step Guide to Achieving Your Business Goals"
      />

      <div className="mt-8 space-y-6">
        {processes.map((process, index) => (
          <ProcessAccordion
            key={process.number}
            number={process.number}
            title={process.title}
            content={process.content}
            isOpen={openIndex === index}
            onToggle={() =>
              setOpenIndex(
                openIndex === index ? null : index
              )
            }
          />
        ))}
      </div>
    </section>
  );
}