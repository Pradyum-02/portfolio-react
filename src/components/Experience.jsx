import SectionHeading from "../ui/SectionHeading";
import Timeline from "./Timeline";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Internships, open source and everything in between."
          highlight={["source"]}
          description="Two engineering internships, thirty-plus merged pull requests and a degree that keeps me honest about fundamentals."
        />
        <Timeline items={experience} />
      </div>
    </section>
  );
}
