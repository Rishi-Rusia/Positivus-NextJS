type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
};

export default function TestimonialCard({
  quote,
  name,
  role,
}: TestimonialCardProps) {
  return (
    <div className="relative mx-auto w-full max-w-[600px]">
      <div className="rounded-[45px] border border-[#B9FF66] bg-transparent p-8 md:p-10">
        <p className="leading-relaxed text-white">
          "{quote}"
        </p>
      </div>

      <div className="ml-12 h-8 w-8 -translate-y-[1px] rotate-45 border-b border-r border-[#B9FF66] bg-[#191A23]" />

      <div className="ml-8 mt-2">
        <h4 className="font-medium text-[#B9FF66]">
          {name}
        </h4>

        <p className="text-white/80">
          {role}
        </p>
      </div>
    </div>
  );
}