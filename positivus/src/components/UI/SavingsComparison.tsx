import SectionHeader from "../layout/SectionHeader";

export default function SavingsComparison() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeader
        title="Why Businesses Choose Us"
        description="Achieve enterprise-level marketing results without the overhead of building a full in-house team."
      />

      <div className="mt-12 rounded-[45px] border border-[#191A23] bg-[#F3F3F3] p-8 shadow-[0_5px_0_0_#191A23]">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-2xl font-medium">
              In-House Team
            </h3>

            <div className="text-6xl font-medium text-red-500">
              $180K
            </div>

            <p className="mt-4">
              Average yearly cost.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-2xl font-medium">
              Positivus
            </h3>

            <div className="text-6xl font-medium text-[#191A23]">
              $36K
            </div>

            <p className="mt-4">
              Typical annual investment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}