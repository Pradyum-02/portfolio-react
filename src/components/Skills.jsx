import { useState } from "react";
import Card from "../ui/Card";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { skillGroups } from "../data/skills";

const groupIcons = {
  frontend: "react",
  backend: "node",
  database: "database",
  cloud: "cloud",
  devops: "docker",
  languages: "code",
  tools: "terminal",
};

export default function Skills() {
  const [activeId, setActiveId] = useState(skillGroups[0].id);
  const active = skillGroups.find((group) => group.id === activeId);

  return (
    <section className="skills section section--soft" id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="A stack chosen for boring reliability."
          highlight={["reliability."]}
          description="Seven categories, all used in shipped work — not a list of tutorials."
        />

        <Reveal className="skills__tabs" variant="up">
          <div className="skills__tablist" role="tablist" aria-label="Skill categories">
            {skillGroups.map((group) => (
              <button
                key={group.id}
                role="tab"
                aria-selected={group.id === activeId}
                className={`skills__tab ${group.id === activeId ? "is-active" : ""}`}
                onClick={() => setActiveId(group.id)}
              >
                <Icon name={groupIcons[group.id]} size={18} />
                {group.title}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="skills__panel" key={active.id}>
          <p className="skills__blurb">{active.blurb}</p>
          <div className="skills__grid">
            {active.items.map((item, index) => (
              <Card
                key={item}
                className="skill-card"
                max={14}
                lift={12}
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <span className="skill-card__icon">
                  <Icon name={groupIcons[active.id]} size={24} />
                </span>
                <span className="skill-card__name">{item}</span>
              </Card>
            ))}
          </div>
        </div>

        <div className="skills__all">
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} delay={index * 60} className="skills__mini">
              <span className="skills__mini-icon">
                <Icon name={groupIcons[group.id]} size={18} />
              </span>
              <div>
                <strong>{group.title}</strong>
                <span>{group.items.length} technologies</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
