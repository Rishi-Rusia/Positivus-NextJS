import SectionHeader from "../layout/SectionHeader";
import CaseStudyCard from "../UI/Cards/CaseStudyCard";

const caseStudies = [
  {
    description:
      "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    description:
      "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    description:
      "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
];

export default function CaseStudySection() {
  return (
    <section
      aria-label="Case Studies"
      className="mx-auto max-w-7xl px-6 py-12 lg:px-8"
    >
      <SectionHeader
        title="Case Studies"
        description="Discover how our digital marketing strategies have transformed businesses across various industries. Explore our case studies to see real-world examples of our successful campaigns and the results we've achieved for our clients."
      />

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {caseStudies.map((study, index) => (
          <CaseStudyCard
            key={index}
            description={study.description}
          />
        ))}
      </div>
    </section>
  );
}