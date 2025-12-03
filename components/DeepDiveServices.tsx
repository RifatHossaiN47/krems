"use client";
import React, { useState } from "react";
import { ChevronDown, CheckCircle } from "lucide-react";

interface ServiceDetail {
  id: string;
  title: string;
  features: string[];
  deliverables: string[];
  techStack: string[];
  color: string;
}

export function DeepDiveServices() {
  const [expandedService, setExpandedService] = useState<string>("web-mobile");

  const services: ServiceDetail[] = [
    {
      id: "web-mobile",
      title: "Web & Mobile Development",
      features: [
        "Server-side rendered (SSR) and static site generation (SSG)",
        "RESTful & GraphQL API development",
        "Progressive Web Apps (PWA) with offline support",
        "Native iOS and Android mobile applications",
        "Real-time features with WebSockets",
        "Responsive design with accessibility (WCAG 2.1)",
      ],
      deliverables: [
        "Production-ready codebase with documentation",
        "CI/CD pipeline setup",
        "Automated testing suite (unit, integration, e2e)",
        "Deployment on cloud infrastructure (AWS, GCP, Vercel)",
        "Performance optimization and monitoring",
      ],
      techStack: [
        "Next.js",
        "React",
        "React Native",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "PostgreSQL",
        "Redis",
        "Docker",
        "Kotlin",
        "Flutter",
      ],
      color: "teal",
    },
    {
      id: "ml-data",
      title: "Machine Learning & Data",
      features: [
        "Custom model development for classification, regression, NLP",
        "Data preprocessing and feature engineering",
        "Model training, validation, and hyperparameter tuning",
        "ETL pipeline design and orchestration",
        "Real-time inference API development",
        "Model monitoring and retraining workflows",
      ],
      deliverables: [
        "Trained models with performance reports",
        "Scalable data pipelines",
        "Model serving infrastructure",
        "Jupyter notebooks with experiments",
        "Documentation and transfer learning guides",
      ],
      techStack: [
        "Python",
        "PyTorch",
        "TensorFlow",
        "scikit-learn",
        "Pandas",
        "Apache Airflow",
        "MLflow",
        "FastAPI",
        "AWS SageMaker",
      ],
      color: "orange",
    },
    {
      id: "agentic-ai",
      title: "Agentic AI & RAG Solutions",
      features: [
        "Retrieval-Augmented Generation (RAG) system design",
        "Vector database integration and semantic search",
        "AI agent orchestration with tool-calling",
        "Custom LLM fine-tuning and prompt engineering",
        "Multi-agent systems for complex workflows",
        "Knowledge base indexing and maintenance",
      ],
      deliverables: [
        "RAG pipeline with retrieval and generation components",
        "AI agent frameworks with custom tools",
        "Vector database setup and optimization",
        "API endpoints for conversational AI",
        "Evaluation metrics and testing framework",
      ],
      techStack: [
        "LangChain",
        "LlamaIndex",
        "OpenAI API",
        "Pinecone",
        "Weaviate",
        "ChromaDB",
        "FAISS",
        "Hugging Face",
        "LangSmith",
      ],
      color: "purple",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      teal: {
        bg: "bg-[var(--color-teal-500)]",
        text: "text-[var(--color-teal-500)]",
        border: "border-[var(--color-teal-500)]",
        bgLight: "bg-[var(--color-teal-500)]/10",
      },
      orange: {
        bg: "bg-[var(--color-orange-500)]",
        text: "text-[var(--color-orange-500)]",
        border: "border-[var(--color-orange-500)]",
        bgLight: "bg-[var(--color-orange-500)]/10",
      },
      purple: {
        bg: "bg-[#8b5cf6]",
        text: "text-[#8b5cf6]",
        border: "border-[#8b5cf6]",
        bgLight: "bg-[#8b5cf6]/10",
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Deep Dive: Our Capabilities</h2>
          <p className="text-xl text-[var(--color-text-secondary)]">
            Comprehensive technical details on what we deliver and how we work.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-4">
          {services.map((service) => {
            const isExpanded = expandedService === service.id;
            const colors = getColorClasses(service.color);

            return (
              <div
                key={service.id}
                className={`border-2 rounded-xl overflow-hidden transition-all duration-300 ${
                  isExpanded ? colors.border : "border-[var(--color-gray-200)]"
                }`}
              >
                {/* Header - Always Visible */}
                <button
                  onClick={() =>
                    setExpandedService(isExpanded ? "" : service.id)
                  }
                  className="w-full p-6 flex items-center justify-between bg-white hover:bg-[var(--color-surface)] transition-colors"
                  id={service.id}
                >
                  <h3 className={isExpanded ? colors.text : ""}>
                    {service.title}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 transition-transform duration-300 ${
                      isExpanded ? "rotate-180" : ""
                    } ${colors.text}`}
                  />
                </button>

                {/* Expandable Content */}
                <div
                  className={`transition-all duration-300 ${
                    isExpanded
                      ? "max-h-[2000px] opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className={`${colors.bgLight} p-6 lg:p-8`}>
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Features */}
                      <div>
                        <h4 className="mb-4 flex items-center gap-2">
                          <span
                            className={`w-1 h-6 ${colors.bg} rounded`}
                          ></span>
                          Features
                        </h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"
                            >
                              <CheckCircle
                                className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`}
                              />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Deliverables */}
                      <div>
                        <h4 className="mb-4 flex items-center gap-2">
                          <span
                            className={`w-1 h-6 ${colors.bg} rounded`}
                          ></span>
                          Deliverables
                        </h4>
                        <ul className="space-y-3">
                          {service.deliverables.map((deliverable, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"
                            >
                              <CheckCircle
                                className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`}
                              />
                              <span>{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h4 className="mb-4 flex items-center gap-2">
                          <span
                            className={`w-1 h-6 ${colors.bg} rounded`}
                          ></span>
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.techStack.map((tech, index) => (
                            <span
                              key={index}
                              className={`px-3 py-1.5 ${colors.bgLight} ${colors.text} text-sm font-medium rounded-lg border ${colors.border}`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
