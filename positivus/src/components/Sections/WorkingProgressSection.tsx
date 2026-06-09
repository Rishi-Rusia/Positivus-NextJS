"use client";

import { useState } from "react";
import SectionHeader from "../layout/SectionHeader";
import ProcessAccordion from "../Banners/ProcessAccordian";

const processes = [
  {
    number: "01",
    title: "Consultation",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    number: "02",
    title: "Research and Strategy Development",
    content:
      "We start by understanding your brand, audience, and goals—then back it all up with real data. From competitor analysis to market trends, we craft a smart, custom strategy built to get results.",
  },
  {
    number: "03",
    title: "Implementation",
    content:
      "Strategy becomes action. Whether it's launching ad campaigns, building out content, or refreshing your brand presence—we bring the plan to life across every platform that matters.",
  },
  {
    number: "04",
    title: "Monitoring and Optimization",
    content:
      "We track every click, scroll, and conversion. Our team analyzes performance in real time and makes data-driven tweaks to maximize ROI. If something's underperforming, we fix it—fast.",
  },
  {
    number: "05",
    title: "Reporting and Communication",
    content:
      "You'll never be left wondering what's going on. We deliver clear, actionable reports and keep communication flowing with regular check-ins and updates. No jargon, just results.",
  },
  {
    number: "06",
    title: "Continual Improvement",
    content:
      "Digital moves fast—so do we. We're always testing, learning, and leveling up your campaigns to keep them fresh, relevant, and a step ahead of the competition.",
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