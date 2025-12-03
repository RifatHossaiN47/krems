"use client";
import { Button } from "./smallcomp/Button";
import { ArrowRight, Users, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallBack";

export function Hero() {
  return (
    <section
      className="relative bg-gradient-to-br from-[var(--color-navy-900)] via-[var(--color-navy-800)] to-[var(--color-navy-700)] text-white overflow-hidden"
      id="home"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-32">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Users className="w-4 h-4 text-[var(--color-teal-400)]" />
              <span className="text-sm">A Team of Experts from Bangladesh</span>
            </div>

            <h1 className="text-white">
              KREMS Technologies — engineering practical AI & software that
              scales
            </h1>

            <p className="text-xl text-gray-300">
              Web and mobile apps, ML pipelines, and agentic AI — built by a
              focused expert team
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get a Project Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("work")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-white text-white hover:bg-white hover:text-[var(--color-navy-800)]"
              >
                See Our Work
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[var(--color-teal-400)]" />
                <span className="text-sm">10+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[var(--color-teal-400)]" />
                <span className="text-sm">AI/ML Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[var(--color-teal-400)]" />
                <span className="text-sm">Full-Stack Excellence</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Mockup */}
          <div className="relative lg:order-last order-first">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white/5 backdrop-blur-sm">
              <ImageWithFallback
                src="/wa.png"
                alt="AI Dashboard Interface"
                className="w-full h-auto"
              />
              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-900)]/40 to-transparent"></div>
            </div>

            {/* Floating Card - Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-[200px] hidden lg:block">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[var(--color-teal-500)]">
                  98%
                </div>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Client Satisfaction Rate
                </p>
              </div>
            </div>

            {/* Floating Card - Tech Badge */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-[var(--color-orange-500)] to-[var(--color-orange-600)] text-white rounded-xl shadow-xl p-4 max-w-[180px] hidden lg:block">
              <p className="text-sm font-medium">Next-Gen Tech</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
