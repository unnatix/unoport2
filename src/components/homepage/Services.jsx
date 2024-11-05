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
          description="I specialize in crafting data science reports, predictive models and economic reports for startups and small businesses 
          to help them stand out in the digital landscape with a powerful impact. "
          items={expertiseItems}
        />
        <ServiceUi
          title="my digital tool box."
          description="These are my go to tech stack to make any data science project happen. 
          I am always eager of learning more about my current stack, and new technologies that could expand my skills."
          items={toolBoxItems}
        />
      </div>
    </section>
  );
}
