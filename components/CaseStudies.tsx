"use client";
import React, { useState } from "react";
import {
  ArrowRight,
  ExternalLink,
  Github,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "./smallcomp/Button";

export function CaseStudies() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "HealthPort",
      subtitle: "AI-Powered Healthcare Platform",
      description:
        "Intelligent healthcare platform with AI symptom checker, GPS hospital search, and automated appointment booking system.",
      impact: "493K+ disease patterns • 70% fewer wrong specialist visits",
      tags: ["React", "TypeScript", "FastAPI", "AI/ML", "ChromaDB"],
      liveUrl: "https://health-port.vercel.app",
      githubUrl: "https://github.com/SM-Shaan/HealthPort",
      gradient: "from-blue-600 to-cyan-500",
      icon: "🏥",
    },
    {
      title: "RChatbot",
      subtitle: "RAG-Powered AI Chatbot",
      description:
        "Intelligent chatbot with Retrieval-Augmented Generation, document processing, and context-aware responses.",
      impact: "Real-time processing • Admin & user dashboards",
      tags: ["Python", "FastAPI", "LLM", "RAG", "Vector DB"],
      githubUrl: "https://github.com/as-kashmary/RChatbot",
      gradient: "from-purple-600 to-pink-500",
      icon: "🤖",
    },
    {
      title: "TLDR",
      subtitle: "Facebook Post Summarizer",
      description:
        "Chrome extension that instantly summarizes Facebook posts with AI-powered multilingual support (Bengali & English).",
      impact: "5-10s summary generation • Multi-language support",
      tags: ["JavaScript", "Chrome API", "OpenRouter AI"],
      githubUrl: "https://github.com/TangilHossain/TLDR",
      gradient: "from-orange-600 to-red-500",
      icon: "📝",
    },
    {
      title: "CUET FoodExpress",
      subtitle: "Campus Food Ordering Platform",
      description:
        "Full-stack food ordering system with Firebase authentication, Stripe payments, and real-time cart management.",
      impact: "Dual auth • Stripe payments • Admin dashboard",
      tags: ["React", "Firebase", "Stripe", "MongoDB", "TailwindCSS"],
      liveUrl: "https://cuet-foodexpress-w3.web.app",
      githubUrl: "https://github.com/RifatHossaiN47/cuet-foodexpress-frontend",
      gradient: "from-green-600 to-teal-500",
      icon: "🍕",
    },
    // Additional projects (hidden initially)
    {
      title: "Project Alpha",
      subtitle: "E-Commerce Platform",
      description:
        "Modern e-commerce solution with advanced filtering, payment gateway integration, and vendor management system.",
      impact: "Multi-vendor • Real-time inventory • SEO optimized",
      tags: ["Next.js", "PostgreSQL", "Redis", "AWS"],
      gradient: "from-indigo-600 to-blue-500",
      icon: "🛒",
    },
    {
      title: "Project Beta",
      subtitle: "Analytics Dashboard",
      description:
        "Real-time analytics platform with interactive data visualization, custom reports, and AI-powered insights.",
      impact: "Real-time data • Custom reports • AI insights",
      tags: ["React", "D3.js", "Python", "Apache Kafka"],
      gradient: "from-violet-600 to-purple-500",
      icon: "📊",
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section
      className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50"
      id="work"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--color-teal-50)] to-[var(--color-navy-50)] rounded-full text-sm font-semibold text-[var(--color-navy-700)] mb-4 border border-[var(--color-teal-200)]">
            <span className="w-2 h-2 bg-[var(--color-teal-500)] rounded-full animate-pulse"></span>
            Our Work
          </div>
          <h2 className="mb-4 text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--color-navy-800)] to-[var(--color-teal-600)] bg-clip-text text-transparent">
            Projects Built for Impact
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)]">
            Innovative solutions across AI, web development, and cloud
            technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-[var(--color-teal-300)] hover:-translate-y-2"
            >
              {/* Gradient Header with Icon */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

              <div className="p-6 lg:p-8">
                {/* Icon & Title */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`text-4xl bg-gradient-to-r ${project.gradient} p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[var(--color-navy-800)] group-hover:text-[var(--color-teal-600)] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-[var(--color-text-muted)]">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Impact */}
                <div className="flex items-center gap-2 mb-4 p-3 bg-gradient-to-r from-[var(--color-teal-50)] to-transparent rounded-lg border-l-4 border-[var(--color-teal-500)]">
                  <span className="text-xl">⚡</span>
                  <span className="text-sm font-semibold text-[var(--color-navy-700)]">
                    {project.impact}
                  </span>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-50 text-[var(--color-navy-700)] rounded-lg text-xs font-medium border border-gray-200 hover:border-[var(--color-teal-400)] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        project.liveUrl ? "" : "flex-1"
                      } flex items-center justify-center gap-2 px-4 py-3 bg-[var(--color-navy-800)] hover:bg-[var(--color-navy-700)] text-white rounded-xl text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all`}
                    >
                      <Github className="w-4 h-4" />
                      {project.liveUrl ? "" : "View Code"}
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Effect Border */}
              <div
                className={`h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
              ></div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {projects.length > 4 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[var(--color-navy-800)] to-[var(--color-navy-700)] text-white rounded-xl text-base font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-[var(--color-navy-600)]"
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronUp className="w-5 h-5" />
                </>
              ) : (
                <>
                  View More Projects
                  <ChevronDown className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 relative overflow-hidden rounded-3xl">
          {/* Background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-navy-800)] via-[var(--color-navy-700)] to-[var(--color-teal-600)]"></div>

          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-teal-400)] rounded-full blur-3xl"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center p-12 lg:p-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Ready to transform your ideas into reality? Our team specializes
              in AI, full-stack development, and cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact">
                <Button
                  variant="ghost"
                  size="lg"
                  className="bg-white text-[var(--color-navy-800)] hover:bg-gray-100 shadow-2xl hover:scale-105 transition-all"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <Button
                variant="ghost"
                size="lg"
                className="text-white border-2 border-white hover:bg-white/10"
              >
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
