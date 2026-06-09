// import SectionHeader from "../layout/SectionHeader";

// export default function ServiceSection() {
//   return (
//     <section aria-label="Services" className="mx-auto max-w-7xl px-6 py-12 lg:px-8"> 
//       <SectionHeader
//         title="Our Services"
//         description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
//       />
//     </section>
//   );
// }

import SectionHeader from "../layout/SectionHeader";
import ServiceCard from "../UI/Cards/ServiceCard";

const services = [
  {
    title: "Search Engine Optimization",
    image:
      "https://positivustheme.vercel.app/_image?href=%2F_astro%2Fcard-pic1.LmmlwL7_.png&w=210&h=170&f=webp",
    variant: "light" as const,
  },
  {
    title: "Pay-per-click advertising",
    image:
      "https://positivustheme.vercel.app/_image?href=%2F_astro%2Fcard-pic2.BeQ4x_k2.png&w=210&h=148&f=webp",
    variant: "green" as const,
  },
  {
    title: "Social Media Marketing",
    image:
      "https://positivustheme.vercel.app/_image?href=%2F_astro%2Fcard-pic3.D4d3JTsx.png&w=210&h=210&f=webp",
    variant: "dark" as const,
  },
  {
    title: "Email Marketing",
    image:
      "https://positivustheme.vercel.app/_image?href=%2F_astro%2Fcard-pic4.CPZGvqT8.png&w=210&h=194&f=webp",
    variant: "light" as const,
  },
  {
    title: "Content Creation",
    image:
      "https://positivustheme.vercel.app/_image?href=%2F_astro%2Fcard-pic5.CqK5dBMJ.png&w=210&h=196&f=webp",
    variant: "green" as const,
  },
  {
    title: "Analytics and Tracking",
    image:
      "https://positivustheme.vercel.app/_image?href=%2F_astro%2Fcard-pic6.CXJkFMY0.png&w=210&h=170&f=webp",
    variant: "dark" as const,
  },
];

export default function ServiceSection() {
  return (
    <section
      aria-label="Services"
      className="mx-auto max-w-7xl px-6 py-12 lg:px-8"
    >
      <SectionHeader
        title="Our Services"
        description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            image={service.image}
            variant={service.variant}
          />
        ))}
      </div>
    </section>
  );
}