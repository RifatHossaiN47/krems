import React from 'react';
import { Search, Code, Rocket } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: 'Discovery',
      description: 'We deep-dive into your requirements, clarify scope, and define success metrics.',
      step: '01'
    },
    {
      icon: Code,
      title: 'Build',
      description: 'Agile sprints, continuous integration, and regular demos keep you in the loop.',
      step: '02'
    },
    {
      icon: Rocket,
      title: 'Ship & Maintain',
      description: 'Seamless deployment, monitoring, and ongoing support ensure long-term success.',
      step: '03'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">How We Work</h2>
          <p className="text-xl text-[var(--color-text-secondary)]">
            A streamlined process designed for clarity, speed, and quality delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connecting Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-[var(--color-teal-500)] to-[var(--color-orange-500)] opacity-30"></div>
              )}

              <div className="relative bg-[var(--color-surface)] rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[var(--color-teal-500)] to-[var(--color-orange-500)] rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                  <step.icon className="w-10 h-10 text-[var(--color-teal-500)]" />
                </div>

                {/* Content */}
                <h4 className="mb-3">{step.title}</h4>
                <p className="text-[var(--color-text-secondary)]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
