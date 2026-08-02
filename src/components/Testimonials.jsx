import Card from "../ui/Card";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section className="testimonials section section--soft">
      <div className="container">
        <SectionHeading
          eyebrow="Testimonials"
          title="What the people I shipped with say."
          highlight={["say."]}
          align="center"
        />

        <div className="testimonials__grid">
          {testimonials.map((item, index) => (
            <Reveal key={item.id} delay={index * 100}>
              <Card className="testimonial-card" max={8} lift={10}>
                <span className="testimonial-card__quote" aria-hidden="true">
                  <Icon name="quote" size={26} />
                </span>
                <blockquote>{item.quote}</blockquote>
                <footer>
                  <strong>{item.name}</strong>
                  <span>{item.title}</span>
                </footer>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
