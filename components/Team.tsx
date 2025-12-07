import React from "react";
import { TeamCard } from "./smallcomp/TeamCard";

export function Team() {
  const teamMembers = [
    {
      name: "AS Kashmary",
      role: "AI & Cloud Engineer",
      expertise:
        "AI solutions, cloud infrastructure, and production ML systems",
      image: "/kash.jpg",
      linkedin: "https://www.linkedin.com/in/as-kashmary/",
    },
    {
      name: "Md Rifat Hossen",
      role: "AI Engineer & Full-Stack Developer",
      expertise:
        "AI model development, full-stack architecture, and AI integration",
      image: "/rifat.jpg",
      linkedin: "https://www.linkedin.com/in/rifathossain47/",
    },
    {
      name: "Emon Ahmed",
      role: "AI Engineer",
      expertise: "Machine learning, data processing, and AI model optimization",
      image: "/emmu.jpg",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Abdullah Al Mahmud",
      role: "Data Engineer",
      expertise: "Data pipelines, databases, and cloud infrastructure",
      image: "/mahmud.jpg",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Tangil Hossain Shawon",
      role: "Software Engineer",
      expertise: "Android Studio, Kotlin, Flutter, and cross-platform apps",
      image: "/shawon.jpg",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Sha Newaz Mahmud",
      role: "Software Engineer",
      expertise:
        "Frontend & backend development, API design, and web applications",
      image: "/shaan.jpg",
      linkedin: "https://linkedin.com",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-[var(--color-surface)]" id="about">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Company Info */}
          <div className="bg-gradient-to-r from-[var(--color-teal-500)] to-[var(--color-orange-500)] p-1 rounded-xl inline-block">
            <div className="bg-white rounded-lg px-8 py-4">
              <h2 className="mb-4">Meet the Team</h2>
              <p className="text-xl text-[var(--color-text-secondary)] mb-6">
                A dedicated team of engineers bringing complementary skills and
                expertise to every project.
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
