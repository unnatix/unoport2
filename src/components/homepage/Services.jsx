import ServiceUi from "../ui/ServiceUi";
import Heading from "../ui/Heading";

export default function Services() {
  const expertiseItems = [
    "Data Analysis",
    "Machine Learning",
    "Economic analysis",
    "Business Development",
    "Consulting",
  ];

  const toolBoxItems = [
    "Python",
    "SQL",
    "Tableau",
    "PowerBI",
    "TensorFlow",
    "Seaborn",

  ];

  return (
    <section id="services" className="my-[10%]" aria-label="services">
      <Heading title="services" />
      <div className="space-y-14">
        <ServiceUi
          title="my expertises."
          description="I focus on the complete data science workflow from designing to building
          services, my goal is to deliver an impactful and elevating
          data experience for businesses."
          items={expertiseItems}
        />
        <ServiceUi
          title="my digital tool box."
          description="These are my go to tech stack to make any data science project happen. I am always eager of learning more about my current stack, and new technologies that could expand my horizons."
          items={toolBoxItems}
        />
      </div>
    </section>
  );
}
