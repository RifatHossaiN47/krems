import React from "react";
import { ServiceCard } from "./smallcomp/ServiceCard";
import { Smartphone, Database, Sparkles } from "lucide-react";

export function ServicesOverview() {
  const services = [
    {
      icon: Smartphone,
      title: "Web & Mobile Development",
      benefits: [
        "Responsive web apps with Next.js and React",
        "Native mobile apps for iOS and Android",
        "Progressive Web Apps (PWA) for cross-platform reach",
      ],
      link: "#web-mobile",
      gradient: "from-[var(--color-teal-500)] to-[var(--color-teal-600)]",
    },
    {
      icon: Database,
      title: "Machine Learning & Data",
      benefits: [
        "Custom ML models for prediction and classification",
        "Data pipeline design and ETL automation",
        "Model deployment and monitoring at scale",
      ],
      link: "#ml-data",
      gradient: "from-[var(--color-orange-500)] to-[var(--color-orange-600)]",
    },
    {
      icon: Sparkles,
      title: "Agentic AI & RAG",
      benefits: [
        "Retrieval-Augmented Generation systems",
        "AI agents for autonomous task execution",
        "Vector database integration for semantic search",
      ],
      link: "#agentic-ai",
      gradient: "from-[#6366f1] to-[#8b5cf6]",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-[var(--color-surface)]" id="services">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Our Services</h2>
          <p className="text-xl text-[var(--color-text-secondary)]">
            End-to-end software engineering, from MVP to production—backed by
            deep expertise in modern frameworks and AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
