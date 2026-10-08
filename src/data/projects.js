import orbit from "../assets/images/orbit-analytics.svg";
import shipyard from "../assets/images/shipyard-ci.svg";
import lexi from "../assets/images/lexi-notes.svg";
import vault from "../assets/images/vault-auth.svg";
import pulse from "../assets/images/pulse-monitor.svg";
import kanbanly from "../assets/images/kanbanly.svg";

export const projects = [
  {
    id: "civic-pulse",
    title: "Civic Pulse",
    subtitle: "AI-powered civic intelligence and public issue analysis",
    description:
      "Civic Pulse is a civic-tech platform designed to transform public issues and community feedback into structured, actionable insights. It combines data collection, analysis, visualization, and AI-assisted intelligence to help users understand civic problems and identify meaningful patterns in public concerns.",
    image: kanbanly,
    tech: ["React", "Node.js", "Express", "Supabase", "AI/LLMs", "Data Visualization"],
    metrics: ["AI-Assisted Civic Analysis", "Public Issue Intelligence", "Data Visualization & Insights"],
    github: "https://github.com/Pradyum-02/Civic-Pulse-FYP-Main",
    demo: "https://civic-pulse-fyp-main.vercel.app/",
    featured: true,
  },
  {
    id: "recallx",
    title: "RecallX",
    subtitle: "A focused platform for intelligent information recall",
    description:
      "RecallX is an AI-powered information retrieval project designed to help users organize, search, and retrieve relevant information efficiently. It focuses on making stored knowledge easier to access through intelligent retrieval and a clean user experience.",
    image: vault,
    tech: ["React", "Node.js", "Express", "Supabase", "AI/LLMs"],
    metrics: ["Intelligent Information Retrieval", "Context-Aware Search", "Organized Knowledge Access"],
    github: "https://github.com/Pradyum-02/RecallX",
    demo: null,
    featured: false,
  },
  {
    id: "packet-cdn",
    title: "Packet CDN",
    subtitle: "High-performance content delivery and packet-based networking",
    description:
      "Packet CDN is a networking-focused content delivery project designed to explore efficient packet handling, content distribution, and performance optimization. The project focuses on understanding how data can be delivered efficiently across distributed network infrastructure.",
    image: lexi,
    tech: ["Python", "Networking", "HTTP", "CDN", "Packet Processing"],
    metrics: ["Efficient Packet Delivery", "Content Distribution", "Network Performance Optimization"],
    github: "https://github.com/Pradyum-02/Packet-CDN",
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
