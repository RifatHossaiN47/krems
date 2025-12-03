import React from "react";
import { TeamCard } from "./smallcomp/TeamCard";

export function Team() {
  const teamMembers = [
    {
      name: "AS Kashmary",
      role: "20040**",
      expertise: "Deep learning, NLP, and production ML systems",
      image: "/kash.jpg",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Md Rifat Hossen",
      role: "2004129",
      expertise:
        "Full-stack architecture, system design, and technical leadership",
      image: "/pics.PNG",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Emon Ahmed",
      role: "2004119",
      expertise: "React, Next.js, and modern UI/UX implementation",
      image: "/emmu.jpg",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Abdullah Al Mahmud",
      role: "20040**",
      expertise: "APIs, databases, and cloud infrastructure",
      image: "/image.png",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Shawon Islam",
      role: "20040**",
      expertise: "iOS, Android, and cross-platform mobile apps",
      image: "/shwn.png",
      linkedin: "https://linkedin.com",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-[var(--color-surface)]" id="about">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Meet the Team</h2>
          <p className="text-xl text-[var(--color-text-secondary)] mb-6">
            Five engineers who bring complementary skills and a shared
            commitment to excellence.
          </p>

          {/* Origin Story */}
          <div className="bg-gradient-to-r from-[var(--color-teal-500)] to-[var(--color-orange-500)] p-1 rounded-xl inline-block">
            <div className="bg-white rounded-lg px-8 py-4">
              <p className="text-[var(--color-navy-800)] font-medium">
                <span className="font-bold">KREMS</span> ={" "}
                <span className="text-[var(--color-teal-500)]">K</span>ashmary,{" "}
                <span className="text-[var(--color-teal-500)]">R</span>ifat,{" "}
                <span className="text-[var(--color-teal-500)]">E</span>mon,{" "}
                <span className="text-[var(--color-teal-500)]">M</span>ahmud,{" "}
                <span className="text-[var(--color-teal-500)]">S</span>hawon
              </p>
              <p className="text-sm text-[var(--color-text-muted)] mt-2">
                Founded in Chittagong, Bangladesh — building for clients
                worldwide.
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
