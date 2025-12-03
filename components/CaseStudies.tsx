import React from "react";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "./smallcomp/Button";

export function CaseStudies() {
  const caseStudies = [
    {
      title: "E-Commerce Platform Modernization",
      category: "Web Development",
      problem:
        "Legacy monolithic system with slow load times and poor mobile experience.",
      solution:
        "Rebuilt with Next.js and React, implementing server-side rendering and optimized mobile-first design.",
      outcomes: [
        { metric: "60%", label: "Faster Page Load" },
        { metric: "3.5x", label: "Mobile Conversions" },
        { metric: "45%", label: "Reduced Bounce Rate" },
      ],
      tags: ["Next.js", "React", "PostgreSQL", "AWS"],
    },
    {
      title: "AI-Powered Document Intelligence",
      category: "Machine Learning",
      problem:
        "Manual document processing consumed 20+ hours weekly for a legal firm.",
      solution:
        "Developed custom NLP models for entity extraction and classification with RAG-based search.",
      outcomes: [
        { metric: "90%", label: "Time Saved" },
        { metric: "95%", label: "Accuracy Rate" },
        { metric: "5000+", label: "Docs Processed" },
      ],
      tags: ["Python", "PyTorch", "LangChain", "Vector DB"],
    },
    {
      title: "Real-Time Analytics Dashboard",
      category: "Full-Stack + ML",
      problem:
        "Business needed real-time insights from multiple data sources for decision-making.",
      solution:
        "Built end-to-end data pipeline with ML-based anomaly detection and interactive visualizations.",
      outcomes: [
        { metric: "<2s", label: "Query Response" },
        { metric: "12+", label: "Data Sources" },
        { metric: "99.9%", label: "Uptime" },
      ],
      tags: ["React", "Python", "Apache Kafka", "Elasticsearch"],
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-[var(--color-surface)]" id="work">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Featured Work</h2>
          <p className="text-xl text-[var(--color-text-secondary)]">
            Real-world projects where we have delivered measurable impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[var(--color-gray-200)]"
            >
              {/* Header */}
              <div className="bg-gradient-to-br from-[var(--color-navy-800)] to-[var(--color-navy-700)] p-6 text-white">
                <div className="text-sm font-medium text-[var(--color-teal-400)] mb-2">
                  {study.category}
                </div>
                <h4 className="text-white mb-4">{study.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded text-xs border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Problem */}
                <div>
                  <div className="text-xs font-semibold text-[var(--color-orange-500)] uppercase tracking-wider mb-1">
                    Problem
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {study.problem}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <div className="text-xs font-semibold text-[var(--color-teal-500)] uppercase tracking-wider mb-1">
                    Solution
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {study.solution}
                  </p>
                </div>

                {/* Outcomes */}
                <div className="pt-4 border-t border-[var(--color-gray-200)]">
                  <div className="text-xs font-semibold text-[var(--color-navy-800)] uppercase tracking-wider mb-3">
                    Key Outcomes
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {study.outcomes.map((outcome, i) => (
                      <div key={i} className="text-center">
                        <div className="text-lg font-bold text-[var(--color-teal-500)] flex items-center justify-center gap-1">
                          {outcome.metric}
                          {i === 0 && <TrendingUp className="w-3 h-3" />}
                        </div>
                        <div className="text-xs text-[var(--color-text-muted)]">
                          {outcome.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="ghost" size="lg">
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
