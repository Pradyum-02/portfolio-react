import Card from "../ui/Card";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { services } from "../data/services";

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title="How I can help your team."
          highlight={["help"]}
          description="Open for SDE Internships"
        />

        <div className="services__grid">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 80}>
              <Card className="service-card" max={12} lift={12}>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.description}</p>
                <ul className="service-card__list">
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>
                      <Icon name="check" size={14} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
