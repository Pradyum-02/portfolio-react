import orbit from "../assets/images/orbit-analytics.svg";
import shipyard from "../assets/images/shipyard-ci.svg";
import lexi from "../assets/images/lexi-notes.svg";
import vault from "../assets/images/vault-auth.svg";
import pulse from "../assets/images/pulse-monitor.svg";
import kanbanly from "../assets/images/kanbanly.svg";

export const projects = [
  {
    id: "college-os",
    title: "College OS (Ongoing)",
    subtitle: "AI-powered campus management platform",
    description:
      "An intelligent campus operating system that centralizes academics, attendance, leave management, announcements, and student services. It features an AI assistant powered by LLMs and Retrieval-Augmented Generation (RAG) to deliver context-aware answers from college resources, making campus information instantly accessible.",
    image: kanbanly,
    tech: ["React", "Node.js", "Express", "MongoDB", "RAG", "LLMs", "JWT", "Socket.IO"],
    metrics: ["AI Assistant with RAG & LLMs", "Student • Faculty • Admin Portals", "Real-time Notifications & Live Updates"],
    github: "https://github.com/Pradyum-02/College-OS-v1",
    demo: null,
    featured: true,
  },
  {
    id: "chatflow",
    title: "ChatFlow Backend",
    subtitle: "Modern real-time messaging platform",
    description:
      "A full-stack chat application with real-time messaging, secure authentication, media sharing, typing indicators, online presence, and responsive design for seamless communication across devices.",
    image: orbit,
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Backend"],
    metrics: ["Real-time messaging", "<100ms event delivery", "JWT Authentication"],
    github: "https://github.com/Pradyum-02/chatflow-backend",
    demo: null,
    featured: true,
  },
  {
    id: "leaveflow",
    title: "LeaveFlow",
    subtitle: "Smart leave management for modern teams",
    description:
      "A role-based leave management system that streamlines leave requests, approvals, employee dashboards, and administrative controls through an intuitive and responsive interface.",
    image: shipyard,
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    metrics: ["Employee & Admin Roles", "Leave Approval Workflow", "Secure Authentication"],
    github: "https://github.com/Pradyum-02/LeaveFlow",
    demo: "https://leave-flow-taupe.vercel.app/",
    featured: true,
  },
  {
    id: "url-shortener",
    title: "URL Shortener",
    subtitle: "Fast, reliable and shareable links",
    description:
      "A URL shortening service that generates unique short links, performs instant redirection, and provides a clean interface for managing and accessing shortened URLs.",
    image: lexi,
    tech: ["React", "Node.js", "Express", "MongoDB"],
    metrics: ["Instant Redirects", "Fast URL Generation", "REST API"],
    github: "https://github.com/Pradyum-02/URL-Shortener",
    demo: "https://url-shortener-nu-ecru.vercel.app/",
    featured: true,
  },
  {
    id: "auth-service",
    title: "Authentication Service",
    subtitle: "Secure authentication for modern applications",
    description:
      "A reusable authentication service featuring user registration, JWT-based login, password hashing, protected routes, email verification, and password reset functionality.",
    image: vault,
    tech: ["Node.js", "Express", "MongoDB", "JWT", "bcrypt"],
    metrics: ["JWT Authentication", "Password Encryption", "Email Verification"],
    github: "https://github.com/Pradyum-02/Authentication-Service",
    demo: null,
    featured: false,
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    subtitle: "Showcasing projects, skills and experience",
    description:
      "A modern developer portfolio featuring smooth animations, reusable React components, responsive layouts, and carefully crafted UI to highlight my work and technical journey.",
    image: pulse,
    tech: ["React", "CSS", "Framer Motion"],
    metrics: ["Fully Responsive", "Smooth Animations", "Optimized Performance"],
    github: "https://github.com/",
    demo: "https://example.com/",
    featured: false,
  },
];
