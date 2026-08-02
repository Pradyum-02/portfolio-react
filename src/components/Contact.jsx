import { useState } from "react";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import FloatingShapes from "../ui/FloatingShapes";
import { profile, socials } from "../data/socials";

const initial = { name: "", email: "", subject: "", message: "" };
const whatsappNumber = "8482932838";

export default function Contact() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const next = {};
    if (values.name.trim().length < 2) next.name = "Tell me your name";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(values.email)) next.email = "A valid email, please";
    if (values.message.trim().length < 12) next.message = "A little more detail helps";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;

    const messageBody = [
      `Name: ${values.name.trim()}`,
      `Email: ${values.email.trim()}`,
      values.subject.trim() ? `Subject: ${values.subject.trim()}` : null,
      `Message: ${values.message.trim()}`,
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageBody)}`;

    setStatus("sending");
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    window.setTimeout(() => {
      setStatus("sent");
      setValues(initial);
      window.setTimeout(() => setStatus("idle"), 4200);
    }, 900);
  };

  const fields = [
    { name: "name", label: "Your name", type: "text", autoComplete: "name" },
    { name: "email", label: "Email address", type: "email", autoComplete: "email" },
    { name: "subject", label: "Subject (optional)", type: "text", autoComplete: "off" },
  ];

  return (
    <section className="contact section" id="contact">
      <FloatingShapes density="light" />
      <div className="container contact__inner">
        <div className="contact__intro">
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something fast and useful."
            highlight={["fast"]}
            description="Internship offers, freelance work or a question about a project — I reply within a day."
          />

          <Reveal delay={120} className="contact__details">
            <a className="contact__detail" href={`mailto:${profile.email}`}>
              <span className="contact__detail-icon">
                <Icon name="mail" size={20} />
              </span>
              <span>
                <strong>Email</strong>
                {profile.email}
              </span>
            </a>
            <div className="contact__detail">
              <span className="contact__detail-icon">
                <Icon name="cloud" size={20} />
              </span>
              <span>
                <strong>Based in</strong>
                {profile.location}
              </span>
            </div>
          </Reveal>

          <Reveal delay={200} className="contact__socials">
            {socials.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noreferrer noopener"
                className="social-btn"
                aria-label={social.label}
              >
                <Icon name={social.id === "mail" ? "mail" : social.id} size={20} />
              </a>
            ))}
          </Reveal>
        </div>

        <Reveal variant="right" className="contact__form-wrap">
          <form className="contact-form" onSubmit={onSubmit} noValidate>
            {fields.map((field) => (
              <div className="field" key={field.name}>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  value={values[field.name]}
                  onChange={onChange}
                  autoComplete={field.autoComplete}
                  placeholder=" "
                  aria-invalid={Boolean(errors[field.name])}
                  className={errors[field.name] ? "has-error" : ""}
                />
                <label htmlFor={field.name}>{field.label}</label>
                <span className="field__line" aria-hidden="true" />
                {errors[field.name] ? (
                  <span className="field__error">{errors[field.name]}</span>
                ) : null}
              </div>
            ))}

            <div className="field field--area">
              <textarea
                id="message"
                name="message"
                rows="5"
                value={values.message}
                onChange={onChange}
                placeholder=" "
                aria-invalid={Boolean(errors.message)}
                className={errors.message ? "has-error" : ""}
              />
              <label htmlFor="message">Tell me about the role or project</label>
              <span className="field__line" aria-hidden="true" />
              {errors.message ? <span className="field__error">{errors.message}</span> : null}
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              iconRight="arrowRight"
              className="contact-form__submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : status === "sent" ? "Message sent" : "Send message"}
            </Button>

            <p className={`contact-form__status ${status === "sent" ? "is-visible" : ""}`} role="status">
              Thanks — your message is queued. I&apos;ll reply to {profile.email} within a day.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
